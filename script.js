let hour = document.querySelector('.soat');
let minute = document.querySelector('.minute');
let second = document.querySelector('.sekund');


function clock() {

    const time = new Date();

    let hourArrow = time.getHours();
    let minuteArrow = time.getMinutes();
    let secondArrow = time.getSeconds();
    
  
    hour.innerHTML = hourArrow
    minute.innerHTML = minuteArrow
    second.innerHTML = secondArrow
   
  
    hour.innerHTML =  hourArrow < 10  ?  '0' + hourArrow  : hourArrow;
    minute.innerHTML = minuteArrow < 10  ? '0' + minuteArrow  : minuteArrow;
    second.innerHTML = secondArrow < 10  ?  '0' + secondArrow  : secondArrow;

    


    
    
    
}
setInterval(clock, 1000)

clock()