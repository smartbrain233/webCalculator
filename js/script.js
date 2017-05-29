var screenNode=document.querySelector("#screen");//屏幕对象
var clearScreenBool=false;//false表示不清屏幕
var beforeNum=null;//表示第一个数字
var afterNum=null;//表示第二个数字
var beforeSign=null;//表示第一个符号
var afterSign=null;//表示第二个符号
var resultBool=false;//表示连续按等号时需要清空第一个值
//总体思路：1、将等于的运算先做出来：a、运算等于;b、运算等于等于;c、运算等于运算等于;d、等于等于;2、连续运算
//输入操作
function inputKey(strNum){//strNum表示按钮的数字或者小数点，string类型	
	var screenVal=screenNode.value;//屏幕的值
	if(clearScreenBool){//清屏操作
		if(resultBool){//按等于的时间触发
			beforeNum=null;//清空第一个值
			resultBool=false;
		}
		screenNode.value="";
		clearScreenBool=false;//保证按一次符号只清屏一次
	}
	//当屏幕的值是"0"时且按的值不是点，那么直接替换为数字0-9
	if(screenVal=="0" && strNum!="."){
		screenNode.value=strNum;
	}
	//当按的值为非点时进入判断 或者 按的值为点并且屏幕的值没有点
	else if(strNum!="." || (strNum=="." && screenVal.indexOf(".")==-1)){
		screenNode.value+=strNum;
	}
}
//清空(重置)操作
function clearFun(){
screenNode.value="0";
}
//开根
function sqr(){

}
//删除
function del(){
	screenNode.value=screenNode.value.slice(0,(screenNode.value.length)-1);
}
//做运算
function operatingFun(sign){//sign表示符号
	if(beforeSign!=null){//连续运算
		result();
		resultBool=false;
	}
	beforeNum=Number(screenNode.value);//记录第一个值
	beforeSign=sign;//记录第一个符号
	clearScreenBool=true;
	afterNum=null;
}
//结果
function result(){
	if(beforeSign==null)
	return;
	if(afterNum==null){
		afterNum=Number(screenNode.value);//记录第二个值
	}
	if(beforeNum==null){
		beforeNum=Number(screenNode.value);//记录第一个值
	}
	
	var resultNum=null;
	switch(beforeSign){
		case"+":
		resultNum=beforeNum+afterNum;
		break;
		case"-":
		resultNum=beforeNum-afterNum;
		break;
		case"*":
		resultNum=beforeNum*afterNum;
		break;
		case"/":
		resultNum=beforeNum/afterNum;
		break;
		default:
		
	}
	beforeNum=resultNum;//更新一下第一个值
	clearScreenBool=true;//记录一次清屏
	resultBool=true;
	screenNode.value=resultNum;//屏幕的值
}