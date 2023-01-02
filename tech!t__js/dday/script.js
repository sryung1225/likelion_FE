let now = new Date();
let start = new Date("2020-06-30");

//우리 몇 일째?
let timeDiff = now.getTime() - start.getTime();
let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");

//기념일까지 남은 날짜는?
let valentine = new Date("2023-02-14");
let timeDiff2 = valentine.getTime() - now.getTime();
let day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day2 + "일 남음");

//천일은 언제인가?
let thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
let thousandDate = thousand.getFullYear() + "." + (thousand.getMonth()+1) + "." + thousand.getDate();
$("#thousand-date").text(thousandDate);

//기념일까지 남은 날짜는?
let timeDiff3 = thousand.getTime() - now.getTime();
let day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(day3 + "일 남음");