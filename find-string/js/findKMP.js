String.prototype.getKMPNext = function() {
  var next = new Array();
 
  next[0] = -1;
  var n = next[0];
  for (var i = 0; i < this.length; i++) {
    while (n > -1) {
      console.log(this.charAt(i));
      console.log(this.charAt(n));
      if (this.charAt(i) == this.charAt(n)) { break; }
      n = next[n];
    }
    n++;
    var j = i+1;
    if (this.charAt(j) == this.charAt(n)) {
      next[j] = next[n];
    } else {
      next[j] = n;
    }
  }
 
  return next;
}
 
String.prototype.findKMP = function(str) {
  var next = str.getKMPNext();//検索する文字
  console.log(next);//なにかの配列が来た
 
  var text_idx_len = this.length - str.length + 1;
  var n = 0;
  for(var text_idx = 0; text_idx < text_idx_len; text_idx++) {
    while (n > -1) {
      if (this.charAt(text_idx) == str.charAt(n)) { break; }
      n = next[n];
    }
    n++;
    if(str.length <= n) {
      return text_idx - str.length + 1;
    }
  }
  return null;
}
 
function findTextAreaKMP(text_id, search_id) {
  var text = getStringById(text_id);
  var search = getStringById(search_id);
  alert(text.findKMP(search));
}