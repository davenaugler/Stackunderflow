angular.module("app").directive('questionAnswer', function(){
    
    // return{
    //     template:'<div>Answer: {{a.text}}</div>'
    // }
    
    return{
        templateURL: 'app/views/answer.html'
    }
})