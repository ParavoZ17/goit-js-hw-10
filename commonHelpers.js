import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as d}from"./assets/vendor-77e16229.js";const r=document.querySelector("#startBtn");function m(t){const a=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:c,seconds:u}}const h=t=>{console.log(t[0]);const n=new Date().getTime();if(t[0].getTime()>n){r.disabled=!1;let s=t[0].getTime()-n;const e=document.querySelectorAll(".value");r.addEventListener("click",()=>{setInterval(()=>{const o=m(s);s-=1e3,e[0].textContent=o.days,e[1].textContent=o.hours,e[2].textContent=o.minutes,e[3].textContent=o.seconds},1e3)})}else d.error({position:"topRight",message:"Please choose a date in the future"})},f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:h};l("#datetime-picker",f);
//# sourceMappingURL=commonHelpers.js.map
