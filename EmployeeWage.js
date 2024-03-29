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
let TotalHours = 0;
let Total_Work_Days = 0;
//for(let day = 0; day < Max_Work_Days; day++)
while(Total_Work_Days < Max_Work_Days && TotalHours <Max_Work_Hours)//condition for the 160 hours and 20 days
{
    let empcheck = Math.floor(Math.random() * 10 ) % 3;
    TotalHours += WorkHours(empcheck);
    Total_Work_Days++;
}
let EmpWage = TotalHours * Per_Hour_Wage;
console.log("Wage of Month : "+EmpWage + " And Work-Hours are : "+TotalHours+" Work Days : "+Total_Work_Days);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");