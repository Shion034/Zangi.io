let daynames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let monthes=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let d=new date();
let dayName =daynames[d.getDay()];
let monthName =monthes[d.getMonth()];
let year = d.getFullYear();
let fulldate = d.getDate + " "+ monthName +" "+ year;

document.getElementById("currentdate").textContent=fulldate;