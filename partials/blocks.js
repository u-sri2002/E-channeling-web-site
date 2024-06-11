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

    <h4><a href="./index.html">eDOC x 24</a></h4> 
    <div class="f-logo">
        <svg width="204.64441970147914" height="155.2274963378906" viewBox="0 0 200 151.70459723683211" class="looka-1j8o68f"><defs id="SvgjsDefs2722"></defs><g id="SvgjsG2723" featurekey="e7LhAk-0" transform="matrix(1.0103432962245769,0,0,1.0103432962245769,52.008186608106655,-7.990803603595269)" fill="#ffffff"><path xmlns="http://www.w3.org/2000/svg" d="M77.157,29.962l-8.131-0.06c-2.196,0-3.982-1.871-3.982-4.172l-0.006-7.888c0-5.477-4.541-9.933-10.122-9.933H40.084  c-5.581,0-10.123,4.456-10.123,9.933l0.053,22.785c0,5.043,3.853,9.219,8.82,9.848H55.47c1.831,0.205,3.301,1.545,3.617,3.263  v23.419c0,2.195-1.872,3.981-4.172,3.981H40.084c-2.3,0-4.172-1.786-4.172-3.981v-9.306c-0.549-4.699-4.453-8.411-9.297-8.765  h-8.772c-2.196,0-3.982-1.871-3.982-4.172v-14.83c0-2.301,1.786-4.172,3.982-4.172h6.168v-5.951h-6.168  c-5.478,0-9.933,4.541-9.933,10.123v14.83c0,5.582,4.455,10.123,9.933,10.123h8.51c1.825,0.207,3.29,1.542,3.608,3.252v8.867  c0,5.477,4.542,9.933,10.123,9.933h14.831c5.581,0,10.122-4.456,10.122-9.933V60.596h0.067l-0.067-7.294  c-0.544-4.709-4.457-8.43-9.313-8.777H39.282c-1.892-0.377-3.316-1.98-3.316-3.896l-0.053-22.785c0-2.195,1.872-3.981,4.172-3.981  h14.831c2.3,0,4.172,1.786,4.172,3.981l0.005,7.888c0,5.581,4.457,10.123,9.934,10.123l8.131,0.06c2.195,0,3.982,1.871,3.982,4.172  v14.83c0,2.301-1.787,4.172-3.982,4.172h-6.168v5.951h6.168c5.477,0,9.933-4.541,9.933-10.123v-14.83  C87.089,34.503,82.633,29.962,77.157,29.962z"></path></g><g id="SvgjsG2724" featurekey="Qg0WB5-0" transform="matrix(3.381595431058798,0,0,3.381595431058798,-2.7052775945115637,83.32873349289909)" fill="#ffffff"><path d="M11.84 18.48 q-0.88 0.81 -1.98 1.265 t-2.33 0.455 q-1.37 0 -2.59 -0.5 t-2.14 -1.385 t-1.46 -2.085 t-0.54 -2.61 q0 -0.88 0.215 -1.705 t0.61 -1.545 t0.96 -1.325 t1.265 -1.035 t1.52 -0.67 t1.73 -0.24 q0.83 0 1.61 0.22 t1.465 0.62 t1.255 0.96 t0.98 1.225 t0.635 1.42 t0.225 1.555 q0 0.52 -0.015 0.85 t-0.155 0.525 t-0.465 0.27 t-0.955 0.075 l-7.2 0 q0.1 0.64 0.405 1.07 t0.705 0.685 t0.85 0.365 t0.85 0.11 q0.36 0 0.74 -0.075 t0.735 -0.2 t0.65 -0.29 t0.475 -0.345 q0.16 -0.13 0.275 -0.195 t0.245 -0.065 t0.265 0.09 t0.305 0.26 l1.06 1.2 q0.11 0.13 0.14 0.235 t0.03 0.215 q0 0.2 -0.11 0.345 t-0.26 0.255 z M7.03 10.15 q-0.39 0 -0.755 0.155 t-0.685 0.415 t-0.575 0.59 t-0.415 0.67 l5.11 0 q-0.21 -0.39 -0.455 -0.72 t-0.56 -0.58 t-0.72 -0.39 t-0.945 -0.14 z M28.630000000000003 12.59 q0 1.06 -0.27 2.015 t-0.77 1.78 t-1.195 1.495 t-1.54 1.14 t-1.825 0.725 t-2.03 0.255 l-4.93 0 q-0.18 0 -0.32 -0.08 t-0.14 -0.34 l0 -13.97 q0 -0.21 0.115 -0.34 t0.345 -0.13 l4.93 0 q1.05 0 2.025 0.26 t1.82 0.74 t1.545 1.15 t1.195 1.5 t0.77 1.79 t0.275 2.01 z M19.48 8.73 l0 7.69 l0.84 0 q0.23 0 0.45 -0.015 t0.44 -0.035 q0.75 -0.06 1.4 -0.365 t1.135 -0.8 t0.76 -1.165 t0.275 -1.46 q0 -0.84 -0.315 -1.545 t-0.855 -1.22 t-1.265 -0.8 t-1.545 -0.285 l-1.32 0 z M34.410000000000004 12.58 q0 0.83 0.28 1.55 t0.785 1.255 t1.195 0.84 t1.52 0.305 t1.525 -0.305 t1.2 -0.84 t0.785 -1.255 t0.28 -1.55 q0 -0.82 -0.28 -1.545 t-0.785 -1.265 t-1.2 -0.85 t-1.525 -0.31 t-1.52 0.31 t-1.195 0.85 t-0.785 1.265 t-0.28 1.545 z M30.550000000000004 12.59 q0 -1.06 0.27 -2.035 t0.77 -1.83 t1.195 -1.555 t1.545 -1.195 t1.825 -0.77 t2.035 -0.275 q1.05 0 2.03 0.275 t1.83 0.77 t1.55 1.195 t1.195 1.555 t0.77 1.83 t0.275 2.035 t-0.275 2.035 t-0.77 1.82 t-1.195 1.54 t-1.55 1.195 t-1.83 0.77 t-2.03 0.27 q-1.06 0 -2.035 -0.27 t-1.825 -0.77 t-1.545 -1.195 t-1.195 -1.54 t-0.77 -1.82 t-0.27 -2.035 z M59.620000000000005 6.23 q0.17 0.1 0.25 0.26 t-0.03 0.38 l-1.69 2.4 q-0.11 0.17 -0.235 0.195 t-0.305 -0.085 q-0.49 -0.37 -1.08 -0.57 t-1.25 -0.2 q-0.82 0 -1.51 0.31 t-1.19 0.85 t-0.78 1.26 t-0.28 1.54 t0.28 1.535 t0.78 1.25 t1.19 0.845 t1.51 0.31 q0.66 0 1.26 -0.205 t1.09 -0.575 q0.18 -0.11 0.3 -0.09 t0.24 0.18 l1.71 2.46 q0.11 0.22 0.03 0.37 t-0.25 0.25 q-0.94 0.63 -2.025 0.975 t-2.285 0.345 q-1.06 0 -2.035 -0.27 t-1.825 -0.77 t-1.545 -1.195 t-1.195 -1.54 t-0.77 -1.82 t-0.27 -2.035 t0.27 -2.035 t0.77 -1.83 t1.195 -1.555 t1.545 -1.195 t1.825 -0.77 t2.035 -0.275 q1.2 0 2.265 0.335 t2.005 0.965 z"></path></g></svg>     
    </div>
    <p class="f-description">
        As Sri Lanka's leading private healthcare provider with international accreditation for Patient Safety and Care,
        we are dedicated to ensuring compassionate, innovative, and superior patient outcomes.
        Experience the convenience and reliability of connecting with trusted medical professionals who prioritize your health and well-being.</p>
</div>

<div class="col-lg-2 col-sm-12">
    <h4><a href="./services.html">Services</a></h4>

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
    <h4><a href="./contactUs.html">Contacts</a></h4>

    <p>
        eDoc Surgical: +94 11 562 4400 <br>
        eDoc Medical: +94 11 562 3300<br>
        eDoc Kandy: +94 81 562 8800<br>
        eDoc Matara: +94 41 860 1501<br>
        eDoc Galle: +94 91 574 0640<br>
        eDoc Nova IVF: +94 11 562 3377<br>
        eDoc Laboratories: +94 11 562 3456<br>
        eDoc AOI Cancer Centre: +94 11 562 4466<br>
    </p>
</div>

<div class="col-lg-2 col-sm-12">
    <h4>Support</h4>

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
<h4>Follow Us On</h4>

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