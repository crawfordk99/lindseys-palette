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

const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "0a24106f-9220-41c1-96e3-2c4aa73f75c1");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});








