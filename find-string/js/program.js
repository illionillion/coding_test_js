String.prototype.find = function(str) {
  var text_idx_len = this.length - str.length + 1;
  for(var text_idx = 0; text_idx < text_idx_len; text_idx++) {
    var isFound = true;
    for(var i = 0; i < str.length; i++) {
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
  alert(text.find(search));
}