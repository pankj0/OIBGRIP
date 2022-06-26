let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        buttonText = e.target.innerHTML;
        if(buttonText == 'X'){
            buttonText = '*';
            string +=buttonText;
            document.querySelector('input').value = string;
            
        }
        else if(buttonText == 'ENTER'){
            string = eval(string);
            document.querySelector('input').value = string;
            ans=string;

        }
        else if(buttonText == 'ans'){
            string = ans;
            document.querySelector('input').value = string;

        }
        else if(buttonText == 'sq'){
            string = string*string;
            document.querySelector('input').value = string;

        }
        else if(buttonText == 'sqrt'){
            string = Math.sqrt(string);
            document.querySelector('input').value = string;

        }
        else if(buttonText == 'del'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;

        }
        else if(buttonText == 'clear'){
                string="";
                document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
