const btns = document.querySelectorAll('.buttonbox > button')
const selectElement = document.querySelector('.typebox > select')
const selectElement2 = document.querySelector('.set2types')
let id = 0
let typeid = 0
let newtypes = []
let nowusetypes = []
let allli = []
const inp1 = document.querySelector('.inpbox input')
const inp2 = document.querySelector('.inpbox textarea')
const inp3 = document.querySelector('.savetypebox')

function leftbtns(pageIndex) {
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.set' + pageIndex).classList.add('active')
}

selectElement2.addEventListener('change', () => {
    const selectedText = selectElement2.options[selectElement2.selectedIndex].text;
    document.querySelector('.set2 > ul').innerHTML = ""
    allli.forEach(index => {
        if (index.classList.contains(selectedText)) {
            document.querySelector('.set2 > ul').append(index)
        }
    })
});

selectElement.addEventListener('change', () => {
    const savetypebox = document.querySelector('.savetypebox')
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    savetypebox.innerHTML +=
    `
    <div class="types deletetypes${++typeid}">　${selectedText}　<span onclick="deletetypes(${typeid})">x　</span></div>
    `
    nowusetypes.push(selectedText)
});

function deletetypes(typeid) {
    const deletetypes = document.querySelector(`.deletetypes${typeid}`)
    nowusetypes.forEach((type,index) => {
        if (type == deletetypes.textContent.split('　')[1]) {
            nowusetypes.pop(index)
        }
    });
    deletetypes.remove()
}

function newlist() {
    const notetitle = document.querySelector('#title').value
    document.querySelector('.set2 > ul').innerHTML +=
    `
    <li class="data-id${++id} 全部 ${nowusetypes.toString().split(',').join(' ')}">
        <article>
            <div class="title">${notetitle}</div>
            <div class="content">${inp2.value}</div>
            <div class="set2btnbox">
                <button class="view" onclick="view(${id})">閱覽</button>
                <button class="check" onclick="leftbtns(4),correctlist(${id})">修改</button>
                <button class="delete" onclick="deletenote(${id})">刪除</button>
            </div>
        </article>
        <hr>
    </li>
    `
    allli.push(document.querySelector(`.data-id${id}`))
    nowusetypes = []
    inp1.value = ""
    inp2.value = ""
    inp3.textContent = ""
    selectElement.options[0].selected = true
}

function deletenote(id) {
    const deleteli = allli.find(li => li.classList.contains(`data-id${id}`))
    deleteli.remove()
    allli = allli.filter(li => !li.classList.contains(`data-id${id}`))
    inquiretitle()
}

function newtype(){
    const inp = document.querySelector('#type')
    const select = document.querySelectorAll('select')
    select.forEach(id => {
        id.innerHTML +=
        `
        <option value="" id="${inp.value}">${inp.value}</option>
        `
    });
    newtypes.push(inp.value)
    inp.value = ""
}

function inquiretitle(){
    const title = document.querySelector('#searchtitle').value
    const viewul = document.querySelector('.checkbox > ul')
    viewul.innerHTML = ""
    allli.forEach(li => {
        if (li.querySelector('.title').textContent.includes(title)) {
            console.log(li.classList)
            viewul.innerHTML +=
            `
            <li class="${li.classList.toString().split(' ').join(' ')}">
                <article>
                    <div class="title">${li.querySelector('.title').textContent}</div>
                    <div class="content">${li.querySelector('.content').textContent}</div>
                    <div class="set2btnbox">
                        <button class="view" onclick="view(${li.classList[0].slice(7)})">閱覽</button>
                        <button class="check" onclick="leftbtns(4),correctlist(${li.classList[0].slice(7)})">修改</button>
                        <button class="delete" onclick="deletenote(${li.classList[0].slice(7)})">刪除</button>
                    </div>
                </article>
                <hr>
            </li>
            `
        }
    })
}

function list() {
    document.querySelector('.set2types').options[0].selected = true
    const viewlist = document.querySelector('.set2 > ul')
    viewlist.innerHTML = ""
    allli.forEach(index => {
        viewlist.append(index)
    })
}

function view(id) {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    const title = document.querySelector('.modal-title')
    const content = document.querySelector('.modal-p')
    title.textContent = allli.find(index => index.classList.contains(`data-id${id}`)).querySelector('.title').textContent
    content.textContent = allli.find(index => index.classList.contains(`data-id${id}`)).querySelector('.content').textContent
}

function closeModel() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function correctlist(id) {
    const listtitle = allli.find(index => index.classList.contains(`data-id${id}`)).querySelector('.title')
    const listcontent = allli.find(index => index.classList.contains(`data-id${id}`)).querySelector('.content')
    const types = allli.find(index => index.classList.contains(`data-id${id}`)).classList.toString().split(' ')
    inp1.value = listtitle.textContent
    inp2.value = listcontent.textContent
    types.forEach(type => {
        if (newtypes.includes(type)) {
            inp3.innerHTML +=
            `
            <div class="types deletetypes${++typeid}">　${type}　<span onclick="deletetypes(${typeid})">x　</span></div>
            `
            nowusetypes.push(type)
        }
    })
    deletenote(id)
}
