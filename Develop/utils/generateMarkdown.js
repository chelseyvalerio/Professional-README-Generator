// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none'){
    return `- [License](#license)`
  } 
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return `## License
    
This project is licensed under the ${license} license. `
  } 
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

To install necessary dependencies run the following command:
${data.installation}

## Usage

${data.usage}


${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To perform tests, run the following command:
${data.test}

## Questions

For any questions about the project, please email me at ${data.email}.
You can view more of my work at [${data.GitHub}](https://github.com/${data.GitHub}/).

`;
}

module.exports = generateMarkdown;
