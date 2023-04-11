

// -----------------------------------------QUESTION_ROLL-------------------------------------->
// -----------------------------------------QUESTION_ROLL-------------------------------------->>
// const question = document.querySelector(".question_container-item");


// CÁCH 1
// const questions = document.querySelector(".roll_question");
// const questions_item = document.querySelectorAll(".question_item");
// const btnBackALL = document.querySelector(".comback");
// const btnback_qs = document.querySelectorAll(".back_qs");
// const btnnext_qs = document.querySelectorAll(".next_qs");

// const size_qs = questions_item[0].clientWidth;


// let number = 0;

// questions.style.transform   = 'translateX(' + (-size_qs * number) + 'px)';
// var allItem = document.querySelectorAll(".roll_question .question")

// var countt = allItem.length;


// for(let i = 0; i < countt; i++){
//   btnnext_qs[i].addEventListener('click', () => {
//     number = i + 1;
//     questions.style.transition = 'transform 0.5s ease-in-out';
//     questions.style.transform = 'translateX(' + ( - size_qs * number) + 'px)';
//   });

//   btnBackALL.addEventListener('click', () => {
//     questions.style.transition = 'transform 0.5s ease-in-out'; //Update hiệu ứng chuyển động mượt mà thêm
//     questions.style.transform = 'translateX(' + (size_qs - size_qs) + 'px)';//Di chuyển vị trí
//   });
// };

// for(let i = 0; i < countt; i++){
//     btnback_qs[i].addEventListener('click', () => {
//     if (number <= 0) return;//Counter = 0 thì stop
//     questions.style.transition = 'transform 0.5s ease-in-out';
//     number--;
//     questions.style.transform = 'translateX(' + (-size_qs * number) + 'px)';
//   });
// };


///CÁCH 2
$(document).ready(function() {
  $('.roll_question').slick({
    arrows: false
  });
  $('.next_qs').click(function(){
    $('.roll_question').slick('slickNext');
  });
  $('.back_qs').click(function(){
    $('.roll_question').slick('slickPrev');
  });
  $('.comback').click(function() {
    $('.roll_question').slick('slickGoTo', 0);
  });
});



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




//------------------Cách 2-----------------


// $(document).ready(function() {
//   $('.roll_question').slick({
//     // Các tùy chọn của Slick Slider
//     slidesToShow: 1,
//     arrows: false,    
//   });
  
//   $('.back_qs').click(function() {
//     $('.roll_question').slick('slickPrev');
//   });
  
//   $('.next_qs').click(function() {
//     $('.roll_question').slick('slickNext');
//   });
// });

// $('.roll_question').on('afterChange', function(event, slick, currentSlide) {
//   // Lấy tổng số slide
//   var totalSlides = slick.slideCount;
  
//   // Hiển thị số trang hiện tại và tổng số trang
//   var currentPage = currentSlide + 1;
//   $('.slider-pagination').text(currentPage + ' / ' + totalSlides);
// });

// $('.comback').click(function() {
//   $('.roll_question').slick('slickGoTo', 0); // Chuyển đến slide đầu tiên
// });