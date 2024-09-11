let navbarStickyLinks = [
    {
        "navbarHeading": "Now and for generations to come.",
        "navbarLink": "#",
    },
    {
        "navbarHeading": "Location",
        "navbarLink": "#location",
    },
    {
        "navbarHeading": "Our Partners",
        "navbarLink": "#partners",
    },
    {
        "navbarHeading": "Investors",
        "navbarLink": "#investors",
    },
    {
        "navbarHeading": "Our leadership",
        "navbarLink": "#leadership",
    },
]


let navbarStickyContainer = document.querySelector("#navbar-sticky");

let navbarStickyLinksContainer = document.createElement('div')
navbarStickyLinksContainer.classList.add('navbar-sticky')
navbarStickyContainer.append(navbarStickyLinksContainer)

navbarStickyLinks.forEach(navbarStickyItem => {
    navbarStickyLinksContainer.innerHTML += `<a href=" ${navbarStickyItem.navbarLink} "> ${navbarStickyItem.navbarHeading} </a>`
})