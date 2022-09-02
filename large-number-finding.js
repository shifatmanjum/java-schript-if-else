function FindLargeNumber(num1, num2, num3) {
    if (num1 > num2 > num3) {
        console.log(num1);

    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    }
    else {
        console.log(num3);
    }
}
FindLargeNumber(5, 9, 8);
FindLargeNumber(54, 4, 67);
FindLargeNumber(17, 44, 167);
FindLargeNumber(524, 494, 647);
FindLargeNumber(5422, 454, 467);
