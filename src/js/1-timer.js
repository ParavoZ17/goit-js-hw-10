import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('#startBtn');

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

 // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


const onClose = (selectedDates)=> {
  console.log(selectedDates[0]);
  const newDate = new Date().getTime();
 if (selectedDates[0].getTime() > newDate)
  {
    startBtn.disabled = false;
    let timer = selectedDates[0].getTime() - newDate;
    
    
    const span = document.querySelectorAll('.value');
    
startBtn.addEventListener('click', () =>{
  setInterval(() => {
    const time = convertMs(timer);
    timer -= 1000;
    span[0].textContent = time.days;
  span[1].textContent = time.hours;
  span[2].textContent = time.minutes;
  span[3].textContent = time.seconds;

  }, 1000)
})
    

  
  }
else {
  iziToast.error({
  position: 'topRight',
  message: 'Please choose a date in the future'
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





