let input = document.getElementById("new-task");
let taskname = document.getElementById("task-name")
var listsec = document.getElementById("list-section");
let newlist = document.createElement('div');

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
    content += `<div><input type="checkbox" value="completed" id="button-${i}" onclick="toggleStrikeThrough(${i})">
        ${key} | ${value}
    </div><button id="delete" onclick="deleteTask('${key}')">DELETE</button><hr>`;
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
  console.log(taskid, newtask)
  localStorage.setItem(taskid, newtask)  
  newlist.innerHTML += `<input type="checkbox" value="clicked" id="button" >${taskid} | ${newtask}<button id="delete" onclick="deleteTask('${taskid}')">DELETE</button> <hr>`;
  listsec.append(newlist)
  input.value = " ";
  taskname.value = " ";  


}

let submit = document.getElementById("submit")
submit.addEventListener('click', takevalue);




// let input = document.getElementById("new-task");
// let taskname = document.getElementById("task-name");
// var listsec = document.getElementById("list-section");
// let newlist = document.createElement('div');

// function toggleStrikeThrough(index) {
//     const label = document.querySelector(`[for="button-${index}"]`);
//     const isChecked = label.classList.toggle('checked');
//     localStorage.setItem(label.innerText.split(' | ')[0] + '-checked', isChecked.toString());
// }

// function displayAllLocalStorageContent() {
//     var content = '';
//     for (var i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         var value = localStorage.getItem(key);
//         content += `<div><input type="checkbox" value="completed" id="button-${i}" onclick="toggleStrikeThrough(${i})">
//         <label for="button-${i}" class="${localStorage.getItem(key + '-checked') === 'true' ? 'checked' : ''}">
//             ${key} | ${value}
//         </label> </div><hr>`;
//         newlist.innerHTML = content || '<p>NO TASKS ADDED YET.</p>';
//     }

//     listsec.appendChild(newlist);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     displayAllLocalStorageContent();
// });

// function takevalue() {
//     let newtask = input.value;
//     let taskid = taskname.value;
//     localStorage.setItem(taskid, newtask);
//     newlist.innerHTML += `<div><input type="checkbox" value="clicked" id="button"> ${newtask}<hr></div>`;
//     listsec.append(newlist);
//     input.value = "";
//     taskname.value = "";
// }

// let submit = document.getElementById("submit");
// submit.addEventListener('click', takevalue);

