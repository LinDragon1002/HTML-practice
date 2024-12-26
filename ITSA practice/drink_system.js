const drinkname = document.querySelector('.name')
const size = document.querySelector('.size')
const price = document.querySelector('.price')
const count = document.querySelector('.count > input')
const total = document.querySelector('.total')
const temp = document.querySelector('.temp')
const sweet = document.querySelector('.sweet')
const person = document.querySelector('.person > input')
const show = document.getElementById('show')
const p = document.querySelector('.btnbox > p')
let prices = 0
let id = 0

class Drink {
    constructor(drinkname, size, price, count, total, temp, sweet, person) {
        this.drinkname = drinkname
        this.size = size
        this.price = price
        this.count = count
        this.total = total
        this.temp = temp
        this.sweet = sweet
        this.person = person
    }
}

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
    console.log(count.value)
    if (isNaN(count.value)) {
        count.value = 0
    }
    total.innerHTML = prices * count.value
})

function clearinp() {
    drinkname.selectedIndex = 0
    size.selectedIndex = 0
    price.innerHTML = 0
    total.innerHTML = 0
    count.value = 0
    temp.selectedIndex = 0
    sweet.selectedIndex = 0
    person.value = ''
}

function totalpricescount() {
    const alltr = document.querySelectorAll('.ans > tbody > tr')
    let temp = 0
    alltr.forEach((name,index) => {
        if (index > 0){
            temp += parseInt(name.children[5].textContent)
        }
    })
    p.innerHTML = `總計:${alltr.length-1}份${temp}元`
}

function sumbit() {
    show.style.display = 'flex'
    const drink = new Drink(drinkname[drinkname.selectedIndex].textContent,
                            size[size.selectedIndex].textContent,
                            prices,
                            count.value,
                            total.innerHTML,
                            temp[temp.selectedIndex].textContent,
                            sweet[sweet.selectedIndex].textContent,
                            person.value)
    const ans = document.querySelector('.ans > tbody')
    ans.innerHTML +=
    `
    <tr class="data-id${++id}">
        <td><input type="checkbox" name="" class="checkbox data-id${id}"></td>
        <td>${drink.drinkname}</td>
        <td>${drink.size}</td>
        <td>${prices}</td>
        <td>${drink.count}</td>
        <td>${drink.total}</td>
        <td>${drink.temp}</td>
        <td>${drink.sweet}</td>
        <td>${drink.person}</td>
    </tr>
    `
    totalpricescount()
    clearinp()
}


function del() {
    const checkbox = document.querySelectorAll('.checkbox')
    checkbox.forEach(name => {
        if (name.checked) {
            const data = document.querySelector('.data-id' + name.classList[1].slice(7))
            data.remove()
        }
    });
    totalpricescount()
}

function buy(){
    print(document.querySelector('#show > table'))
}