function openHamburgerMenu(){
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar"){
      x.className += " responsive";
  } else {
      x.className = "navBar";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const formFields = document.querySelectorAll('.form-control');
  const submitButton = document.getElementById('submitButton');

  formFields.forEach(field => {
    field.addEventListener('input', () => {
      submitButton.style.backgroundColor = '#ffa037';
      submitButton.style.transition = 'background-color 1s';
    });

    field.addEventListener('blur', () => {
      const allFieldsEmpty = Array.from(formFields).every(field => field.value === '');
      if (allFieldsEmpty) {
        submitButton.style.backgroundColor = ''; // Reset to default or initial color
      }
    });
  });
});