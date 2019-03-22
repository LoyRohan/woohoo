/*var marks = function(curentMarks, totalMarks){

    var percentage = (curentMarks/totalMarks)*100;

    let myGrade =''

    if( percentage >= 90){
        myGrade = "A"
    } else if( percentage >=80){
        myGrade = "B"
    }else if(percentage >=60){
        myGrade = "C"
    }else if(percentage >= 40){
        myGrade = "D"
    }else {
        myGrade = "Student is fails"
    }
 return('Your grade is '+ myGrade +' garde');

}   

var markssheet = marks(96,100);
console.log(markssheet);
var hello = marks(45,100);
console.log(hello);*/


var youTube = {
    title : "introduction to JS",
    videoLength : 15,
    videoSize : '40Gb'
}

console.log('The video is about ' + youTube.title +' and size of '+ youTube.videoSize + '.');


/*crate a object its shoult about cousr with name ,price and discription*/

var student = {
    name : 'Raj',
    course : 'Msc',
    price  : 40000,
    discription : "Masters in science is the hard core subject where perticular topics of science sbject u learn."
}

console.log("hello, My name is "+ student.name+". I hve taken the subject "+student.course+". ");




