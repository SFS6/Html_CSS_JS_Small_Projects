const sliderContainer=document.querySelector('.slider-container')
const sliderright=document.querySelector('.right-slider')
const sliderleft=document.querySelector('.left-slider')
const upbutton=document.querySelector('.up-button')
const downbutton=document.querySelector('.down-button')
const slidelength=sliderright.querySelectorAll('div').length

let activeSlideIndex=0

sliderleft.style.top=`-${(slidelength-1) * 100}vh`

upbutton.addEventListener('click',()=>changeSlide('up'))
downbutton.addEventListener('click',()=>changeSlide('down'))

const changeSlide=(direction)=>{
	const slideheight = sliderContainer.clientHeight
	if(direction === 'up'){ 
		activeSlideIndex++
	if(activeSlideIndex > slidelength-1){
		activeSlideIndex = 0
	}}
	else if(direction === 'down'){
		activeSlideIndex--
	if(activeSlideIndex < 0){
		activeSlideIndex = slidelength-1
	}
}
	sliderright.style.transform=`translateY(-${activeSlideIndex * slideheight}px)`
	sliderleft.style.transform=`translateY(${activeSlideIndex * slideheight}px)`
}