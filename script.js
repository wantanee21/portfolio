// แสดงปีปัจจุบัน

document.getElementById("year").innerHTML =
"© " + new Date().getFullYear() +
" Document Sharing Portfolio | จัดทำเพื่อการศึกษา";


// ปุ่มดาวน์โหลด

const button = document.querySelector("button");

button.addEventListener("click",function(){

    alert("ตัวอย่างเว็บไซต์แบ่งปันเอกสาร\n(สามารถเปลี่ยนเป็นไฟล์ PDF จริงได้)");

});


// ข้อความต้อนรับ

window.onload = function(){

    console.log("ยินดีต้อนรับสู่เว็บไซต์แบ่งปันข้อมูลเชิงเอกสาร");

};


// เอฟเฟกต์การ์ด

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="translateY(0px)";

});

});
