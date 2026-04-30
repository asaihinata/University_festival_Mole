var score=0;
document.getElementsByTagName('html')[0].oncontextmenu=function(){return false;}
document.onselectstart=function(){return false;}
function onechance(){location.reload()}
const gamedict={
times:60,
point:3,
showtime:[170,30,1500,7000]
}
var time0=new Date()
var timearr=[time0,time0,time0,time0,time0,time0]
var gotime=gamedict.showtime[2]
var moguranums=6
var count=60
var counts=0
var molestime=null
var ltimetime=null
function start(){
var time0=new Date()
var timearr=[time0,time0,time0,time0,time0,time0];
var t=count*1000
moles()
ltime()
setInterval('moles()',1500)
setInterval('ltime()',1000)
$('div.startbox').css('display','none')
$('.main_game').css('display','block')
}
function ltime(){
count-=1;
if(count==0){end();}
var tag1=$('span.timestext')
if(count==60){
tag1.text('1:00');
}else if((count<60)&&(count>=10)){
tag1.text('0:'+count);
}else if(count<10){
tag1.text('0:0'+count);
}else if(count==0){
tag1.text('0:00');
}}
function end(){
alert('終了!');
$('.main_game').css('display','none')
$('.ends').css('display','block')
$('.dialogs')[0].showModal()
$('.scoreshow').text(score+'ポイント')
}
function moles(){
counts++;
if(counts<=1){
for(var i=1;i<(moguranums+1);i++){$(`#mole${i}`).css('visibility','hidden');}
return;
}else{
for(var i=1;i<(moguranums+1);i++){
let random=Math.floor(Math.random()*gamedict.showtime[0])
if(timearr[i-1]<new Date()){
if(random<=gamedict.showtime[1]){
$(`#mole${i}`).css('visibility','visible');
timearr[i-1]=new Date().getTime()+5000;
}else{
$(`#mole${i}`).css('visibility','hidden');
}}}}}
window.addEventListener('keydown',(e)=>{
const key=e.key;
if(key=='1')keyenter(1);
if(key=='2')keyenter(2);
if(key=='3')keyenter(3);
if(key=='4')keyenter(4);
if(key=='5')keyenter(5);
if(key=='6')keyenter(6);
});
function keyenter(num){
if($(`#mole${num}`).css('visibility')=='visible'){point(gamedict.point,num);}
}
function point(points,nums){
if(nums==null){
score+=points;
}else{
timearr[nums-1]=new Date().getTime();
$(`#mole${nums}`).css('visibility','hidden');
score+=points;
}
if(score<0){score=0}
$('span.scorenum').text(score);
}