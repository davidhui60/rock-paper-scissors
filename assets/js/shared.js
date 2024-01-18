function check_password (page,failLocation='../index.html') {
  const userName = String(prompt(page + " page\nEnter in the username ",""));
  const password = get_password(page,userName);
  const x = String(prompt("Enter in the password ","")).trim();
  if (x !== password) {
    alert("Wrong username or password: " + userName + " " + x)
    window.location = failLocation;
  }
}

//page,userName,password,who
let passwords = ""
passwords += "family,david,kph#0417Plac,David Hui\n"
passwords += "family,ellen,wong#1628Plac,Ellen Hui\n"
passwords += "family,PlaHui68@,HuiPla68#,Minx Hui\n"
passwords += "family,PlaHui68@,HuiPla68#,Anthony Hui\n"
passwords += "family,hui,password,temp password\n"
passwords += "trading,david,kph#0417Plac,David Hui\n"
passwords += "trading,stevet,Steve@111,Steve Toto\n"
passwords += "trading,greg,Greg@111,Greg\n"

function split_csv(csv) {
  const rows = csv.split('\n')
  const pwArray = rows.map(row => row.split(','));
  return pwArray
}

function get_password(page,userName) {
  const pwArray = split_csv(passwords)
  let i = 0;
  while (i < pwArray.length) {
    let row = pwArray[i]
    if ((row[0] === page) && (row[1].toLowerCase() === userName.toLowerCase())) {
      return row[2]
    }
    i++;
  }
  return false
}

//gallery,user,code
let accesscode = ""
// accesscode += "alaska 2023,david,123456\n"

function get_accesscode(gallery,userName) {
  accArray = split_csv(accesscode)
  let i = 0;
  while (i < accArray.length) {
    let row = accArray[i]
    if ((row[0] === gallery) && (row[1].toLowerCase() === userName.toLowerCase())) {
      return row[2]
    }
    i++
  }
  return false
}

function check_accesscode (gallery,userName,failLocation='../../index.html') {
  const accesscode = get_accesscode(gallery,userName);
  if (accesscode === false) {
    return
  }
  const x = String(prompt("Enter in the accesscode ","")).trim();
  if ( x !== accesscode) {
    alert("Wrong accesscode" + " " + x)
    window.location = failLocation;
  }
}