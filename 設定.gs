function myFunction() {
  // 現在アクティブなスプレッドシートを取得
var ss = SpreadsheetApp.getActiveSpreadsheet();
// そのスプレッドシートにある最初のシートを取得
var sheet = ss.getSheets()[0];
 
// そのシートにある最初の行の高さを200pxに設定
sheet.setRowHeight(1, 30);
}
