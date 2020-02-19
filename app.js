const photo = document.querySelector(".minhafoto");
const nome = document.querySelector("#nome");

const tl = new TimelineMax();

tl.fromTo(nome,3, {opacity:0}, {opacity:1});
     
