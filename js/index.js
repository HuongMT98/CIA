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


// Swiper Library


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//                                  Scroll Hidden Navbar


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}


//                                  Navbar Mobile


let dropMenu = document.querySelector('.navbar-mobile')


function closeMenuNav() {
    dropMenu.classList.toggle('active');
}
function openMenuNav() {
    dropMenu.classList.toggle('active');
}