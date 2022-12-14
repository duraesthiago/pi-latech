'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navNextBottun = document.querySelector('[data-slide="nav-next-button"]')
const navPreviousBottun = document.querySelector('[data-slide="nav-previous-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="controlButton"]')

function onMouseDown(event){
    const slideItem = event.currentTarget    
    slideItem.addEventListener('mousemove', onMouseMove)
    console.log("pixel do mousedown", event.clientX)
    console.log('apertei o botão')
    
}

function onMouseMove (event){
    console.log('movimentei o botão')
}

function onMouseUp(event){
    const slideItem = event.currentTarget   
    slideItem.removeEventListener('mousemove', onMouseMove)
    console.log("pixel do mouseup", event.clientX)
    console.log('soltei o botão do mouse')
}

slideItems.forEach(function(slideItem, index){
    slideItem.addEventListener('dragstart', function(event){
        event.preventDefault()
    })
    slideItem.addEventListener('mousedown', onMouseDown)
    slideItem.addEventListener('mouseup', onMouseUp)
})

console.log("tudo maravilhoso")