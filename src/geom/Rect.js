import Geom from './Geom';
import mode from '../util/mode';
import geom from '../math/geom';

class Rect extends Geom {
  constructor(tagName, props) {
    super(tagName, props);
    // 圆角
    this.__rx = 0;
    if(this.props.rx) {
      this.__rx = parseFloat(this.props.rx);
      if(isNaN(this.rx)) {
        this.__rx = 0;
      }
    }
    this.__ry = 0;
    if(this.props.ry) {
      this.__ry = parseFloat(this.props.ry);
      if(isNaN(this.ry)) {
        this.__ry = 0;
      }
    }
  }

  render(renderMode, ctx, defs, isHidden) {
    let {
      isDestroyed,
      originX,
      originY,
      display,
      visibility,
      fill,
      stroke,
      strokeWidth,
      strokeDasharray,
      strokeDasharrayStr,
      strokeLinecap,
    } = super.render(renderMode, ctx, defs, isHidden);
    if(isDestroyed || display === 'none' || visibility === 'hidden') {
      return;
    }
    let { width, height, rx, ry } = this;
    rx = Math.min(rx, 0.5);
    ry = Math.min(ry, 0.5);
    rx *= width;
    ry *= height;
    if(renderMode === mode.CANVAS) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      ctx.fillStyle = fill;
      ctx.lineCap = strokeLinecap;
      ctx.setLineDash(strokeDasharray);
      ctx.beginPath();
      if(rx === 0 && ry === 0) {
        ctx.rect(originX, originY, width, height);
      }
      else {
        let ox = rx * geom.H;
        let oy = ry * geom.H;
        ctx.moveTo(originX + rx, originY);
        ctx.lineTo(originX + width - rx, originY);
        ctx.bezierCurveTo(originX + width + ox - rx, originY, originX + width, originY + ry - oy, originX + width, originY + ry);
        ctx.lineTo(originX + width, originY + height - ry);
        ctx.bezierCurveTo(originX + width, originY + height + oy - ry, originX + width + ox - rx, originY + height, originX + width - rx, originY + height);
        ctx.lineTo(originX + rx, originY + height);
        ctx.bezierCurveTo(originX + rx - ox, originY + height, originX, originY + height + oy - ry, originX, originY + height - ry);
        ctx.lineTo(originX, originY + ry);
        ctx.bezierCurveTo(originX, originY + ry - oy, originX + rx - ox, originY, originX + rx, originY);
      }
      ctx.fill();
      if(strokeWidth > 0) {
        ctx.stroke();
      }
      ctx.closePath();
    }
    else if(renderMode === mode.SVG) {
      let props = [
        ['x', originX],
        ['y', originY],
        ['width', width],
        ['height', height],
        ['fill', fill],
        ['stroke', stroke],
        ['stroke-width', strokeWidth]
      ];
      if(rx) {
        props.push(['rx', rx]);
      }
      if(ry) {
        props.push(['ry', ry]);
      }
      if(strokeDasharray.length) {
        props.push(['stroke-dasharray', strokeDasharrayStr]);
      }
      if(strokeLinecap !== 'butt') {
        props.push(['stroke-linecap', strokeLinecap]);
      }
      this.addGeom('rect', props);
    }
  }

  get rx() {
    return this.getProps('rx');
  }
  get ry() {
    return this.getProps('ry');
  }
}

export default Rect;
