var input =document.getElementById("input Field")

function getvalue(number){
input.value +=number;
}
function claerall(){
    input.value ="";
}
function deleteChar(){
    input.value =input.value.slice(0,-1);
}
function square(){
    input.value = input.value*input.value; 
}
function equal(){
    if(input.value){
        input.value =eval(input.value); 
    }else{
        input.value="syntax error";
    }
}