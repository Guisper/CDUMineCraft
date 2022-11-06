function clickToTarget(anchor, tar) {
  const anchorLink = document.querySelector(anchor)
  const target = document.querySelector(tar)
  anchorLink && anchorLink.addEventListener('click', function (e) {
    if (window.scrollTo) {
      e.preventDefault()
      window.scrollTo({ behavior: 'smooth', top: target.offsetTop })
    }
  })
}

export default clickToTarget
