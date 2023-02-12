import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <form onsubmit="detail(e)">
  <div class="fname">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  </div>
  <br><br>
  <div class="cont">
  <label for="phone">Contact:</label>
  <input type="tel" id="phone" name="phone">
  </div>
  <br><br>
  <div class="elect">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  </div>
  <br><br>
  <input type="submit" value="Submit">
</form>
  </div>
`

function detail(e) {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var phone = document.querySelector("#phone").value;
  var email = document.querySelector("#email").value;

  if (!name || !phone || !email) {
    alert("user must enter their details before accessing the page");
    return;
  }

  var randomUser = { name: name, phone: phone, email: email };
  localStorage.setItem('user', JSON.stringify(randomUser));
  windows.location.href = 'main2.js';
}

setupCounter(document.querySelector('#counter'))
