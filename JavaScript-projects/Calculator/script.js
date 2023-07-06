let string = "";

let buttons = document.querySelectorAll('.button');

let flag=false;
let flag2=false;
let flag3=false;

let input1=document.querySelector('input');

let btn=document.querySelector('#power');
btn.addEventListener('click',()=>
{
    flag=true;
});

let permu=document.querySelector('#permu');
permu.addEventListener('click',()=>
{
    flag2=true;
});

let sqrt=document.querySelector('#sqrt');
sqrt.addEventListener('click',()=>
{
    flag3=true;
});



Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=' && flag == false && flag2==false && flag3==false) {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == '=' && flag == true) {
            let a1 = string.split('^');
            string = Math.pow(a1[0], a1[1]);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == '=' && flag2 == true) {
            let a11=string.split('!');
            let a12 =permutation(a11[0]);
        
            console.log(a12);
            document.querySelector('input').value = a12.toString();
        }

        else if (e.target.innerHTML == '=' && flag3 == true) {

            //Code by split function
            var aa= string.split('√');
            document.querySelector('input').value = Math.sqrt(aa[1]);

            //  Code by substring
            // let myArray = string.substr(1, string.length-1);
            // console.log(myArray);
            // document.querySelector('input').value = Math.sqrt(myArray);
        }

        else if (e.target.innerHTML == 'C') {
            string = '';
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});

function permutation(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
}
