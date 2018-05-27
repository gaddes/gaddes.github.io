
function toggleNav() {
  var x = document.getElementById("menu-btn");
  if (x.className === "btn hide") {
    /* Open sidenav */
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginRight = "200px";
    x.className = "btn show"; // Change class name of menu button to reflect the fact that the sidenav is VISIBLE
  } else {
    /* Close sidenav */
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    x.className = "btn hide"; // Change class name of menu button to reflect the fact that the sidenav is NOT VISIBLE
  }
}

// NOTE: ideally this function will be called when the screen width increases beyond 700px, but  not sure how to acheive this with CSS media queries, therefore the function is currently redundant.
function hideNav() {
  var x = document.getElementById("menu-btn");
  x.className = "btn hide";
}

// Shrink height of header on page scroll
var header_desktop = document.querySelector('.header-desktop');
var header_tablet = document.querySelector('.header-tablet');
var header_mobile = document.querySelector('.header-mobile');

window.addEventListener('scroll', function() {
  if(window.pageYOffset > 100) {
    header_desktop.classList += ' shrink'
    header_tablet.classList += ' shrink'
    header_mobile.classList += ' shrink'
  } else {
    header_desktop.classList = 'header-desktop';
    header_tablet.classList = 'header-tablet';
    header_mobile.classList = 'header-mobile';
  }
})
