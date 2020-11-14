
const form= document.getElementById('form');

const itemList = document.getElementById('itemlist');


//form submit event

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);


function addItem(e){
e.preventDefault();

//create list element
//get input value
var newItem = document.getElementById("newitem").value;
 
//create element
let li = document.createElement('li');
///add ClassName
li.className='list';

///////create h2 element to put newItem.
var h2 = document.createElement('h2');

h2.className="text";

h2.innerHTML=`${newItem}`;

li.appendChild(h2);
   
 newItem = '';

////////
////checkbox///
var checkBtn = document.createElement('input');

checkBtn.setAttribute("type", "checkbox");

checkBtn.className='checkbox';

li.appendChild(checkBtn);



///deletebtn//

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('deletebtn');

deleteBtn.innerHTML='<i class="fa fa-trash-o"></i>';


li.appendChild(deleteBtn);

itemList.appendChild(li);

li.insertBefore(checkBtn,h2,deleteBtn);

}
////delete item
function deleteItem(e){

    if(e.target.classList[0] ==='deletebtn'){
     let li = e.target.parentElement;
     /////animation/////
     li.classList.add('animate__animated', 'animate__bounceOutLeft');
    li.addEventListener('animationend', () => {
     li.remove(); 
    }); }
    ///////check
    if(e.target.classList[0] ==='checkbox'){
    let li = e.target.parentElement;
      li.classList.toggle("checked");
      } 

}
 
  
