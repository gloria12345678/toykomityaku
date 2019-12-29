document.write('<script src="../swiper.min.js"></script>');
var pcGirlAll = document.getElementById('pcGirlAll');
var apiList1 = document.getElementById('PcGirlPhoto');
var myList2 = document.getElementById('catchMynews1');
var myApi ="https://test-cms-alpha.herokuapp.com/sites/5/profiles.json"
var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/3/tweets.json"
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
          girlPhoto.innerHTML = '<img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'"><div  style="width: 229px;height: 300px;"class="watermark"></div>';
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
            girlPhoto.innerHTML = '<div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'"><div class="watermark"></div></div>';
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
  loadIndexStaff()
  loadnews()




 