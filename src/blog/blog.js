// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuButton = document.getElementById('mobile-menu-button');
//     const mobileMenu = document.getElementById('mobile-menu');

//     if (mobileMenuButton && mobileMenu) {
//         mobileMenuButton.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//             mobileMenu.classList.toggle('block');
//         });
//     } else {
//         console.error('Mobile menu button or menu not found');
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const subscribeForm = document.getElementById('subscribe-form');
//     if (subscribeForm) {
//         subscribeForm.addEventListener('submit', async function (event) {
//             event.preventDefault();
//             const email = document.getElementById('input-email').value;
//             console.log(email);

//             try {
//                 const response = await fetch('http://localhost:3000/subscribe', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ email }),
//                 });

//                 if (response.ok) {
//                     alert('Thank you for subscribing!');
//                 } else {
//                     alert('Failed to subscribe. Please try again.');
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//                 alert('An error occurred. Please try again.');
//             }
//         });
//     }
// });

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
