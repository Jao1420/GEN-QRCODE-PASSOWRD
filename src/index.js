import prompt from "prompt";
import chalk from "chalk";  
import mainPrompt from "./prompts/prompt-main.js";
async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == "1"){
            console.log("Você escolheu a opção de gerar QR Code");
        }else if(choose.select == "2"){
            console.log("Você escolheu a opção de gerar Senha");
        }
    }); 
}
main();