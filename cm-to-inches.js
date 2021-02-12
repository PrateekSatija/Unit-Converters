window.addEventListener("load", () => {
    const input1 = document.querySelector('#input1-1');
    const input2 = document.querySelector('#input1-2');
    const output = document.querySelector('.output-text');
    const button1 = document.querySelector('#button1-1');
    const button2 = document.querySelector('#button1-2');
    input1.addEventListener("input", () => {
        input2.value = input1.value/2.54;
        output.innerText = `Result: ${input1.value} centimeters = ${input2.value} inches`;
        if(input1.value === "" || input2.value === "") output.innerText = "";
    })
    input2.addEventListener("input", () => {
        input1.value = input2.value*2.54;
        output.innerText = `Result: ${input2.value} inches = ${input1.value} centimeters`;
        if(input1.value === "" || input2.value === "") output.innerText = "";
    })
    button1.addEventListener("click", () => {
        const text = `Result: ${input1.value} centimeters = ${input2.value} inches`;
        output.innerText = `Result: ${input1.value} centimeters = ${input2.value} inches`;
        if(input1.value === "" || input2.value === "") output.innerText = "";
    })
    button2.addEventListener("click", () => {
        input1.value = 0
        input2.value = 0;
        output.innerText = "";
    })
})