$(document).ready(function () {


    $("#start").click(startSlideshow);

    var index = 0;
    var score = 0;
    var wrong = 0;
    var unanswered = 0;
    var clockRunning = false;
    var time = 10;
    var timer;


    var questionAnswers = [{
            question: "What is the body of water that borders Greece, Turkey and Southern Italy?",
            answers: [
                "Red Sea",
                "Mediterranean Sea",
                "Aegean Sea",
                "Black Sea"
            ],
            rightAnswer: "Aegean Sea",
            animate: "<img src='https://media.giphy.com/media/sfjfPOe8DKptm/giphy.gif 'width='500px' height='300px'/>"
        },
        {
            question: "Which European country was reunified in 1990?",
            answers: ["Austria", "Russia", "Switzerland", "Germany"],
            rightAnswer: "Germany",
            animate: "<img src='https://media.giphy.com/media/J8oFJS9S9yaAw/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "Which Desert dominates a large area of Northern Africa?",
            answers: ["Kalahari", "Sahara", "Gobi", "Atacama"],
            rightAnswer: "Sahara",
            animate: "<img src='https://media.giphy.com/media/7zGpUAi5TOCGme7KtI/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "What is the formal language of Libya?",
            answers: ["English", "Spanish", "Arabic", "Dutch"],
            rightAnswer: "Arabic",
            animate: "<img src='https://media.giphy.com/media/J93sVmfYBtsRi/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "In which Canadian province is Montreal located?",
            answers: ["Vancouver", "Ontario", "Quebec", "Nova Scotia"],
            rightAnswer: "Quebec",
            animate: "<img src='https://media.giphy.com/media/Jx9n9pSg9JUJi/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "Bronze is an alloy consisting of two or more metals. What are they?",
            answers: ["Copper and Zinc", "Copper and Tin", "Copper and Gold", "Copper and Lead"],
            rightAnswer: "Copper and Tin",
            animate: "<img src='https://media.giphy.com/media/fqIBaMWI7m7O8/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "Mycology is the study of:	",
            answers: ["Insects", "Water bodies", "Fungi", "Volcanos"],
            rightAnswer: "Fungi",
            animate: "<img src='https://media.giphy.com/media/d0XuEToIwURJ6/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "What is the speed of light?",
            answers: ["299,792,458 metres per second", "3.14159265359 metres per second", "967,268,439 kilometres per second", "3,598,689,696,123 kilometres per second"],
            rightAnswer: "299,792,458 metres per second",
            animate: "<img src='https://media.giphy.com/media/vKOY98CLBQk9O/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "What is the currency of Sweden?",
            answers: ["Euro", "Krona", "Franc", "Pound"],
            rightAnswer: "Krona",
            animate: "<img src='https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif' width='500px' height='300px'/>"
        },
        {
            question: "For which of the following disciplines is Nobel Prize awarded?",
            answers: ["Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All of the above"],
            rightAnswer: "All of the above",
            animate: "<img src='https://media.giphy.com/media/19U2aQ323iGtO/giphy.gif' width='500px' height='300px'/>"
        },
    ]

    function showTrivia() {
        for (var i = 0; i < questionAnswers[index].answers.length; i++) {
            startTimer();
            $("#button").empty();
            $("#showQuestion").html(questionAnswers[index].question);
            $("#image-holder").html(questionAnswers[index].animate);
            $("#choice1").html(questionAnswers[index].answers[0]);
            $("#choice2").html(questionAnswers[index].answers[1]);
            $("#choice3").html(questionAnswers[index].answers[2]);
            $("#choice4").html(questionAnswers[index].answers[3]);
            $(".choice").on("click", function () {
                generateAnswers();
                checkAnswer();
            });
        }
    }

    function checkAnswer() {
        $(".choice").on("click", function () {
            var answer = $(".choice").val();
            console.log(answer)
            if (answer == questionAnswers[index].rightAnswer) {
                score++;
                console.log("Score: " + score)
            } else if (answer === "") {
                unanswered++;
                console.log("Unanswered: " + unanswered)
            } else {
                wrong++;
                console.log("Wrong: " + wrong)
            }
        });
    }

    function startSlideshow() {
        showTrivia()
    }

    function nextImage() {
        //increments the count by one
        index++;
        $("#showAnswer").empty();
        if (index === questionAnswers.length) {
            resultsSlide();
        }
    }

    function generateAnswers() {
        $("#showAnswer").html("<br>The right answer is: " + questionAnswers[index].rightAnswer)
    }


    //Starts countdown
    function startTimer() {
        time = 10;
        //decrement is one seconds
        clearInterval(timer);
        timer = setInterval(decrement, 1000)
        clockRunning = true;
        $("#timeRemain").html("Time Remaining: " + time);
    }

    //Decreases time variable and checks if it's equal to 0, calling the next question if it is.
    function decrement() {
        time--;
        if (time === 0) {
            stop();
            nextImage();
            showTrivia();
            $("#timeRemain").html("Time Remaining: " + time);
        } else {
            $("#timeRemain").html("Time Remaining: " + time);
        }
    }

    //Stops timer at 0
    function stop() {
        clearInterval(timer);
        clockRunning = false;
    }

    function resultsSlide() {
        stop();
        $("#showQuestion").empty();
        $("#showPossibleAnswers").empty();
        $("#image-holder").empty();
        $("#showAnswer").empty();
        $("#timeRemain").empty();
        $("#image-holder").empty();
        $("#final-screen-text").html("<u>Woo! Here's how you did!</u>")
        $("#correct").html("<br>Correct Answers: " + score);
        $("#incorrect").html("<br>Incorrect Answers: " + wrong);
        $("#unanswered").html("<br>Unanswered Answers: " + unanswered);
        $("#button2").html('<br><button>Start Over?</button>')
        $("#button2").on("click", function () {
            alert("Work in Progress :)")
            showTrivia();
            //insert restart game
        })

    };

});