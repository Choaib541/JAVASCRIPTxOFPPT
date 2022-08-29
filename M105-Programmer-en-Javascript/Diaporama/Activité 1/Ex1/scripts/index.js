const images = document.querySelectorAll("img");
const images_container = document.querySelector(".images-container")
const buttons = document.querySelectorAll("button")
let counter = 0

function translateX(value){  
    images_container.style.cssText = "transform:translateX(-"+value+"px)";
}


buttons[0].onclick = function() {
    if (counter !== images.length - 1)  {
        counter += 1  
        translateX(694 * counter)    
        buttons[1].removeAttribute("disabled")
        if (counter === 3) {
            this.setAttribute("disabled","true")
        }
        if (counter === 0) {
            buttons[1].setAttribute("disabled","true")
        }
    } 


    console.log(counter)
}

buttons[1].onclick = function() {
    if (counter !== 0) {
        buttons[0].removeAttribute("disabled")
        counter -= 1  
        translateX(694 * counter)    
        if (counter === 0) {
            this.setAttribute("disabled","true")
        }
        if (counter === 3) {
            buttons[0].setAttribute("disabled","true")
        }
    } 
    console.log(counter)

}