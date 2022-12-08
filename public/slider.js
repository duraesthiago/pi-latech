'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navNextBottun = document.querySelector('[data-slide="nave-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItems = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="control-button"]')

const state = {
    startingPoint: 0,
    savedPosition: 0,
    currentPoint: 0,
    movement: 0,
    currentSlideIndex: 0    
}

function translateSlide({position}){
    slideList.style.transform = `translateX(${(position)}px)`
    state.savedPosition = position
}

function setVisibleSlide({index}){
    const slideItem = slideItems[index]
    const slideWidth = slideItem.clientWidth
    const position = index * slideWidth
    translateSlide({position: -position})
}

function onMouseDown(event,index) {   
    const slideItem = event.currentTarget
    state.startingPoint= event.clientX
    state.currentPoint = state.startingPoint - state.savedPosition
    state.currentSlideIndex = index
    //console.log(currentSlideIndex)
    slideItem.addEventListener('mousemove', onMouseMove)           
}

function onMouseMove(event) {
    state.movement = event.clientX - state.startingPoint
    const position = event.clientX - state.currentPoint
    //console.log("pix do mousemove", event.clientX, "-", "ponto de partida", startingPoint, " = " , movement)
    //console.log("pix do mousemove", event.clientX, "-", "ponto atual", currentPoint, " = " , position)
    translateSlide({position:position})
    
}

function onMouseUp (event){
    const slideItem = event.currentTarget
    const slideWidth = slideItem.clientWidth
    //console.log(slideWidth)
    if (state.movement <-150){
        setVisibleSlide({index: state.currentSlideIndex + 1})        
    } else if(state.movement > 150) {
        setVisibleSlide({index: state.currentSlideIndex - 1})                
    } else {
        setVisibleSlide({index: state.currentSlideIndex})    
    }
    slideItem.removeEventListener('mousemove', onMouseMove)          
}

slideItems.forEach(function(slideItem, index){
    slideItem.addEventListener('dragstart', function(event){ 
        event.preventDefault()
    })
    slideItem.addEventListener('mousedown', function (event){
        onMouseDown(event, index)
    })

    slideItem.addEventListener('mouseup', onMouseUp)  
})
