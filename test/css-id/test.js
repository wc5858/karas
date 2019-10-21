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
