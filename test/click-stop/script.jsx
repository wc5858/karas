let count = 0;

function cb(v) {
  document.getElementById('base64').value = v;
}

karas.render(
  <canvas width="360" height="360">
    <div style={{width:100,height:100,background:'#F00'}} onClick={()=>{cb(count++)}}>
      <span onClick={e=>{e.stopPropagation();cb(count++)}}>123</span>
    </div>
  </canvas>,
  '#test'
);
