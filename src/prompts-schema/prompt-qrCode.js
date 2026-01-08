import chalk from "chalk";

const promptQRCode=[
    {
        name: "Link",
        description: chalk.magentaBright("Digite o link para gerar o QR Code:"),
        
    },
    {
        name: "type",
        description: chalk.greenBright("Escolha o tipo de QR Code (1) imagem ou (2) Saida no Terminal:"),
        pattern: /^[1-2]$/,
        message: chalk.redBright.italic("Escolha inválida. Digite 1 ou 2."),
        required: true
    }

];

export default promptQRCode;