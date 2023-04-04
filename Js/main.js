// Lấy giá trị các phần tử
const slider = document.querySelector('.slite_container');
const slides = document.querySelector('.slite-content');
const slide = document.querySelectorAll('.card-wrapper');
const nextbtn = document.querySelector('.next');
const backbtn = document.querySelector('.back');
//Lưu trữ số trang slide 
const currentSlideElement = document.querySelector(".current-slide");


let counter = 0;//Đặt giá trị vị trí slide

const size = slide[0].clientWidth; // Lấy kích thước của slide 

slides.style.transform = 'translateX(' + (-size * counter) + 'px)';//Dịch chuyển phần tử theo chiều ngang với giá trị của size lấy ban đầu

//CLick -> next
nextbtn.addEventListener('click', () => {
  if (counter >= slide.length - 1) counter = -1; // nếu counter lớn hơn số slide hiện tại thì trả về -1(giá trị vị trí slide ban đầu)
    //Update hiệu ứng chuyển động mượt mà thêm
  counter++;//tăng giá trị vị trí slide
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';//Di chuyển vị trí
  currentSlideElement.textContent = counter + 1;//Tăng giá trị của current-silde
});

//CLick -> back
backbtn.addEventListener('click', () => {
  if (counter <= 0) return;//Counter = 0 thì stop
  slides.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
  currentSlideElement.textContent = counter + 1;
});

// slides.addEventListener('transitionend', () => {
//   if (slide[counter].id === 'lastClone') {
//     slides.style.transition = 'none';
//     counter = slide.length - 2;
//     slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
//   if (slide[counter].id === 'firstClone') {
//     slides.style.transition = 'none';
//     counter = slide.length - counter;
//     slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
// });