const bubbles=document.querySelector(".bubbles");

for(let i=0;i<25;i++){

let bubble=document.createElement("div");

bubble.classList.add("ayBubble");

bubble.innerHTML="AY";

bubble.style.left=Math.random()*100+"%";

bubble.style.animationDuration=
(10+Math.random()*15)+"s";

bubble.style.fontSize=
(30+Math.random()*70)+"px";

bubbles.appendChild(bubble);

}


let lang=false;

langBtn.onclick=()=>{

lang=!lang;

if(lang){

document.querySelector(".hero h1")
.innerText=
"Welcome To AY One";

document.querySelector(".hero p")
.innerText=
"Professional Digital Services";

langBtn.innerText="AR";

}

else{

document.querySelector(".hero h1")
.innerText=
"مرحباً بك في AY One";

document.querySelector(".hero p")
.innerText=
"خدمات احترافية في الدعاية والإعلان وإنشاء المواقع";

langBtn.innerText="EN";

}
const translations = {
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    portfolio: "أعمالنا",
    prices: "الأسعار",
    contact: "تواصل",
    welcome: "مرحباً بك في AY One",
    desc: "خدمات احترافية في الدعاية والإعلان وإنشاء المواقع",
    start: "ابدأ الآن"
  },

  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    prices: "Prices",
    contact: "Contact",
    welcome: "Welcome to AY One",
    desc: "Professional advertising and website creation services",
    start: "Get Started"
  }
};

let lang = "ar";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.getElementById("langBtn").textContent =
    lang === "ar" ? "EN" : "AR";
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  translatePage();
});

translatePage(); 
