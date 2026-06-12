// =========================
// Floating AY Background
// =========================

const bubbles = document.querySelector(".bubbles");

for (let i = 0; i < 25; i++) {

let bubble = document.createElement("div");

bubble.classList.add("ayBubble");

bubble.innerHTML = "AY";

bubble.style.left = Math.random() * 100 + "%";

bubble.style.animationDuration =
(10 + Math.random() * 15) + "s";

bubble.style.fontSize =
(30 + Math.random() * 70) + "px";

bubbles.appendChild(bubble);

}

// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

// =========================
// Dark Mode
// =========================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");
themeBtn.innerHTML = "☀️";

}

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");
themeBtn.innerHTML = "☀️";

}else{

localStorage.setItem("theme","light");
themeBtn.innerHTML = "🌙";

}

});

// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

cards.forEach(card=>{
observer.observe(card);
});

// =========================
// Language Switch
// =========================

const translations = {

ar: {

home:"الرئيسية",
services:"الخدمات",
portfolio:"أعمالنا",
contact:"تواصل",

heroTitle:"AY ONE",

heroDesc:
"نصنع مواقع احترافية وحملات إعلانية تساعد نشاطك التجاري على النمو وتحقيق نتائج حقيقية.",

start:"ابدأ الآن"

},

en: {

home:"Home",
services:"Services",
portfolio:"Portfolio",
contact:"Contact",

heroTitle:"AY ONE",

heroDesc:
"We create professional websites and advertising campaigns that help your business grow.",

start:"Get Started"

}

};

let currentLang = "ar";

const langBtn = document.getElementById("langBtn");

function translatePage(){

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key = el.dataset.i18n;

if(translations[currentLang][key]){

el.textContent =
translations[currentLang][key];

}

});

const heroTitle =
document.querySelector(".hero h1");

const heroDesc =
document.querySelector(".hero p");

const startBtn =
document.querySelector(".main-btn");

heroTitle.textContent =
translations[currentLang].heroTitle;

heroDesc.textContent =
translations[currentLang].heroDesc;

startBtn.textContent =
translations[currentLang].start;

langBtn.textContent =
currentLang === "ar" ? "EN" : "AR";

document.documentElement.lang =
currentLang;

document.documentElement.dir =
currentLang === "ar" ? "rtl" : "ltr";

}

langBtn.addEventListener("click",()=>{

currentLang =
currentLang === "ar" ? "en" : "ar";

translatePage();

});

translatePage();

// =========================
// Stats Counter Animation
// =========================

const stats = document.querySelectorAll(".stat h2");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const stat = entry.target;

const text = stat.innerText;

const target =
parseInt(text.replace(/\D/g,""));

if(!target) return;

let count = 0;

const speed = target / 60;

const update = ()=>{

count += speed;

if(count < target){

stat.innerText =
Math.floor(count) + "+";

requestAnimationFrame(update);

}else{

stat.innerText = text;

}

};

update();

counterObserver.unobserve(stat);

}

});

});

stats.forEach(stat=>{
counterObserver.observe(stat);
});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target =
document.querySelector(
link.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

navMenu.classList.remove("active");

}

});

});
