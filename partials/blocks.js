// NavBar
let navBar
let innerNav;
let menu;

let navHeight;
let innerNavWidth;

const navBarContent = `
<div class="nav-logo">
            <a href="./index.html"><img src="./img/nav-logo.png" alt="eDoc24 Logo"></a>
        </div>

        <nav class="top-nav">

            <div class="nav-list nav-out">
                <a  class="nav-item green" href="appointments.html"><span>Appointments</span></a>
                <a  class="nav-item green" href="specialists.html"><span>Specialists</span></a>
                <a  class="nav-item blue" href="contact-us.html"><span>Contact</span></a>
                <a  class="nav-item blue" href="signup.html"><span>Account</span></a>
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
                <a  class="nav-item green" href="specialists.html"><span>Specialists</span></a>
                <a  class="nav-item blue" href="contact-us.html"><span>Contact</span></a>
                <a  class="nav-item blue" href="download-app.html"><span>Download App</span></a>
                <a  class="nav-item blue" href="register-as-doctor.html"><span>Register as a Specialist</span></a>
                <a  class="nav-item blue" href="signup.html"><span>Account</span></a>
            </div>

        </nav>

`;
function doNavClick () {
    menu.classList.toggle('opened');
    menu.setAttribute('aria-expanded', menu.classList.contains('opened'));

    innerNav.classList.toggle('nav-showed');

    if(innerNav.classList.contains('nav-showed')) {
        innerNav.style.right =  0 + "px";
    }else {
        innerNav.style.right =  (- innerNavWidth) + "px";
    }
}

function makeNavBar() {
    
    if(document.querySelector('.nav-bar')) {
        navBar = document.querySelector('.nav-bar');
        navBar.style.opacity = "0";
        navBar.innerHTML = navBarContent;
        innerNav = document.querySelector('.nav-in');
        menu = document.querySelector('.menu');
        initSizes();
        navBar.style.opacity = "1";
    }
    
}

function initSizes() {
    navHeight = navBar.getBoundingClientRect().height;
    innerNavWidth = innerNav.getBoundingClientRect().width;

    innerNav.style.top = navHeight + "px";
    innerNav.style.height = (window.innerHeight - navHeight) + "px";

    innerNav.style.right =  (- innerNavWidth) + "px";

    let secondChildElement = document.body.children[1];
    secondChildElement.style.marginTop = secondChildElement.style.marginTop + navHeight + "px";
}

function resetNavigation() {
    initSizes();
    closeNavigation();
}

function closeNavigation() {
    if(menu.classList.contains('opened')) {
        menu.classList.remove('opened');
        menu.removeAttribute('aria-expanded', menu.classList.contains('opened'));
        innerNav.classList.remove('nav-showed');
    }
}

window.addEventListener('resize', function() {
    resetNavigation();
});

window.addEventListener('scroll', function () {
    resetNavigation();
})

window.addEventListener('load', function () {
    resetNavigation();
})


// Footer
let footer;

