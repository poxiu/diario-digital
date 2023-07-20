import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {auth} from './firebase.js';
import { 
    saveTask,
    onGetTasks,
    
    } from "./firebase.js";
import './signupforms.js';
import './logout.js';
import './signinForm.js';
import './googleLogin.js'



const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("task-container");


window.addEventListener('DOMContentLoaded', async (e) => {
    //getTasks();
    // console.log('DOM CARGADO');
    //const querySnapshot = await getTasks();
onGetTasks((querySnapshot) => {
        //console.log(taskContainer);

   console.log(querySnapshot);

    taskContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
        //console.log(doc)
       // console.log(doc.data());
        
        const task = doc.data();
        taskContainer.innerHTML += `
                <div>
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                </div>
                `
    });

    
});
    
    //onGetTasks((querySnapshot) => {
        //taskContainer.innerHTML = "";
    

    
//})
//})   
});

//const task = doc.data();

//taskForm.addEventListener('submit', (e) =>{
    //e.preventDefault();
    //console.log('enviado'); 

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    saveTask(title.value, description.value);
    taskForm.reset();



import{loginCheck} from './loginCheck.js';
// console.log("hola");

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginCheck(user)
        try {
            console.log("sesión iniciada");
        } catch (error) {
            console.log(error);
        }
    } else {
        loginCheck(user)
    }
})


