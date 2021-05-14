

/* ====== MENU SHOW ====== */

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* ====== MENU DISSAPEAR ====== */
const closeMenu = (closeToggleId, closeNavId) =>{
    const closeToggle = document.getElementById(closeToggleId),
        closeNav = document.getElementById(closeNavId)
    if(closeToggle && closeNav){
        closeToggle.addEventListener('click', ()=>{
            closeNav.classList.remove('show')
        })
    }
}

closeMenu('close-nav-toggle', 'nav-menu')

/* ====== REMOVE MENU MOBILE ====== */

    const navLink = document.querySelectorAll('.nav__item')
    function linkAction(){
        // Active link
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')

        // Remove menu mobile
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

const longitude = document.getElementById("longitude").innerHTML;

const latitude = document.getElementById("latitude").innerHTML;

// --========================================

// -------------- GET SEARCHED QUERY ------------
var searchedQuery;
function getSearchedQuery(inputID) {
    searchedQuery = document.getElementById(inputID).value;
    document.getElementById(inputID).setAttribute('value', searchedQuery);
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const place = { lat: parseInt(latitude), lng: parseInt(longitude) };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: place,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: place,
      map: map,
    });
}
