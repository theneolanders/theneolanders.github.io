const nav_ring = document.querySelector(".navbar");
const root_style = document.querySelector(":root");
nav_ring.addEventListener("click", ()=>{
  console.log("insane? insane? insane? insane? insane? insane? insane? insane? insane? insane? insane? insane? insane? insane? insane? ")
  root_style.style.setProperty("--ring-from-pos", "-4096px");
  root_style.style.setProperty("--ring-to-pos", "0px");
});