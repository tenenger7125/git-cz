/* eslint-disable no-console */
const inquirer = require('inquirer');

const askUserConfirmation = async (message) => {
  const answers = await inquirer.prompt([
    {
      message: `${message} <== Would you like to enter the commit message as it is? (yes/y or no/n):`,
      name: 'confirmCommit',
      type: 'input',
      validate: (input) => {
        const validAnswers = ['yes', 'y', 'no', 'n', ''];
        if (validAnswers.includes(input.toLowerCase())) {
          return true;
        } else {
          return 'Please enter one of yes, y, no, or n.';
        }
      }
    }
  ]);

  const answer = answers.confirmCommit.toLowerCase();
  if (answer === 'yes' || answer === 'y' || answer === '') {
    return true;
  }

  return false;
};

module.exports = askUserConfirmation;
