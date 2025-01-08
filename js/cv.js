window.addEventListener("load", start);
function start(){
console.log("load");
document.querySelector("#name_container").addEventListener("load", start);
document.querySelector("#name_container").classList.add("glide_ind");

document.querySelector("#stilling_container").addEventListener("load", start);
document.querySelector("#stilling_sprite").classList.add("glide_ind");
}



