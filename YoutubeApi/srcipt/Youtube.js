

// for searching video on youtube


const searchVideo= async ()=>
{
    try{
        let input=document.querySelector("#search").value;
   let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&q=${input}&key=AIzaSyCpTpc4KiM8qBf7pFG1f3Y-bwX2WNhrXyw&maxResults=20`)
         let data =await res.json();
         let videos=data.items;
         console.log(videos)
     // appendVideo(videos)
         return videos;
    }
    catch(err){

    }
}

//append the videos
const appendVideo=(data) =>
{
    let searchVi=document.querySelector("#videoYoutube")
    searchVi.innerHTML=null;
  //  console.log(data.snippet.channelId)
  // let logolink= gotchannel(el.snippet.channelId);
    try{
        data.map(async({snippet:{ title,thumbnails,channelId,channelTitle},id:{videoId}})=>
        {
           // console.log(channelId)
            let logolink=await gotchannel(channelId);
          // console.log(logolink)
          let resultView=await viewCount(videoId)
let abusultView= financial(resultView/1000000)
// console.log(abusultView)



function financial(x) {
return Number.parseFloat(x).toFixed(2);
}
            let div=document.createElement("div");
                 div.setAttribute("id","carddiv")
            
            let div1=document.createElement("div");
                 div1.setAttribute("id","forimagethumblin")
            let img=document.createElement("img")
            img.src=thumbnails.high.url

            img.setAttribute("id","thumbnail")


            img.onclick=function test()
            {
            call(videoId)
           
            }
            div1.append(img);

            let informationtag=document.createElement("div");
            informationtag.setAttribute("id","informationtag")
           
                 let logodiv=document.createElement("div");
                 logodiv.setAttribute("id","logodiv");


let imglogo=document.createElement("img");
imglogo.src=logolink;
imglogo.setAttribute("id","logo")

logodiv.append(imglogo)

            let name=document.createElement("h6")
            name.innerText=title;

            name.setAttribute("id","headingh6");

 let channelName=document.createElement("p")
 channelName.innerText=channelTitle;
 

 let Viewshows=document.createElement("p")
 Viewshows.innerText=abusultView+" M Views";

 let chanalsName=document.createElement("div");
 chanalsName.setAttribute("class","forpaddingleft")
  chanalsName.append(channelName,Viewshows)

            informationtag.append(logodiv,name)
div.append(div1,informationtag,chanalsName)
          searchVi.append(div)

     

function call(videoId)
{
var showiframe=document.querySelector("#show")
showiframe.innerHTML=null;
let iframe=document.createElement("iframe");

iframe.src=`https://www.youtube.com/embed/${videoId}`;

iframe.height="600px";
iframe.width="100%";
iframe.allow="fullscreen"

location.href = "#top";
iframe.target="_parent"
document.querySelector("#show").append(iframe)
}


})


    }
    catch(err){
        console.log(err)
    }
}





/////for Treanding Page

const videoShow= async ()=>
{
   let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyCpTpc4KiM8qBf7pFG1f3Y-bwX2WNhrXyw&maxResults=20`
    try{
      //  let input=document.querySelector("#search").value;
        let res=await fetch(url)
         let data =await res.json();
        //  let videos=data.items;
     //  console.log(data.items)
         //appendVideo(videos)
        // return videos;
        appendVideo1(data.items)
        //grtchannelid(data.items)
    }
    catch(err){
        console.log(err)
    }
}
videoShow()


//append Data for tranding data

const appendVideo1=async (data) =>
{
    let searchVi=document.querySelector("#videoYoutube")
    searchVi.innerHTML=null;
    //
   
data.map(async(el)=>{
let logolink=await gotchannel(el.snippet.channelId);
// console.log(logolink)
let resultView=await viewCount(el.id)
let abusultView= financial(resultView/1000000)
//  console.log(abusultView)



function financial(x) {
return Number.parseFloat(x).toFixed(2);
}
searchVi.innerHTML+=`
  <div onclick="location.href= 'https://youtube.com/watch?v=${el.id}'">
<div id="forimagethumblin" >
<img id="thumbnail" src="${el.snippet.thumbnails.high.url}">
</div>



<div id="informationtag">
<div id="logodiv">
    <img id="logo" src="${logolink}" alt="prabhu"></div>
<div><h6>${el.snippet.title}</h6>
<p>${el.snippet.channelTitle}</p>
    <p>${abusultView}M Views</p></div>

</div>
</div>

`

})  
}


//rtrive data for views
let viewCount= async (countView)=>
{
  //  console.log(countView)
   let url=`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${countView}&key=AIzaSyCpTpc4KiM8qBf7pFG1f3Y-bwX2WNhrXyw`
    try{
      //  let input=document.querySelector("#search").value;
        let res=await fetch(url)
         let count =await res.json();
        //  let videos=data.items;
      let confrirmCount=count.items[0].statistics.viewCount;
       return confrirmCount;
    }
    catch(err){
        console.log(err)
    }
}
//getting channels for thaumbnails
const gotchannel= async (channelId)=>
{
// console.log(channelId)
let url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCpTpc4KiM8qBf7pFG1f3Y-bwX2WNhrXyw`
    try{
        
        let res=await fetch(url)
         let data =await res.json();
          let videos=data.items[0];
        // console.log(videos)
      videos.channalThumbnaill=videos.snippet.thumbnails.default.url;
     
      //appendchanallogo(videos)
      return videos.channalThumbnaill;
     
    }
    catch(err){

    }
}



//debounce function
async function main()
{
    try{
        
    let data=await searchVideo()
    // console.log(data)
    
    if(data==undefined)
    {
        return false
    }
  
    appendVideo(data)
    

}
catch(err)
{
    console.log(err)
}
}





let timerid;

function debounce(func, delay)

{
  
  
    console.log(timerid)
    if(timerid)
    {
        clearTimeout(timerid);
    }
    
     timerid=setTimeout(function()
    {
        func();
    },delay)
    

}
function myFunction() {
    var x = document.getElementById("siderblock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }