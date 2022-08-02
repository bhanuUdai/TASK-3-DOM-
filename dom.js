// //console.dir(document)
// //console.log(document.domain)
// //console.log(document.URL)
// //console.log(document.title)
// //document.title='helo'
// //console.log(document.title)
// //console.log(document.URL)
// //console.log(document.doctype);
// //console.log(document.head)

// //console.log(document.body);
// //console.log(document.all)
// //console.log(document.all[10])
// //document.all[10].textContent='hello'
// //console.log(document.images)

// //console.log(document.getElementById('header-title'))
// //const headTitle=document.getElementById('header-title');
// //headTitle.textContent='helo'
// //const title=document.getElementById('yoboii')
// //title.textContent='hnji'
// //headTitle.innerText='hloo'
// //console.log(headTitle.innerText)

// const headtitle=document.getElementById('main-header');
// headtitle.style.borderBottom='3px solid blue'
// const add=document.all[14]
// add.style.fontWeight='bold'
// add.style.color='grey'
// //console.log(add)
// //console.log(document)
// console.log(document.body)

// let Items=document.getElementsByClassName('list-group-item')
// Items[2].style.background='green'

// // Items.forEach((color)=>
// // {
// //     color.style.fontWeight='bold'
// // })

// // for(let i=0;i<Items.length;i++)
// // {
// //     Items[i].style.fontWeight='bold'
// // }

// //changing font of Add items can also done with this way
// // let Add=document.getElementsByClassName("title")
// // Add[0].style.fontWeight='bold'

// //getElementsByTagName work ni same way as class do

// let TagName=document.getElementsByTagName('li');
// for(let i=0;i<TagName.length;i++)
// {
//     TagName[i].style.backgroundColor='lightblue'
// }

// TagName[4].innerHTML='<h3>HLLO</h3>'

// //query selector


// let header=document.querySelector('#main-header');
// header.style.borderBottom='3px solid black';

// let input =document.querySelector('input')
// input.style.background='pink'
// input.value='BHANU';

// let submit=document.querySelector('input[type=submit]')
// submit.value='hitit';
// submit.style.color='brown';

// let items=document.querySelector(".list-group-item");
// items.style.color='red'

// //document.querySelector('.list-group-item:nth-child(2)').style.background='green' 

// const third=document.querySelector('.list-group-item:nth-child(3)')
// third.style.background='violet'
// third.hidden='true'


// //QUERYSELECTOR ALL

// const Item2=document.querySelectorAll('.list-group-item');
// console.log(Item2)
// Item2[1].style.color='green';

// let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
// //console.log(odd)

// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.background='pink'
// }


//CREATING NODE AND MODIFYING DOM
// const items=document.querySelector('#items')
// console.log(items)

//parentElement
// console.log(items.parentElement);
// items.parentElement.style.background='pink'


//parentNode
// console.log(items.parentNode);
// items.parentNode.style.background='pink'

//childNodes
//console.log(items.childNodes)


//children
// console.log(items.children);
// items.children[1].style.background='pink'

//firstChild (same as childNode include texts)
//console.log(items.firstChild)

//firstElementChild
//console.log(items.firstElementChild);
//items.firstElementChild.textContent='HIT IT'

//lastEChild (include texts)
//console.log(items.lastChild)

//lastElementChild
//items.lastElementChild.textContent='HIT ME'

//nextSibling
//console.log(items.nextSibling)

//nextElementSibling
//console.log(items.nextElementSibling)

//previousSibiling(include text)
//console.log(items.previousSibling)

//previousElementSibling
//console.log(items.previousElementSibling)
//items.previousElementSibling.textContent='ITEMS'

//CREATE ELEMENT
//  let newDiv=document.createElement('div');

//  newDiv.className='hello';
//  newDiv.setAttribute('title','hello2');

// newDiv.setAttribute('style','color:pink;')

//  //newDiv.textContent='hello world'
//  let newDivText =document.createTextNode('HELLO WORLD');
//  newDiv.appendChild(newDivText);


//  //INSERT IN DOM
//  let Container=document.querySelector('header .container');
//  let head=document.querySelector('header h1');
//  Container.insertBefore(newDiv,head)

//  console.log(newDiv)

//SOLUTION
// const add=document.createElement('div');
// add.className='hey';
// add.setAttribute('style','color:red;');

// const addText=document.createTextNode('HELLO');
// add.appendChild(addText);

// let indom=document.querySelector(' #main #items');

// console.log(indom)

// let before=document.querySelector(' #main .list-group-item');
// indom.insertBefore(add,before)



// console.log(add)


//ADDING BUTTON TASK:8

let form=document.querySelector('#addForm');
let  UL=document.querySelector('#items');

form.addEventListener('submit' , onsubmit);
UL.addEventListener('click', onclick);

function onsubmit(e)
{
    e.preventDefault();

    let Items=document.querySelector('#item')     

    //create list

    let newlist=document.createElement('li');
    newlist.className='list-group-item';
    newlist.appendChild(document.createTextNode(Items.value));

    // ADD BUTTON
    let deletebtn =document.createElement('buttton');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    newlist.appendChild(deletebtn);

    //ADD EDIT BUTTON
    let edit=document.createElement('button');
    edit.className="float-right";
    edit.appendChild(document.createTextNode('edit'));
    newlist.append(edit);



    UL.appendChild(newlist);
}

function onclick(e)
{
    e.preventDefault();

    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure boii'))
        {
            let li=e.target.parentElement;
            UL.removeChild(li)
        }
    }
}