import Dom from '../node/Dom';
import util from '../util/util';
import mode from '../util/mode';
import diff from '../util/diff';
import Defs from './Defs';
import unit from '../style/unit';
import inject from '../util/inject';
import Event from '../util/Event';
import frame from '../animate/frame';
import level from '../animate/level';
import Controller from '../animate/Controller';

const { isNil, isObject, isFunction } = util;

const { PX } = unit;

function getDom(dom) {
  if(util.isString(dom) && dom) {
    let o = document.querySelector(dom);
    if(!o) {
      throw new Error('can not find dom of selector: ' + dom);
    }
    return o;
  }
  if(!dom) {
    throw new Error('can not find dom: ' + dom);
  }
  return dom;
}

function renderProp(k, v) {
  let s = Array.isArray(v) ? util.joinSourceArray(v) : util.stringify(v);
  if(k === 'className') {
    k = 'class';
  }
  return ' ' + k + '="' + util.encodeHtml(s, true) + '"';
}

function initEvent(node) {
  ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'touchcancel'].forEach(type => {
    node.addEventListener(type, e => {
      node.__root.__cb(e, ['touchend', 'touchcancel', 'touchmove'].indexOf(type) > -1);
    });
  });
}

let uuid = 0;

class Root extends Dom {
  constructor(tagName, props, children) {
    super(tagName, props, children);
    this.__node = null; // 真实DOM引用
    this.__mw = 0; // 记录最大宽高，防止尺寸变化清除不完全
    this.__mh = 0;
    this.__task = [];
    this.__ref = {};
    this.__animateController = new Controller();
    Event.mix(this);
  }

  __initProps() {
    let w = this.props.width;
    if(!isNil(w)) {
      let value = parseFloat(w) || 0;
      if(value > 0) {
        this.__width = value;
      }
    }
    let h = this.props.height;
    if(!isNil(h)) {
      let value = parseFloat(h) || 0;
      if(value > 0) {
        this.__height = value;
      }
    }
  }

  __genHtml() {
    let res = `<${this.tagName}`;
    // 拼接处理属性
    for(let i = 0, len = this.__props.length; i < len; i++) {
      let item = this.__props[i];
      let [k, v] = item;
      // 忽略事件
      if(!/^on[a-zA-Z]/.test(k)) {
        res += renderProp(k, v);
      }
    }
    res += `></${this.tagName}>`;
    return res;
  }

