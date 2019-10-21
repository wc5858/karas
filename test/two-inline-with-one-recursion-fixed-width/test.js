var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', 'data:image/png;base64,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BAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAko6LHArUuAQI+Agu7JyqQECIwJKOixwK1LgECPgILuycqkBAiMCSjoscCtS4BAj4CC7snKpAQIjAn8L9bQNnhEo9+xAAAAAElFTkSuQmCC')
      .end();
  }
};
