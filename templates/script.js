// Lấy các phần tử DOM cần sử dụng
var Page1 = document.querySelector('.page_1');
var pageQuestion = document.querySelector('.page_question');
var pageNum = document.querySelector('.num-page');
const btnStartNow = document.querySelector('.page1_left-btn');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
var questions = document.querySelectorAll('.question');
var imgQuestion = document.getElementById('img-page_question');
var pageResult = document.querySelector('.page_result');
var btnHome = document.querySelector('.page_result-btnhome');
var currentQuestionIndex = 0;

var listIMG = ['img_1.png','img_2.png','img_3.png','img_4.png','img_5.png','img_6.png','img_7.png','img_8.png','img_9.png','img_10.png','img_11.png','img_12.png','img_13.png','img_14.png','img_15.png','img_result.png'];

// Bắt sự kiện click cho nút bắt đầu
btnStartNow.addEventListener('click', function(){
  Page1.style.display = 'none';
  pageQuestion.style.display = 'flex';
  pageNum.style.display = 'flex';
  // Cập nhật hình ảnh khi bắt đầu
  imgQuestion.src = listIMG[currentQuestionIndex];
});

// Bắt sự kiện click cho nút tiếp theo
btnNext.addEventListener('click', function(){
  console.log(currentQuestionIndex);
  // Ẩn câu hỏi hiện tại và hiển thị câu hỏi tiếp theo
  if (currentQuestionIndex < questions.length - 1) {
    questions[currentQuestionIndex].style.display = "none";
    currentQuestionIndex++;
    questions[currentQuestionIndex].style.display = "flex";
    // Cập nhật hình ảnh
    imgQuestion.src = listIMG[currentQuestionIndex];
  }
  else if(currentQuestionIndex === questions.length - 1) { 
    Page1.style.display = 'none';
    pageQuestion.style.display = 'none';
    pageResult.style.display = 'flex';
    pageNum.style.display = 'none';
  }
});

// Bắt sự kiện click cho nút trước đó
btnPrev.addEventListener('click', function(){
  // Ẩn câu hỏi hiện tại và hiển thị câu hỏi trước đó
  if (currentQuestionIndex > 0) {
    questions[currentQuestionIndex].style.display = "none";
    currentQuestionIndex--;
    questions[currentQuestionIndex].style.display = "flex";
    // Cập nhật hình ảnh
    imgQuestion.src = listIMG[currentQuestionIndex];
  } else {
    // Nếu là câu hỏi đầu tiên, quay trở lại trang đầu tiên
    pageQuestion.style.display = "none";
    Page1.style.display = 'flex';
    pageNum.style.display = 'none';
  }
});

btnHome.addEventListener('click', function(e){
  location.reload();
});