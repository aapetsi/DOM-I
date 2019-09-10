const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// give nav background color
document.querySelector("header").style.backgroundColor = "pink";

// give nav green text
document.querySelector("nav").style.color = "green";

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update nav-links
let navLinks = document.querySelectorAll("a");
let navText = Object.values(siteContent.nav).slice(0, 6);
navLinks.forEach((item, index) => {
  item.textContent = navText[index];
  item.style.color = "green";
  item.classList.add("green");
});

// header h1 tag
let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

// button tag
let button = document.querySelector("button");
button.innerText = siteContent.cta.button;

// header image
let headerImage = document.getElementById("cta-img");
headerImage.src = siteContent.cta["img-src"];

// features header h4
let featuresH4 = document.querySelector(".text-content h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

// features paragraph
let featuresParagraph = document.querySelector(".text-content p");
featuresParagraph.textContent = siteContent["main-content"]["features-content"];

// about header h4
let aboutH4 = document.querySelectorAll(".text-content h4")[1];
aboutH4.textContent = siteContent["main-content"]["about-h4"];

// about paragraph
let aboutParagraph = document.querySelectorAll(".text-content p")[1];
aboutParagraph.textContent = siteContent["main-content"]["about-content"];

// middle image code snippet
let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

// services section
let servicesH4 = document.querySelector(".bottom-content .text-content h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

// services paragraph
let servicesParagraph = document.querySelector(
  ".bottom-content .text-content p"
);
servicesParagraph.textContent = siteContent["main-content"]["services-content"];

// product header
let productH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[1];
productH4.textContent = siteContent["main-content"]["product-h4"];

// product paragraph
let productParagraph = document.querySelectorAll(
  ".bottom-content .text-content p"
)[1];
productParagraph.textContent = siteContent["main-content"]["product-content"];

// vision header
let visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2];
visionH4.textContent = siteContent["main-content"]["vision-h4"];

// vision paragraph
let visionParagraph = document.querySelectorAll(
  ".bottom-content .text-content p"
)[2];
visionParagraph.textContent = siteContent["main-content"]["vision-content"];

// contact section
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

let contactParagraph1 = document.querySelector(".contact p");
contactParagraph1.textContent = siteContent.contact.address;

let contactParagraph2 = document.querySelectorAll(".contact p")[1];
contactParagraph2.textContent = siteContent.contact.phone;

let contactParagraph3 = document.querySelectorAll(".contact p")[2];
contactParagraph3.textContent = siteContent.contact.email;

// console.log((contactParagraph3.style.color = "green"));

// select nav element
let nav = document.querySelector("nav");
nav.classList.add("green");

// add new child to nav links
let newNavLink = document.createElement("a");
newNavLink.classList.add("green");
let newPTag = document.createElement("p");
let pText = document.createTextNode("Test p");
let newNavLinkText = document.createTextNode("Test");
newNavLink.appendChild(newNavLinkText);
newPTag.appendChild(pText);
// nav.appendChild(newNavLink);
nav.prepend(newNavLink);
nav.append(pText);
