function check_password (page,failLocation='../index.html') {
  const userName = String(prompt(page + " page\nEnter in the user name ",""));
  const password = get_password(page,userName);
  const x = String(prompt("Enter in the password ",""));
  if (x !== password) {
    alert("Wrong password " + x)
    window.location = failLocation;
  }
}

//page,userName,password,who
let passwords = ""
passwords += "family,david,kph#0417,David Hui\n"
passwords += "family,ellen,wong#1628,Ellen Hui\n"
passwords += "family,PlaHui68@,HuiPla68#,Minx Hui\n"
passwords += "family,PlaHui68@,HuiPla68#,Anthony Hui\n"
passwords += "family,hui,password,temp password\n"

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
    if ((row[0] === page) && (row[1] === userName)) {
      return row[2]
    }
    i++;
  }
  return false
}