function openNav() {
  if (document.getElementById("container").classList == "container") {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("open nav");

    document.getElementById("container").classList.toggle("change");
    document.getElementById("submenuMen").style.width = "250px";
  } else if (
    document.getElementById("container").classList == "container change"
  ) {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("submenuMen").style.width = "0";
    document.getElementById("submenuWomen").style.width = "0";
    console.log("close nav");
    document.getElementById("container").classList.toggle("change");
    document.getElementById("container").classList = "container";
  }
}

function backtoNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("submenuMen").style.width = "0";
  document.getElementById("submenuWomen").style.width = "0";
  console.log("close nav");
}
function openSubnavMen() {
  document.getElementById("submenuMen").style.display = "block";
  document.getElementById("submenuMen").style.width = "250px";

  console.log("submenu men");

  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("container").classList = "container change";
}
function openSubnavWomen() {
  document.getElementById("submenuWomen").style.display = "block";
  document.getElementById("submenuWomen").style.width = "250px";

  console.log("submenuwomen");

  document.getElementById("mySidenav").style.width = "0";
}
document.addEventListener("click", function handleClickOutsideBox(event) {
  const mySidenav = document.getElementById("mySidenav");
  const submenuMen = document.getElementById("submenuMen");
  const submenuWomen = document.getElementById("submenuWomen");

  const navbar = document.getElementById("navbar");

  if (mySidenav) {
    if (
      !navbar.contains(event.target) &&
      !mySidenav.contains(event.target) &&
      !submenuMen.contains(event.target) &&
      !submenuWomen.contains(event.target)
    ) {
      console.log("close");
      mySidenav.style.width = "0px";
      submenuMen.style.width = "0px";
      submenuWomen.style.width = "0px";
      document.getElementById("container").classList = "container";
    }
  }
});
