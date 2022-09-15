const images_container = document.querySelector(".images");
const images = document.querySelectorAll("img");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");


class Carousel {
    constructor(images, stopButton) {
        this.id = null
        this.images = images
        this.cleared = true
        this.stopButton = stopButton;
    }

    clear() {
        this.cleared = true
        this.stopButton.disabled = true
    }

    unClear() {
        this.stopButton.disabled = false
        this.cleared = false
    }

    reset_display_settings() {
        this.images.forEach((e) => {
            e.style.display = ""
        })
    }

    start() {
        this.reset_display_settings()
        this.unClear()
        let index = 0;
        this.id = setInterval(() => {
            if (index > 2) {
                this.reset_display_settings()
                index = 0
            } else {
                this.images[index].style.display = "none";
                index += 1
            }
        }, 1500)
    }

    stop() {
        if (!this.cleared) {
            clearInterval(this.id)
            this.clear()
        } else {

        }
    }

    reset() {
        this.stop()
        this.start()
    }
}

const carousel = new Carousel(images, stop);
carousel.start()

stop.onclick = e => carousel.stop(e);
reset.onclick = () => carousel.start();