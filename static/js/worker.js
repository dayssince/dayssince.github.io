var seconds = 0;
var days = 0

function timedCount() {
    if (seconds == 86400) {
      seconds = 0;
      days++;
      postMessage(days);
    }
    seconds = seconds + 1;
    setTimeout("timedCount()",1000);
}

timedCount();
