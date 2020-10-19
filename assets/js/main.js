let scrollpos = window.scrollY;
const header = document.getElementById("header");
const navcontent = document.getElementById("nav-content");

document.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("shadow-lg");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("shadow-lg");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
});

const navMenuDiv = document.getElementById("nav-content");
const navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
  const target = e && e.target;

  if (!checkParent(target, navMenuDiv)) {
    if (checkParent(target, navMenu)) {
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      navMenuDiv.classList.add("hidden");
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t === elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}
