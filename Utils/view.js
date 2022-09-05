

export default document.getElementById('outlet');

export let index = 1;



setInterval(() => {
    if(index === 5){
        index = 0
    }else{
        index++
    }
}, 3000);