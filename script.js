/** getting variables from HTML */

var imageThumbs=document.querySelector("#thumbs");
var currentImage= document.querySelector("#current-img");
let imageAlt= ['blue flower', 'butterfly hearts', 'rose and hearts', 'pink origami flower',
'purple origami flower', 'farewell card', 'christmas card', 'butterfly', 'a rose', 'a cactus', 
'birthday card', 'inside birthday card'];

/**Creating thumbnail gallery */
for (var i=1; i<=12; i++) {
    var thumb= document.createElement("img");
    thumb.src= "images/image" + i + ".jpg";
    thumb.alt= imageAlt[i];
    imageThumbs.appendChild(thumb);
    thumb.classList.add("thumb")
    thumb.addEventListener(
        "click", function() {
            currentImage.src= this.src;
            currentImage.alt= this.alt;
        }
    );
}








