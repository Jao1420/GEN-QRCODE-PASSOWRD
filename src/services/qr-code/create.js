import prompt from "prompt";
import promptQRCode from "../../prompts-schema/prompt-qrCode.js";
import handle from "./handleQRCode.js";

async function createQRCode() {
    prompt.get(promptQRCode,handle); {
        prompt.start()
    };

}

export default createQRCode;