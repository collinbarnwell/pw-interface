const kAllChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?', '@', '!', '"', '#', '$', '%', '&', '`', '(', ')', '*', ',', '-', '.', '/', ']', '[', '\\', '^', '_', '{', '|', '}', '~', ':', ';', '<', '>', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "space", "delete"];

const kLen = kAllChars.length;
var idx = 0;
var pw = ""

$("#up").click(function() { idx = idx - 1; });
$("#down").click(function() { idx = idx + 1});
$("#selected").click(function() {
  while (idx < 4) { idx += kLen; }
  var ch = kAllChars[(idx % kLen)];
  if (ch == "delete") {
    console.log('delete');
    var newPw = pw.slice(0, -1);
    pw = newPw;
  } else if (ch == "space") {
    pw = pw.concat(' ');
  } else {
    pw = pw.concat(ch);
  }
});


function update() {
  console.log("update");
  while (idx < 4) { idx += kLen; }

  $("#win-4").text(kAllChars[((idx - 4) % kLen)]);
  $("#win-3").text(kAllChars[((idx - 3) % kLen)]);
  $("#win-2").text(kAllChars[((idx - 2) % kLen)]);
  $("#win-1").text(kAllChars[((idx - 1) % kLen)]);
  $("#selected-p").text(kAllChars[(idx % kLen)]);
  $("#win-plus-1").text(kAllChars[((idx + 1) % kLen)]);
  $("#win-plus-2").text(kAllChars[((idx + 2) % kLen)]);
  $("#win-plus-3").text(kAllChars[((idx + 3) % kLen)]);
  $("#win-plus-4").text(kAllChars[((idx + 4) % kLen)]);

  $("#pw").text(pw);
}

setInterval(update, 200);
