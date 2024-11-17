import pic2 from './curry.jpg';
import pic3 from './sarmale.jpg';
import pic4 from './jen.jpg';

const content = document.querySelector("#content");

function createMenu() {
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = "Our Delicious Menu";
    content.appendChild(menuHeader);

    const image1 = document.createElement('img');
    image1.src = pic2;
    image1.alt = "Curry Dish";
    content.appendChild(image1);

    const image2 = document.createElement('img');
    image2.src = pic3;
    image2.alt = "Sarmale";
    content.appendChild(image2);

    const image3 = document.createElement('img');
    image3.src = pic4;
    image3.alt = "Jen";
    content.appendChild(image3);
}

export default createMenu;
