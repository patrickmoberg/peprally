$( document ).ready(function() {
  if($(".element").length==0) {
    $(".project").remove();
  }
  
  $("a[href='"+window.location.href+"']").addClass("current");
  if(window.location.href == "http://patrickmoberg.com/temp/editor/erica/") {
    $(".header a:nth-of-type(2)").addClass("current");
  }
  
  if (navigator.appVersion.indexOf("Chrome/") != -1) {
    $("body").addClass("chrome");
  }
  // $(".element").click(function(e) {
  //   var image_container;
  //   image_container = $("#image_container").length==1 ? $("#image_container") : $("<div></div>").attr("id","image_container");
  //
  //   var image;
  //   if(image_container.find("img").length == 1) {
  //     image = image_container.find("img");
  //   }
  //   else{
  //     image = $("<img/>");
  //     image_container.append(image);
  //   }
  //
  //   image.attr("src",$(e.currentTarget).find("img").attr("src"));
  //   $("iframe").after(image_container);
  // });
  // $(".element:nth-of-type(2)").click();
});