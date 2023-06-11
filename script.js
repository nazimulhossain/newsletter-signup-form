const button = document.querySelector('.button');
const form = document.querySelector('.signup__form');
const sectionSignUp = document.querySelector('.section-signup');
const sectionSuccess = document.querySelector('.success');
const successEmail = document.querySelector('.success__email');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.length > 0 && email.value.match(emailFormat)) {
    successEmail.textContent = email.value;
    sectionSignUp.classList.add('hidden');
    sectionSuccess.classList.remove('hidden');
  } else {
    email.classList.add('invalid');
    form.classList.add('error');
  }
});
