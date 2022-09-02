//0-32 = f
//33-39 = d
//40-59 = c
//60-69 = B
//70-79 = A-
//80-95 = A+
//96-100= Golden A+

//var StudentMark = 70;

if (StudentMark  33 && StudentMark > 0) {
    console.log("f");

}


else if (StudentMark >= 33 && StudentMark < 40) {
    console.log("d");
}

else if (StudentMark >= 40 && StudentMark < 60) {
    console.log("c");
}

else if (StudentMark >= 60 && StudentMark < 70) {
    console.log("B");
}

else if (StudentMark >= 70 && StudentMark < 80) {
    console.log("A-");
}

else if (StudentMark >= 80 && StudentMark < 96) {
    console.log("A+");
}

else if (StudentMark >= 96 && StudentMark <= 100) {
    console.log("Golden A+");
}
else {
    console.log("dont know");
}
