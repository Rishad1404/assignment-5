// For scrolling
const scrollIntoSection=document.getElementById('buy-tickets').addEventListener('click',function(){
    const section=document.getElementById('scroll-section');
    section.scrollIntoView({behavior:"smooth"}); 
})

// Getting the buttons
let totalCost=0;
let selectedSeatCount=0;
let totalSeatsNumber=40;
let count=0;
const buttons=document.getElementsByClassName('seat-button');
for(const button of buttons){
    // const button=buttons[index];
    // console.log(element)
    button.addEventListener('click',function(){
        // console.log('clicked')
        showElementById('increasing-seats');
        // Button Background Color
        button.style.backgroundColor='#1DD100';
        
        if(count>=4){
            button.style.backgroundColor='#F7F8F8';
            alert('You cannot select more than 4 seats!');
            p.innerText="";
        }   

        // Append in the calculation Div
       
        const seatNumber=button.querySelector('p').innerText;
        const titleContainer=document.getElementById('selected-seat');
        
        const p=document.createElement('p')
        p.innerText=seatNumber;
        titleContainer.appendChild(p)

        const p1=document.createElement('p')
        p1.innerText='Economy';
        titleContainer.appendChild(p1)

        const p2=document.createElement('p')
        p2.innerText='550';
        titleContainer.appendChild(p2)

        
        

        // Subtracting the seat numbers
        count=count+1;
        selectedSeatCount=totalSeatsNumber-count;

        document.getElementById('decreasing-seats').innerText=selectedSeatCount;
        document.getElementById('increasing-seats').innerText=count;


        // Calculating 
        const price=parseFloat(p2.innerText);

        totalCost+=price;

        document.getElementById('total-cost').innerText=totalCost;
        
    })
}

const btn=document.getElementById('apply-btn');
btn.addEventListener('click',function(){
    
    const couponElement=document.getElementById('input-coupon').value;
    const couponCode=couponElement.split(" ").join(" ");
        if(count===4){
             if(couponCode==='NEW15'){
                const discountElement=document.getElementById('total-discount');
                const discountAmount=totalCost*.15;
                discountElement.innerText=discountAmount.toFixed(2);

                // Total
                showElementById('hidden-element');
                const grandTotal=document.getElementById('grand-total');
                grandTotal.innerText=totalCost-discountAmount.toFixed(2); 
             }
             else if(couponCode==='Couple 20'){

                const discountElement=document.getElementById('total-discount');
                const discountAmount=totalCost*.2;
                discountElement.innerText=discountAmount.toFixed(2);

                // Total
                showElementById('hidden-element');
                const grandTotal=document.getElementById('grand-total');
                grandTotal.innerText=totalCost-discountAmount.toFixed(2); 
             }
             else{
                alert('Invalid Coupon');
             }

        }
        else{
            alert('You have to purchase 4 tickets to avail the coupon');
        }
        
    
})







