//Легенда задания. В организации два юриста. Будет выводится информация о выполненных задачах каждого из них и общая статистика задач

const dataJson = [
    {
      "userId": 1,
      "id": 1,
      "title": "Подготовить исковое заявление",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Поучаствовать в судебном заседании",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Подготовить претензию",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "Подготовить претензию",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "Подготовить претензию",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "Подготовить договор поставки",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "Подготовить договор аренды",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "Подготовить договор поставки",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "Подготовить договор поставки",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "Подготовить договор поставки",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "Подготовить претензию",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "Поучаствовать в судебном заседании",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "Сделать запрос в исполнительную систему",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "Сделать запрос в исполнительную систему",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "Подготовить исковое заявление",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "Сделать запрос в исполнительную систему",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "Подготовить исковое заявление",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "Подготовить исковое заявление",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "Подготовить договор поставки",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "Сделать запрос в исполнительную систему",
      "completed": true
    },
    {
      "userId": 2,
      "id": 21,
      "title": "Подготовить договор поставки",
      "completed": false
    },
    {
      "userId": 2,
      "id": 22,
      "title": "Сделать запрос в исполнительную систему",
      "completed": true
    },
    {
      "userId": 2,
      "id": 23,
      "title": "Подготовить договор поставки",
      "completed": false
    },
    {
      "userId": 2,
      "id": 24,
      "title": "Подготовить исковое заявление",
      "completed": false
    },
    {
      "userId": 2,
      "id": 25,
      "title": "Поучаствовать в судебном заседании",
      "completed": true
    },
    {
      "userId": 2,
      "id": 26,
      "title": "Сделать запрос в исполнительную систему",
      "completed": true
    },
    {
      "userId": 2,
      "id": 27,
      "title": "Поучаствовать в судебном заседании",
      "completed": true
    },
    {
      "userId": 2,
      "id": 28,
      "title": "Поучаствовать в судебном заседании",
      "completed": false
    },
    {
      "userId": 2,
      "id": 29,
      "title": "Сделать запрос в исполнительную систему",
      "completed": false
    },
    {
      "userId": 2,
      "id": 30,
      "title": "Подготовить претензию",
      "completed": true
    },
    {
      "userId": 2,
      "id": 31,
      "title": "Подготовить претензию",
      "completed": false
    },
    {
      "userId": 2,
      "id": 32,
      "title": "Подготовить претензию",
      "completed": false
    },
  ];

const usersId = [1, 2];
const labels = ['Иванов И.И.', 'Константинопольский К.К.'];
const abb = ['Иск', 'Суд', 'Претензия', 'Поставка', 'Аренда', 'ОИП'];

// const dataJSON = JSON.stringify(dataJson);
// const data = JSON.parse(dataJSON);

//Блок кода для диаграммы, показывающей количество всех задач у каждого юриста
function getNumberOfAllTasks(data, userId) {
  let numberOfAllTasks = 0; 
  for (let i = 0; i < data.length; i++) {
    if (data[i].userId == userId) {
      numberOfAllTasks +=1;
    }
  }
  return numberOfAllTasks;  
}

function createChartDataNumberOfAllTasks(data, usersId) {
  let chartDataNumberOfAllTasks = [];
  usersId.forEach(el => {
  chartDataNumberOfAllTasks.push(getNumberOfAllTasks(data, el))
});
  return chartDataNumberOfAllTasks;
}

let chartDataNumberOfAllTasks = createChartDataNumberOfAllTasks(dataJson, usersId);

//Блок кода для подсчета данных по видам задач: количество и исполнитель

window.addEventListener('DOMContentLoaded', () => {
  createLegend();
  new Chartist.Bar('.ct-chart-user1', data1, options, responsiveOptions);
  new Chartist.Bar('.ct-chart-user2', data2, options, responsiveOptions);
});

//Функция получает виды задач
function getTasksNames(data) {
  let tasksNames = [];
  for (let i = 0; i < data.length; i++) {
    tasksNames.push(data[i].title)
  }
  return [...new Set(tasksNames)];
}

let chartDataTasksNames = getTasksNames(dataJson);

//Функция вносит виды задач в легенду
function createLegendItem(field, abb) {
  const legend = document.querySelector('.legend__items');
  const legendItem = document.createElement('li');
  legendItem.classList = 'legend__item';
  legendItem.innerHTML = `<b>${abb}</b> - ${field}`;
  legend.append(legendItem);
}

//Функция заполняет легенду
function createLegend() {
  for (let i = 0; i < chartDataTasksNames.length; i++) {
    createLegendItem(chartDataTasksNames[i], abb[i]);
  };
}

//Код собирает данные для статистики по задачам

function createUserTaskStatistics(user, data, numbers, name) {
  let k = [0, numbers[0]];
  let l = [numbers[0]+1, numbers[0]+numbers[1]];
  for(let i = 0; i < data.length; i++) {
    if (data[i].userId == user) {
      let task1Info = {
        taskCompleded : 0,
        taskFailed : 0,
      };
      for (let j = k[0]; j < k[1]; j++) {
        if (data[j].title == name) {
          data[j].completed ? task1Info.taskCompleded++ : task1Info.taskFailed++;
        }
      }
      return task1Info;
    } else {
      let task2Info = {
        taskCompleded : 0,
        taskFailed : 0,
      };
      for (let j = l[0]; j < l[1]; j++) {
        if (data[j].title == name) {
          data[j].completed ? task2Info.taskCompleded++ : task2Info.taskFailed++;
        }
      }
      return task2Info;
    }
  }
}


function createUserTasksStatistics() {
  let usersInfo = [];
  for (let user of usersId) {
    let tasksInfo = [];
    chartDataTasksNames.forEach(el => tasksInfo.push(createUserTaskStatistics(user, dataJson, chartDataNumberOfAllTasks, el)));
    usersInfo.push(tasksInfo);
  }

  return usersInfo;
}


let chartDataHoleStat = createUserTasksStatistics();

const ctxAllTasks = document.getElementById('сhart-all-tasks');

new Chart(ctxAllTasks, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: 'Всего задач',
      data: chartDataNumberOfAllTasks,
      borderWidth: 1,
      backgroundColor: [
        'rgb(84, 154, 255)',
        'rgb(214, 228, 255)',
      ],
      
      hoverOffset: 4,
    }]
  },
});





let user1ChartDataTasksStat = [[], []];
let user2ChartDataTasksStat = [[], []];

function fillArr(holeData, finalArr, qual, num) {
    for (let i = 0; i < holeData[num].length; i++) {
      finalArr.push(holeData[num][i][qual]);
    }
    return finalArr;
}

fillArr(chartDataHoleStat, user1ChartDataTasksStat[0], "taskCompleded", 0);
fillArr(chartDataHoleStat, user1ChartDataTasksStat[1], "taskFailed", 0);
fillArr(chartDataHoleStat, user2ChartDataTasksStat[0], "taskCompleded", 1);
fillArr(chartDataHoleStat, user2ChartDataTasksStat[1], "taskFailed", 1);

const data1 = {
  labels: abb,
  series: user1ChartDataTasksStat
};

const data2 = {
  labels: abb,
  series: user2ChartDataTasksStat
};

const options = {
  seriesBarDistance: 10
};

const responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const ctxLine = document.getElementById('сhart-line');

new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: abb,
    datasets: [{
      label: "юрист: "+labels[0],
      data: user1ChartDataTasksStat[0],
      borderWidth: 3,
      pointStyle: 'rect',
      backgroundColor: [
        'rgb(84, 154, 255)',
      ],
      
      hoverOffset: 4,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
      }
    }
  }
});
