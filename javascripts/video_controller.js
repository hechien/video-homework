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

  prevSecond: function(video){

    --video.currentTime;
    return true;
  },

  nextSecond: function(video){

    ++video.currentTime;
    return true;
  },

  init: function(){ return this; }
}