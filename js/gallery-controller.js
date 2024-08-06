function renderGallery() {
    const strHTMLs = gImgs.map(([{ url, id }]) => `
    <img onclick="renderImg(this ,${id})" src="/NeriaOkabi -Meme Generator/${url}"  alt="">`)
    document.querySelector('.main-container .img-container').innerHTML = strHTMLs.join('')
}

function showGallery() {
    console.log('showGallery');
    document.querySelector('.gallery').showModal()

}

function closeGallery() {
    console.log('showGallery');
    document.querySelector('.gallery').close()
}
