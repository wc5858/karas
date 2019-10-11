import Event from '../Event';
import Node from './Node';
import util from '../util';

class Component extends Event {
  constructor(tagName, props, children) {
    super();
    if(!util.isString(tagName)) {
      throw new Error('Component must have a tagName');
    }
    this.__tagName = tagName;
    props = props || [];
    // 构建工具中都是arr，手写可能出现hash情况
    if(Array.isArray(props)) {
      this.props = util.arr2hash(props);
      this.__props = props;
    }
    else {
      this.props = props;
      this.__props = util.hash2arr(props);
    }
    this.__children = children || [];
    this.__shadowRoot = null;
  }

  __traverse(ctx, defs, renderMode) {
    let sr = this.__shadowRoot = this.render(renderMode);
    if(!(sr instanceof Node) && !sr.tagName) {
      throw new Error(`Component ${this.tagName || ''} must return a Node by render()`);
    }
    sr.__ctx = ctx;
    sr.__defs = defs;
    sr.__traverse(ctx, defs, renderMode);
  }

  // 组件传入的样式需覆盖shadowRoot的
  __init() {
    let sr = this.shadowRoot;
    sr.__init();
    let style = this.props.style || {};
    for(let i in style) {
      if(style.hasOwnProperty(i)) {
        sr.style[i] = style[i];
      }
    }
    this.__props.forEach(item => {
      let k = item[0];
      let v = item[1];
      if(/^on[a-zA-Z]/.test(k)) {
        k = k.slice(2).toLowerCase();
        let arr = sr.listener[k] = sr.listener[k] || [];
        arr.push(v);
      }
      else if(/^on-[a-zA-Z\d_$]/.test(k)) {
        k = k.slice(3);
        this.on(k, function(...args) {
          v(...args);
        });
      }
    });

    [
      'x',
      'y',
      'ox',
      'oy',
      'rx',
      'ry',
      'width',
      'height',
      'outerWidth',
      'outerHeight',
      'style',
      'ctx',
      'defs',
      'baseLine',
      'virtualDom'
    ].forEach(fn => {
      Object.defineProperty(this, fn, {
        get() {
          return sr[fn];
        },
      });
    });
  }

  render() {
  }

  __emitEvent(e, force) {
    let sr = this.shadowRoot;
    if(force) {
      return sr.__emitEvent(e, force);
    }
    let res = sr.__emitEvent(e);
    if(res) {
      e.target = this;
      return true;
    }
  }

  get tagName() {
    return this.__tagName;
  }
  get children() {
    return this.__children;
  }
  get shadowRoot() {
    return this.__shadowRoot;
  }
}

[
  '__layout',
  '__layoutAbs',
  '__tryLayInline',
  '__offsetX',
  '__offsetY',
  '__calAutoBasis',
  '__calMp',
  '__calAbs'
].forEach(fn => {
  Component.prototype[fn] = function() {
    let sr = this.shadowRoot;
    sr[fn].apply(sr, arguments);
  };
});

export default Component;
