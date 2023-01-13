let like= document.querySelectorAll('.like')
let minus = document.querySelectorAll('.minus-btn')
let quantity =document.querySelectorAll('.Quant')
let plus =document.querySelectorAll('.plus-btn')
let close =document.querySelectorAll('.delete')
let pricee = document.querySelectorAll('.price')
let totalPrice=document.querySelector('#finalPrice')
// like
total()
for(let i=0;i<like.length;i++){
    like[i].addEventListener('click',function (){
        if (like[i].style.color=== "red"){
            like[i].style.color= "black"
        }
        else {like[i].style.color= "red"}
    })
            //plus
            
            plus[i].addEventListener('click', function () {
                quantity[i].value++
                total()
            })   
            //minus
            minus[i].addEventListener('click',function(){
            if(quantity[i].value>1) { quantity[i].value --} 
            total() 
            })
            //delete
            total()
            close[i].addEventListener('click',function() {
                close[i].parentElement.remove()
            })

    
}
//price
total()
function total() {
    let pricee = document.querySelectorAll('.price')
    let quantity =document.querySelectorAll('.Quant')

    let sum = 0
    for (let i = 0; i<quantity.length; i++){
        sum+= quantity[i].value * pricee[i].innerText
    }
    totalPrice.value=sum

    console.log(totalPrice)
}

console.log(totalPrice)


