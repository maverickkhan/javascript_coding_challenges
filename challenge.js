(function() {
    var Question = function(Q, ans1, ans2, ans3) {
        this.Q = Q;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
    }

    var Question1 = new Question('What is the capital of Pakistan?', 'Islamabad', 'Karachi', 'Lahore');
    var Question2 = new Question('How old is Abdul Hai?', 22, 25, 30);
    var Question3 = new Question('What Abdul Hai is studying?', 'html', 'javascript', 'css');
    //console.log({ Question1, Question2, Question3 });

    var ques = [Question1, Question2, Question3];
    var quesPointer = Math.floor(Math.random() * 3);

    function quesTrigger() {
        return ques[quesPointer];
    }

    function gameTrigger() {
        var userQues = quesTrigger();
        console.log(userQues)

        function innerGame() {
            var userAnswer = prompt('Enter the right answer key.');
            if ((userAnswer == 'ans1' || userAnswer == Question1.ans1) && userQues == Question1) {
                console.log('Congratulations! You\'ve given the right answer.');
            } else if ((userAnswer == 'ans1' || userAnswer == Question2.ans1) && userQues == Question2) {
                console.log('Congratulations! You\'ve given the right answer.');
            } else if ((userAnswer == 'ans2' || userAnswer == Question3.ans2) && userQues == Question3) {
                console.log('Congratulations! You\'ve given the right answer.');
            } else {
                console.log('Oops! You\'ve given the wrong answer.');
            }
        }
        innerGame();
    }
    gameTrigger();
})();