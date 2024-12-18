// Card Animation Logic
const cards = document.querySelectorAll('.brainchild');
const threshold = 200; // Increased threshold
let isScrolling = false;

function revealCards() {
    if (isScrolling) return;
    isScrolling = true;

    requestAnimationFrame(() => {
        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom; // Added cardBottom
            const windowBottom = window.innerHeight || document.documentElement.clientHeight;
            if (cardTop - windowBottom < threshold) {
                card.classList.add("card");
            }
            else if (cardTop > windowBottom || cardBottom < 0) {
                card.classList.remove("card");
            }
        });
        isScrolling = false;
    });
}

window.addEventListener('scroll', revealCards);
revealCards();

// Text Animation Logic
var typed = new Typed("#typed-output", {
    strings: [
        "I'm Rashed Rabby",
        "I don't confine myself to a single title - I am a problem solver, innovator, and creator.",
        "I specialize in bridging vision and technology to transform ideas into reality."
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});