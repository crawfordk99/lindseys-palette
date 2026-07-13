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

// Updated form handling code to ensure it works correctly with the form element and submit button
// , including safety checks and proper handling of input/button types.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the element with the ID
    let form = document.getElementById('form');
    
    // If the ID was accidentally put on the Webflow Wrapper instead of the form itself:
    if (form && form.tagName !== 'FORM') {
        form = form.querySelector('form');
    }

    // Safety check to ensure we actually found a form
    if (!form) {
        console.error("Could not find the contact form on the page.");
        return;
    }

    // 2. Safely find the submit button (handling input vs button tags)
    const submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
    if (!submitBtn) {
        console.error("Could not find the submit button inside the form.");
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        formData.append("access_key", "0a24106f-9220-41c1-96e3-2c4aa73f75c1");

        // Works whether it's an <input> (value) or <button> (textContent)
        const originalText = submitBtn.value || submitBtn.textContent;

        if (submitBtn.tagName === 'INPUT') {
            submitBtn.value = "Sending...";
        } else {
            submitBtn.textContent = "Sending...";
        }
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
            if (submitBtn.tagName === 'INPUT') {
                submitBtn.value = originalText;
            } else {
                submitBtn.textContent = originalText;
            }
            submitBtn.disabled = false;
        }
    });
});








