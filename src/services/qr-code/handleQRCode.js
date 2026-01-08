import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result){
    if(err){
        console.log(chalk.redBright.italic("Ocorreu um erro ao gerar o QR Code."));
        return;
    }
    const isSmal= result.type == 2;
    qr.generate(result.Link, {small: isSmal}, (qrcode) => {
        console.log(chalk.greenBright.italic("QR Code gerado com sucesso: \n"));
        console.log(qrcode);
    });
}

export default handle;