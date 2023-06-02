function bmiCal(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let showOutput = document.getElementById("output");
    
     
    let bmiRange = weight/ (height/100)** 2;
    bmiRange = bmiRange.toFixed(2);
    // let classification =

    showOutput.innerHTML = bmiRange;
}