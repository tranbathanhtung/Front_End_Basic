document.addEventListener('DOMContentLoaded',()=>{


const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

const mainDiv= document.querySelector('.main');

const  div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent="Hide those who haven't responded";
filterCheckbox.type="checkbox";
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div,ul);

filterCheckbox.addEventListener('change',(e)=>{
    const isChecked = e.target.checked;
    const lis = ul.children;
    if(isChecked){
    	for (let i = 0; i <lis.length; i++) {
    		let li= lis[i];
    		if(li.className=="responded"){
    			li.style.display='';

    		}else{
    			li.style.display='none';
    		}
    	}
    }
    else{
    	for (let i = 0; i <lis.length; i++) {
    		let li= lis[i];
    		li.style.display='';
    	}
    }

});



function createLI(name){

	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = name;
	li.appendChild(span);
	const label = document.createElement('label');
	label.textContent = 'Confirm';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);

    const removebutton = document.createElement('button');
	removebutton.textContent = 'remove';
	removebutton.className='remove';
	li.appendChild(removebutton);

	const editbutton = document.createElement('button');
	editbutton.textContent = 'edit';
	editbutton.className='edit';
	li.appendChild(editbutton);

	return li;
}

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const name = input.value;
	input.value ="";
	const li = createLI(name);
	ul.appendChild(li);



});
ul.addEventListener('change',(e)=>{
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  if(checked){
  	listItem.className='responded';

  }
  	else{
       listItem.className='';
  	}



});

ul.addEventListener('click',(e)=>{
	if(e.target.tagName==="BUTTON"){
		const button= e.target;
		const li = button.parentNode;
        const ul = li.parentNode;
		if(button.textContent=='remove'){

         ul.removeChild(li);
  } else if(button.textContent=='edit'){
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type='text';
        input.value= span.textContent;
        li.insertBefore(input,span);
        li.removeChild(span);
        button.textContent='save';


  }

  else if(button.textContent==='save'){
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent= input.value;
        li.insertBefore(span,input);
        li.removeChild(input);
        button.textContent='edit';


  }


	}

});


});
