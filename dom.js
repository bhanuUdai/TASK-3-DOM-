//console.dir(document)
//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title)
//document.title='helo'
//console.log(document.title)
//console.log(document.URL)
//console.log(document.doctype);
//console.log(document.head)

//console.log(document.body);
//console.log(document.all)
//console.log(document.all[10])
//document.all[10].textContent='hello'
//console.log(document.images)

//console.log(document.getElementById('header-title'))
//const headTitle=document.getElementById('header-title');
//headTitle.textContent='helo'
//const title=document.getElementById('yoboii')
//title.textContent='hnji'
//headTitle.innerText='hloo'
//console.log(headTitle.innerText)

const headtitle=document.getElementById('main-header');
headtitle.style.borderBottom='3px solid blue'
const add=document.all[14]
add.style.fontWeight='bold'
add.style.color='grey'
//console.log(add)
//console.log(document)
console.log(document.body)

let Items=document.getElementsByClassName('list-group-item')
Items[2].style.background='green'

// Items.forEach((color)=>
// {
//     color.style.fontWeight='bold'
// })

// for(let i=0;i<Items.length;i++)
// {
//     Items[i].style.fontWeight='bold'
// }

//changing font of Add items can also done with this way
// let Add=document.getElementsByClassName("title")
// Add[0].style.fontWeight='bold'

//getElementsByTagName work ni same way as class do

let TagName=document.getElementsByTagName('li');
for(let i=0;i<TagName.length;i++)
{
    TagName[i].style.backgroundColor='lightblue'
}

TagName[4].innerHTML='<h3>HLLO</h3>'

//query selector


let header=document.querySelector('#main-header');
header.style.borderBottom='3px solid black';

let input =document.querySelector('input')
input.style.background='pink'
input.value='BHANU';

let submit=document.querySelector('input[type=submit]')
submit.value='hitit';
submit.style.color='brown';

let items=document.querySelector(".list-group-item");
items.style.color='red'

//document.querySelector('.list-group-item:nth-child(2)').style.background='green' 

const third=document.querySelector('.list-group-item:nth-child(3)')
third.style.background='violet'
third.hidden='true'


//QUERYSELECTOR ALL

const Item2=document.querySelectorAll('.list-group-item');
console.log(Item2)
Item2[1].style.color='green';

let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
//console.log(odd)

for(let i=0;i<odd.length;i++)
{
    odd[i].style.background='pink'
}