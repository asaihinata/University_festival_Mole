const gamedict={
	times:2,
	point:3,
	date:[170,30,1500,7000]
};
const gotime=gamedict.date[2];
const moguranums=6;
var score=0;
var timearr=timeset();
var count=gamedict.times;
const t=count*1000;
var counts=0;
function timeset(){
	const set_time=new Date();
	var arr=[];
	for(i=0;i<6;i++){
		arr.push(set_time);
	}
	return arr;
}
function start(){
	var timearr=timeset();
	moles();
	ltime();
	setInterval("moles()",1500);
	setInterval("ltime()",1000);
	$("div.startbox").css("display","none");
	$(".main_game").css("display","block");
}
function ltime(){
	count-=1;
	if(count==0){
		end();
	}
	const tag1=$("span.timestext");
	if(count==60){
		tag1.text("1:00");
	}else if((count<60)&&(count>=10)){
		tag1.text("0:"+count);
	}else if(count<10){
		tag1.text("0:0"+count);
	}else if(count==0){
		tag1.text("0:00");
	}
}
function end(){
	alert("終了!");
	$(".main_game").css("display","none");
	$(".ends").css("display","block");
	$(".dialogs")[0].showModal();
	$(".scoreshow").text(score+"ポイント");
}
function moles(){
	counts++;
	if(counts<=1){
		for(var i=1;i<(moguranums+1);i++){
			$(`#mole${i}`).css("visibility","hidden");
		}
		return;
	}else{
		for(var i=1;i<(moguranums+1);i++){
			let random=Math.floor(Math.random()*gamedict.date[0]);
			if(timearr[i-1]<new Date()){
				if(random<=gamedict.date[1]){
					$(`#mole${i}`).css("visibility","visible");
					timearr[i-1]=new Date().getTime()+5000;
				}else{
					$(`#mole${i}`).css("visibility","hidden");
				}
			}
		}
	}
}
window.addEventListener("keydown",(e)=>{
	const key=e.key;
	if(key=="1"){
		keyenter(1);
	}else if(key=="2"){
		keyenter(2);
	}else if(key=="3"){
		keyenter(3);
	}else if(key=="4"){
		keyenter(4);
	}else if(key=="5"){
		keyenter(5);
	}else if(key=="6"){
		keyenter(6);
	}
});
function keyenter(num){
	if($(`#mole${num}`).css("visibility")=="visible"){
		point(gamedict.point,num);
	}
}
function point(points,nums){
	if(nums==null){
		score+=points;
	}else{
		timearr[nums-1]=new Date().getTime();
		$(`#mole${nums}`).css("visibility","hidden");
		score+=points;
	}
	if(score<0){
		score=0
	}
	$("span.scorenum").text(score);
}
function onechance(){
	location.reload();
}