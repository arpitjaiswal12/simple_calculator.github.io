alert("🔔 Show Notification");
setInterval(current_time, 1000);
function current_time() {
    time.innerHTML = new Date();
}

let n; let m;
function cal_divide() {
    n = parseInt(document.getElementById("input-1").value);
    m = parseInt(document.getElementById("input-2").value);
    document.getElementById("output").innerHTML = n / m;
}
function cal_multi() {
    n = parseInt(document.getElementById("input-1").value);
    m = parseInt(document.getElementById("input-2").value);
    document.getElementById("output").innerHTML = n * m;
}
function cal_subtract() {
    n = parseInt(document.getElementById("input-1").value);
    m = parseInt(document.getElementById("input-2").value);
    document.getElementById("output").innerHTML = n - m;
}
function cal_add() {
    n = parseInt(document.getElementById("input-1").value);
    m = parseInt(document.getElementById("input-2").value);
    document.getElementById("output").innerHTML = n + m;
}
function cal_modulo() {
    n = parseInt(document.getElementById("input-1").value);
    m = parseInt(document.getElementById("input-2").value);
    document.getElementById("output").innerHTML = n % m;
}
function check() {
    n = parseInt(document.getElementById("input-1").value);
    m = parseInt(document.getElementById("input-2").value);
    let x = (n == m);
    document.getElementById("output").innerHTML = x;
} 
function clear_button(){
    document.getElementById("output").innerHTML=" ";
}