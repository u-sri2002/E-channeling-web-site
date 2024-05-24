// Redirect to a page
// Used with 'onclick' inside HTML element
function redirectToPage(page) {
    
    // For Github Pages (Remove for pure project)
    if (window.location.origin === "https://u-sri2002.github.io") {
        window.location.href = window.location.origin + "/E-channeling-web-site/" + page;
    
     // For local
    }else {
        window.location.href = window.location.origin + "/" + page;
    }
}