document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.UPPERHEAD_container');
    const navItems = document.querySelectorAll('.nav_item a'); 

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { 
            header.classList.add('scrolled');
            navItems.forEach(item => {
                item.classList.add('scrolled'); 
            });
        } else {
            header.classList.remove('scrolled');
            navItems.forEach(item => {
                item.classList.remove('scrolled');
            });
        }
    });
});

if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'index.html'; 
}
