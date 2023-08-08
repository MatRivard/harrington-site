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

function showSection(sectionId, event) {
  const buttons = document.getElementsByClassName("subsection");
  const sections = document.getElementsByClassName("subsection-text");
  const activeSection = document.getElementById(sectionId)

  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("visible")
    buttons[i].classList.remove("active")
  }

  activeSection.classList.add("visible")
  event.target.classList.add("active")
}


// Parallax scroll for projects timeline items
const projectTitles = document.querySelectorAll('.project-content');
let lastScrollY = 0;
let debounce = false;


function onScroll() {
    lastScrollY = window.scrollY;
    requestUpdate();
}

function requestUpdate() {
  if(!debounce) {
    requestAnimationFrame(update);
    debounce = true;
  }
}


function update() {
    let projectTitle = null,
        projectTitleTop = [],
        projectTitleBottom = [],
        WindowHeight = window.innerHeight,
        offset = 0;

  // first loop is going to do all
  // the reflows (since we use offsetTop)
    for(let i = 0; i < projectTitles.length; i++) {

        projectTitle = projectTitles[i];
        projectTitleTop[i] = projectTitle.getBoundingClientRect().top;
        projectTitleBottom[i] = projectTitle.getBoundingClientRect().bottom;
    }

  // second loop is going to go through
  // the projectTitles and update position
    for(let j = 0; j < projectTitles.length; j++) {

        projectTitle = projectTitles[j];
        titleTop = projectTitleTop[j];
        titleBottom = projectTitleBottom[j];
        itemHalfHeight = (titleBottom - titleTop) / 2;
        scrollPercent = (WindowHeight - (titleTop + itemHalfHeight)) / WindowHeight;

        if(titleBottom > 0 && titleTop < WindowHeight) {
          projectTitle.style.transform = 'translateY(' + (40 - 80*scrollPercent) +'px)';
        } 

    }

  // allow further rAFs to be called
    debounce = false;
}

if (window.location.href.includes('social')) {
  window.addEventListener('scroll', onScroll, false);
}

checkActiveLink();
