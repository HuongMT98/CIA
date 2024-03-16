/**Navbar mobile open Close */

function openNavBar() {
    document.querySelector('.navmenu-option-m').style.display = 'block';
}

function closeNavBar() {
    document.querySelector('.navmenu-option-m').style.display = 'none';
}

// 🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥

/*NavMenu-Option */

let showNavbar = document.querySelectorAll('.navmenu-option-lg-m');
showNavbar.forEach(e => {
    e.addEventListener('click', () => {
        let navShow = e.querySelector('.navmenu-option-smol-m')
        navShow.classList.toggle('open-navbar')
    });
});
