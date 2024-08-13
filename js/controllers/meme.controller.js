'use strict'

let gElCanvas
let gCtx

function init() {
    renderCanvas()
    resizeCanvas()
    _createImgs()
    renderGallery('all')
    showGallery()
}

function renderCanvas(){
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


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


function onDraw(ev) {
    if (!gMeme.length) {
        alert('Hi! new here ?choose img!')
        return
    }
    const text = document.getElementById('text-input').value;

    const { offsetX, offsetY } = ev
    gEv = { offsetX, offsetY }
    updateCanvasText()
}

function updateCanvasText() {
    if (!gMeme.length) return

    const text = document.getElementById('text-input').value;
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.drawImage(gSelectedImg, 0, 0, gElCanvas.width, gElCanvas.height)

    const { offsetX, offsetY } = gEv
    drawText(text, offsetX, offsetY)
}

function drawText(text, x, y) {
    console.log(x, y);

    var size = gMeme[0].lines[0].size
    console.log('size', size);
    var color = gMeme[0].lines[0].color
    console.log('color', color);

    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${color}`
    gCtx.fillStyle = 'white'
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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