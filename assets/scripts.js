const images = [
  'assets/images/malioboro.jpg',
  'assets/images/prambanan.jpg',
  'assets/images/tugu.jpg',
  'assets/images/tugu-kecil.jpg',
]

let key = 0

function setImageSlider() {
  const imageSliderElement = document.getElementById('img-slide')
  imageSliderElement.setAttribute('src', images[key])
}

setImageSlider()

const navigatorButtons = document.getElementsByClassName('carousel-control-prev, .carousel-control-next')
for (const navBtn of navigatorButtons) {
  navBtn.addEventListener('click', () => {
    if (navBtn.classList.contains('carousel-control-next')) {
      key++
      if (key >= images.length) {
        key = 0
      }
    } else {
      key--
      if (key < 0) {
        key = images.length - 1
      }
    }
    setImageSlider()
  })
}



