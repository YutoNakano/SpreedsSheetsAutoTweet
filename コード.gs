
//認証用インスタンスの生成
var twitter = TwitterWebService.getInstance(
  '',//API Key
  ''//API secret key
);
 
//アプリを連携認証する
function authorize() {
  twitter.authorize();
}
 
//認証を解除する
function reset() {
  twitter.reset();
}
 
//認証後のコールバック
function authCallback(request) {
  return twitter.authCallback(request);
}

// シートを取得
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1"); // 「シート1」はシート名

// ツイートを投稿
function postTweet() {
 var tweet = getTweet()
 var service  = twitter.getService();
 var response = service.fetch('https://api.twitter.com/1.1/statuses/update.json', {
   method: 'post',
   payload: { status: tweet }
 });
}

//ツイート内容の取得
function getTweet() {
  var lastRow = sheet.getLastRow();
  for(var i = 2; i <= lastRow; i++) {
    if(!sheet.getRange(i,7).getValue()){
      var tweet = sheet.getRange(i, 2).getValue();
      sheet.getRange(i,7).setValue("ツイート済");
      break;
    }
  }
  return tweet;
}


function myfunction() {
  var lastRow = sheet.getLastRow();
  var tweet =sheet.getRange(counter(number), 2).getValues();
  number = number + 1;
 Logger.log(tweet);
 return tweet;
}


function test() {
  Logger.log(sheet);
}