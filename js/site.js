// set my array
let arrayBld = [3, 2, 4, 7, 6, 9];

// set up button 
document.getElementById("clickBld").addEventListener("click", sunSet);
document.getElementById("clickBld2").addEventListener("click", sunSet2);
document.getElementById("clear").addEventListener("click", Clear);

function sunSet(){
    let newArray = [];
    let count = 1;
    let max = arrayBld[0];
    newArray.push(max);

    for (let i = 0; i < arrayBld.length; i++) {

        if (arrayBld[i] > max) {
        count++;
        newArray.push(arrayBld[i]);
        max = arrayBld[i];
        }
    }

    document.getElementById("result").innerHTML = `${count}`;
    document.getElementById("result2").innerHTML = `${newArray.join(', ')}`;
}

// extra credit
//  Get user's input
function sunSet2(){
    let bld1 = parseInt(document.getElementById("input1").value);
    let bld2 = parseInt(document.getElementById("input2").value);
    let bld3 = parseInt(document.getElementById("input3").value);
    let bld4 = parseInt(document.getElementById("input4").value);
    let bld5 = parseInt(document.getElementById("input5").value);
    let bld6 = parseInt(document.getElementById("input6").value);

    // turn user data into an array

    let arrayBld2 = new Array();
    arrayBld2.push(bld1);
    arrayBld2.push(bld2);
    arrayBld2.push(bld3);
    arrayBld2.push(bld4);
    arrayBld2.push(bld5);
    arrayBld2.push(bld6);

    // create new array who will record the building heights. first building is always the max
    let maxHeight = arrayBld2[0];
    let viewers = new Array();
    viewers.push(maxHeight);

    // only if the current building is larger that the previous buildings will it be added to the array
    for(let loop=1; loop < arrayBld2.length; loop++){
        if(arrayBld2[loop] > maxHeight){
            maxHeight = arrayBld2[loop]
            viewers.push(maxHeight)
        }
    }

    // output
    document.getElementById("result3").innerText = ` ${viewers.join(', ')}`
}


function Clear(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
    document.getElementById("result3").innerText = "";

}
// function SortAscending(){
//     document.getElementById("result").innerText = 
//         arrayBld.sort(function(a, b){return a - b}).join(" < ");
// }





// function Join()
// {
//     let fruits = ["Banana", "Orange", "Apple", "Mango"];
//     // let fruits = new Array();
//     // fruits.push("Banana");
//     // fruits.push("Orange");
//     // fruits.push("Apple");
//     // fruits.push("Mango");

//     // document.getElementById("outputCard1").innerHTML = fruits.join(" --> ");
//     document.getElementById("outputCard1").innerHTML = fruits;
