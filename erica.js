$( window ).resize(function() {
  $("iframe").css("height", $("iframe").width() * (1080/1920) + "px");
});

$( document ).ready(function() {
  if($(".element").length==0) {
    $(".project").remove();
  }
  
  $("a[href='"+window.location.href+"']").addClass("current");
  if(window.location.href == base_href) {
    $(".header a:nth-of-type(2)").addClass("current");
  }
  
  if (navigator.appVersion.indexOf("Chrome/") != -1) {
    $("body").addClass("chrome");
  }
  
  $("iframe").css("height", $("iframe").width() * (1080/1920) + "px");
  
  if(window.location.href.indexOf("localhost") > 0) {
    tinymce.init({
        selector: "h1,h2,div.editable",
        inline: true,
        plugins: [ "code link template" ],
        toolbar: "bold italic styleselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link code",
        menubar: false,
        setup: function(editor) {
          editor.on('change', function(e) {
              var new_value = tinyMCE.activeEditor.getContent({format : 'raw'});
              $.ajax({
                type: "POST",
                url: "../scripts/index.php",
                data: {"id":parseInt(e.target.id), "key":$("#"+e.target.id).attr("type"), "v":JSON.stringify(new_value)},
                success: function(e) {
                
                }
              });
          });
        }
    });
    tinymce.init({
        selector: ".element.editable",
        inline: true,
        menubar: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu code"
        ],
        toolbar: "bold italic styleselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link code",
        setup: function(editor) {
          editor.on('change', function(e) {
              var new_value = tinyMCE.activeEditor.getContent({format : 'raw'});
              $.ajax({
                type: "POST",
                url: "../scripts/index.php",
                data: {"id":parseInt(e.target.id), "key":$("#"+e.target.id).attr("type"), "v":JSON.stringify(new_value)},
                success: function(e) {
  
                }
              });
            
          });
        }
    });
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