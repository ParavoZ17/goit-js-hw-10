import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('#startBtn');
const inputDate = document.querySelector('#datetime-picker');
inputDate.disabled = false;
const span = document.querySelectorAll('.value');
let timer = 0;
let selectedDate =0;
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
    const newDate = new Date().getTime();
    if (selectedDate > newDate){
    
    timer = selectedDate - newDate;
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
 } else {
  startBtn.disabled = true;
  inputDate.disabled = false;
  inputDate.value ='';
 }
 }, 1000);
});

const onClose = selectedDates => {
  console.log(selectedDates[0]);
  if (selectedDates[0].getTime() > new Date().getTime()) {
    startBtn.disabled = false;
    selectedDate = selectedDates[0].getTime();
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
