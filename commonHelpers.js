import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as h}from"./assets/vendor-77e16229.js";const n=document.querySelector("#startBtn"),o=document.querySelector("#datetime-picker");o.disabled=!1;const p=document.querySelectorAll(".value");let a=0,i=0;function b(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:m}}function g(e){return e.toString().padStart(2,"0")}n.addEventListener("click",()=>{n.disabled=!0,o.disabled=!0;const e=setInterval(()=>{const r=new Date().getTime();if(i>r){a=i-r;const l=b(a);if(a<=0)clearInterval(e),o.disabled=!1;else{a-=1e3;const s=Object.values(l);for(let t=0;t<=s.length-1;t++)p[t].textContent=g(s[t])}}else n.disabled=!0,o.disabled=!1,o.value=""},1e3)});const y=e=>{console.log(e[0]),e[0].getTime()>new Date().getTime()?(n.disabled=!1,i=e[0].getTime()):(n.disabled=!0,h.error({position:"topRight",message:"Please choose a date in the future"}))},v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:y};f("#datetime-picker",v);
//# sourceMappingURL=commonHelpers.js.map