
/* ===========================
*    DOM REFERENCES
 ===========================*/ 
// Error display elements
const errorSvg = document.getElementById('error-svg');
const errorTxt = document.getElementById('error-txt');

// Form elements
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

/* ===========================
*    EVENT LISTENERS
 ===========================*/ 
/**
 * Validates email input on form submit.
 * Shows error elements if input is empty or invalid.
 */
form.addEventListener('submit', function (event) {
  // Prevents defaults like page reload
  event.preventDefault(); 

  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !emailInput.checkValidity()) {
    showError(errorSvg, errorTxt);
    emailInput.classList.add('error');
  } else {
    hideError(errorSvg, errorTxt);
    emailInput.classList.remove('error');
  }
});

/**
 * Hides error elements on user input
 */
emailInput.addEventListener('input', function(event){
  hideError(errorSvg, errorTxt);
  emailInput.classList.remove('error');
});
/* ===========================
*    UTILITY FUNCTIONS
 ===========================*/ 
/** Shows error elements */
function showError(svg, txt){
  show(svg);
  show(txt);
}

/** Hides error elements */
function hideError(svg, txt){
  hide(svg);
  hide(txt);
}

/** Shows an element */
function show(el){
  el.classList.remove('hidden');
}

/** Hides an element */
function hide(el){
  el.classList.add('hidden');
}