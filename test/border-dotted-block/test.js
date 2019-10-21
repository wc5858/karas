var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
