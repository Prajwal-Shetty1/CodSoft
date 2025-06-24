let displays=document.getElementById('display');

function press(value){
    displays.value += value;
}

function Calculate(){
    try{
    displays.value=eval(displays.value);
    } catch {
        displays.value='error';
    }
}

function ClearDisplay(){
    displays.value = '';
}