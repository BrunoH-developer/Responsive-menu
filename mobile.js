class MobileNavigation {
constructor(hamburgerMenu, menuList, menuLinks) {
    this.hamburgerMenu = document.querySelector(hamburgerMenu);
    this.menuList = document.querySelector(menuList);
    this.menuLinks = document.querySelectorAll(menuLinks);
    this.activeClass = "active";

    this.handleMenuClick = this.handleMenuClick.bind(this);
}

animateLinks() {
    this.menuLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
}

handleMenuClick() {
    this.menuList.classList.toggle(this.activeClass);
    this.hamburgerMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}

addClickEvent() {
    this.hamburgerMenu.addEventListener("click", this.handleMenuClick);
}

init() {
    if (this.hamburgerMenu) {
        this.addClickEvent();
    }
    return this;
}
}

const mobileNavigation = new MobileNavigation(
".hamburger-menu",
".menu-list",
".menu-list li"
);
mobileNavigation.init();






                                                