  // 类似touchend/touchcancel/touchmove这种无需判断是否发生于元素上，直接强制响应
  __cb(e, force) {
    if(e.type === 'touchmove' && !this.__touchstartTarget) {
      return;
    }
    let x, y;
    // 触摸结束取消特殊没有touches
    if(['touchend', 'touchcancel'].indexOf(e.type) === -1) {
      let { node } = this;
      let { x: x2, y: y2, left, top, width, height } = node.getBoundingClientRect();
      x = x2 || left || 0;
      y = y2 || top || 0;
      let { pageX, pageY } = e.touches ? e.touches[0] : e;
      x = pageX - x;
      y = pageY - y;
      let sx = width / this.width;
      let sy = height / this.height;
      // 外边的scale影响元素事件响应，根据倍数计算真实的坐标
      if(sx !== 1) {
        x /= sx;
      }
      if(sy !== 1) {
        y /= sy;
      }
    }
    let data = {
      event: e,
      stopPropagation() {
        this.__stopPropagation = true;
        e.stopPropagation();
      },
      stopImmediatePropagation() {
        this.__stopPropagation = true;
        this.__stopImmediatePropagation = true;
        e.stopImmediatePropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      x,
      y,
      __hasEmitted: false,
    };
    this.__emitEvent(data, force);
    return data;
  }

  appendTo(dom) {
    dom = getDom(dom);
    this.__initProps();
    this.__refreshLevel = level.REFLOW;
    // 已有root节点
    if(dom.nodeName.toUpperCase() === this.tagName.toUpperCase()) {
      this.__node = dom;
      if(this.width) {
        dom.setAttribute('width', this.width);
      }
      if(this.height) {
        dom.setAttribute('height', this.height);
      }
    }
    // 没有canvas/svg节点则生成一个新的
    else {
      this.__node = dom.querySelector(this.tagName);
      if(!this.__node) {
        dom.innerHTML = this.__genHtml();
        this.__node = dom.querySelector(this.tagName);
      }
    }
    this.__uuid = isNil(this.__node.__uuid) ? uuid++ : this.__node.__uuid;
    this.__defs = this.node.__defs || Defs.getInstance(this.__uuid);
    // 没有设置width/height则采用css计算形式
    if(!this.width || !this.height) {
      let css = window.getComputedStyle(dom, null);
      if(!this.width) {
        this.__width = parseFloat(css.getPropertyValue('width')) || 0;
        dom.setAttribute('width', this.width);
      }
      if(!this.height) {
        this.__height = parseFloat(css.getPropertyValue('height')) || 0;
        dom.setAttribute('height', this.height);
      }
    }
    // 只有canvas有ctx，svg用真实dom
    if(this.tagName === 'canvas') {
      this.__ctx = this.__node.getContext('2d');
      this.__renderMode = mode.CANVAS;
    }
    else if(this.tagName === 'svg') {
      this.__renderMode = mode.SVG;
    }
    // canvas/svg作为根节点一定是block或flex，不会是inline
    let { style } = this;
    if(['flex', 'block'].indexOf(style.display) === -1) {
      style.display = 'block';
    }
    // 同理position不能为absolute
    if(style.position === 'absolute') {
      style.position = 'static';
    }
    let { renderMode, ctx } = this;
    this.__traverse(ctx, this.__defs, renderMode);
    this.__traverseCss(this, this.props.css);
    this.__init();
    this.refresh();
    // 第一次节点没有__root，渲染一次就有了才能diff
    if(this.node.__root) {
      this.node.__root.__destroy();
    }
    else {
      initEvent(this.node);
      this.node.__uuid = this.__uuid;
    }
    this.node.__root = this;
  }

  refresh() {
    let { isDestroyed, renderMode, style } = this;
    if(isDestroyed) {
      return;
    }
    // 根元素特殊处理
    style.marginTop = style.marginRight = style.marginBottom = style.marginLeft = {
      value: 0,
      unit: PX,
    };
    style.width = {
      value: this.width,
      unit: PX,
    };
    style.height = {
      value: this.height,
      unit: PX,
    };
    this.__defs.clear();
    let lv = this.__refreshLevel;
    this.__refreshLevel = level.REPAINT;
    // 预先计算字体相关的继承
    if(lv === level.REFLOW) {
      this.__computed();
    }
    inject.measureText(() => {
      // 第一次默认REFLOW以及动画设计变更等需要布局
      if(lv === level.REFLOW) {
        // 布局分为两步，普通流和定位流，互相递归
        this.__layout({
          x: 0,
          y: 0,
          w: this.width,
          h: this.height,
        });
        // 绝对布局需要从根开始保存相对坐标系的容器引用，并根据relative/absolute情况变更
        this.__layoutAbs(this, {
          x: 0,
          y: 0,
          w: this.width,
          h: this.height,
        });
      }
      // 没发生REFLOW只需要computed即可
      else {
        this.__repaint();
      }
      if(renderMode === mode.CANVAS) {
        this.__clear();
      }
      this.render(renderMode);
      if(renderMode === mode.SVG) {
        let nvd = this.virtualDom;
        let nd = this.__defs;
        nvd.defs = nd.value;
        if(this.node.__root) {
          diff(this.node, this.node.__vd, nvd);
        }
        else {
          this.node.innerHTML = util.joinVirtualDom(nvd);
        }
        this.node.__vd = nvd;
        this.node.__defs = nd;
      }
      // 只有布局改变才可能有component变更
      if(lv === level.REFLOW) {
        this.__didMount();
      }
      this.emit(Event.REFRESH, lv);
    });
  }

  addRefreshTask(cb) {
    if(!cb) {
      return;
    }
    let { task } = this;
    // 第一个添加延迟侦听，后续放队列等待一并执行
    if(!task.length) {
      let clone;
      frame.nextFrame(this.__rTask = {
        before: diff => {
          clone = task.splice(0);
          // 前置一般是动画计算此帧样式应用，然后刷新后出发frame事件，图片加载等同
          if(clone.length) {
            clone.forEach(item => {
              if(isObject(item) && isFunction(item.before)) {
                item.before(diff);
              }
            });
            this.refresh();
            // 避免重复刷新，在frame每帧执行中，比如图片进行了异步刷新，动画的hook就可以省略再刷新一次
            let r = this.__hookTask;
            if(r) {
              let hookTask = frame.__hookTask;
              let i = hookTask.indexOf(r);
              if(i > -1) {
                hookTask.splice(i, 1);
              }
            }
          }
        },
        after: diff => {
          clone.forEach(item => {
            if(isObject(item) && isFunction(item.after)) {
              item.after(diff);
            }
            else if(isFunction(item)) {
              item(diff);
            }
          });
        }
      });
    }
    if(task.indexOf(cb) === -1) {
      task.push(cb);
    }
  }

  delRefreshTask(cb) {
    if(!cb) {
      return;
    }
    let { task } = this;
    for(let i = 0, len = task.length; i < len; i++) {
      if(task[i] === cb) {
        task.splice(i, 1);
        break;
      }
    }
    if(!task.length) {
      frame.offFrame(this.__rTask);
    }
  }

  setRefreshLevel(lv) {
    if(lv > this.__refreshLevel) {
      this.__refreshLevel = lv;
    }
  }

  __frameHook() {
    // 每个root拥有一个刷新hook，多个root塞到frame的__hookTask里
    let r = this.__hookTask = this.__hookTask || (() => {
      this.refresh();
    });
    if(frame.__hookTask.indexOf(r) === -1) {
      frame.__hookTask.push(r);
    }
  }

  __clear() {
    // 可能会调整宽高，所以每次清除用最大值
    this.__mw = Math.max(this.__mw, this.width);
    this.__mh = Math.max(this.__mh, this.height);
    // 清除前得恢复默认matrix，防止每次布局改变了属性
    this.__ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.__ctx.clearRect(0, 0, this.__mw, this.__mh);
  }

  get node() {
    return this.__node;
  }
  get renderMode() {
    return this.__renderMode;
  }
  get task() {
    return this.__task;
  }
  get ref() {
    return this.__ref;
  }
  get animateController() {
    return this.__animateController;
  }
}

export default Root;
