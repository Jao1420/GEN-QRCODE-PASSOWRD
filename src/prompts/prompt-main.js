import chalk from "chalk";

const mainPrompt=[
    {
        name: "select",
        description: chalk.blueBright.bold("Escolha uma opção: 1-QR CODE OU 2-Gerar Senha "),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic("Seleção inválida, Digite 1 ou 2"),
        require: true
    },
];

export default mainPrompt;

