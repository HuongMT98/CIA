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
let navShow = document.querySelector('.navmenu-option-smol-m');

showNavbar.forEach(e => {
    console.log('pick', e)
    e.addEventListener('click', () => {
        let contentM = e.querySelector('.navmenu-option-smol-m')
        contentM.classList.toggle('open-navbar')
    });
});
