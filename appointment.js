let form=document.querySelector('#form-1');
let unord=document.querySelector('.for_ul');


form.addEventListener('submit',onsubmit);
unord.addEventListener('click',onclick);
window.addEventListener('DOMContentLoaded', onload)   //(DOMContentLoaded) event fired when page refreshed

function onsubmit(e)
{
    e.preventDefault();

    //getting values from name and email fields
    let Name=document.querySelector('#Name');
    let Mail=document.querySelector('#Mail');

    

    //creating element li to store above values and will be shown in frontend
    let li=document.createElement('li');
    li.className='for_li';
    let text=document.createTextNode(`Name: ${Name.value} Mail: ${Mail.value}`);
    li.appendChild(text);


    //creating element button to set edit features in it
    let edit=document.createElement('button');
    edit.className='edit_btn';
    edit.style='color:orange;'
    let text2=document.createTextNode('EDIT');
    edit.appendChild(text2);
    li.append(edit)
   
    
    //creating element button to set delete features
    let btn=document.createElement('button');
    btn.className="for_btn";
    btn.style='color:orange;'
    let text1=document.createTextNode('DELETE');
    btn.appendChild(text1);
    li.appendChild(btn);
    li.id = `Object ${Name.value}`; // very important , assigning 'id' with Name of user to make every list unique,
                                    // it will help in deleting data from local storage because will take key same as id

    

//     if(!localStorage.getItem(`Object ${Name.value}`) })  //if Object ${Name.value} is not present in local storage then print only
//    {
//     unord.appendChild(li);
//    }



        // if input fields are empty show elert else append list in <ul> i.e parent element
       if(`${Name.value}`=='' && `${Mail.value}`=='') 
       {
        alert('fill the fields')
       }
       else
       {
        unord.appendChild(li);
       }

    


   //creating object of input fields
   let obj={
    name:`${Name.value}`,
    mail:`${Mail.value}`
   }

// if input fields are not empty then stringify the object and push into the locval storage

    if(`${Name.value}`!=='' && `${Mail.value}`!=='')
    {
        let obj_serialize=JSON.stringify(obj);
        localStorage.setItem(`Object ${Name.value}`,obj_serialize); // here i take key name value which will it unique
    }

    // let obj_serialize=JSON.stringify(obj);
    // localStorage.setItem(`Object ${Name.value}`,obj_serialize);

//converting back to object
    let obj_deserialize=JSON.parse(localStorage.getItem(`Object ${Name.value}`));
    console.log(obj_deserialize);


    // Name.value='';
    // Mail.value='';

}


//targeting button for event
function onclick(e)
{
    e.preventDefault();
    if(e.target.classList.contains('for_btn'))
    {
        let Li=e.target.parentElement;         // parent element of button is<li>
        unord.removeChild(Li);                  //removing <li> from parent element i.e <ul>
        //console.log(Li.id);
        localStorage.removeItem(Li.id)         // very imp. As i assigned each <li> element with ()`Object ${Name.value}`
    }                                          //  when creating button it will now act as key because when user click on delete button to 
                                               //delete <li> from front end i.e(Li) it will fetch its id to use as key to delete item from
                                                //local storage also
        
    

    if(e.target.classList.contains('edit_btn'))  // its function is to just remove <li> from frontend and not from local storage
    {
        let Li =e.target.parentElement;
        unord.removeChild(Li);
    }
 
}


//function for DOMContentLoaded event it we show stored data in local storage in frontend when page will refresh
function onload(e)
{
    e.preventDefault()

    Object.keys(localStorage).forEach((key)=>                //Object.keys(input) function retrive keys of any input
    {                                                        // here we are traversing through each key in local storage to get values
        getStringifyDataFromStorage=localStorage.getItem(key);  
        toGetSameObjectBack=JSON.parse(getStringifyDataFromStorage);


        //here we are again creating <li> and <button> for edit and delete because older data was deleted when we refresh page
        // setting values that we fetch from local storage
        let li=document.createElement('li');
        li.className='for_li';
        let text=document.createTextNode(`Name: ${toGetSameObjectBack.name} Mail: ${toGetSameObjectBack.mail}`);
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
        li.id = `Object ${toGetSameObjectBack.name}`; // v imp here assigning id to the <li> according to the data that we fetch from local storage
        //console.log(li.id)

        unord.appendChild(li);

    })
}