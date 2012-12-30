var Video = {
  init: function(){
    video = $('video').get(0);
    $(video).on('timeupdate', function(){
      $('#current-time').text(video.currentTime);
    });
    return video;
  }
}