const drinkname = document.querySelector('.name')
const size = document.querySelector('.size')
const price = document.querySelector('.price')
const count = document.querySelector('.count')
const total = document.querySelector('.total')
const temp = document.querySelector('.temp')
const sweet = document.querySelector('.sweet')
const person = document.querySelector('.person')
let prices = 0


drinkname.addEventListener('change', function() {
    if (drinkname[drinkname.selectedIndex].textContent ==  '紅茶') {
        prices = 100
    } else if (drinkname[drinkname.selectedIndex].textContent == '奶茶') {
        prices = 120
    } else if (drinkname[drinkname.selectedIndex].textContent == '綠茶') {
        prices = 80
    } else if (drinkname[drinkname.selectedIndex].textContent == '紅茶拿鐵') {
        prices = 130
    }
    price.innerHTML = prices
})

size.addEventListener('change', function() {
    if (size[size.selectedIndex].textContent == '中杯') {
        prices += 5
    } else if (size[size.selectedIndex].textContent == '大杯') {
        prices += 10
    }
    price.innerHTML = prices
})

count.addEventListener('input', function() {
    console.log(count.textContent)
    total.innerHTML = prices * count.value
})







function sumbit() {

}