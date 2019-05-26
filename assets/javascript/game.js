$("#start").click(startSlideshow);

  var correctAnswers=0;
  var incorrectAnswers=0;
  var unanswered=0;
  var index=0;
  var showImage;
  var count = 0;

var questionAnswers=[
    { 
        question: "What is the body of water that borders Greece, Turkey and Southern Italy?",
        answers:["1. Red Sea", "2. Mediterranean Sea", "3. Aegean Sea", "4. Black Sea"],
        rightAnswer: "Aegean Sea",
        animate:"<img src='https://media.giphy.com/media/sfjfPOe8DKptm/giphy.gif 'width='500px' height='300px'/>"
    },
    { 
        question: "Which European country was reunified in 1990?",
        answers:["1. Austria", "2. Russia", "3. Switzerland", "4. Germany"],
        rightAnswer: "Germany",
        animate:"<img src='https://media.giphy.com/media/J8oFJS9S9yaAw/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "Which Desert dominates a large area of Northern Africa?",
        answers:["1. Kalahari", "2. Sahara", "3. Gobi", "4. Atacama"],
        rightAnswer: "Sahara",
        animate:"<img src='https://media.giphy.com/media/7zGpUAi5TOCGme7KtI/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "What is the formal language of Libya?",
        answers:["1. English", "2. Spanish", "3. Arabic", "4. Dutch"],
        rightAnswer: "Arabic",
        animate:"<img src='https://media.giphy.com/media/J93sVmfYBtsRi/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "In which Canadian province is Montreal located?",
        answers:["1. Vancouver", "2. Ontario", "3.Quebec", "4. Nova Scotia"],
        rightAnswer: "Quebec",
        animate:"<img src='https://media.giphy.com/media/Jx9n9pSg9JUJi/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "Bronze is an alloy consisting of two or more metals. What are they?",
        answers:["1. Copper and Zinc", "2. Copper and Tin", "3. Copper and Gold", "4. Copper and Lead"],
        rightAnswer: "Copper and Tin",
        animate:"<img src='https://media.giphy.com/media/fqIBaMWI7m7O8/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "Mycology is the study of:	",
        answers:["1. Insects", "2. Water bodies", "3. Fungi", "4. Volcanos"],
        rightAnswer: "Fungi",
        animate:"<img src='https://media.giphy.com/media/d0XuEToIwURJ6/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "What is the speed of light?",
        answers:["1. 299,792,458 metres per second", "2. 3.14159265359 metres per second", "3. 967,268,439 kilometres per second", "4. 3,598,689,696,123 kilometres per second"],
        rightAnswer: "299,792,458 metres per second",
        animate: "<img src='https://media.giphy.com/media/vKOY98CLBQk9O/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "What is the currency of Sweden?",
        answers:["1. Euro", "2. Krona", "3. Franc", "4. Pound"],
        rightAnswer: "Krona",
        animate: "<img src='https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif' width='500px' height='300px'/>"
    },
    { 
        question: "For which of the following disciplines is Nobel Prize awarded?",
        answers:["1. Physics and Chemistry", "2. Physiology or Medicine", "3. Literature, Peace and Economics", "4. All of the above"],
        rightAnswer: "All of the above",
        animate: "<img src='https://media.giphy.com/media/19U2aQ323iGtO/giphy.gif' width='500px' height='300px'/>"
    },
  ]

  function showTrivia(){
    for(var i=0; i< questionAnswers[index].answers.length;i++){
    $("#showQuestion").html(questionAnswers[index].question);
      $("#showPossibleAnswers").html(questionAnswers[index].answers);
      $("#image-holder").html(questionAnswers[index].animate);
      // $("#image-holder").html("<img src='https://media.giphy.com/media/19U2aQ323iGtO/giphy.gif'/>");
    }
  }
  
// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
// function displayImage() {
//     $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
//   }
  
  function nextImage() {
    //  TODO: Increment the count by 1.
    index++;
    setTimeout(showTrivia, 8000);
 // TODO: If the count is the same as the length of the image array, reset the count to 0.
 if (index === animate.length) {
    index = 0;
  }
}

  function startSlideshow() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    showImage = setInterval(nextImage, 8000);
  
  }
  startSlideshow();

  showTrivia();