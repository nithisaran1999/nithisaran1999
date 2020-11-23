function bmiCalcutor(form) {

    let weight = Number.parseFloat(form.weight.value);
    let height = Number.parseFloat(form.height.value);
    let weight_type = "";
    let height_type = "";
    if (weight_type || height_type == ""){
        var element = document.getElementsByClassName("modal");
        element.classList.add("is-active")
    }else{
        
    }
    console.log(weight);
    console.log(height);

}