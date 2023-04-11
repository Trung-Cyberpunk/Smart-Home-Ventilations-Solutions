

// ---------------------------------DROP-ITEM-------------------//

const btnclickX = document.querySelectorAll(".down");
const btnclickY = document.querySelectorAll(".up");
const item = document.querySelectorAll(".item-dnw");
const itemdiv = document.querySelectorAll(".item")

const quantity_item = document.querySelectorAll(".qs-item");

for (let i = 0; i < quantity_item.length; i++) {
    btnclickX[i].addEventListener('click', () =>{
        item[i].style.display = 'block';
        btnclickY[i].style.display = 'block';
        btnclickX[i].style.display = 'none';
      });
}

for (let i = 0; i < quantity_item.length; i++) {
      btnclickY[i].addEventListener('click', () =>{
        item[i].style.display = 'none';
        btnclickY[i].style.display = 'none';
        btnclickX[i].style.display = 'block';
      });
}



// btnclickX[0].addEventListener('click', () =>{
//     item[0].style.display = 'block';
//     btnclickY[0].style.display = 'block';
//     btnclickX[0].style.display = 'none';
// });
// btnclickY[0].addEventListener('click', () =>{
//   item[0].style.display = 'none';
//   btnclickY[0].style.display = 'none';
//   btnclickX[0].style.display = 'block';
// });

// btnclickX[1].addEventListener('click', () =>{
//   item[1].style.display = 'block';
//   btnclickY[1].style.display = 'block';
//   btnclickX[1].style.display = 'none';
// });
// btnclickY[1].addEventListener('click', () =>{
//   item[1].style.display = 'none';
//   btnclickY[1].style.display = 'none';
//   btnclickX[1].style.display = 'block';
// });


// btnclickX[2].addEventListener('click', () =>{
//   item[2].style.display = 'block';
//   btnclickY[2].style.display = 'block';
//   btnclickX[2].style.display = 'none';
// });


// btnclickY[2].addEventListener('click', () =>{
//   item[2].style.display = 'none';
//   btnclickY[2].style.display = 'none';
//   btnclickX[2].style.display = 'block';
// });



