# nodejsAssignment

# Recursive Target Calculator
This JavaScript function, recursiveTargetCalc, calculates the distribution of a given annual goal over a period of time while excluding Fridays from the calculation (assuming Fridays are non-working days). The function recursively processes each month in a date range, determines the valid working days in each month, and proportionally distributes the annual goal based on the number of working days.

# Features
Calculates the total number of non-Friday days (working days) for each month within a given start and end date.
Determines the active working days in each month based on the start date.
Proportionally distributes the provided annual goal based on the total valid working days within the range.

# Function Parameters
start: The start date of the period (in the format YYYY-MM-DD).
end: The end date of the period (in the format YYYY-MM-DD).
annualGoal: The total annual target that will be proportionally divided across valid working days within the specified date range.

# Return Object
The function returns an object containing:
totalDaysExcludingFridays: An array showing the total number of non-Friday days (working days) in each month within the date range.
validDays: An array showing the valid working days in each month, accounting for the start date.
monthlyProportions: An array showing the proportion of the annual goal allocated to each month based on the working days.
totalAchieved: The total goal achieved over the date range by summing up the monthly proportions.

# Example Usage
console.log(recursiveTargetCalc('2024-01-01', '2024-03-31', 5220));
This example calculates the distribution of the annual goal (5220) over the period from January 1, 2024, to March 31, 2024, excluding Fridays.

# Output Example:

{
  totalDaysExcludingFridays: [ 26, 23, 26 ],  // Total non-Friday days per month
  validDays: [ 26, 23, 26 ],                 // Valid working days based on the start date
  monthlyProportions: [ 372.32876712328766, 329.5068493150685, 372.32876712328766 ],  // Proportions of the annual goal per month
  totalAchieved: 1074.1643835616438          // Total goal achieved over the period
}

# How It Works
Working Days Calculation: The calcWorkingDaysInMonth function determines the number of working days (non-Fridays) for a given month.
Recursive Iteration: The iterateMonths function recursively processes each month within the specified date range, calculating working days for each month and accumulating valid working days.
Goal Distribution: The function then calculates how much of the annual goal should be allocated to each month based on the number of working days, and sums up the total achieved.

# Use Cases
Workload distribution across a specific time period (e.g., project management, sales target).
Proportional goal allocation for periods that exclude specific days (like weekends or holidays).
