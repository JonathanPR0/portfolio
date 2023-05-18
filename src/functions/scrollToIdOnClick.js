function scrollToIdOnClick(event) {
  event.preventDefault
  const element = event.target
  const id = element.getAttribute('href')
  const to = document.getElementById(id).offsetTop

  window.scrollTo({
    top: to - 80,
    behavior: "smooth"
  })
}