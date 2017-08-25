$(function() {
    $("#input").keypress(function(e){
        if(e.which == 13) {
            var x = document.getElementById("input");
            $("#title").append(" " + x.value);
            $("#input").hide("slow");
            $("#count").text("0");
            $('.caps').each(function() {
                var s = $(this).text().split(' ');
                for(var i=0; i<s.length; i++) {
                    s[i] = s[i].substring(0,1).toUpperCase() + s[i].substring(1);
                }
                s = s.join(' ');
                $(this).text(s);
            });
            startWorker();
        }
    });
});

var w;
function startWorker() {
    if(typeof(Worker) !== "undefined") {
          if(typeof(w) == "undefined") {
              w = new Worker("./static/js/worker.js");
          }
        w.onmessage = function(event) {
            document.getElementById("count").innerHTML = event.data;
        };
    }
}
