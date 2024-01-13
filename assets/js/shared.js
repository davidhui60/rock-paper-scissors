function check_password (page,failLocation='../index.html') {
  const userName = String(prompt(page + " page\nEnter in the username ",""));
  const password = get_password(page,userName);
  const x = String(prompt("Enter in the password ","")).trim();
  if (x !== password) {
    alert("Wrong password or username " + userName + " " + x)
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