
// Elements other modules need to have access to.

let commandOutputContainer = document.createElement('div')
commandOutputContainer.setAttribute('class','command-output-container')


let contentContainer = document.createElement('div');
contentContainer.setAttribute('class', 'bash-mirror-content-wrap')

module.exports = {
    contentContainer,
    commandOutputContainer,
    
}