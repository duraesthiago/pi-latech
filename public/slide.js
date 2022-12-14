'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navNextBottun = document.querySelector('[data-slide="nav-next-button"]')
const navPreviousBottun = document.querySelector('[data-slide="nav-previous-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="controlButton"]')
let startingPoint = 0

function onMouseDown(event){
    const slideItem = event.currentTarget
    startingPoint = event.clientX     
    slideItem.addEventListener('mousemove', onMouseMove)
    console.log("ponto de partida", startingPoint)
    //console.log('apertei o botão')
    
}

function onMouseMove (event){
    const movement = event.clientX - startingPoint
    console.log("quantidade de pixel que movimentei", movement)
    slideList.style.transform = 'translateX('+movement+'px)'
    //console.log('movimentei o botão')
}

function onMouseUp(event){
    const slideItem = event.currentTarget   
    slideItem.removeEventListener('mousemove', onMouseMove)
    
    //console.log('soltei o botão do mouse')
}

slideItems.forEach(function(slideItem, index){
    slideItem.addEventListener('dragstart', function(event){
        event.preventDefault()
    })
    slideItem.addEventListener('mousedown', onMouseDown)
    slideItem.addEventListener('mouseup', onMouseUp)
})

console.log("tudo maravilhoso")