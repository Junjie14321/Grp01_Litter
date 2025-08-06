AOS.init({
    duration: 1000, // animation duration in ms
    once: false,     // only animate once when scrolling down
});

// Show the button after scrolling down 100px
window.onscroll = function () {
const btn = document.getElementById("backToTopBtn");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
} else {
    btn.style.display = "none";
}
};

function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

