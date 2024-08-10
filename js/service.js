'use strict'

const STORAGE_KEY = 'meme'
var gMeme = []

var gImgs = []
var gSelectedImg 
var gEv 


const PICTURE_NUM = 18

var gKeywordSearchCountMap = {'all':20 , 'funny': 20, 'animal': 20, 'bad': 20 , 'awkward':20,'happy':20,'sad':20 }

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


function getMeme() {

    return gMeme
}

function createMeme(meme, imgId, lineIdx, clr) {
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
            keywords: ['all']
        }
    ]
}

function _createImgs() {
    for (let i = 1; i < PICTURE_NUM + 1; i++) {
        gImgs.push(createImg(i))
    }
    putKeywords()
    _saveToStorage()
}

function putKeywords() {
    for (let i = 0; i < PICTURE_NUM + 1; i++) {
        if (i === 4 || i === 6 || i === 8 || i === 9 || i === 15) {
            gImgs[i][0].keywords.push('funny')
        }
        if (i === 1 || i === 3 || i === 2) {
            gImgs[i][0].keywords.push('animal')
        }
        if (i === 10 || i === 13 || i === 14 || i === 16) {
            gImgs[i][0].keywords.push('bad')
        }
        if (i === 0 || i === 11) {
            gImgs[i][0].keywords.push('awkward')
        }
        if (i === 5 || i === 7 || i === 8 || i === 9 || i === 12 || i === 15 || i === 17) {
            gImgs[i][0].keywords.push('happy')
        }
        if (i === 0 || i === 10 || i === 13 || i === 14 || i === 16) {
            gImgs[i][0].keywords.push('sad')
        }
    }
}

function growSize(className){
    console.log(className);
    gKeywordSearchCountMap[`${className}`]++
    var fontSize = gKeywordSearchCountMap[`${className}`]
    console.log(fontSize);
    
    document.querySelector(`.${className}`).style.fontSize = `${fontSize++}` + `px`
    
}

function filterImgs(filterBy) {
    var imgs = gImgs
    // console.log(imgs.keywords);

    imgs = imgs.filter(img => img[0].keywords.includes(filterBy))
    console.log(imgs);

    return imgs
}

function setLineTxt() {
    document.querySelector('.text').value = gMeme[0].lines[0].txt
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

function _saveToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}