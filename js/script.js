	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    var typed = new Typed(".auto-type", {
        strings:["Web Developer","Front End Developer","Web Designer"], 
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
    });
    var typed = new Typed(".auto-Type", {
        strings:["Web Developer","Front End Developer","Web Designer"], 
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
    });
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
