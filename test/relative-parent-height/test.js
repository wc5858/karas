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
