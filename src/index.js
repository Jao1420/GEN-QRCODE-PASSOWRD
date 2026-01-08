import prompt from "prompt";
import mainPrompt from "./prompts-schema/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import creatPassword from "./services/password/create.js";  
   
async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == "1"){
            await createQRCode();
        }else if(choose.select == "2"){
            await creatPassword();
        }
    }); 
}
main();