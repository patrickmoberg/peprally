$(tumblr_api_read["posts"]).each(function(i,obj) {
  var post = $("<div>").addClass("post");
  
  if(obj["type"]=="regular") {
    var title = $("<a>").attr("href",obj["url-with-slug"]).attr("target","_blank").addClass("title").text(obj["regular-title"]);
    var body = $("<div>").addClass("body").html(obj["regular-body"]);
    post.append(title).append(body);
    $("#blogfeed").append(post);
  }
  
  if(obj["type"]=="photo") {
    
    var collection = [];
    if(obj["photos"].length > 0) {
      collection = obj["photos"];
    }
    else {
      collection.push(obj);
    }
    
    $.each(collection, function(sub_i,sub_obj) {
      var url = $("<a>").addClass("imgwrap").attr("href",obj["url-with-slug"]).attr("target","_blank");
      var image = $("<img>").addClass("image").attr("src", sub_obj["photo-url-500"]);
      url.append(image);
      var caption = $("<div>").addClass("image-caption").html(sub_obj["photo-caption"]);
      post.append(url).append(caption);
    });
    
    $("#blogfeed").append(post);
  }
  
  if(obj["type"]=="video") {
    // console.log(obj);
    var div = $("<div></div>").html(obj["video-player-500"]);
    post.append(div);
    var caption = $("<div>").addClass("video-caption").html(obj["video-caption"]);
    post.append(caption);
    $("#blogfeed").append(post);
  }
  
});

$(".loadmoreposts").click(function(e) {
  
});