
const getInput = (Input) =>{
    const input = document.getElementById(Input);
    return input;
}


document.getElementById('submit').addEventListener('click', function(){
    const valueInput = getInput('textInput');
    const inputValue = valueInput.value;
    const parseInput = parseFloat(inputValue);
    const output = getInput('output');
    output.innerText = inputValue;
    valueInput.value = '';
    console.log(typeof parseInput);
});