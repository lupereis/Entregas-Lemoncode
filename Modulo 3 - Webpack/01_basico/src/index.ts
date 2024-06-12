import "./styles.scss";
import logoImg from "./content/logo_1.png";

const username: string = "Lemoncode" 
const greet: string = `<p>Hola mundo desde </br><span class="usernameClass">${username}</span></p>`;

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

document.write(greet);

