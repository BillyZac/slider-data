// var $value = $('.slider').val()

$('.sliderOutput').text('50')

// When the slider is moved, update the displayed
$('.slider').on('input', function() {
  var $sliderValue = $(this).val()
  $('.sliderOutput').text($sliderValue)
})

// Same thing with vanilla js
var sliders = document.getElementsByClassName('slider')
sliders[0].addEventListener('input', function() {
  console.log('focused', sliders[0].value)
})
