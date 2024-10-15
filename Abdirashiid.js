function totalTargetOverMonths(start, finish, annualGoal) {
    let beginDate = new Date(start);
    let finalDate = new Date(finish);
    let tempDate = new Date(beginDate);

    let noFridaysInMonth = [];
    let validWorkingDays = [];
    let targetByMonth = [];

    let totalValidDays = 0;

    while (tempDate <= finalDate) {
        let year = tempDate.getFullYear();
        let month = tempDate.getMonth();
        let monthDays = new Date(year, month + 1, 0).getDate();

        let workingDays = 0;

        for (let i = 1; i <= monthDays; i++) {
            let checkDate = new Date(year, month, i);
            if (checkDate.getDay() !== 5) {
                workingDays++;
            }
        }
        noFridaysInMonth.push(workingDays);

        let actualDays = 0;
        let startDay = tempDate.getDate();

        while (startDay <= monthDays) {
            let loopDate = new Date(year, month, startDay);
            if (loopDate > finalDate) break;
            if (loopDate.getDay() !== 5) {
                actualDays++;
            }
            startDay++;
        }

        validWorkingDays.push(actualDays);
        totalValidDays += actualDays;

        tempDate.setMonth(tempDate.getMonth() + 1);
        tempDate.setDate(1);
    }

    for (let validDays of validWorkingDays) {
        targetByMonth.push((annualGoal / 365) * validDays);
    }

    let fullTarget = targetByMonth.reduce((total, val) => total + val, 0);

    return {
        noFridaysInMonth,
        validWorkingDays,
        targetByMonth,
        fullTarget
    };
}

console.log(totalTargetOverMonths('2024-01-01', '2024-03-31', 5220));
