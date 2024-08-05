console.log(gMeme);
console.log(gImgs);

function renderMeme() {

    gMeme[0].lines[0].txt =  document.querySelector('.text').value
    
    // var meme = gCentences[idx]
    // console.log(meme);

    // setLineTxt()
}

function renderImg(elImg, id) {
    gMeme = []
    clearText()
    
    console.log(elImg);
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

    gMeme.push(createMeme(gCentences[id-1], id, id - 1))
    console.log(gMeme);

    setLineTxt()
}