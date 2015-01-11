$(tumblr_api_read["posts"]).each(function(i,obj) {
  var post = $("<div>").addClass("post");
  
  if(obj["type"]=="regular") {
    var title = $("<a>").attr("href",obj["url-with-slug"]).attr("target","_blank").addClass("title").text(obj["regular-title"]);
    var body = $("<div>").addClass("body").html(obj["regular-body"]);
    post.append(title).append(body);
    $("#blogfeed").append(post);
  }
  
  if(obj["type"]=="photo") {
    // console.log(obj);
    var url = $("<a>").addClass("imgwrap").attr("href",obj["url-with-slug"]).attr("target","_blank");
    var image = $("<img>").addClass("image").attr("src", obj["photo-url-500"]);
    url.append(image);
    var caption = $("<div>").addClass("image-caption").html(obj["photo-caption"]);
    post.append(url).append(caption);
    $("#blogfeed").append(post);
  }
  
});

$(".loadmoreposts").click(function(e) {
  
});