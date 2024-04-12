const button = document.querySelector(".keys");
const div = document.querySelector("#screen");
div.setAttribute("style","text-align: right; font-size:30px")
let euquation = "";

function result(str){
    const perform = [];
    let temp = "";
    for(let i=0;i<str.length;i++){
        if(str[i]=="+" ||str[i]=="-" ||str[i]=="/"|| str[i]=="x"){
            perform.push(parseFloat(temp));
            temp="";
            perform.push(str[i]);
        }
        else{
            temp += str[i];
        }
    }
    perform.push(parseFloat(temp));
    let ans="";
    let len;
    const newarr = [];
    for(let i=0;i<perform.length;i++){
        len = newarr.length-1;
        if(perform[i]=="/"){
            newarr[len] = newarr[len]/perform[i+1];
            i++;
        }
        else if(perform[i]=="x"){
            newarr[len] = newarr[len]*perform[i+1];
            i++;
        }
        else{
            newarr.push(perform[i]);
        }

    }
    ans += newarr[0];
    for(let i=0;i<newarr.length-2;i=i+2){
        
            let x = parseFloat(ans);
            switch(newarr[i+1]){
                case "+":
                    x = x+newarr[i+2];
                    break;
                case "-":
                    x= x-newarr[i+2];
                    break;
                
            }
            ans = "";
            ans += x;
    }
    return ans;

}

button.addEventListener("click",(e)=>{
    let check = e.target;
    switch(check.id){
        case "zero":
            euquation += 0;
            div.textContent = euquation;
            break;
        case "one":
            euquation += 1;
            div.textContent = euquation;
            break;
        case "two":
            euquation += 2;
            div.textContent = euquation;
            break;
        case "three":
            euquation += 3;
            div.textContent = euquation;
            break;
        case "four":
            euquation += 4;
            div.textContent = euquation;
            break;
        case "five":
            euquation += 5;
            div.textContent = euquation;
            break;
        case "six":
            euquation += 6;
            div.textContent = euquation;
            break;
        case "seven":
            euquation += 7;
            div.textContent = euquation;
            break;
        case "eight":
            euquation += 8;
            div.textContent = euquation;
            break;
        case "nine":
            euquation += 9;
            div.textContent = euquation;
            break;
        case "dot":
            euquation += ".";
            div.textContent = euquation;
            break;
        case "cancel":
            euquation = "";
            div.textContent = euquation;
            break;
        case "divide":
            euquation += "/";
            div.textContent = euquation;
            break;
        case "multi":
            euquation += "x";
            div.textContent = euquation;
            break;
        case "minus":
            euquation += "-";
            div.textContent = euquation;
            break;
        case "add":
            euquation += "+";
            div.textContent = euquation;
            break;
        case "equal":
            euquation  = result(euquation);
            div.textContent = euquation;
            break;

    }

});