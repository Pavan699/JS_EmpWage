console.log("Welcome to Employee Wage Problem in Java-Script");
//UC-1 Check the Emp is Present or Absent 
//console.log("***********************************************************");
//{
//const Emp_Present = 1;
//let Check = Math.floor(Math.random() * 10 ) % 2;
//if (Check == Emp_Present)
//    {
//        console.log("Employee is PRESENT");
//    }
//else
//    {
//        console.log("Employee is ABSENT");
//    }
//}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//UC-2 Use Switch case to check Full-time and Part-time
const Full_Time = 1;
const Part_Time = 2;
const FULL_Time_Hours = 8;
const PART_Time_Hours = 4;
const Per_Hour_Wage = 20;
const Max_Work_Days = 20;
const Max_Work_Hours = 160;

function WorkHours(empcheck)
{
    switch(empcheck)
    {
        case Full_Time : 
            return FULL_Time_Hours ;      
        case Part_Time : 
            return PART_Time_Hours ;
        default:
            return 0;        
    }
}
//Function to calculate the Wage
function CalculateWage(Hours)
{
    return Hours * Per_Hour_Wage;
}

let TotalHours = 0;
let Total_Work_Days = 0;
let EmpWageArray = new Array();//Array to Store the wage
//for(let day = 0; day < Max_Work_Days; day++)
while(Total_Work_Days < Max_Work_Days && TotalHours <Max_Work_Hours)//condition for the 160 hours and 20 days
{
    let empcheck = Math.floor(Math.random() * 10 ) % 3;
    let empHour = WorkHours(empcheck);
    TotalHours += empHour;
    EmpWageArray.push(CalculateWage(empHour));
    Total_Work_Days++;
}
//calculating Emp-Wage by using Array...
console.log("Employee Wage By using Array--------")
console.log("Daily Wages : "+EmpWageArray);
let EmpWage = CalculateWage(TotalHours);
console.log("Wage of Month : "+EmpWage + " And Work-Hours are : "+TotalHours+" Work Days : "+Total_Work_Days);

let Total_Wage = 0;
function sum(dailyWage){
    Total_Wage += dailyWage;
}

//By using Reduce function 
console.log("Employee Wage By using Reduce function------")
EmpWageArray.forEach(sum);
console.log("Total days "+Total_Work_Days+" Hours worked "+TotalHours+" Emp wage: "+Total_Wage);

function totalWages(totalWages,DailyWage){
    return totalWages + DailyWage;
}
console.log("Emp wage with reduce: "+EmpWageArray.reduce(totalWages,0));

//By using map function 
let dailyCount = 0;
function mapDailyWithWage(dailyWage){
    dailyCount++;
    return dailyCount+" = "+dailyWage;
}
let mapDayWithWageArr = EmpWageArray.map(mapDailyWithWage);
console.log("Daily Wage by using Map Function-------");
console.log(mapDayWithWageArr);

//Filter function to show the Full-time Wages-160
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Filter function for fulltime Employee on that day------");
console.log(fullDayWageArr);

//First day of full-time by using find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First day of fulltime wage was earned on day : "+mapDayWithWageArr.find(findFullTimeWage));

//Checking All the employees having Full-day or not by using every function
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("check if all element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));//every eill check for all elements

//Checking for the Part time wage-80
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Checking for Part-Time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));//Some will check one of the element is follows the conition

//Find the total number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0 ) return numOfDays+1;
    return numOfDays;
}
console.log("Totle no. of days emp worked "+EmpWageArray.reduce(totalDaysWorked,0));
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

