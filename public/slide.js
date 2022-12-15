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

function translateSlide ({ position }){
    slideList.style.transform = `translateX(${position}px)`
    state.savedPosition = position
}
function getCenterPosition({ index }){
    const slideItem = slideItems[index]
    const slideWidth = slideItem.clientWidth
    const windowsWidth = document.body.clientWidth
    const margin = (windowsWidth - slideWidth) / 2
    const position = margin - (index * slideWidth)
    return position

}

function setVisibleSlide ({ index }){   
    const position = getCenterPosition({ index: index })
    state.currentSlideIndex = index
    translateSlide({ position: position })
}

function nextSlide(){
    setVisibleSlide({index: state.currentSlideIndex + 1})
}

function previousSlide (){
    setVisibleSlide({index: state.currentSlideIndex - 1}) 
}

function createControlButtons(){
    slideItems.forEach(function(){
        const controlButton = document.createElement('button')
        controlButton.classList.add('slide-control-button')
        controlButton.classList.add('fa-solid')
        controlButton.classList.add ('fa-circle')       
        controlButton.dataset.slide = 'control-button'      
        controlsWrapper.append(controlButton)
    })    
}

function onMouseDown(event, index){
    const slideItem = event.currentTarget
    state.startingPoint = event.clientX
    state.currentPoint = state.startingPoint - state.savedPosition
    state.currentSlideIndex = index
    console.log(state.currentSlideIndex)     
    slideItem.addEventListener('mousemove', onMouseMove)      
}

function onMouseMove (event){
    state.movement = event.clientX - state.startingPoint
    const position = event.clientX - state.currentPoint
    translateSlide({ position: position})
    }

function onMouseUp(event){
    const slideItem = event.currentTarget     
    const slideWidth = slideItem.clientWidth
    console.log(slideWidth)
    if(state.movement < -150){
        nextSlide()       
    } else if(state.movement > 150){
        previousSlide()       
    }else{
        setVisibleSlide({index: state.currentSlideIndex})        
    }     
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

navNextBottun.addEventListener('click', nextSlide)
navPreviousBottun.addEventListener('click', previousSlide)

createControlButtons()
setVisibleSlide({ index: 1 })


