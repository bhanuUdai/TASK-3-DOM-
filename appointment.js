let form=document.querySelector('#form-1');
let unord=document.querySelector('.for_ul');


form.addEventListener('submit',onsubmit);
unord.addEventListener('click',onclick);


function onsubmit(e)
{
    e.preventDefault();

    let Name=document.querySelector('#Name');
    let Mail=document.querySelector('#Mail');

    


    let li=document.createElement('li');
    li.className='for_li';
    let text=document.createTextNode(`Name: ${Name.value} Mail: ${Mail.value}`);
    li.appendChild(text);



    let edit=document.createElement('button');
    edit.className='edit_btn';
    edit.style='color:orange;'
    let text2=document.createTextNode('EDIT');
    edit.appendChild(text2);
    li.append(edit)
   
    

    let btn=document.createElement('button');
    btn.className="for_btn";
    btn.style='color:orange;'
    let text1=document.createTextNode('DELETE');
    btn.appendChild(text1);
    li.appendChild(btn);

    

    if(!localStorage.getItem(`Object ${Name.value}`))  //if Object ${Name.value} is not present in local storage then print only
   {
    unord.appendChild(li);
   }


   //creating object of input fields
   let obj={
    name:`${Name.value}`,
    mail:`${Mail.value}`
   }

// converting into string

    let obj_serialize=JSON.stringify(obj);
    localStorage.setItem(`Object ${Name.value}`,obj_serialize);

//converting back to object
    let obj_deserialize=JSON.parse(localStorage.getItem(`Object ${Name.value}`));
    console.log(obj_deserialize);


    Name.value='';
    Mail.value='';

}

function onclick(e)
{
    e.preventDefault();
    if(e.target.classList.contains('for_btn'))
    {
        let Li=e.target.parentElement;
        unord.removeChild(Li);
        localStorage.clear(`Object ${Name.value}`)
    }

    if(e.target.classList.contains('edit_btn'))
    {
        let Li =e.target.parentElement;
        unord.removeChild(Li);
    }
 
}




