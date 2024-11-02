document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.UPPERHEAD_container');
    const navItems = document.querySelectorAll('.nav_item a'); // Select all menu links

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { // Change this number based on when you want the effect to trigger
            header.classList.add('scrolled');
            navItems.forEach(item => {
                item.classList.add('scrolled'); // Add the class to each nav item
            });
        } else {
            header.classList.remove('scrolled');
            navItems.forEach(item => {
                item.classList.remove('scrolled'); // Remove the class from each nav item
            });
        }
    });
});
