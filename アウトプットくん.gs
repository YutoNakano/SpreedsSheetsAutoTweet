// シートを取得
  var spreadsheet = SpreadsheetApp.openById("");
  var sheet = spreadsheet.getSheetByName("シート2");


// ツイートを投稿
function sendTweet() {
 var tweet = catchTweet()
 var service  = twitter.getService();
 var response = service.fetch('https://api.twitter.com/1.1/statuses/update.json', {
   method: 'post',
   payload: { status: tweet }
 });
}

//ツイート内容の取得
function catchTweet() {
  var lastRow = sheet.getLastRow();
  for(var i = 1; i <= lastRow; i++) {
    if(!sheet.getRange(i,2).getValue()){
      var tweet = sheet.getRange(i, 1).getValue();
      sheet.getRange(i,2).setValue("ツイート済");
      break;
    }
  }
  return tweet;
}
