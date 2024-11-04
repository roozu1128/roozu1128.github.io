// HEADER YELLOW TO WHITE
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
// LOGOUT AND DATA STORE
if (!localStorage.getItem('loggedIn')) {
    window.location.href = '../index.html'; 
}

function logout() {
    alert("Logged out")
    localStorage.removeItem("loggedIn");
    window.location.href = "../index.html";
}

// LINKS
function classroom() {
    window.location.href = "https://classroom.google.com/u/0/h";
}
function Buildings() {
    window.location.href = "../building/buildings.html";
}
// MOUSE/CLICK EVENTS
const menuButton = document.getElementById("menudropdown");
const dropdown = document.querySelector(".droppeddown");

menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active");
});


document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});

window.addEventListener("scroll", function () {
    dropdown.classList.remove("active");
});

// ANTI SCROLL WHEN CLICKING SOMETHING
document.querySelectorAll('.nav_item a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
    });
});
