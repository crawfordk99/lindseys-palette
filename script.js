/** getting variables from HTML */

var imageThumbs=document.getElementById("thumbs");
var currentImage= document.getElementById("current-img");

for (var i=1; i<=12; i++) {
    var thumb= document.createElement("img");
    thumb.src= "images/image" + i + ".jpg"
    imageThumbs.appendChild(thumb);
    thumb.classList.add("thumb")
    thumb.addEventListener(
        "click", function() {
            currentImage.src= this.src;
            currentImage.alt= this.alt;
        }
    );
}








