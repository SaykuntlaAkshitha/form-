// loginform
const loginForm = document.querySelector('.login-form');
// signupform
const signupForm = document.querySelector('.signup-form');
// loginbtn
const loginbtn = document.querySelector('.login button');
// signupbtn
const signupbtn = document.querySelector('.signup button');
// backlayer
const backlayer = document.querySelector('.back-layer');

signupbtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    backlayer.style.clipPath = "inset(0 0 0 50%)";
});

loginbtn.addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    backlayer.style.clipPath = "inset(0 50% 0 0)";
});
