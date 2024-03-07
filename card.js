let user1score=0;
let user2score=0;
let fuser1score=document.getElementById("user1score");
let fuser2score=document.getElementById("user2score");
let message=document.getElementById("msg");
let king1=document.getElementById("king1");
let king2=document.getElementById("king2");

let queen1=document.getElementById("queen1");
let queen2=document.getElementById("queen2");
let jack1=document.getElementById("jack1");
let jack2=document.getElementById("jack2");

const cardpack2=[king1,queen1,jack1];
const cardpack1=[king2,queen2,jack2];




function users1choice()
{
    
    
    const index1=Math.floor(Math.random()*3);
    let user1choice=cardpack1[index1];
    return user1choice;
}
function users2choice(){
    
    const index2=Math.floor(Math.random()*3)
    let user2choice=cardpack2[index2]
    return user2choice;
}




function showwinner( user1win,k,p){
    if(user1win){
        user1score++;
        fuser1score.innerText = user1score;
        message.style.backgroundColor="aqua";
        message.innerText="user1 win";
    

    }
    else if(user1win==false)
    {
        user2score++;
        fuser2score.innerText = user2score;
        message.style.backgroundColor="aqua";
        message.innerText="user2 win";
    }



setTimeout(()=>{p.style.marginTop="65vh"
k.style.marginTop="65vh";
},1500)

}

function playgame(k,p,m,n){
    // let k=users1choice();
    // console.log(k);
    // let p=users2choice();
    // console.log(p);
    let user1win;
    
if(m===n){
    console.log("paro");
    message.innerText="Game Draw"  ;
    message.style.backgroundColor="yellow";
    

}
else{
   if (k===cardpack1[0]){
     user1win=true;

    }
    else if(k===cardpack1[1]){
        user1win=p==cardpack2[2]?true:false;


}else if(k===cardpack1[2]){
    user1win=false;}

}
showwinner(user1win,k,p);

}



 let k;
 let m;
cardpack1.forEach((Element)=>{
    Element.addEventListener("click",()=>{
 k=users1choice();
    k.style.marginTop="30vh"
    m=k.getAttribute("name");
    console.log(m);

    

})})



cardpack2.forEach((Element)=>{
    Element.addEventListener("click",()=>{
let p=users2choice();
      p.style.marginTop="30vh"
   let n= p.getAttribute("name")
   console.log(n);
      playgame(k,p,m,n);

})})









