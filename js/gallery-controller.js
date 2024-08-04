function renderGallery() {
    const strHTMLs = gImgs.map(([{ url , id }]) => `
    <img onclick="renderImg(this ,${id})" src="/NeriaOkabi -Meme Generator/${url}"  alt="">`)
document.querySelector('.main-container').innerHTML = strHTMLs.join('')
}