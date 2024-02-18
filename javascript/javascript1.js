// For scrolling
const scrollIntoSection=document.getElementById('buy-tickets').addEventListener('click',function(){
    const section=document.getElementById('scroll-section');
    section.scrollIntoView({behavior:"smooth"}); 
})
// Changing color of buttons
const buttons=document.querySelectorAll('.seat-button');
buttons.forEach(function(button){
    button.addEventListener('click',function(){
        button.style.backgroundColor='#1DD100';
    })
})

