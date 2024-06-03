document.getElementById(`loginForm`).addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if(!username || !password) {
        errorMsg.textContent = "Both fields are required.";
        errorMsg.style.display = 'block';
    }else {
        errorMsg.style.display = 'none';
    
    console.log('Form submitted', { username, password });
}
});

// escorting the bg from json file
// function bg (){
//     fetch("js/animation.json").then(response => response.json()).then(data => {
//         const imgURL = data.imgURL;

//         const targetDiv = document.querySelector('.bgContainer');
//         targetDiv.style.backgroundImage = `url(${imageUrl})`;
//         targetDiv.style.backgroundSize = 'cover';
//         targetDiv.style.backgroundPosition = 'center';
//     })

//     .catch(error => console.error('Error fetching JSON: ', error));
// }

// document.addEventListener('DOMContentLoaded', bg());
document.addEventListener('DOMContentLoaded', function() {
    var lottieContainer = document.getElementById('lottieContainer');

    lottie.loadAnimation({
        container: lottieContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/animation2.json' // the path to the animation json
    });
});

// to display the sign up div when clicked

const showSignUpFormLink = document.getElementById('showSignUpForm');
const showLogInFormLink = document.getElementById('showLoginForm');
const LoginContainer = document.getElementById('loginFormContainer');
const signUpContainer = document.getElementById('signUpFormContainer');

showSignUpFormLink.addEventListener('click', function(event){
    event.preventDefault();
    LoginContainer.style.display = "none";
    signUpContainer.style.display = "block";
});

showLogInFormLink.addEventListener('click', function(event){
    event.preventDefault();
    LoginContainer.style.display = "block";
    signUpContainer.style.display = "none";
});