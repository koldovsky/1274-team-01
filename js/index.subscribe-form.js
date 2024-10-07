const form = document.getElementById("subscribe-form");
const popup = document.getElementById("subscribe-popup");
const closeButton = document.getElementById("popup-close-button");

async function handleSubmit(event) {
    event.preventDefault(); 

    try {
        const response = await fetch('https://formspree.io/f/mnnqabgp', {
            method: 'POST',
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            popup.classList.remove("popup--hidden");
            popup.classList.add("popup--visible");
            form.reset(); 
        } else {
            console.log("Oops! There was a problem submitting your form");
        }
    } catch (error) {
        console.error("There was an error:", error);
    }
}

form.addEventListener("submit", handleSubmit);

closeButton.addEventListener("click", function () {
    popup.classList.remove("popup--visible");
    popup.classList.add("popup--hidden");
});