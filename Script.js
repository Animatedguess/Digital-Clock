
const nowTime = document.getElementById("text");
setInterval(function(){
    let date = new Date();
    nowTime.innerHTML=date.toLocaleTimeString();
    // location.reload();
},100) 