const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

function showTime() {
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
  const amPm = hour >= 12 ? 'P.M.' : 'A.M.';
  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n,10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date(),
      hour = today.getHours();
  if(hour < 12) {
    document.body.style.background = "url('../img/morning.jpg') no-repeat center/cover";
    greeting.textContent = 'Good Morning';
  } else if( hour < 18){
    document.body.style.background="url('../img/afternoon.jpg')  no-repeat center/cover";
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.background="url('../img/night.jpg')  no-repeat center/cover ";
    greeting.textContent = 'Good Evening';
    document.body.style.color='white'
  }
}

function getName() {
  if(localStorage.getItem('name')=== null) {
    name.textContent = '[Enter Name]'
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if(e.type === 'keypress') {
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus() {
  if(localStorage.getItem('focus')=== null) {
    focus.textContent = '[Enter Focus]'
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if(e.type === 'keypress') {
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();