document.querySelector('.nav-bar').innerHTML = `
<div class="nav-logo">
            <a href="/"><img src="./img/nav-logo.png" alt="eDoc24 Logo"></a>
        </div>

        <nav class="top-nav">

            <div class="nav-list nav-out">
            <a  class="nav-item green" href="appointments.html"><span>Appointments</span></a>
            <a  class="nav-item green" href="refund.html"><span>Refund</span></a>
            <a  class="nav-item blue" href="services.html"><span>Services</span></a>
            <a  class="nav-item blue" href="contact.html"><span>Contact</span></a>
            <a  class="nav-item blue" href="account.html"><span>Account</span></a>
            </div>

            <button class="menu" onclick="doNavClick()" aria-label="Main Menu">
                <svg width="40" height="40" viewBox="0 0 100 100">
                    <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path class="line line2" d="M 20,50 H 80" />
                    <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>

            <div class="nav-list nav-in">
                <a  class="nav-item green" href="appointments.html"><span>Appointments</span></a>
                <a  class="nav-item green" href="refund.html"><span>Refund</span></a>
                <a  class="nav-item blue" href="services.html"><span>Services</span></a>
                <a  class="nav-item blue" href="contact.html"><span>Contact</span></a>
                <a  class="nav-item blue" href="account.html"><span>Account</span></a>
                </div>

        </nav>

`;

let DomLoaded = false;

const navBar = document.querySelector('.nav-bar');
const innerNav = document.querySelector('.nav-in');
const menu = document.querySelector('.menu');

let navHeight;
let innerNavWidth;

function initSizes() {
    navHeight = navBar.getBoundingClientRect().height;
    innerNavWidth = innerNav.getBoundingClientRect().width;

    innerNav.style.top = navHeight + "px";
    innerNav.style.height = (window.innerHeight - navHeight) + "px";

    innerNav.style.right =  (- innerNavWidth) + "px";

    if (window.scrollY > navHeight) {
        // innerNav.style.height = "100vh";
        // innerNav.style.top = "0px";
        // navBar.classList.add('make-fixed');
        // navBar.style.top = 0;
    }else {
        // innerNav.style.top = navHeight + "px";
        // innerNav.style.height = (window.innerHeight - navHeight) + "px";
        // navBar.classList.remove('make-fixed');
    }

    let secondChildElement = document.body.children[1];
    secondChildElement.style.marginTop = secondChildElement.style.marginTop + navHeight + "px";
}


document.addEventListener('DOMContentLoaded', function() {
    DomLoaded = true;
    initSizes();
});


function doNavClick () {
    initSizes();
    
    if(DomLoaded) {
        menu.classList.toggle('opened');
        menu.setAttribute('aria-expanded', menu.classList.contains('opened'));
    
        innerNav.classList.toggle('nav-showed');
    
        if(innerNav.classList.contains('nav-showed')) {
            innerNav.style.right =  0 + "px";
        }else {
            innerNav.style.right =  (- innerNavWidth) + "px";
        }
    }

}

window.addEventListener('resize', function() {
    resetNavigation();
});

window.addEventListener('scroll', function () {
    resetNavigation();

})

function resetNavigation() {
    initSizes();

    if(menu.classList.contains('opened')) {
        menu.classList.remove('opened');
        menu.removeAttribute('aria-expanded', menu.classList.contains('opened'));
        innerNav.classList.remove('nav-showed');
    }
}