var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M25 25 L25 0 A25 25 0 0 1 37.5 3.349364905389031 z"],["fill","transparent"]]},{"type":"item","tagName":"path","props":[["d","M25 0 A25 25 0 0 1 37.5 3.349364905389031"],["fill","transparent"],["stroke","#000"],["stroke-width",1],["stroke-dasharray",[]]]}],"transform":[],"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M25 75 L25 50 A25 25 0 1 1 16.44949641685828 98.4923155196477 z"],["fill","transparent"]]},{"type":"item","tagName":"path","props":[["d","M25 50 A25 25 0 1 1 16.44949641685828 98.4923155196477"],["fill","transparent"],["stroke","url(#karas-defs-0-0)"],["stroke-width",1],["stroke-dasharray",[]]]}],"transform":[],"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M25 125 L49.6201938253052 129.34120444167326 A25 25 0 0 1 16.44949641685828 148.49231551964772 z"],["fill","url(#karas-defs-0-1)"]]},{"type":"item","tagName":"path","props":[["d","M49.6201938253052 129.34120444167326 A25 25 0 0 1 16.44949641685828 148.49231551964772"],["fill","transparent"],["stroke","#000"],["stroke-width",1],["stroke-dasharray",[]]]}],"transform":[],"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M25 175 L16.44949641685828 198.49231551964772 A25 25 0 0 1 3.3493649053890344 162.5 z"],["fill","url(#karas-defs-0-2)"]]},{"type":"item","tagName":"path","props":[["d","M16.44949641685828 198.49231551964772 A25 25 0 0 1 3.3493649053890344 162.5"],["fill","transparent"],["stroke","#000"],["stroke-width",1],["stroke-dasharray",[]]]}],"transform":[],"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M25 225 L37.3100969126526 227.17060222083663 A12.5 12.5 0 1 1 14.174682452694517 218.75 z"],["fill","transparent"]]},{"type":"item","tagName":"path","props":[["d","M37.3100969126526 227.17060222083663 A12.5 12.5 0 1 1 14.174682452694517 218.75"],["fill","transparent"],["stroke","#000"],["stroke-width",1],["stroke-dasharray",[]]]}],"transform":[],"type":"geom"}],"transform":[],"type":"dom","defs":[{"tagName":"linearGradient","props":[["x1",25],["y1",50],["x2",25],["y2",100]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-0"},{"tagName":"linearGradient","props":[["x1",25],["y1",100],["x2",25],["y2",150]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-1"},{"tagName":"radialGradient","props":[["cx",25],["cy",175],["r",176.7766952966369]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-2"}]}')
      .end();
  }
};
