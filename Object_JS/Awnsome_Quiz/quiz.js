function Quiz(question){
   this.score =0;
   this.question = question;
   this.currentQuestionIndex=0;


}
Quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
      this.score++;
    }
  this.currentQuestionIndex++;
};
Quiz.prototype.getCurrentQuestion= function(){
       return this.question[this.currentQuestionIndex];

};
Quiz.prototype.hasEnded = function(){
  return this.currentQuestionIndex >= this.question.length;
}
