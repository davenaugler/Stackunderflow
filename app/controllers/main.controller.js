(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);


    function MainController($scope, MainService) {
        $scope.name = ""

        $scope.greetings = []

        $scope.greet = function () {
            var msg = MainService.greet($scope.name)
            $scope.greetings.push(msg)
        }

        var question = {
            text: "What is an IFFE in JavaScript?",
            author: "John Doe",
            date: new Date(),
            tags: ["javascript", "functions", "encapsulation", "crazy javascript"],
            answers: [
                {
                    text: "An IFFE is something you create when you don't know much about JavaScript.",
                    author: "Jim Bo",
                    date: new Date(),
                    score: -5,
                    accepted: false,
                    comments: [

                        {
                            text: "That's not right sir.",
                            author: "Jill Taylor",
                            flag: false,

                        }
                    ]
                },
                {
                    text: "IFFE stands for Immediatly Invoked Function Expression.",
                    author: "Chim Chim",
                    date: new Date(),
                    score: 48,
                    accepted: false,
                    comments: [
                        {
                            text: "I don't think is complete.",
                            author: "Jill Taylor Jr.",
                            flag: false,
                        },
                        {
                            text: "I think that's good, but give me more details.",
                            author: "Dr. Steve",
                            flag: true,
                        },
                        {
                            text: "I agree with the Dr.",
                            author: "Sally Fly",
                            flag: true,
                        },
                        {
                            text: "I would like more info",
                            author: "Kenny Boy",
                            flag: false,
                        },
                        {
                            text: "@Kenny, did you know you can edit.",
                            author: "Smart A**",
                            flag: true,
                        },
                        {
                            text: "@Smart A**, QUESTIONS END WITH A QUESTION MARK",
                            author: "Grammar Natzi",
                            flag: true,
                        },
                    ]

                },
                {
                    text: "An immediately-invoked function expression, is a JavaScript design pattern which produces a lexical scope using JavaScript's function scoping.",
                    author: "Dave Naugler",
                    date: new Date(),
                    score: 36,
                    accepted: true,
                    comments: [
                        {
                            text: "Is that really true?",
                            author: "Dang It All",
                            flag: false,
                        },
                        {
                            text: "Holy Smokes!",
                            author: "Dr. Napster",
                            flag: true,
                        }]
                }


            ]

        }
        
        //Assign the following variables

        var questionText = question.text;
        var questionAnswerCount = question.answers.length;
        var question2ndAnswerScore = question.answers[1].score;
        var question2ndAnswer1stCommentFlagged =  question.answers[1].comments[0].flag;
        
        
        
        var hasAnAcceptedAnswer = for (var i = 0; i < question.answers.length; i++) {
            if(question.answers[i].accepted){
                hasAnAcceptedAnswer = true;
                break;
                
            }
            
            
            
        }
      
        
        
    }
})();