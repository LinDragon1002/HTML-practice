const nonefinish = document.querySelector(".nonefinish")
const removebtn = document.querySelector(".removebtn")
const finishbtn = document.querySelector(".finishbtn")
let id = 0;

function newlist() {
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value
    const datetime = document.querySelector("#datetime").value
    nonefinish.innerHTML +=
    `
    <ul class="data-id${++id}">
        <li class="title"><strong>${title}</strong></li>
        <li class="content">${content}</li>
        <li class="datatime"><i>${datetime}</i></li>
        <button class="removebtn" onclick="removelist(${id})">刪除</button>
        <button class="finishbtn" onclick="finishlist(${id})">完成</button>
    </ul>
    `
}

function removelist(id){
    const ul = document.querySelector(`.data-id${id}`)
    ul.remove()
}

function finishlist(id){
    const finish = document.querySelector(".finish")
    const ul = document.querySelector(`.data-id${id}`)
    finish.append(ul)
    ul.lastChild.remove(finishbtn)
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