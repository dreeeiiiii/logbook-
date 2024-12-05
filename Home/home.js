function leftsidebar(){
    const leftSide = document.querySelector(".hamBar");
    const left = document.querySelector(".left-side-bar");

    leftSide.addEventListener('click', function(){
        left.style.visibility = "visible";
    });
}