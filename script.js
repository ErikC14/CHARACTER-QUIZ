$(".calculate").click(function(){
    var number=parseInt($("#age").val());
    var life= $("#active").val();


if( number<18 && life==="extremely active"){
    $("#flash").show();    
}else if( number<18 && life==="slow paced"){
    $("#dora").show();
}else if(number>18&&number<25&&life==="active"||life==="slow paced"){
    $("#spiderman").show();
}else if(number>25&&number<45&&life==="active"||life==="extremely active"){
    $("#CR7").show();
}else if(number>35&&number<50&&life==="active,extremely active,slow paced"){
}


    
});