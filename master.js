// Initialize slider
$('.slider').val(0)


$('.sliderOutput').text($('.slider').val())

// When the slider is moved, update the displayed
$('.slider').on('input', function() {
  var $sliderValue = $(this).val()
  $('.sliderOutput').text($sliderValue)
  d3.selectAll(".bloop")
    .style("width", $sliderValue*4 + "px")
})

// Same thing with vanilla js
/*
var sliders = document.getElementsByClassName('slider')
sliders[0].addEventListener('input', function() {
  console.log('focused', sliders[0].value)
})
*/
