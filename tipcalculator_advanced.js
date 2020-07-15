//tip calculator advanced
var john = {
        fullname: "john smith",
        bills: [124, 48, 268, 180, 42],
        calcTips: function() {
            this.tips = [];
            this.finalTotal = [];

            for (var i = 0; i < this.bills.length; i++) {
                var percentage;
                var bill = this.bills[i];
                if (bill < 50) {
                    percentage = 20 / 100;
                } else if (bill >= 50 && bill < 200) {
                    percentage = 15 / 100;
                } else {
                    percentage = 10 / 100;
                }
                this.tips[i] = percentage * bill;
                this.finalTotal[i] = bill + this.tips[i];
            }
        }
    }
    //part 2
var mark = {
    fullname: "mark thomas",
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalTotal = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = 20 / 100;
            } else if (bill >= 100 && bill < 300) {
                percentage = 15 / 100;
            } else {
                percentage = 10 / 100;
            }
            this.tips[i] = percentage * bill;
            this.finalTotal[i] = bill + this.tips[i];
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log('john paid the higher average tip: ', john.average);
} else if (mark.average > john.average) {
    console.log('mark paid the higher average tip: ', mark.average);
} else {
    console.log('both paid equal tip in average');
}