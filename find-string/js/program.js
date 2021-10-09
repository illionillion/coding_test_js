//力任せ法
String.prototype.find = function(str) {
  var text_idx_len = this.length - str.length + 1;//searchの文字列の最後でfor文が終わるようにするため
  // console.log(this);
  // console.log(str);
  // console.log(this.charAt(5));
  // console.log(this.charAt(91));//ヒットした最初の文字番号を返す。
  // console.log(this.charAt(92));
  // console.log(str.charAt(1));
  for(var text_idx = 0; text_idx < text_idx_len; text_idx++) {//this(textのこと)全体を検索
    var isFound = true;
    for(var i = 0; i < str.length; i++) {//str(search)を検索
      if(str.charAt(i) != this.charAt(text_idx + i)) {
        isFound = false;
        break;
      }
    }
    if(isFound) { return text_idx; }
  }

  return null;
}

function findTextArea(text_id, search_id) {
  var text = getStringById(text_id);
  var search = getStringById(search_id);
  // console.log(text);
  alert(text.find(search));
  // console.log(document.getElementById(text_id).innerHTML.find(document.getElementById(search_id)));
}