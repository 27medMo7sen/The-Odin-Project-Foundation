let books = [{name:"Song on ice and fire" , author:"J.R.R Martin" , num:1023 , st:false},{name:"The Hobbit" , author:"J.R.R Tolkien" , num:543 , st:false}];
creatLibrary();
function book(name, author, num, st) {
  this.name = name;
  this.author = author;
  this.num = num;
  this.st = st;
  let setSt = function (sst) {
    st = sst;
  }
}
function rearrange(idx){
  books.splice(idx,1);
  creatLibrary();
}
function popupReform() {
  bname.value = '';
  aname.value = '';
  bnum.value = '';
}

const addBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".close")
const submitBtn = document.querySelector(".submit");
let popup = document.getElementById('popup');
let bname = document.querySelector('#name');
let aname = document.querySelector('#author');
let bnum = document.querySelector('#pages');
let state = document.querySelector('#ask');

addBtn.addEventListener('click', () => {
  popup.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
})
submitBtn.addEventListener('click', () => {
  books.push(new book(bname.value, aname.value, bnum.value, state.checked));
  popupReform();
  popup.style.display = 'none';
  creatLibrary();
})

function creatLibrary() {
  const container = document.querySelector('.container');
  const element = document.querySelector('.library');
  if (element) element.remove();
  const New = document.createElement('div');
  New.setAttribute('class', 'library');
  for (let i = 0; i < books.length; i++) {
    const newBook = document.createElement('div');
    newBook.setAttribute('class', 'book');
    newBook.setAttribute('id', `${i}`);
    let paragraph1 = document.createElement('p');
    let txt1 = document.createTextNode(`"${books[i].name}"`);
    paragraph1.appendChild(txt1);
    newBook.appendChild(paragraph1);
    let paragraph2 = document.createElement('p');
    let txt2 = document.createTextNode(`${books[i].author}`);
    paragraph2.appendChild(txt2);
    newBook.appendChild(paragraph2);
    let paragraph3 = document.createElement('p');
    let txt3 = document.createTextNode(`${books[i].num} pages`);
    paragraph3.appendChild(txt3);
    newBook.appendChild(paragraph3);
    let checker = books[i].st;
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'rd');
    const newReadBtn = document.createElement('button');

    if (checker === true) {
      newReadBtn.classList.add("read");
      newReadBtn.textContent = 'read';
    } else {
      newReadBtn.classList.add("notread");
      newReadBtn.textContent = 'not read';
    }

    newReadBtn.addEventListener('click', function () {
      if (newReadBtn.classList.contains("read")) {
        newReadBtn.classList.remove("read");
        newReadBtn.classList.add("notread");
        newReadBtn.textContent = 'not read';
      } else {
        newReadBtn.classList.remove("notread");
        newReadBtn.classList.add("read");
        newReadBtn.textContent = 'read';
      }
    });

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('class', 'delete');
    newDeleteBtn.textContent = 'delete';
    newDeleteBtn.addEventListener('click',()=> {
      rearrange(i);
    });
    newDiv.appendChild(newReadBtn);
    newDiv.appendChild(newDeleteBtn);
    newBook.appendChild(newDiv);
    New.appendChild(newBook);
  }
  container.appendChild(New);
}
