$(document).ready(function(){
  $('.date div').click(function(){
  $('.schedulesGirl div').hide();
  $('.schedulesGirl div').eq($(this).index()).show();
  //找到content中跟所点击的类名相同的class予以显示，点击click可更换为鼠标移动mouseover>
  });
  });
  // function divHeight(_widthAndPercent,divId){
  //   let Id =document.getElementById(divId)
  //   let winWidth = Id.offsetWidth;
  //   let divHeight = winWidth/_widthAndPercent;
  //     Id.style.height = divHeight+"px";
  // }