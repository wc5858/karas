var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",0],["width",50],["height",50],["fill","url(#karas-defs-0-0)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",51],["width",50],["height",50],["fill","url(#karas-defs-0-1)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",102],["width",50],["height",50],["fill","url(#karas-defs-0-2)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",153],["width",50],["height",50],["fill","url(#karas-defs-0-3)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",204],["width",50],["height",50],["fill","url(#karas-defs-0-4)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",255],["width",50],["height",50],["fill","url(#karas-defs-0-5)"]]}],"children":[],"transform":[],"type":"dom"}],"transform":[],"type":"dom","defs":[{"tagName":"radialGradient","props":[["cx",10],["cy",20],["r",10]],"stop":[["#F00",0],["#0F0",0.5],["#00F",1]],"uuid":"karas-defs-0-0"},{"tagName":"radialGradient","props":[["cx",10],["cy",71],["r",22.360679774997898]],"stop":[["#F00",0],["#0F0",0.5],["#00F",1]],"uuid":"karas-defs-0-1"},{"tagName":"radialGradient","props":[["cx",10],["cy",122],["r",40]],"stop":[["#F00",0],["#0F0",0.5],["#00F",1]],"uuid":"karas-defs-0-2"},{"tagName":"radialGradient","props":[["cx",0],["cy",153],["r",100]],"stop":[["#00F",0]],"uuid":"karas-defs-0-3"},{"tagName":"radialGradient","props":[["cx",-10],["cy",184],["r",22.360679774997898]],"stop":[["#F00",0],["#0F0",0.5],["#00F",1]],"uuid":"karas-defs-0-4"},{"tagName":"radialGradient","props":[["cx",-10],["cy",235],["r",60]],"stop":[["#F00",0],["#0F0",0.5],["#00F",1]],"uuid":"karas-defs-0-5"}]}')
      .end();
  }
};
