let angledownButton = document.querySelector(".faAngle")
let show = document.querySelector(".show")

function faAngleChange() {
    if(angledownButton.classList.contains("fa-angle-down")){
    angledownButton.classList.remove("fa-angle-down")
    angledownButton.classList.add("fa-angle-up")
    show.classList.remove("d-none")
    }
    else{
        angledownButton.classList.remove("fa-angle-up")
        angledownButton.classList.add("fa-angle-down")
        show.classList.add("d-none")
    }
}