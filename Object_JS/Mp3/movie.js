function Movie(title,year,duration) {
  Media.call(this,title,duration);
  this.year=year;


}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
   var htmlString ='<li';
   if(this.isPlaying===true){
   htmlString+=' class="current"';

 }
   htmlString+= '>';
   htmlString+= this.title;
   htmlString+=' ( ';
   htmlString+=this.year;
   htmlString+=') ';
   htmlString+= '<span class="duration">';
   htmlString+= this.duration;
   htmlString+='</span></li>';
   if(this.isPlaying===true){
   htmlString+=' <audio controls><source src="/home/tungtbt/Downloads/Here-Comes-The-Sun-The-Beatles.mp3" type="audio/mpeg">Trình duyệt của bạn không hỗ trợ HTML5</audio>';

 }
   return htmlString;
};
