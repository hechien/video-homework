var VideoController = {

  play: function(video){

    return video.play();
  },

  pause: function(video){

    return video.pause();
  },

  currentTime: function(video){

    return video.currentTime;
  },

  setCurrentTime: function(video, sec){
    video.currentTime = sec;
  },

  prevSecond: function(video){

    --video.currentTime;
    return true;
  },

  nextSecond: function(video){

    ++video.currentTime;
    return true;
  },

  loadVideo: function(video, url){
    video.src = url;
  },

  init: function(){ return this; }
}