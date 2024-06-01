import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const formData = {
    delay:'',
    state:'rejected',
}

form.addEventListener ('input', (event)=>{
    formData[event.target.name] = event.target.value;

})

form.addEventListener ('submit', (event)=>{
    event.preventDefault();
    let promise = new Promise ((resolve, rejected)=> {
        if (formData.state === 'fulfilled'){
        setTimeout (()=>{
        resolve(formData.delay);
        },formData.delay)
        }
        else { 
        setTimeout (()=>{
        rejected(formData.delay);
        },formData.delay)
        };
    })
    promise.then(delay => {
        iziToast.success({
            position: 'topRight',
            message: `✅ Fulfilled promise in ${delay}ms`
        });
    })
    .catch(delay => {
        iziToast.error({
            position: 'topRight',
            message: `❌ Rejected promise in ${delay}ms`
        });
    })
})

