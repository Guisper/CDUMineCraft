export function clickToTarget(anchor: string, tar: string): void {
  const anchorLink: HTMLElement = document.querySelector(anchor)
  const target: HTMLElement = document.querySelector(tar)
  anchorLink &&
    anchorLink.addEventListener('click', (e: MouseEvent) => {
      if (window?.scrollTo) {
        e.preventDefault()
        window.scrollTo({ behavior: 'smooth', top: target.offsetTop })
      }
    })
}

export function clickToSlide(anchor: string, tar: any): void {
  const anchorLink: HTMLElement = document.querySelector(anchor)
  anchorLink &&
    anchorLink.addEventListener('click', () => {
      tar?.slideNext()
    })
}
