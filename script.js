/** getting variables from HTML */

var imageThumbs=document.getElementById("thumbs");
var currentImage= document.getElementById("current-img");

for (var i=1; i<=5; i++) {
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
    /** a set of if else if statements to help determine the image alt description */
    if (i=1) {
        thumb.alt= "A blue rose";
    }
    else if (i=2) {
        thumb.alt= "A heart made of butterflys"
    }
    else if (i=3) {
        thumb.alt= "Flowers and hearts"
    }
    else if (i=4) {
        thumb.alt= "A pink origami rose"
    }
    else if (i=5) {
        thumb.alt= "A purple origami flower"
    }
}








