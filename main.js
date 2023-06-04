// selecting dom elements
const primaryHeader = document.querySelector(".primary-header");
const navToggler = document.querySelector(".primary-header-mobile-navigation-toggler");
const headerNav = document.querySelector(".header-navigation");
const emailField = document.getElementById("email-field");
const errorMessageContainer = document.querySelector("[data-error-msg]");


// nav toggler functionality
navToggler.addEventListener("click", () => {
    headerNav.hasAttribute("data-visible")
        ? navToggler.setAttribute("aria-expanded", false)
        : navToggler.setAttribute("aria-expanded", true);

    headerNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});


// clearing error message
emailField.addEventListener("focus", () => {
    errorMessageContainer.textContent = '';
});


// email subscription
function handleSubmit(e) {
    e.preventDefault();

    // email validation regex
    let emailValidationRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if (!emailValidationRegex.test(emailField.value)) {
        errorMessageContainer.style.display = 'block';
        errorMessageContainer.textContent = 'Please insert a valid email';
        return;
    }
    alert('Thanks for subscribing us');
    emailField.value = '';
}


// carousel slider
const slider = new A11YSlider(document.querySelector(".slider"), {
    arrows: false,
    responsive: {
        800: {
            dots: false,
            slidesToShow: 2,
        },
        1200: {
            slidesToShow: 3,
        }
    },
});