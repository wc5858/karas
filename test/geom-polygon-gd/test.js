var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};