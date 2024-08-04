console.log(gMeme);
console.log(gImgs);

function renderMeme(id) {
    var idx = id - 1
    console.log(idx);
    
    var meme = gCentences[idx]
    console.log(meme);

    setLineTxt(meme)
}

function renderImg(elImg, id) {
    gMeme = []
    clearText()
    
    console.log(elImg);
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

    gMeme.push(createMeme(gCentences[id-1], id, id - 1))
    console.log(gMeme);

    renderMeme(id)
}