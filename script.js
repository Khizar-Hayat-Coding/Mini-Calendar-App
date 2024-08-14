const Month = document.getElementById("month");
const Day = document.getElementById("day");
const TheDate = document.getElementById("date");
const Year = document.getElementById("year");

const MonthDate = new Date();
Month.innerText = MonthDate.toLocaleString("en", {
    month: "long",
});

Day.innerText = MonthDate.toLocaleString("en", {
    weekday: "long",
});

TheDate.innerText = MonthDate.getDate();
Year.innerText = MonthDate.getFullYear();



