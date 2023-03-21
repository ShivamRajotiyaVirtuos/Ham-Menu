function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  console.log("open nav");
  if(document.getElementById("mySidenav").style.width = "250px"){
    console.log("working...");
    document.getElementById("container").classList.toggle("change");
  }
  document.getElementById("submenu").style.width = "250px";
  
}
if(document.getElementById("container").classList=="change"){
function openNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("submenu").style.width = "0";
  document.getElementById("submenu1").style.width = "0";
  console.log("close nav");
}}
function openSubNav() {
  document.getElementById("submenu").style.display = "block";
  document.getElementById("submenu").style.width = "250px";
  console.log("submenu men");

  document.getElementById("mySidenav").style.width = "0";
}
function openSubNav1() {
  document.getElementById("submenu1").style.display = "block";
  document.getElementById("submenu1").style.width = "250px";
  console.log("submenu women");

  document.getElementById("mySidenav").style.width = "0";
}
document.addEventListener("click", function handleClickOutsideBox(event) {
  const mySidenav = document.getElementById("mySidenav");
  const submenu = document.getElementById("submenu");
  const submenu1 = document.getElementById("submenu1");

  const navbar = document.getElementById("navbar");

  if (mySidenav) {
    if (
      !navbar.contains(event.target) &&
      !mySidenav.contains(event.target) &&
      !submenu.contains(event.target) &&
      !submenu1.contains(event.target)
    ) {
      console.log("close");
      mySidenav.style.width = "0px";
      submenu.style.width = "0px";
      submenu1.style.width = "0px";
    }
  }
});
