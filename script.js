// Scroll Reveal Animation
const fadeItems = document.querySelectorAll(".fade-section");
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

fadeItems.forEach((item) => fadeObserver.observe(item));

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("This is a demo form. Please contact me by email directly!");
    contactForm.reset();
  });
}

// Footer Year Auto-Update
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
