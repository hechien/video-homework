var Track = {

  data: [],
  add: function(item){

    this.data.push(item);

    return this.data;
  },

  remove: function(index){

    index--;
    this.data.splice(index, 1);
    return this.data;
  },

  init: function(){

    return this;
  }
}