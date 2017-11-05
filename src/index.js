import './index.css';

import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {

  let usersBody = "";
  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  var kerro = (x, y) => x * y;
  var lisaa = (x, y) => x + y;
  var vahenna = (x, y) => x - y;

  function yht(x, y) {
    return kerro(x,y) + lisaa(x,y) + vahenna(x,y);
  }

function peroFunctio(x) {
  return x+"pero";
}

console.log(peroFunctio("rin"));
  console.log(yht(2,8));


  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getELementsByClassname only return an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
