console.log(gMeme);
console.log(gImgs);

function renderMeme() {
    if (!gMeme.length) return
    console.log(document.querySelector('.color').value);

    gMeme[0].lines[0].txt = document.querySelector('.text').value
    gMeme[0].lines[0].color = document.querySelector('.color').value
}

function renderImg(elImg, id) {
    gSelectedImg = elImg
    console.log(elImg);

    closeGallery()
    gMeme = []

    console.log(elImg);
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

    var startColor = document.querySelector('.color').value

    gMeme.push(createMeme(gCentences[id - 1], id, id - 1, startColor))
    console.log(gMeme);

    setLineTxt()
}

function showMemes() {
    document.querySelector('.memes').showModal()

}

function closeMemes() {
    document.querySelector('.memes').close()
}

function showAbout() {
    document.querySelector('.about').showModal()

}

function closeAbout() {
    document.querySelector('.about').close()
}




