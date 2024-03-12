let navmenuMobileMenu = document.querySelector('.navmenu-mobile-menu')

function navOpen() {
    navmenuMobileMenu.classList.toggle('active')
}
function navClose() {
    navmenuMobileMenu.classList.toggle('active')
}




let navOptions = document.querySelectorAll('.navmenumobile-option-lg');

navOptions.forEach(e => {
    e.addEventListener('click', () => {
        let newNavOption = e.querySelector('.navmenumobile-option-smol')
        newNavOption.classList.toggle('active');
    });
});

