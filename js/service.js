'use strict'

const STORAGE_KEY = 'meme'

var gMeme = []

var gImgs = []

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gCentences = [
    "I’m not arguing, I’m just explaining why I’m right",
    "I have a job, and I’m not afraid to use it",
    "I always arrive late at the office, but I make up for it by leaving early",
    "I’m not bossy, I just know what you should be doing",
    "I have a job to maintain my lavish lifestyle",
    "The only time success comes before work is in the dictionary",
    "I’m not lazy, I’m just on energy-saving mode",
    "I’m not a morning person, I’m a coffee person",
    "I work well under pressure, provided that the pressure is not too intense",
    "I don’t always love my job, but I love having money",
    "I’m not arguing, I’m just explaining why I’m right",
    "I have a job, and I’m not afraid to use it",
    "I always arrive late at the office, but I make up for it by leaving early",
    "I’m not bossy, I just know what you should be doing",
    "I have a job to maintain my lavish lifestyle",
    "The only time success comes before work is in the dictionary",
    "I’m not lazy, I’m just on energy-saving mode",
    "I’m not a morning person, I’m a coffee person"
]




console.log(gMeme);



function getMeme() {

    return gMeme
}

function createMeme(meme, imgId, lineIdx , clr) {
    return {
        selectedImgId: imgId,
        selectedLineIdx: lineIdx,
        lines: [
            {
                txt: meme,
                size: 20,
                color: `${clr}`
            }
        ]
    }
}

function createImg(ID) {
    return [
        {
            id: ID,
            url: `img/${ID}.jpg`,
            keywords: [
                'funny',
                'cat'
            ]
        }
    ]
}

function _createImgs() {
    for (let i = 1; i < 19; i++) {
        gImgs.push(createImg(i))
    }
    // _saveCarsToStorage()
}

function setLineTxt() {
    document.querySelector('.text').value = gMeme[0].lines[0].txt
    
    // renderMeme()
}
function clearText(){
    document.querySelector('.text').value = ''
}

function onImgInput(ev) {

    loadImageFromInput(ev, renderImg)
}


function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    reader.onload = function (event) {
        let elImg = new Image()
        elImg.src = event.target.result
        elImg.onload = () => onImageReady(elImg)
    }
    reader.readAsDataURL(ev.target.files[0])
}




function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}

function _saveCarsToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}