// Interactive Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.padding = '8px 8%';
        navbar.style.boxShadow = '0 10px 30px rgba(107, 79, 79, 0.12)';
        navbar.style.background = 'rgba(248, 244, 239, 0.95)';
    } else {
        navbar.style.padding = '12px 8%';
        navbar.style.boxShadow = '0 4px 12px rgba(107, 79, 79, 0.04)';
        navbar.style.background = 'rgba(248, 244, 239, 0.85)';
    }
});

// Card Entry Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .review-card, .faq-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        
        // Observe
        cardObserver.observe(card);
    });
    // Interactive FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        // Setup initial structure if present
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close other open FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                    }
                });
                
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    if (item.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    } else {
                        answer.style.maxHeight = null;
                    }
                }
            });
        }
    });
});

function addToCart(name, price, image){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let existingItem =
cart.find(item => item.name === name);

if(existingItem){
    existingItem.quantity += 1;
}
else{
   cart.push({

name:name,

price:price,

image:image,

quantity:1

});
}

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " Added To Cart 🤎");

}
function updateCartCount(){

let cart=

JSON.parse(
localStorage.getItem("cart")
)||[];

let count=

document.getElementById(
"cartCount"
);

if(count){

count.innerText=
cart.length;

}

}

updateCartCount();

function placeOrder(){
    window.location.href="order.html";
}