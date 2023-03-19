const navLinks = document.querySelectorAll("[data-navLink]");

navLinks.forEach((Link) => {
    if (Link.getAttribute("href") === window.location.
    pathname)
    {
        Link.setAttribute("aria-current", "page");
    }
})