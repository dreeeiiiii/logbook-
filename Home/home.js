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
  
