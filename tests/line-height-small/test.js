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