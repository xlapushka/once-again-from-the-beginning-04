(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    menuList: document.querySelector(".mobile-menu"),
    hideSubtitle: document.querySelector(".hide-subtitle")
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleleMobileMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleleMobileMenu() {
    document.body.classList.toggle("mobile-menu-open");
    refs.mobileMenu.classList.toggle("is-hidden");
    refs.hideSubtitle.classList.toggle("hide-subtitle-with-z-ind");
  }

  function removeMenu() {
    document.body.classList.remove("mobile-menu-open");
    refs.mobileMenu.classList.add("is-hidden");
    refs.hideSubtitle.classList.remove("hide-subtitle-with-z-ind");
  }

  // const style = getComputedStyle((document.getElementById("element")));
  // const zIndex1 = style.zIndex;
  // console.log(zIndex1)
})();
