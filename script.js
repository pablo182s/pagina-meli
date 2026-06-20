const images = [
  "https://picsum.photos/id/1011/500/700",
  "https://picsum.photos/id/1012/500/700",
  "https://picsum.photos/id/1015/500/700",
  "https://picsum.photos/id/1016/500/700"
];

let currentIndex = 0;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(index){
  currentIndex = index;
  modal.style.display = "flex";
  modalImg.src = images[currentIndex];
}

function closeModal(){
  modal.style.display = "none";
}

function changeSlide(direction){

  currentIndex += direction;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  modalImg.src = images[currentIndex];
}