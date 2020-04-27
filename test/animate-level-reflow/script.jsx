let o = karas.render(
  <canvas width="360" height="360">
    <div
      ref="t"
      style={{width:100,height:100,background:'#F00'}}>
    </div>
  </canvas>,
  '#test'
);
let t = o.ref.t;
let animation = t.animate([
  {
    height: 100,
  },
  {
    height: 200,
  }
], {
  duration: 200,
  fill: 'forwards',
});
let input = document.querySelector('input');
o.once(karas.Event.REFRESH, function(lv) {
  input.value = lv;
});
