function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// 1- O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function DaysOfMonth() {
  const ulDays = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement("li");

    if (day === 24 || day === 31) {
      dayItem.className("day holiday");
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = "friday";
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    }
  }
}
DaysOfMonth();

// // 2- 

// function holidays(Feriados) {
//   const btnHoliday = document.createElement('button');
//   btnHoliday.id = 'btn-holiday';
//   btnHoliday.name = ''
  
//   const buttonsContainer = document.getElementsByClassName('buttons-container');
//   buttonsContainer.appendChild(btnHoliday); 
// }
// holidays();