const paths = document.querySelectorAll("path")
paths.forEach(drawLines)

function drawLines(path, index){
    setTimeout(function(){
        path.classList.add("drawSVG")
    }, index * 1000)
}


var modal = document.getElementById('myModal0');

var img = document.getElementById('illImg0');
var modalImg = document.getElementById("img010");
var captionText = document.getElementById("caption0");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close0")[0];
span.onclick = function() {
  modal.style.display = "none";
}




var modal = document.getElementById('myModal');

var img = document.getElementById('illImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('myModal1');

var img = document.getElementById('illImg1');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close1")[0];
span.onclick = function() {
  modal.style.display = "none";
}
