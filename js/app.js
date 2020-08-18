document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const sectionsH2 = document.querySelectorAll("section h2");
    const navBarList = document.querySelector(".navBarList");
    // build the nav
    for (let s = 1; s <= sections.length; s++) {
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        const navSec = document.createTextNode(`section ${s}`);
        navLink.appendChild(navSec);
        navItem.appendChild(navLink);
        navBarList.appendChild(navItem);
    }
    // Scroll to section using scrollIntoView method
    const navLinks = document.querySelectorAll("li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            switch (link.textContent) {
                case "section 1":
                    sections[0].scrollIntoView({ block: "start", behavior: "smooth", inline: "nearest" });
                    break;
                case "section 2":
                    sections[1].scrollIntoView({ block: "start", behavior: "smooth", inline: "nearest" });
                    break;
                case "section 3":
                    sections[2].scrollIntoView({ block: "start", behavior: "smooth", inline: "nearest" });
                    break;
                case "section 4":
                    sections[3].scrollIntoView({ block: "start", behavior: "smooth", inline: "nearest" });
                    break;
                default:
                    console.log("can't reach section");
            }
        })
    });
    // Set sections as active
    window.addEventListener("scroll", () => {
        const positionSec1 = sections[0].getBoundingClientRect()["y"];
        const positionSec2 = sections[1].getBoundingClientRect()["y"];
        const positionSec3 = sections[2].getBoundingClientRect()["y"];
        const positionSec4 = sections[3].getBoundingClientRect()["y"];
        const positionSec = [positionSec1, positionSec2, positionSec3, positionSec4];
        positionSec.forEach(element => {
            if (element >= -500 && element <= 100) {
                const index = positionSec.indexOf(element);
                sections[index].setAttribute("class", "active");
                navLinks[index].setAttribute("class", "activeNav");
            } else if (!(element > -500 && element < 250)) {
                const index = positionSec.indexOf(element);
                sections[index].removeAttribute("class", "active");
                navLinks[index].removeAttribute("class", "activeNav");
            }
        });
    });
    // Make sections collapsible
    const para = document.querySelectorAll("section div div");
    const para2 = document.querySelector("#para2");
    const para3 = document.querySelector("#para3");
    const para4 = document.querySelector("#para4");
    collapsibleSec = (p) => {
        if (p.style.display == "none") {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    }
    for (let r = 0; r < sectionsH2.length; r++) {
        sectionsH2[r].setAttribute("onclick", `collapsibleSec(para${r + 1})`);
    }
});