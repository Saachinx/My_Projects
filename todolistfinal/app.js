window.addEventListener('load', () => {
const form = document.querySelector("#form_list");//declares constant variable for form
const input = document.querySelector("#input");
const container = document.querySelector("#task_container");


  form.addEventListener('submit', (e) => { //adds event listener of submit to form
    e.preventDefault();

     task = input.value; //assigns the text being input to a variable named task

    if(!task){ // if the input field value = null an alert will pop up
      alert("fill in field");
      return;
    }

    if('submit'){
      input.value = null;
    }

   const task_holder = document.createElement("div");
   task_holder.classList.add("task_holder");
   const task_content = document.createElement("input"); // creates an input element and stores it to a variable task content
   task_content.classList.add("task_output");
   task_content.innerText = task; // sets the text content of task so it can be displayed in task_container
   task_content.setAttribute("readonly", "readonly");
   task_content.value = task;//sets the input value to input.value

   const task_label = document.createElement("label");
   const task_checkbox = document.createElement("input");
   task_checkbox.type="checkbox";
   task_checkbox.classList.add("check_style");




    const edit = document.createElement("button");
    edit.innerHTML = "Edit";
    const remove = document.createElement("button");
     remove.innerHTML = "Delete";
     const save = document.createElement("button");
     save.innerHTML = "save";

     container.appendChild(task_holder);
     task_holder.appendChild(task_label);
     task_label.appendChild(task_checkbox);
     task_holder.appendChild(task_content);
     task_holder.appendChild(remove);

     task_holder.appendChild(edit);

    edit.addEventListener('click', (event) =>{
      task_content.removeAttribute("readonly", "readonly");
      task_holder.replaceChild(save, edit);

    });

    save.addEventListener('click', (event) => {
             task_content.setAttribute("readonly", "readonly");
             task_holder.replaceChild(edit, save);

    });

    remove.addEventListener('click', (event) => {
       container.removeChild(task_holder);
    });

    task_label.addEventListener('change', (event) => {
      if(task_checkbox.checked){
      task_content.style.textDecoration = "line-through";
      task_holder.removeChild(edit);
      task_holder.removeChild(save);
    }else{
      task_content.style.textDecoration = "none";
      task_holder.appendChild(edit);

    }
    });

    if(task_content.hasAttribute("readonly", "readonly")){
      task_content.style.backgroundColor = "#6B0505";
    }
  })

})
