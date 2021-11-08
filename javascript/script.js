let data = new Date();
let ano = document.getElementById("ano");

function inicializa(){
    setInterval(()=>{
        ano.textContent ="Copyright@ " + data.getFullYear();
    },1000)
}
inicializa();

    window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
 })
    