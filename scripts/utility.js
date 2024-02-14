//set value on screen
function takeButtonValue(elementId) {

    const valeT = document.getElementById(elementId);
    const new1 = valeT.innerText;
    const ptag = document.getElementById('mainP')
    ptag.append(new1);




}

// clear with AC button
function clearButton() {
    const ptag = document.getElementById('mainP')
    ptag.innerText = '';
}