const footerContent =`
        <div class="row">

            <div class="col-lg-5 col-sm-12 ">
            
                <h4 class="f-heading"><a href="./index.html">eDOC x 24</a></h4> 
                <div class="f-logo">
                    <svg width="305.61252506277435" height="205.59750366210938" viewBox="0 0 200 134.54782562977653" class="looka-1j8o68f"><defs id="SvgjsDefs1480"></defs><g id="SvgjsG1481" featurekey="e7LhAk-0" transform="matrix(0.9626955652100705,0,0,0.9626955652100705,51.8170876957144,-7.2202167390755285)" fill="#ffffff"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M66.3,57.5l-9.3,13.9c-0.5,0.7-1.3,1.1-2.1,1.1c-0.1,0-0.2,0-0.3,0c-0.9-0.1-1.7-0.7-2.1-1.6l-13-34.7l-10.3,20    c-0.4,0.8-1.3,1.4-2.2,1.4h-4L48,91.7c0.5,0.6,1.2,1,2,1s1.6-0.4,2-1l24.8-34.2H66.3z"></path><path d="M19.5,52.5h6.1l12.2-23.6c0.5-0.9,1.4-1.4,2.4-1.4c1,0.1,1.8,0.7,2.2,1.6l13.3,35.4l7.3-10.9c0.5-0.7,1.2-1.1,2.1-1.1    h15.5l7.1-9.8c0-0.1,0.1-0.1,0.1-0.2c2.5-3.7,3.8-8.1,3.8-12.5C91.5,17.6,81.4,7.5,69,7.5c-7.8,0-14.9,4-19,10.4    C45.9,11.5,38.8,7.5,31,7.5C18.6,7.5,8.5,17.6,8.5,30c0,4.8,1.5,9.4,4.4,13.3L19.5,52.5z M75.6,18c0.9-1.1,2.5-1.2,3.5-0.3    c3.3,2.7,8,10.7,2,21.5c-0.3,0.6-0.9,1-1.5,1.2c-0.6,0.2-1.3,0.1-1.9-0.2c-1.2-0.7-1.6-2.2-1-3.4c5.4-9.7-0.5-15-0.8-15.2    C74.8,20.6,74.7,19,75.6,18z"></path></g></g></g><g id="SvgjsG1482" featurekey="Qg0WB5-0" transform="matrix(2.1269141651425394,0,0,2.1269141651425394,-2.263887600865422,90.99166606220841)" fill="#ffffff"><path d="M1.8652 14.5703 c0.078125 -0.33203 0.18555 -0.625 0.2832 -0.9375 l-1.084 0 c2.3438 -6.377 12.383 -7.0117 11.084 0 l1.0938 0 c-0.019531 0.11719 -0.019531 0.23438 -0.048828 0.36133 l-0.41992 1.6309 l-6.4648 0 c-0.33203 2.4121 4.248 1.6797 4.6973 0.81055 l1.4941 0 l-0.71289 2.7832 c-3.8574 2.2168 -11.357 1.6602 -9.9219 -4.6484 z M8.7891 12.685500000000001 c0.21484 -1.0645 -2.1289 -1.6699 -3.2324 0 c0.0097656 0 3.2324 0.0097656 3.2324 0 z M26.728984375 13.6328 l1.0938 0 c-1.0645 3.1445 -3.7793 5.6152 -7.0801 6.1914 c-2.4316 0.3418 -5.1758 0.17578 -7.6465 0.17578 l1.4648 -6.3672 l-1.084 0 l1.8848 -8.2031 c1.9531 0 6.8945 -0.30273 8.8477 0.52734 c2.7051 1.1621 3.3789 4.1211 2.7539 6.7578 c-0.048828 0.3125 -0.12695 0.625 -0.23438 0.91797 z M19.462884375 9.033 l-1.0547 4.5996 l1.084 0 l-0.63477 2.7344 c2.1191 0 3.3008 -0.80078 3.9551 -2.7344 l-1.084 0 c0.10742 -0.26367 0.18555 -0.57617 0.27344 -0.94727 c0.60547 -2.5293 -0.13672 -3.6523 -2.5391 -3.6523 z M42.685953125 12.8418 c-0.078125 0.3125 -0.16602 0.625 -0.2832 0.94727 l1.0645 0 c-1.2402 3.877 -4.3945 6.6895 -8.7207 6.6895 c-4.4629 0 -6.2012 -2.8125 -5.6348 -6.6895 l-1.0352 0 c0.039063 -0.32227 0.087891 -0.63477 0.15625 -0.94727 c1.0352 -4.4629 4.2676 -7.6563 8.9648 -7.6563 c4.5996 0 6.4941 3.2227 5.4883 7.6563 z M38.397953125 13.789100000000001 l-1.0547 0 c0.097656 -0.32227 0.19531 -0.63477 0.26367 -0.9668 c1.2402 -5.3613 -3.0859 -5.2051 -4.2969 0.019531 c-0.068359 0.3418 -0.11719 0.6543 -0.16602 0.94727 l1.0547 0 c-0.50781 4.082 2.8223 3.9941 4.1992 0 z M48.34958125 13.6328 l1.1133 0 c-0.17578 2.3535 1.4258 4.1211 5.9375 1.2207 l1.4648 0 l-0.91797 3.9844 c-4.9512 2.8516 -12.295 1.9922 -11.221 -5.2051 l-1.1035 0 c0.058594 -0.26367 0.11719 -0.57617 0.19531 -0.91797 c0.99609 -4.3652 4.3262 -7.5391 8.9648 -7.5391 c2.5586 0 4.0332 0.73242 4.9121 1.3379 l-0.94727 4.082 l-1.5723 0 c-3.5352 -3.8086 -6.5918 0.078125 -6.8262 3.0371 z M67.157875 13.6328 l-0.75195 0.80078 l2.6074 5.5566 l-5.2832 0 l-0.83008 -2.041 c-0.5957 0.67383 -1.2109 1.3184 -1.7871 2.041 l-5.2246 0 l5.1563 -5.4883 c-0.14648 -0.29297 -0.27344 -0.57617 -0.41992 -0.86914 l-0.88867 0 c-0.71289 -1.5234 -1.4844 -3.0762 -2.1289 -4.6094 l5.2246 0 l0.83984 1.9824 c0.55664 -0.6543 1.1328 -1.3281 1.7285 -1.9824 l5.2148 0 l-4.3457 4.6094 l0.88867 0 z M80.761625 13.261700000000001 c-1.084 1.2305 -2.4414 2.2852 -3.5449 3.0957 l4.5313 0 l-0.83008 3.584 l-11.006 0 l0.6543 -2.8906 c0.9375 -0.66406 3.2031 -2.1973 4.9414 -3.7891 l-0.89844 0 c1.582 -1.4355 2.7344 -2.9492 2.0898 -3.9355 c-0.66406 -0.99609 -2.666 -0.45898 -3.7207 0.84961 l-1.4453 0 l0.83984 -3.7305 c2.5195 -1.0938 8.7891 -2.2852 9.4727 1.5234 c0.36133 1.9531 -0.61523 3.7695 -1.9727 5.293 l0.88867 0 z M93.36884375 13.261700000000001 l-0.029297 0.12695 l1.7578 0 l-0.78125 3.4668 l-1.748 0 l-0.72266 3.1348 l-4.7168 0 l0.70313 -3.1348 l-5.6348 0 l0.71289 -3.1055 l0.43945 -0.48828 l-0.9082 0 l7.2461 -7.6465 l4.5215 0 l-1.7383 7.6465 l0.89844 0 z M88.73044375 13.261700000000001 l-0.89844 0 l0.37109 -1.6309 l-1.5234 1.6309 l0.89844 0 l-0.10742 0.12695 l1.2402 -0.0097656 z"></path></g></svg>
                </div>
                <p class="f-description">
                    As Sri Lanka's leading private healthcare provider with international accreditation for Patient Safety and Care,
                    we are dedicated to ensuring compassionate, innovative, and superior patient outcomes.
                    Experience the convenience and reliability of connecting with trusted medical professionals who prioritize your health and well-being.</p>
            </div>
            
            <div class="col-lg-2 col-sm-12">
                <h4 class="f-heading"><a href="#services">Services</a></h4>
            
                <p>
                    Doctor Appointments <br>
                    Online Consultations <br>
                    Medical Records Management <br>
                    Lab Test Bookings <br>
                    Pharmacy Services <br>
                    Health Packages <br>
                    Emergency Services <br>
                    Health Information <br>
            
                </p>
            </div>
            
            <div class="col-lg-3 col-sm-12">
                <h4 class="f-heading"><a href="./contactUs.html">Contacts</a></h4>
            
                <p>
                     OPD: +94 81 562 8800<br>
                     Surgical: +94 11 562 4400 <br>
                     Clincs: +94 41 860 1501<br>
                     Pharmacy: +94 91 574 0640<br>
                     Laboratories: +94 11 562 3456<br>
                     AOI Cancer Centre: +94 11 562 4466<br>
                     Emergency Department: +94 11 562 3300<br>
                     Research & Education: +94 11 562 3377<br>
                </p>
            </div>
            
            <div class="col-lg-2 col-sm-12">
                <h4 class="f-heading">Support</h4>

                <p>
                    <br>
                    <highlight>Hotline : 1212</highlight> <br> <br>
                    IT Help desk: <a href="#">info@eDocit.com</a> <br>
                    More info: <a href="#">info@eDoc24.com</a> <br>
                </p>
            </div>
            
        </div>
            
        <hr>
            
        <div class="container f-social-media">
            <h4 class="f-heading">Follow Us On</h4>
            
            <div class="f-icons">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                    </svg>
                </a>
            </div>
        </div>`;

function makeFooter() {
    if(document.querySelector('footer')) {
        footer = document.querySelector('footer');
        footer.innerHTML = footerContent;
    }
}

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    makeNavBar();
    makeFooter();
});


// Redirect to a page (Used with 'onclick' inside HTML element)
function redirectToPage(page) {
    
    // For Github Pages (Remove for pure project)
    if (window.location.origin === "https://u-sri2002.github.io") {
        window.location.href = window.location.origin + "/E-channeling-web-site/" + page;
    
     // For local
    }else {
        window.location.href = window.location.origin + "/" + page;
    }
}

function redirectToPageId(page, id) {
    
    // For Github Pages (Remove for pure project)
    if (window.location.origin === "https://u-sri2002.github.io") {
        window.location.href = window.location.origin + "/E-channeling-web-site/" + page + "#" + id;
    
     // For local
    }else {
        window.location.href = window.location.origin + "/" + page + "#" + id;
    }
}