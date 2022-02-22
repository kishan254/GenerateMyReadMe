function generateReadme(response){

    return `
# ${response.name}

![License](https://img.shields.io/badge/License-${response.license.replace(/-/g, '--')}-blue)

${response.desc}

## Table of Contents

1.  [Usage](#usage)
2.  [Goal and Philosophy](#goal)
3.  [Licese](#license)


## Goal
Is to create an app that can generate a good readme file

THis is a good working app



## License
THis project is created under the ${response.license} licence
    
`

}


module.exports = generateReadme;