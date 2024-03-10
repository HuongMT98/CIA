let navmenuMobileMenu = document.querySelector('.navmenu-mobile-menu')

function navOpen() {
    navmenuMobileMenu.classList.add('active')
}
function navClose() {
    navmenuMobileMenu.classList.remove('active')
}




let navOptions = document.querySelectorAll('.navmenumobile-option-lg');

navOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.querySelector('.navmenumobile-option-smol').classList.toggle('active');
    });
});

