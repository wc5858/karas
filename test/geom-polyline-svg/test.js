var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"item","tagName":"polyline","props":[["fill","rgba(0,0,0,0)"],["stroke","rgba(0,0,0,1)"],["stroke-width",1],["points","0,0 100,30 50,100"]]}],"opacity":1,"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["fill","rgba(0,0,0,0)"],["stroke","rgba(0,0,0,1)"],["stroke-width",1],["d","M0,100Q50,100 100,130C100,150 80,190 50,200"]]}],"opacity":1,"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["fill","rgba(0,0,255,1)"],["stroke","rgba(255,0,0,1)"],["stroke-width",1],["d","M0,200Q50,200 100,230C100,250 80,290 50,300"]]}],"opacity":1,"type":"geom"}],"opacity":1,"type":"dom","defs":[]}')
      .end();
  }
};
