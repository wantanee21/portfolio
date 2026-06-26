// ================================
// แสดงวันที่ปัจจุบัน
// ================================

const today = document.getElementById("today");

const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
};

today.textContent = new Date().toLocaleDateString("th-TH", options);


// ================================
// ข้อความต้อนรับ
// ================================

window.addEventListener("load", () => {

    console.log("ยินดีต้อนรับสู่ Tech News");

});


// ================================
// ปุ่มอ่านเพิ่มเติม
// ================================

const btn = document.querySelector("button");

btn.addEventListener("click", () => {

    alert("เว็บไซต์นี้เป็นตัวอย่างสำหรับแบ่งปันข่าวสารเทคโนโลยี 📱");

});


// ================================
// เอฟเฟกต์การ์ดข่าว
// ================================

const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

});

card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

});


// ================================
// เปลี่ยนสีหัวข้อเมื่อคลิก
// ================================

const title = document.querySelector(".hero h1");

title.addEventListener("click", () => {

    title.style.color = "#ff4fa2";

});


// ================================
// แสดงเวลาปัจจุบัน
// ================================

const footer = document.querySelector("footer");

const clock = document.createElement("p");

footer.appendChild(clock);

function updateClock() {

    const now = new Date();

    clock.innerHTML =
        "🕒 เวลา " + now.toLocaleTimeString("th-TH");

}

updateClock();

setInterval(updateClock,1000);
