import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const googleButton = document.querySelector('#google-login')

googleButton.addEventListener('click', async (e) => {
    e.preventDefault();
const provider = new GoogleAuthProvider();
try{
    const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);
        console.log('sesion inicida con Google');
        
        //cerrar el modal del Logeo del usuario
    const modal = bootstrap.Modal.getInstance(googleButton.closest('.modal'));

        //mostrar mensaje de bienvenida
        showMessage('Bienvenido '+ credentials.user.displayName);
} catch (error) {
        console.log(error)
}
});