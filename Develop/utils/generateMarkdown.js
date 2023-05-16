//Function that returns license badge and link
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === "GNU GPLv3") {
    return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "ISC") {
    return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  if (license === "GNU GPLv2") {
    return "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  if (license === "none") {
    return ""
  } 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicense(data.license)}
  
## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  In order to use this ReadME creator you will need to install node js and inquirer version 8.2.4.

  ## Usage
  To use this app, ${data.usage}

  ## Contributions
  Contributors to the app, ${data.contributions}

  ## Test
  Required to run a test: ${data.test}

  ## Questions
  For any questions please contact:
  * Github: [${data.username}](https://github.com/${data.username}/)
  * Email: ${data.email}

`
}

module.exports = generateMarkdown;
