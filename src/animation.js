function runLogoSound() {
  const logo = document.getElementById("logo");
  const audioForLogo = document.getElementById("audio-for-logo");
  logo.onmouseover = (event) => {
    // console.log([logo, audioForLogo])
    event.preventDefault()
    event.stopPropagation()
    audioForLogo.play()
  }
  logo.onmouseout = (event) => {
    // console.log([logo, audioForLogo])
    event.preventDefault()
    event.stopPropagation()
    const timer = setTimeout(() => {
      audioForLogo.pause();
      clearTimeout(timer)
    }, 1000)
  }
}
runLogoSound()