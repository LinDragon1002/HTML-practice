const btns = document.querySelectorAll('.buttonbox > button')
const selectElement = document.querySelector('.typebox > select')
let id = 0
let newtypes = []

function leftbtns(pageIndex) {
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.set' + pageIndex).classList.add('active')
}

selectElement.addEventListener('change', () => {
    const savetypebox = document.querySelector('.savetypebox')
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    savetypebox.innerHTML +=
    `
    <div class="types deletetypes">　${selectedText}　<span onclick="deletetypes()">x　</span></div>
    `
});

function deletetypes() {
    const deletetypes = document.querySelectorAll('.deletetypes')
    deletetypes.forEach(index => {
        index.remove()
    })
}

function newlist() {
    const notetitle = document.querySelector('#title').value
    const notetypes = document.querySelector('.savetypebox').value
    const inp1 = document.querySelector('.inpbox > input')
    const inp2 = document.querySelector('.inpbox > textarea')
    const inp3 = document.querySelector('.savetypebox')
    document.querySelector('.set2 > ul').innerHTML +=
    `
    <li class="data-id${++id} All ${notetypes}">
        <article>
            <div class="title">${notetitle}</div>
            <div class="set2btnbox">
                <button class="view">閱覽</button>
                <button class="check">修改</button>
                <button class="delete" onclick="deletenote(${id})">刪除</button>
            </div>
        </article>
        <hr>
    </li>
    `
    inp1.textContent = ""
    inp2.textContent = ""
    inp3.textContent = ""
}

function deletenote(id) {
    const li = document.querySelectorAll(`.data-id${id}`)
    li.forEach(index => {
        index.remove()
    });
}

function newtype(){
    const inp = document.querySelector('#type')
    const select = document.querySelectorAll('select')
    select.forEach(id => {
        id.innerHTML +=
        `
        <option value="">${inp.value}</option>
        `
    });
    newtypes.push(inp.value)
    inp.value = ""
}

function inquiretitle(){
    const inquireinp = document.querySelector('.set5 > .settext > input').value
    const title = document.querySelectorAll('.title')
    const li = document.querySelectorAll('.set2 > ul > li')
    const viewul = document.querySelector('.checkbox > ul')
    title.forEach(name => {
        if (name.textContent.includes(inquireinp)) {
            li.forEach(indexs => {
                viewul.append(indexs)
            })
        }
    })
}

function list() {
    const all = document.querySelectorAll('.All')
    const viewlist = document.querySelector('.set2 > ul')
    all.forEach(index => {
        viewlist.append(index)
    })
    // console.log(all)
}