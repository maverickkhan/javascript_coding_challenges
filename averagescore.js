var johnAverage, mikeAverage, maryAverage;
johnAverage = (89 + 120 + 103) / 3;
mikeAverage = (116 + 94 + 123) / 3;
maryAverage = (97 + 134 + 105) / 3;

switch (true) {
    case (mikeAverage > johnAverage && mikeAverage > maryAverage):
        console.log("Mike\'s Average is higher " + mikeAverage + " Mike Wins by average score");
        break;
    case (maryAverage > mikeAverage && maryAverage > johnAverage):
        console.log("Mary\'s Average is higher " + maryAverage + "  Mary Wins by average score");
        break;
    case (johnAverage > mikeAverage && johnAverage > maryAverage):
        console.log("John\'s Average is higher " + johnAverage + " Wins by average score");
        break;
    default:
        console.log("It's a tie");
}