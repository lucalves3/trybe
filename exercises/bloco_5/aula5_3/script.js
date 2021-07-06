function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createDaysMonth () {
    let monthDays = 30;
    let arrayDays = [];

    for(let index = 1; index <= monthDays; index += 1) {
        arrayDays.push(index);
    }
    let daysTable = document.querySelector('#days')
    for(let index = 0; index < arrayDays.length; index += 1) {
        let day = arrayDays[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        daysTable.appendChild(dayItem)

    }
}

createDaysMonth();