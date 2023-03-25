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
console.log(chartDataTasksNames);

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

// function getTaskStatistics(elem, data) {
//     let taskInfo = {
//       taskCompleded : 0,
//       taskFailed : 0,
//     }

//     if (elem == data.title) {
//       data.completed ? taskInfo.taskCompleded++ : taskInfo.taskFailed++;
//     }
//     return taskInfo;
// }

// console.log(getTaskStatistics(chartDataTasksNames[0], dataJson[0]))

// function getTasksStatistics(tasksNames, data, userId) {
//     let tasksInfo = [];
//     tasksNames.forEach(el => {
//       if (data.userId == userId) {
//         tasksInfo.push(getTaskStatistics(el, data));
//       }
//     })
//     return tasksInfo;
// }

// console.log(getTasksStatistics(chartDataTasksNames, dataJson[1], 1))

// function createChartDataUserTasksStatistics(data, usersId) {
//   let userTasksStatistics = [];
//   usersId.forEach(el => {
//     userTasksStatistics.push(getTasksStatistics(chartDataTasksNames, dataJson, el))
// });
//   return userTasksStatistics;
// }


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


let user1ChartDataTasksStat = [
  [2, 1, 2, 2, 3, 0],
  [2, 1, 3, 1, 0, 2]
];

let user2ChartDataTasksStat = [
  [0, 4, 3, 2, 2, 4],
  [1, 0, 1, 1, 3, 0]
];

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


