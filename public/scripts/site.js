
$(function (){
   $("a").each(function (){
       var a = $(this);
       var href = a.attr("href");
       var is = new RegExp(href+"$").test(location.href);
       if(is)
           a.addClass("active");
   });
});

