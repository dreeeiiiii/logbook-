document.addEventListener("DOMContentLoaded", function () {
    const leftSide = document.querySelector(".hamBar");
    const leftBar = document.querySelector(".left-side-bar");
    const closeBar = document.getElementById("x-bar");
 
  
    // Show the sidebar
    leftSide.addEventListener("click", function () {
      leftBar.style.visibility = "visible";
    });
  
    // Hide the sidebar
    closeBar.addEventListener("click", function () {
      leftBar.style.visibility = "hidden";
    });
  });

  function Navigate(button) {
    const path = button.getAttribute('data-path');
    if (path) {
      window.location.href = path;
    } else {
      console.error("Path not defined for this button.");
    }
  }

  function LogOut (){

    const userConfirmed = confirm("are you you want to log out?")

    sessionStorage.clear(); 
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    if (userConfirmed) {
      window.location.href = "../logInpage/logInPage.html"
    } else {
      console.log("User clicked Cancel");
    } 
  }
  
  
