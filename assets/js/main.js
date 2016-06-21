$(function() {
  $('.animate-in-1').removeClass('animate-in-1 animate-in');
  var $a2 = $('.animate-in-2');
  $a2.each(function(i) {
      $(this).delay(1600+(400*i)).queue(function() {
        $(this).removeClass('animate-in-2 animate-in')
        .dequeue();
      });
  });
  var $a3 = $('.animate-in-3');
  $a3.each(function(j) {
    $(this).delay(3200+(400*j)).queue(function() {
      $(this).removeClass('animate-in-3 animate-in')
      .dequeue();
    });
  });

  var $a4 = $('.animate-in-4');
  $a4.each(function(k) {
    $(this).delay(4400+(400*k)).queue(function() {
      $(this).removeClass('animate-in-4 animate-in')
      .dequeue();
    });
  });

});
