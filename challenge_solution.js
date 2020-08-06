(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.CheckAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            console.log('Wrong Answer Try Again!');
            sc = callback(false);
        }
        this.displayScore(sc);

    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('--------------------------------');
    }

    var q1 = new Question('am i having a bad time today?', ['yes', 'no'], 0);
    var q2 = new Question('Who is going to be future bilionaire?', ['Abdul Hai', 'Maverick', 'Sensai'], 0);
    var q3 = new Question('When i will start earning?', ['right now', 'this week', 'this year'], 1);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * 3);
        questions[n].displayQuestion();

        var answer = (prompt('Please select the answer'));


        if (answer !== 'exit') {
            questions[n].CheckAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();