/*
 * Copyright (c) 2021 PT Telkom Indonesia Tbk
 * 
 * This software is licensed to PT Telkom Indonesia Tbk
 * All use of the material herein is restricted All rights are reserved
 * You may not use, copy, duplicate, modify, merge, publish, distribute, sublicense the Software without prior written agreement
 */
const getElementY = (element,scrollWindow)=>{
    return ((scrollWindow)?scrollWindow.scrollTop : window.scrollY) + element.getBoundingClientRect().top
}
const easing = (t)=>{
  return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}

const moveDivScroll = (element,duration,scrollWindow)=>{
  var startingY = scrollWindow.scrollTop
  var elementY = getElementY(element,scrollWindow)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = (scrollWindow.scrollHeight - elementY < scrollWindow.clientHeight) ? scrollWindow.scrollHeight - scrollWindow.clientHeight : elementY
  var diff = targetY - startingY - 200
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var start
  if (!diff) return
	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
/* yy */    /* percent = easing(percent) */

    scrollWindow.scrollTo(0, startingY + diff * percent)
    console.log('INI NGE SCROOl')
		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}


const moveWindowScroll = (element,duration)=>{
  var startingY = window.scrollY
  var elementY = getElementY(element)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  var diff = targetY - startingY - 100
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  // var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return
	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}


const scrollToElement = (elTarget, duration, elScrollingDiv)=>{
  if( elScrollingDiv){
    moveDivScroll(elTarget, duration, elScrollingDiv)
  }else{
    moveWindowScroll(elTarget, duration)
  }
}

export const smoothScroll = top => {
    window.scrollTo({
        top: top,
        behavior: 'smooth',
    })
}

export default {
  scrollToElement,
  smoothScroll
}
