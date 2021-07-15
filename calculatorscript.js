// calculator script file

//global variables

let numbers = document.querySelectorAll(".number"),
    functions = document.querySelectorAll(".function"),
    operators = document.querySelectorAll('.operator'),
    deleteOperator = document.querySelector('.function-delete'),
    equalOperator = document.querySelector('.operator-equal'),
    clearAll = document.querySelector('.function-clear'),
    previousOperand = document.querySelector('.previous-operand'),
    currentOperand = document.querySelector('.current-operand'),
    screenOperator = document.querySelector('.screen-operator');
  
    // loop throught all numbers 

       for(let i = 0 ; i < numbers.length ; i++){
              numbers[i].addEventListener('click', readNumber);
                            function readNumber() {
             
             // keep appending  number as user keeps typing

                                         currentOperand.innerHTML +=  numbers[i].innerHTML
                                                 if (currentOperand.innerHTML.length > 10) {
                                                          currentOperand.innerHTML = ` range error!`
                                                }
                                            
// prevent adding more than one dot using regular expression match method

             if(currentOperand.innerHTML.match(/[.]/g).length != 1){
                     currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0,-1);                
                         }   
                   }
       };

       // loop through all operator buttons

       for (let i = 0; i < operators.length; i++) {
            operators[i].addEventListener("click",checkOperator);
              function checkOperator() {

              //prevent adding error message to the previous operant

                      if(currentOperand.innerHTML != ''){
                              screenOperator.innerHTML = operators[i].innerHTML ;
                      }
                             if(currentOperand.innerHTML != ` range error!`){
                                     previousOperand.innerHTML = currentOperand.innerHTML;
                                     currentOperand.innerHTML = ''
                         }
              }
            
       }

       // calculate data when a user hit the equal button

       function computeResult() {
                  equalOperator.addEventListener('click', compute);
                    function compute() {

      // converting the previous operant and current operant to a floating point number

                         let previousValue = parseFloat(previousOperand.innerHTML);
                         let currentValue = parseFloat(currentOperand.innerHTML);
                         let result ;

    // check operator choosen by the user;

                           if(screenOperator.innerHTML == "+"){
                               result = previousValue + currentValue
                           }
                              if(screenOperator.innerHTML == "x"){
                               result = previousValue * currentValue
                            }                         
                              if(screenOperator.innerHTML == '∻'){
                              result = previousValue / currentValue
                           }
                            if(screenOperator.innerHTML == '−'){
                              result = previousValue - currentValue
                           }
                            if(screenOperator.innerHTML == 'mod'){
                                 result = previousValue % currentValue
                           }

          //if the number passes 10 digits the result is converted in to standard form

                             result = result.toPrecision(10)
                            currentOperand.innerHTML = result ;
                               previousOperand.innerHTML = ''
                               screenOperator.innerHTML = ''
                    }
       }           
       computeResult();

       // delete keyword

         deleteOperator.addEventListener('click', deleteNumber);
           function deleteNumber() {
                           currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0,-1);
               
           }
           clearAll.addEventListener('click', clearScreen)
               function clearScreen() {
                  currentOperand.innerHTML = ''
                  previousOperand.innerHTML = ''
                  screenOperator.innerHTML = ''   
               }

// implementing mathematical functions......

   function mathematicalFunc(){

                functions[0].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = 1 / currentOperand.innerHTML
                            result = result.toString().slice(0,5)
                        currentOperand.innerHTML =  result
                    }
                })

                     functions[1].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = result ** 2
                            result = result.toPrecision(8)
                        currentOperand.innerHTML =  result
                    }
                })

                   functions[2].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = result ** 3
                            result = result.toPrecision(8)
                        currentOperand.innerHTML =  result
                    }
                })

                 functions[3].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = Math.sqrt(result);
                            result = result.toPrecision(2)
                        currentOperand.innerHTML =  result
                    }
                    
                })

                 functions[4].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = Math.cbrt(result);
                            result = result.toPrecision(2)
                        currentOperand.innerHTML =  result
                    }
                });

                 functions[5].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = Math.sin(result)
                            result = result.toPrecision(5)
                        currentOperand.innerHTML =  result
                    }
                })

                 functions[6].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = Math.cos(result)
                            result = result.toPrecision(5)
                        currentOperand.innerHTML =  result
                    }
                })

                functions[7].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = Math.tan(result)
                            result = result.toPrecision(5)
                        currentOperand.innerHTML =  result
                    }
                })

                functions[8].addEventListener( 'click' , () => {
                    if(currentOperand.innerHTML != ''){
                        let result = parseFloat(currentOperand.innerHTML)
                            result = Math.abs(result)
                            result = result.toPrecision(5)
                        currentOperand.innerHTML =  result
                    }
                })  
       
   }
   
   mathematicalFunc();