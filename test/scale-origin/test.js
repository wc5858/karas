var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', 'data:image/png;base64,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M+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoKAz7nbQde4GItAnoKDrMrGDrovEQARCAgo6BG8HXQdvIAJ1Agq6LxI76LpMDEQgI6CgM+520HXuBiLQJ6Cg6zKxg66LxEAEQgIKOgRvB10HbyACdQIKui8SO+i6TAxEICOgoDPudtB17gYi0CegoOsysYOui8RABEICCjoEbwddB28gAnUCCrovEjvoukwMRCAjoAwy7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgIKOuPuVAIECCwFFPSSyAMECBDICCjojLtTCRAgsBRQ0EsiDxAgQCAjoKAz7k4lQIDAUkBBL4k8QIAAgYyAgs64O5UAAQJLAQW9JPIAAQIEMgL/C4vkrYdJEW/wAAAAAElFTkSuQmCC')
      .end();
  }
};
