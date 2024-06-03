import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('#startBtn');
const inputDate = document.querySelector('#datetime-picker');
inputDate.disabled = false;
const span = document.querySelectorAll('.value');
let timer = 0;
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(num) {
  return num.toString().padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  inputDate.disabled = true;
  const intervalId = setInterval(() => {
    const time = convertMs(timer);
    if (timer <= 0) {
      clearInterval(intervalId);
      inputDate.disabled = false;
    } else {
      timer -= 1000;
      const arrTime = Object.values(time);
      for (let i = 0; i <= arrTime.length - 1; i++) {
        span[i].textContent = addZero(arrTime[i]);
      }
    }
  }, 1000);
});

const onClose = selectedDates => {
  console.log(selectedDates[0]);
  const newDate = new Date().getTime();
  if (selectedDates[0].getTime() > newDate) {
    startBtn.disabled = false;
    timer = selectedDates[0].getTime() - newDate;
  } else {
    startBtn.disabled = true;
    iziToast.error({
      position: 'topRight',
      message: 'Please choose a date in the future',
    });
  }
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

flatpickr('#datetime-picker', options);
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const startBtn = document.querySelector('#startBtn');
// const inputDate = document.querySelector('#datetime-picker');
// inputDate.disabled = false;

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addZero(num) {
//   return num.toString().padStart(2, '0');
// }

// let timer = 0;

// const onClose = selectedDates => {
//   console.log(selectedDates[0]);
//   const newDate = new Date().getTime();
//   if (selectedDates[0].getTime() > newDate) {
//     startBtn.disabled = false;
//     timer = selectedDates[0].getTime() - newDate;
//   } else {
//     iziToast.error({
//       position: 'topRight',
//       message: 'Please choose a date in the future',
//     });
//   }
// };

// startBtn.addEventListener('click', () => {
//   startBtn.disabled = true;
//   inputDate.disabled = true;
//   const span = document.querySelectorAll('.value');
  
//   const intervalId = setInterval(() => {
//     const time = convertMs(timer);
//     if (timer <= 0) {
//       clearInterval(intervalId);
//     } else {
//       timer -= 1000;
//       const arrTime = Object.values(time);
//       for (let i = 0; i < arrTime.length; i++) {
//         span[i].textContent = addZero(arrTime[i]);
//       }
//     }
//   }, 1000);
// });

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose,
// };

// flatpickr('#datetime-picker', options);
