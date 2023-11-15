let input = document.getElementById("new-task");
let taskname = document.getElementById("task-name")
var listsec = document.getElementById("list-section");
let newlist = document.createElement('div');
let date = document.getElementById('date');
let month = document.getElementById('month');
let hour = document.getElementById('hour')
let min = document.getElementById('min')
let am_pm = document.getElementById('am-pm');

function toggleStrikeThrough(index) {
  const label = document.querySelector(`[for="button-${index}"]`);
  const isChecked = label.classList.toggle('checked');
  localStorage.setItem(label.innerText.split(' | ')[0] + '-checked', isChecked.toString());
}


function deleteTask(taskid) {
  localStorage.removeItem(taskid);
  location.reload();

  // displayAllLocalStorageContent();
}
// localStorage.clear();
function displayAllLocalStorageContent() {
  var content = '';
  var newlist = document.createElement('div'); // Assuming `newlist` is defined somewhere in your code

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    // Skip keys "username" and "email"
    if (key === "username" || key === "email") {
      continue;
    }

    var value = localStorage.getItem(key);
    var parsedvalue = JSON.parse(value);
    content += `<div id="list"><input type="checkbox" value="completed" id="button-${i}" onclick="toggleStrikeThrough(${i})">
        ${key} | ${parsedvalue.task} <div id="end-date"> ${parsedvalue.hour}:${parsedvalue.min}${parsedvalue.am_pm} , ${parsedvalue.date}/${parsedvalue.month}</div>
        <img  id="delete"src="dlt-icon.jpg" onclick="deleteTask('${key}')"></div><hr>`;
  }

  newlist.innerHTML = content;
  listsec.appendChild(newlist); // Assuming `listsec` is defined somewhere in your code
}

document.addEventListener('DOMContentLoaded', function () {
  displayAllLocalStorageContent();
});



// Function that take value of task name and task description and put it into the localstroage as key and value
function takevalue() {
  let newtask = input.value;
  let taskid = taskname.value;
  console.log(taskid, newtask, hour.value, min.value, month.value, date.value)

  var timedate = {
    task: newtask,
    hour: hour.value,
    min: min.value,
    date: date.value,
    month: month.value,
    am_pm: am_pm.value,

  };


  localStorage.setItem(taskid, JSON.stringify(timedate))
  newlist.innerHTML += `<div id="list"><input type="checkbox" value="clicked" id="button" >${taskid} | ${newtask} <div id="end-date"> ${hour.value}:${min.value}${am_pm.value} , ${date.value}/${month.value} </div><img src="dlt-icon.jpg" id="delete" onclick="deleteTask('${taskid}')"></div><hr>`;
  listsec.append(newlist)
  input.value = " ";
  taskname.value = " ";


}

let submit = document.getElementById("submit")
submit.addEventListener('click', takevalue);




