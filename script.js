let numpad = document.querySelector(".numpad");
let operatorPad = document.querySelector(".operator-pad");
let output = document.querySelector(".output");

let currentNum = 0;
let result = 0;
let operator = null;

numpad.addEventListener("click", function(event){
    let button = event.target;
    if (button.classList.contains("num")){
        if (button.textContent === "del"){
            currentNum = Math.floor(currentNum/10);
        } else {
            currentNum = currentNum*10 + parseInt(button.textContent);
        }
    }
    updateOutput(currentNum);

});

operatorPad.addEventListener("click", function(event){
    let button = event.target;
    if (button.classList.contains("op")){
        let op = button.textContent;
        if (op == "AC"){
            restart();
        }else if (result != 0){
            switch (operator){
                case '+': result = result + currentNum; break;
                case '-': result = result - currentNum; break;
                case '/':
                    if (currentNum != 0){
                        result = result / currentNum; 
                    } else {
                        updateOutput("Division by 0");
                    }
                    break;
                case '*': result = result * currentNum; break;
            }
            operator = op;
            currentNum = 0;
            updateOutput(result);
            

        } else {
            result = currentNum;
            currentNum = 0;
            operator = op;
            updateOutput(result);
        }

    }
});
function updateOutput(result){
    output.textContent = result;
}
function restart(){
    currentNum = 0;
    result = 0;
    operator = null;
    updateOutput(result);
}