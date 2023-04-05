// Lấy giá trị các phần tử
const slider = document.querySelector('.slite_container');
const slides = document.querySelector('.slite-content');
const slide = document.querySelectorAll('.card-wrapper');
const nextbtn = document.querySelector('.slide_title-item .next');
const backbtn = document.querySelector('.slide_title-item .back');
//Lưu trữ số trang slide 
const currentSlideElement = document.querySelector(".slide_title-item .current-slide");


let counter = 0;//Đặt giá trị vị trí slide

const size = slide[0].clientWidth; // Lấy kích thước của slide 

slides.style.transform   = 'translateX(' + (-size * counter) + 'px)';//Dịch chuyển phần tử theo chiều ngang với giá trị của size lấy ban đầu

//CLick -> next
nextbtn.addEventListener('click', () => {
  if (counter >= slide.length - 1) counter = -1; // nếu counter lớn hơn số slide hiện tại thì trả về -1(giá trị vị trí slide ban đầu)
  slides.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
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



const question = document.querySelector(".question_container-item");
const questions = document.querySelector(".roll_question");
const questions_item = document.querySelectorAll(".question_item");

const btnback_qs = document.querySelectorAll(".back_qs");
const btnnext_qs = document.querySelectorAll(".next_qs");

const btnBackALL = document.querySelector(".comback");

const size_qs = questions_item[0].clientWidth


let number = 0;

questions.style.transform   = 'translateX(' + (-size_qs * number) + 'px)';


var allItem = document.querySelectorAll(".roll_question .question")

var countt = allItem.length;

for(let i = 0; i < countt; i++){
  btnnext_qs[i].addEventListener('click', () => {
    number = i + 1;
    questions.style.transition = 'transform 0.5s ease-in-out';
    questions.style.transform = 'translateX(' + ( - size_qs * number) + 'px)';
  })
  btnback_qs[i].addEventListener('click', () => {
    if (number <= 0) return;//Counter = 0 thì stop
    questions.style.transition = 'transform 0.5s ease-in-out';
    number--;
    questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';
  });
  
  btnBackALL.addEventListener('click', () => {
    questions.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
    questions.style.transform = 'translateX(' + (size_qs - size_qs) + 'px)';//Di chuyển vị trí
  });
}
// //Lưu trữ số trang slide 
// // const current_QSElement = document.querySelector(".current_QS");

// btnnext_qs[0].addEventListener('click', () => {
//   number = 1;//giá trị vị trí slide
//   questions.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
//   questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';//Di chuyển vị trí
//   // current_QSElement.textContent = number + 1;//Tăng giá trị của current-silde
// });

// btnnext_qs[1].addEventListener('click', () => {
//   // if (number >= question.length - 1) number = -1; // nếu counter lớn hơn số slide hiện tại thì trả về -1(giá trị vị trí slide ban đầu)
//   questions.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
//   number++;//tăng giá trị vị trí slide
//   questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';//Di chuyển vị trí
//   // current_QSElement.textContent = number + 1;//Tăng giá trị của current-silde
// });
// btnnext_qs[2].addEventListener('click', () => {
//   // if (number >= question.length - 1) number = -1; // nếu counter lớn hơn số slide hiện tại thì trả về -1(giá trị vị trí slide ban đầu)
//   questions.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
//   number++;//tăng giá trị vị trí slide
//   questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';//Di chuyển vị trí
//   // current_QSElement.textContent = number + 1;//Tăng giá trị của current-silde
// });



// btnBackALL.addEventListener('click', () => {
//   questions.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
//   questions.style.transform = 'translateX(' + (questions_item[0].clientWidth) + 'px)';//Di chuyển vị trí
// });


// for(let i = counter; i >= 0 ; i--){
//   btnback_qs[i].addEventListener('click', () => {
//     number = --i;
//     question.style.transition = 'transform 0.5s ease in-out';
//     question.sytle.transform = 'translate(' + ( -size_qs * number) + 'px)';
//   })
// }

//CLick -> back
// btnback_qs[0].addEventListener('click', () => {
//   if (number <= 0) return;//Counter = 0 thì stop
//   questions.style.transition = 'transform 0.5s ease-in-out';
//   number--;
//   questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';
//   // 
// });

// btnback_qs[1].addEventListener('click', () => {
//   if (number <= 0) return;//Counter = 0 thì stop
//   questions.style.transition = 'transform 0.5s ease-in-out';
//   number--;
//   questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';
//   // 
// });
// btnback_qs[2].addEventListener('click', () => {
//   if (number <= 0) return;//Counter = 0 thì stop
//   questions.style.transition = 'transform 0.5s ease-in-out';
//   number--;
//   questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';
//   // 
// });




var spans = document.querySelectorAll(".item-dnw");
var droop_item = document.querySelectorAll(".droop-item");


var down = document.querySelectorAll(".down");
var up = document.querySelectorAll(".up");

down[0].onclick = function(){
  droop_item[0].style.transition = '0.1s ease-in';
  spans[0].style.display = 'block';
  down[0].style.display = 'none';
  up[0].style.display = 'block';
};

up[0].onclick = function(){
  droop_item[0].style.transition = '0.1s ease-in';
  spans[0].style.display = 'none';
  up[0].style.display = 'none';
  down[0].style.display = 'block';
};



// var qs_items = document.querySelectorAll(".qs-item");

// for (var i = 0; i < qs_items.length; i++) {
//   var droop_item = qs_items[i].querySelector(".droop-item");
//   var span = qs_items[i].querySelector(".item-dnw");
//   var down = qs_items[i].querySelector(".down");
//   var up = qs_items[i].querySelector(".up");
  
//   down.addEventListener('click', function() {
//     droop_item.style.transition = 'transform 0.5s ease-in-out';
//     span.style.display = 'block';
//     down.style.display = 'none';
//   });
// }


// var qsItems = document.querySelectorAll(".qs-item");

// qsItems.forEach(function(qsItem) {
//   var span = qsItem.querySelector(".item-dnw");
//   var droopItem = qsItem.querySelector(".droop-item");
//   var down = qsItem.querySelector(".down");
//   var up = qsItem.querySelector(".up");

//   down.addEventListener("click", function() {
//     span.style.display = "block";
//     droopItem.style.transition = "transform 0.5s ease-in-out";
//     down.style.display = "none";
//     up.style.display = "block";
//   });

//   up.addEventListener("click", function() {
//     span.style.display = "none";
//     droopItem.style.transition = "transform 0.5s ease-in-out";
//     down.style.display = "block";
//     up.style.display = "none";
//   });
// });