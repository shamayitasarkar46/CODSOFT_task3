let string = "";
let buttons = document.querySelectorAll('.button')      // queryselectorall selects all those have the class button 
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);              //eval evaluates the value
            document.querySelector('input').value = string; 
        }
        else  if(e.target.innerHTML == 'AC'){
            string = "";              //eval evaluates the value
            document.querySelector('input').value = string; 
        }
        else  if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);              //eval evaluates the value
            document.querySelector('input').value = string; 
        }
        
       else{
        console.log(e.target);
        string = string + e.target.innerHTML;                               //concatenates strings
        document.querySelector('input').value = string;     //puts strings value in input space....and shows us
        
       }
    })
})