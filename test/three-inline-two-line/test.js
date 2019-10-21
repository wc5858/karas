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
