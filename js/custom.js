function test(a, b) {
    document.getElementById("test").innerHTML = "Moto Dog " + a + b
}

function sum(a, b) {
    let var1 = Number.parseInt(document.getElementById('a').value);
    let var2 = Number.parseInt(document.getElementById('b').value);
    let ans = var1 + var2
    document.getElementById('result').innerHTML = ans
}

function sum2() {
    let var1 = Number.parseInt(document.getElementsByName("a")[0].value)
    let var2 = Number.parseInt(document.getElementsByName("b")[0].value)
    let ans = var1 + var2
    document.getElementById('result').innerHTML = ans
}

function getData() {
    let id = document.getElementsByName('ids')[0].value
    let name = document.getElementById('name').value
    let lname = document.getElementsByName('lname')[0].value
    let sex = document.getElementsByName('sex')[0].value
    document.getElementById('result').innerHTML = id + "<br>" + name + "<br>" + lname + "<br>" + sex + "<br>" + $('#hobby:checked').val()
}

function getData2(form) {
    let id = form.id.value;
    let name = form.name.value;
    let lname = form.lname.value;
    let sex = form.sex.value;
    window.alert(id, name, lname, sex)
}



function getData4(){
    
}