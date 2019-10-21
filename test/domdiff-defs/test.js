var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"item","tagName":"circle","props":[["cx",50],["cy",50],["r",50],["fill","url(#karas-defs-0-0)"],["stroke","#000"],["stroke-width",0],["stroke-dasharray",[]]]}],"transform":[],"type":"geom"}],"transform":[],"type":"dom","defs":[{"tagName":"radialGradient","props":[["cx",50],["cy",50],["r",70.71067811865476]],"stop":[["#0F0",0],["rgb(0,0,0)",1]],"uuid":"karas-defs-0-0"}]}')
      .end();
  }
};
