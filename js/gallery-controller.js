function renderGallery() {
    const strHTMLs = gImgs.map(([{ url , id }]) => `<main class="img-container">
    <img onclick="renderImg(this ,${id})" src="/NeriaOkabi -Meme Generator/${url}"  alt=""></main> `)
document.querySelector('.main-container').innerHTML = strHTMLs.join('')
}