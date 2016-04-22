$(document).ready(function(){

$('form').on('submit', function(event){
event.preventDefault();
var form = $(this);
var date = form.serialize();

$.ajax({
type: 'POST', url: '/date', data: date
}).done(function(dates) {
  console.log(dates);

dates.map(function (mem) {
  $('div').append("<p>" + mem + "</p>");
})


  form.trigger('reset');
})

});

});
