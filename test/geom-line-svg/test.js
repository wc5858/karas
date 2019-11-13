var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M0 0 L100 100"],["fill","none"],["stroke","#000"],["stroke-width",1]]}],"transform":[],"opacity":1,"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M0 100 C20 150 80 150 100 200"],["fill","none"],["stroke","#000"],["stroke-width",1]]}],"transform":[],"opacity":1,"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M0 200 L100 300"],["fill","none"],["stroke","#F00"],["stroke-width",1]]}],"transform":[],"opacity":1,"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M40 340 L50 350"],["fill","none"],["stroke","#000"],["stroke-width",1]]}],"transform":[],"opacity":1,"type":"geom"}],"transform":[],"opacity":1,"type":"dom","defs":[]}')
      .end();
  }
};
