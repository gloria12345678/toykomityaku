document.write('<script src="../swiper.min.js"></script>');
var myList = document.getElementById('getMyStaff');
var pcGirlAll = document.getElementById('pcGirlAll');
var apiList1 = document.getElementById('PcGirlPhoto');
var myList2 = document.getElementById('catchMynews1');
var myApi ="https://test-cms-alpha.herokuapp.com/sites/1/profiles.json"
var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/1/tweets.json"

function loadMyStaff(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET",myApi,true);
  xhr.onload = function(){
      if(this.status == 200){
        let json =new Array
        json = JSON.parse(this.responseText);
        console.log(json);
        for(let i = 0; i < json.length; i++) {
          var para=document.createElement("div");
          para.setAttribute("class","staff");
          var img =new Array
          for(var j=0;j<3;j++){
            img[j] ="https://test-cms-alpha.herokuapp.com"+json[i].avatars[j];
            if(img[j]=="https://test-cms-alpha.herokuapp.comundefined"){
               img[j]="staff/all.jpg"
            }
          }
          para.innerHTML = '<div class="staffBox"><div class="staPhotoffBox"id="staffPro'+i+'"><div class="staBigPhotoffBox"><div class="swiper-container swiper-c" id="swiper'+i+'"><div class="swiper-wrapper"><div class="swiper-slide swiper-slide1"><img id="img1" src="'+ img[0]+'"></div><div class="swiper-slide"><img id="img2" src="'+ img[1]+'"></div> <div class="swiper-slide"><img id="img3" src="'+ img[2]+'"></div></div></div></div><div class="staPhotoffBoxSmall"><ul><li><img id="" src="'+ img[0]+'"></li><li><img id="" src="'+ img[1]+'"></li><li><img id="" src="'+ img[2]+'"></li></ul></div></div><div class="txt"><h2 id="name">' + json[i].name+ '</h2> <br><h2 id="old">年齢:' + json[i].age+ '</h2><br><h3 id="sizi">3サイズ：' + json[i].abstract + '</h3><br><h4 id="txt">' + json[i].description + '</h4></div></div>';
          myList.appendChild(para);
          var staffPro = document.getElementById('staffPro'+[i]);
          staffPro.addEventListener('click', locationStaff, true);
          var mySwiper = new Swiper('#swiper'+i,{
            direction : 'horizontal',
            loop : true,
          })
            function locationStaff (){
           // console.log( 'staff.html?id='+[i])
           window.location.href = 'girl_big.html?'+[i]+'&aassdfwdw##5345afasdfqweqw';
          };
          var mySwiper = new Swiper('.swiper-container1',{
           direction : 'horizontal',
           })
        }
      }              
  }
  xhr.send();
}
function loadIndexStaff(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET",myApi,true);
  xhr.onload = function(){
      if(this.status == 200){
        let json =new Array
        json = JSON.parse(this.responseText);
        console.log(json);
        for(var i = 0; i < json.length; i++) {
          var girlPhoto =document.createElement("div");
          girlPhoto.setAttribute("class","swiper-slide");
          // girlPhoto.setAttribute("id","swiper2");
          girlPhoto.innerHTML = '<img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'">';
          pcGirlAll.appendChild(girlPhoto);
          var swiper = new Swiper('#focus3', {
            loop : true,
            autoplay:2000,
            slidesPerView : 4,
            slidesPerGroup : 1,
              });
        }
          for(var i = 0; i < json.length; i++) {
            var girlPhoto =document.createElement("div");
            girlPhoto.setAttribute("class","swiper-slide");
            girlPhoto.setAttribute("id","swiper2");
            girlPhoto.innerHTML = '<div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'">';
            apiList1.appendChild(girlPhoto);
            var swiper = new Swiper('#Swiper0', {
              loop : true,
              autoplay:2000,
            });
          }
      }              
  }
  xhr.send();
}
function loadnews(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET",myApi1,true);
  xhr.onload = function(){
      if(this.status == 200){
          let json =new Array
          json = JSON.parse(this.responseText);
          console.log(json);
          for(var i = 0; i < json.length; i++) {
              var listItem = document.createElement('div');
              listItem.innerHTML = '<p>' + json[i].created_at+ '</p>';
              listItem.innerHTML +='<hr>';
              listItem.innerHTML +='<p>' + json[i].content + '<p>';
              let winWidth = apiList1.offsetWidth;
              if(winWidth==300){
                myList2.appendChild(listItem);
              }else{
                 myList1.appendChild(listItem);
              }
          }
      }              
  }
  xhr.send();
}

let url = window.location.pathname;
url = url.substring(url.lastIndexOf('/') + 1, url.length);
console.log(url);
let urlIndex ="index.html"
let urlGirl ="girl.html"
if(url==urlGirl){
  loadMyStaff()
}else{
  loadIndexStaff()
  loadnews()
}