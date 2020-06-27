function getnumber (num) {
    var result = document.getElementById("result")
    result.value += num;
}
function clearresult (){
    var result = document.getElementById("result")
    result.value = " ";
 
}
function getanswer (){
    var result = document.getElementById("result")
    result.value = eval(result.value)
    // console.log(result.value);
 
}