const nonefinish = document.querySelector(".nonefinish")
const removebtn = document.querySelector(".removebtn")
const finishbtn = document.querySelector(".finishbtn")
let id = 0;

function datetimeformate () {
    const alltime = new Date (document.querySelector("#datetime").value)
    const time_control = Math.floor(alltime.getHours()/12)
    const time_path = ["AM","PM"]
    let formatetime = `${alltime.getMonth()+1} ${alltime.getDate()},${alltime.getFullYear()} at ${alltime.getHours()%12}:${alltime.getMinutes()} ${time_path[time_control]}`
    return formatetime;
}

function newlist() {
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value
    const datetime = document.querySelector("#datetime").value
    const data_id = document.querySelector(".nonefinish > ul")
    data_id.innerHTML +=
    `
    <li class="data-id${++id}">
        <span class="title"><strong>${title}</strong></span><br>
        <span class="content">${content}</span><br>
        <span class="datetime"><i>${datetimeformate()}</i></span><br>
        <button class="removebtn" onclick="removelist()">刪除</button>
        <button class="finishbtn" onclick="finishlist()">完成</button>
    </li>
    `
}

function removelist(){
    const li = document.querySelector(`.data-id${id}`)
    li.remove()
}

function finishlist(){
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