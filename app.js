const correctAnswers=['b','b','b','b']

const form= document.querySelector('form');
const result=document.querySelector('.result-show')
const hideResult=document.querySelector('.result')

form.addEventListener('submit',e=>{
    e.preventDefault();
     let score=0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score +=25;
        }
    })
    hideResult.style.display='inline';
    scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    let timerCounter=0;
    
    let timer=setInterval(() => {
        result.textContent = `${timerCounter} %`;
        
        if(timerCounter===score){
            
            clearInterval(timer)
        }else{
            timerCounter++
        }
    }, 10);
    
    
})