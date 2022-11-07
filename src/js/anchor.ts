function clickToTarget(anchor: string, tar: string): void {
  const anchorLink: HTMLElement = document.querySelector(anchor)
  const target: HTMLElement = document.querySelector(tar)
  anchorLink &&
    anchorLink.addEventListener('click', function (e: MouseEvent) {
      if (window?.scrollTo) {
        e.preventDefault()
        window.scrollTo({ behavior: 'smooth', top: target.offsetTop })
      }
    })
}

export default clickToTarget
