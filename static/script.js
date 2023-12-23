first_value = Math.floor(Math.random()*10)
second_value = Math.floor(Math.random()*10)
sign = ''
if (Math.floor(Math.random()*2)){
    sign = '+'
}
else{
    sign = '-'
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.example').value = first_value +sign+ second_value+'='
    document.querySelector('.finish-btn').onclick = function(){
         document.querySelector('.check').value= '1'
         console.log(document.querySelector('.check').value)
    }
})