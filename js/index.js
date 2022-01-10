const header = document.querySelector("header");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menuContainer = document.querySelector(".menu_container");
const headerScroll = () => {
  if (window.scrollY > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
const MobileMenuToggle = () => {
  menuContainer.classList.toggle("active");
};
window.addEventListener("scroll", headerScroll);
openMenu.addEventListener("click", MobileMenuToggle);
closeMenu.addEventListener("click", MobileMenuToggle);
