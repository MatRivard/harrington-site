function openMobileMenu() {
  document.getElementById("nav-menu-mobile").style.width = "300px";
}

function closeMobileMenu() {
  document.getElementById("nav-menu-mobile").style.width = "0";
}

function checkActiveLink() {
  const links = document.getElementsByClassName("navlink");

  for (var i = 0; i < links.length; i++) {
    let url = links[i].getAttribute("href").split('/');
    url = url[url.length - 1]
    if (window.location.href.indexOf(url) > -1) {
      links[i].classList.add('active')
      break;
    }
  }
}

checkActiveLink();
