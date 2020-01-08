document.write('<script src="../swiper.min.js"></script>');
var pcGirlAll = document.getElementById('pcGirlAll');
var fragment = document.createDocumentFragment();
var apiList1 = document.getElementById('PcGirlPhoto');
var myList2 = document.getElementById('catchMynews1');
var myApi ="https://test-cms-alpha.herokuapp.com/sites/6/profiles.json"
var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/6/tweets.json"
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
          fragment.appendChild(girlPhoto);
          pcGirlAll.appendChild(girlPhoto);
          var mySwiper = new Swiper ('#focus3', {
            loop: true, 
            slidesPerView: 3,
            //centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            speed:1300,
            autoplay : true,
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

  var  schedulesGirls= document.getElementById('schedule'); 
  var myApi3 ="https://test-cms-alpha.herokuapp.com/sites/6/schedules.json"
  function addNewSchedules(MyJson){
   for(let i = 0; i < MyJson.length; i++){
     let ss =new Date(MyJson[i].period)
     let t =ss.toString();
     let addDate = t.substring(4,16);
     let addDate1 = t.substring(4,11);
     let addtime1 = t.substring(16,18);
     let addtime2 = t.substring(19,21);
     MyJson[i].date= addDate;
     MyJson[i].date1= addDate1;
     MyJson[i].profile.time= addtime1+'時〜'+addtime2+'時';
   }
   function sortNumber(x, y){
     return  new Date(x.date)-new Date(y.date).getTime();
   }
   return MyJson.sort(sortNumber)
  }
  function groupBy( array , f ) {
   let groups = {};
   array.forEach( function( o ) {
     let group = JSON.stringify( f(o) );
       groups[group] = groups[group] || [];
       groups[group].push( o );
       
   });
   return Object.keys(groups).map( function(group) {
       return groups[group];
   });
  }
  function loadMySchedules(){
   let xhr = new XMLHttpRequest();
   xhr.open("GET",myApi3,true);
   xhr.onload = function(){
     if(this.status == 200){
       let json =new Array
       json = JSON.parse(this.responseText);
       console.log(json);
        let newList = addNewSchedules(json)
       let sorted = groupBy(newList, function(item){
         return [item.date];
       })
      console.log(sorted);
         for(let j = 0; j < sorted[0].length; j++){
           var photo =document.createElement("div");
           photo.setAttribute("class","photo");
           photo.innerHTML = '<div class="l"><div class="watermark2"></div><img src="https://test-cms-alpha.herokuapp.com'+sorted[0][j].profile.avatars[0]+'"></div><div>'+sorted[0][j].profile.name+''+sorted[0][j].profile.age+'</div><div>'+sorted[0][j].profile.time+'</div>';
           schedulesGirls.appendChild(photo);
        
           };
     }          
   }
   xhr.send();
   }
   loadMySchedules()