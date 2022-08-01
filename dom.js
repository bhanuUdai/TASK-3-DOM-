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
add.style.color='green'
//console.log(add)
//console.log(document.all)

let Items=document.getElementsByClassName('list-group-item')
Items[2].style.background='green'

// Items.forEach((color)=>
// {
//     color.style.fontWeight='bold'
// })

for(let i=0;i<Items.length;i++)
{
    Items[i].style.fontWeight='bold'
}