const meter = document.getElementById('mter');
meter.addEventListener('input', conVert);
function conVert (e){
    let meter = e.target.value;
        //meter to others
        document.getElementById('iches').value = meter * 39.37;
        document.getElementById('feets').value = meter * 3.28;
        document.getElementById('yards').value = meter * 1.09;
    
}

const inches = document.getElementById('iches');
inches.addEventListener('input', conVert1);
function conVert1 (e){
    let inches = e.target.value;
    // inches to others
    document.getElementById('feets').value = inches * 0.08;
    document.getElementById('yards').value = inches * 0.03;
    document.getElementById('mter').value = inches / 39.37;
}

const feets = document.getElementById('feets');
feets.addEventListener('input', conVert2);
function conVert2 (e){
    let feets = e.target.value;
    //feet to others
    document.getElementById('yards').value = feets * 0.33;
    document.getElementById('mter').value = feets / 3.28;
    document.getElementById('iches').value = feets * 12;
}


const yards = document.getElementById('yards');
yards.addEventListener('input', conVert3);
function conVert3 (e){
    let yards = e.target.value;
        //yards to others
        document.getElementById('mter').value = yards / 1.09;
        document.getElementById('iches').value = yards * 36;
        document.getElementById('feets').value = yards * 3;
}