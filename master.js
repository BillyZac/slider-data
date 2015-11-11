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

// Enter and leave
var p = d3.select("body").selectAll("p")
  // Put data in existing p's
  .data([4, 8, 15, 16, 23, 42])
  .text(function(d) { return d})

// Add extra p's if we have more data than p's
p.enter().append("p")
  .text(function(d) { return "I’m number " + d + "!"; });

// Exit -- why is this needed?
p.exit().remove()
