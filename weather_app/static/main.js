

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

// --======================================---//
// -------------- GET SEARCHED CITY ------------
var getSearchedCity = document.getElementById('city-name').innerHTML;

// Check if search input value is there
if(getSearchedCity.length > 1) {
    // populate search input with searched city and remove last comma by slicing
    document.getElementById('country').value = getSearchedCity.slice(0 , (getSearchedCity.length - 1));
}else {
    // if if search input value is not there, populate it with the placeholder below.
    document.getElementById('country').setAttribute("placeholder", "Type a country or a city");
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
