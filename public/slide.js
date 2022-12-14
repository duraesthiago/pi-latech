'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navNextBottun = document.querySelector('[data-slide="nav-next-button"]')
const navPreviousBottun = document.querySelector('[data-slide="nav-previous-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="controlButton"]')
let startingPoint = 0
let savedPosition = 0
let currentPoint = 0
let movement = 0
let currentSlideIndex = 0

function onMouseDown(event, index){
    const slideItem = event.currentTarget
    startingPoint = event.clientX
    currentPoint = startingPoint - savedPosition
    currentSlideIndex = index
    console.log(currentSlideIndex)     
    slideItem.addEventListener('mousemove', onMouseMove)
    //console.log("ponto de partida", startingPoint)
   
    
}

function onMouseMove (event){
    movement = event.clientX - startingPoint
    const position = event.clientX - currentPoint
    //console.log("quantidade de pixel que movimentei", movement)
    slideList.style.transform = 'translateX('+position+'px)'
    savedPosition = position
    }

function onMouseUp(event){
    const slideItem = event.currentTarget   
    slideItem.removeEventListener('mousemove', onMouseMove)    
    }

slideItems.forEach(function(slideItem, index){
    slideItem.addEventListener('dragstart', function(event){
        event.preventDefault()
    })
    slideItem.addEventListener('mousedown', function(event){
        onMouseDown(event, index)
    })
    slideItem.addEventListener('mouseup', onMouseUp)
})

console.log("tudo maravilhoso")