const textarea = document.querySelector('textarea'),
fileName = document.querySelector('.file-name input'),
selectMenu = document.querySelector('.save-as select'),
saveBtn = document.querySelector('.save-btn') 

selectMenu.addEventListener('change', () => {
    // Getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text
    saveBtn.innerText = `Save As ${selectedOption.split(' ')[0]} File`    
})

saveBtn.addEventListener('click', () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value})
    // URL.createObjectURL creates a url that represent passed object
    const fileURL = URL.createObjectURL(blob)
    const link = document.createElement('a') // Creating <a> tag
    link.download = fileName.value // Passing file name as downloaded value of link
    link.href = fileURL // Passing fileURL as href value of link
    link.click() // Clicking link so the file download
})