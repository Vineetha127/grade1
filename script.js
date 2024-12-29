function Result() {
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("com").value);
    var sub5 = parseInt(document.getElementById("sc").value);
    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        return;
    }
    var totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
    var percentage = (totalMarks / 500) * 100;
    var grade;
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 55) {
        grade = "C";
    } else if (percentage >= 45) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("total").innerHTML = sub1+sub2+sub3+sub4+sub5; 
    document.getElementById("percentage").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("Grade").innerHTML = "Your grade is: " + grade;
    mm(percentage);
}
function mm(percentage) {
    if (percentage >= 35) {
        document.getElementById("pass").innerHTML = "You are passed!";
        document.getElementById("fail").innerHTML = "";  
    } else {
        document.getElementById("fail").innerHTML = "You are failed!";
        document.getElementById("pass").innerHTML = "";  
    }
}

