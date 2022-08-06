let form=document.querySelector('#form-1');
let unord=document.querySelector('.for_ul');


form.addEventListener('submit',onsubmit);
unord.addEventListener('click',onclick);

function onsubmit(e)
{
    e.preventDefault();

    let Name=document.querySelector('#Name');
    let Mail=document.querySelector('#Mail');

    let obj={
        name:`${Name.value}`,
        mail:`${Mail.value}`
    }

    let obj_serialize=JSON.stringify(obj);
    localStorage.setItem(`Object ${Name.value}`,obj_serialize);

    let obj_deserialize=JSON.parse(localStorage.getItem(`Object ${Name.value}`));
    console.log(obj_deserialize);


    let li=document.createElement('li');
    li.className='for_li';
    let text=document.createTextNode(`Name: ${Name.value} Mail: ${Mail.value}`);
    li.appendChild(text);

    let btn=document.createElement('button');
    btn.className="for_btn";
    let text1=document.createTextNode('DELETE');
    btn.appendChild(text1);
    li.appendChild(btn);

    unord.appendChild(li);

}

function onclick(e)
{
    e.preventDefault();
    if(e.target.classList.contains('for_btn'))
    {
        let Li=e.target.parentElement;
        unord.removeChild(Li);
    }
 
}