/* eslint-disable linebreak-style */
import goblin from '../img/goblin.png';

export default function addPic(size) {
  const index = Math.floor(Math.random() * (size ** 2));
  if (!document.getElementById(index).firstChild) {
    const element = document.getElementById(index);
    document.querySelectorAll('.image').forEach((elem) => elem.remove());
    const pic = document.createElement('img');
    //pic.src = '../src/img/goblin.png';
    pic.src = goblin;
    // pic.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
    pic.className = 'image';
    element.appendChild(pic);
  } else {
    addPic(size);
  }
  return null;
}
