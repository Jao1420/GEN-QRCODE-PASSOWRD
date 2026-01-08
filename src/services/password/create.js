import chalk from 'chalk';
import handle from './handlePassword.js';
async function creatPassword(){
    // console.log(chalk.green('Password creation functionality is not yet implemented.'));
    const password= await handle();
    console.log(chalk.blue(`Generated Password: ${password}`));

}

export default creatPassword;