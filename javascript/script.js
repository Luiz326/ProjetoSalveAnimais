let data = new Date();
let ano = document.getElementById("ano").textContent ="Copyright@ " + data.getFullYear();


    window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
 })
    