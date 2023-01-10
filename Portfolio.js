
function showProjectOne() {
    document.getElementById('hidden-project-one').style.display = 'block'
    document.getElementById('project-one-title').style.textDecoration = 'underline'
}
addEventListener('click', showProjectOne)

function hideProjectOne() {
    document.getElementById('hidden-project-one').style.display = 'none'
    document.getElementById('project-one-title').style.textDecoration = 'none'
}
addEventListener('mouseout', hideProjectOne)

function showProjectTwo() {
    document.getElementById('hidden-project-two').style.display = 'block'
    document.getElementById('project-two-title').style.textDecoration = 'underline' 
}
addEventListener('click', showProjectTwo)

function hideProjectTwo() {
    document.getElementById('hidden-project-two').style.display = 'none' 
    document.getElementById('project-two-title').style.textDecoration = 'none'
}
addEventListener('mouseout', hideProjectTwo)