//large number finding with return method

function LargeNumberFinding(num1, num2, num3) {
    if (num1 > num2 > num3) {
        return (num1);

    }
    else if (num2 > num1 && num2 > num3) {
        return (num2);

    }
    else {
        return (num3);
    }

}
console.log(LargeNumberFinding(56, 14, 96));
console.log(LargeNumberFinding(56, 414, 6));
console.log(LargeNumberFinding(5, 414, 9476));
console.log(LargeNumberFinding(56846, 14454, 967));
