const nonefinish = document.querySelector(".nonefinish")
const removebtn = document.querySelector(".removebtn")
const finishbtn = document.querySelector(".finishbtn")
let id = 0;

function datetimeformate (date) {
    const time_control = Math.floor(date.getHours()/12)
    const time_path = ["AM","PM"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    return `${months[date.getMonth()+1]} ${date.getDate()},${date.getFullYear()} at ${(date.getHours()%12).toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${time_path[time_control]}`;
}

function sorttime (containerseletor){
    const container = document.querySelector(containerseletor)
    const items = Array.from(container.querySelectorAll("li"))
    items.sort((a,b) => {
        const dataA = new Date(a.querySelector('.datetime').textContent.trim())
        console.log(dataA)
        const dataB = new Date(b.querySelector(".datetime").textContent.trim())
        console.log(dataB)
        return dataA - dataB
    })
    container.innerHTML = ''
    items.forEach(item => {
        const dateElement = item.querySelector(".datetime");
        const rawDate = new Date(dateElement.textContent.trim());
        dateElement.textContent = datetimeformate(rawDate);
        container.appendChild(item);
    });
}

function newlist() {
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value
    const data_id = document.querySelector(".nonefinish > ul")
    const datetime = new Date(document.querySelector("#datetime").value)
    data_id.innerHTML +=
    `
    <li class="data-id${++id}">
        <span class="title"><strong>${title}</strong></span><br>
        <span class="content">${content}</span><br>
        <span class="datetime"><i>${datetimeformate(datetime)}</i></span><br>
        <button class="removebtn" onclick="removelist(${id})">刪除</button>
        <button class="finishbtn" onclick="finishlist(${id})">完成</button>
    </li>
    `
    sorttime(".nonefinish ul")
}

function removelist(id){
    const li = document.querySelectorAll(`.data-id${id}`)
    li.forEach(index => {
        console.log(index)
        index.remove()
    })
}

function finishlist(id){
    const finish = document.querySelector(".finish > ul")
    const li = document.querySelector(`.data-id${id}`)
    const finishButton = li.querySelector(".finishbtn");
    finishButton.remove()
    finish.append(li)
}


list1 = new Array ("apple","banana","water")
list2 = new Array (1,2,4,3,5)
list3 = new Array (true,false)
a = new Array (list1,list2,list3)

for (i=0;i < 3;i++){
    for (j=0; j < 5; j++){
        if (a[i][j] == undefined){
            a[i].push("0")
        }
    }
    document.write(a[i] + "<br>")
}