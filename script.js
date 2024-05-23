const clickMe = document.getElementById("click-me");
let num = 1;
const dog2 = document.getElementById("dog2");
let prev = null;
clickMe.addEventListener("click", function() {
  let ranNum = Math.floor(Math.random() * 10 + 1);
  const dog = document.getElementById(`dog${ranNum}`);
  if (prev != null) {
    prev.classList.toggle("visible");
    prev.classList.toggle("hide");
  }
  dog.classList.toggle("visible");
  dog.classList.toggle("hide");
  prev = dog;

  num++;
});
document.addEventListener("DOMContentLoaded", function() {
  const imagesParent = document.getElementById("images-parent");
  const numberOfImages = 10;
  const imagePath = "./pictures/dog";
  const imageExtension = ".jpg";

  for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement("img");
    img.id = `dog${i}`;
    img.classList.add("hide", "dog");
    img.src = `${imagePath}${i}${imageExtension}`;
    img.alt = `a picture of a dog ${i}`;
    imagesParent.appendChild(img);
  }
});