$(document).on('click', 'a', function(event){
    if ($.attr(this, 'href').indexOf("#")!=-1 && $.attr(this, 'href')!="#")	{
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    }
});