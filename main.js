// var btns = document.querySelectorAll('.delete' );
// Array.from(btns).forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         var item = e.target.parentElement;
        
//         item.parentNode.removeChild(item)
//     })
// })


const list = document.querySelector('.list');

list.addEventListener('click',function(e){
    if (e.target.className == 'delete') {
        var del = e.target.parentElement;
        del.parentNode.removeChild(del);  
    }   
});

//add book
const add = document.querySelector('#form');

add.addEventListener('submit',function (e) {
    e.preventDefault();
    
    //retrive value
    const value = add.querySelector('input[type = "text"]').value;

    //create element
    const li = document.createElement('li');
    const space = document.createElement('span');
    const bookName = document.createElement('span');
    const deleteBook = document.createElement('span');
    
    //add content
    space.textContent = '';
    bookName.textContent = value;
    deleteBook.textContent = 'delete';

    //add classes
    space.classList.add('space');
    bookName.classList.add('name');
    deleteBook.classList.add('delete');


    //append child
    li.appendChild(space);
    li.appendChild(bookName);
    li.appendChild(deleteBook);
    list.appendChild(li);
});

var hide = document.querySelector('#hide');

hide.addEventListener('change',function (e) {
    if (hide.checked) {
        list.style.display = 'none'
    }else{
        list.style.display = 'block'
    }
});

const search = document.forms['form1'].querySelector('.input-search');

search.addEventListener('keyup', function(e){
   const term  = e.target.value.toLowerCase();
   const books = list.getElementsByTagName('li');
   Array.from(books).forEach(function(book){
       const title = book.getElementsByTagName('span')[1].textContent;
       if (title.toLowerCase().indexOf(term) !== -1) {
           book.style.display ='block';
       }else{
           book.style.display = 'none';
       }
   });

});