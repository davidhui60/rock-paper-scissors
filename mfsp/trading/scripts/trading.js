
// let checkList = document.getElementById('list1');
// checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }

function filter_action(myType,myCheck) {
  let checkBox = document.getElementById(myCheck);
  let myClasses = document.querySelectorAll(myType),
    i = 0,
    l = myClasses.length;
  if (checkBox.checked == true){
    for (i; i < l; i++) {
      myClasses[i].style.display = "block";
    }
  } else {
    for (i; i < l; i++) {
      myClasses[i].style.display = "none";
    }
  }
}

// The following routine clear and set all checkboxes
const btns = ['cbnt-na', 'cbnt-buy', 'cbnt-sell', 'cbnt-cancel', 'cbnt-bought', 'cbnt-sold']

const types = ['.no-action', '.buy', '.sell', '.cancel', '.bought', '.sold']

function select_all(myType) {
  let checkBox = document.getElementById("cbnt-select"), 
    i = 0,
    l = btns.length;
  if (checkBox.checked == true) {
    for (i; i < l; i++) {
      document.getElementById(btns[i]).checked = true;
      filter_action(types[i],btns[i])
    }
  } else {
    for (i; i < l; i++) {
      document.getElementById(btns[i]).checked = false;
      filter_action(types[i],btns[i])
    }
  }

}