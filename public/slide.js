'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navNextBottun = document.querySelector('[data-slide="nav-next-button"]')
const navPreviousBottun = document.querySelector('[data-slide="nav-previous-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="controlButton"]')
const state = { 
    startingPoint: 0,
    savedPosition: 0,
    currentPoint: 0,
    movement: 0,
    currentSlideIndex: 0
}

function onMouseDown(event, index){
    const slideItem = event.currentTarget
    state.startingPoint = event.clientX
    state.currentPoint = state.startingPoint - state.savedPosition
    state.currentSlideIndex = index
    console.log(state.currentSlideIndex)     
    slideItem.addEventListener('mousemove', onMouseMove)
    //console.log("ponto de partida", startingPoint)
   
    
}

function onMouseMove (event){
    state.movement = event.clientX - state.startingPoint
    const position = event.clientX - state.currentPoint
    //console.log("quantidade de pixel que movimentei", movement)
    slideList.style.transform = 'translateX('+position+'px)'
    state.savedPosition = position
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