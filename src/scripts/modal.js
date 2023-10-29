const buttonOpen = document.getElementById('open-modal')
const buttonClose = document.getElementById('close-modal')
const modal = document.getElementById('modal')

buttonOpen.addEventListener('click', toggleClass)

buttonClose.addEventListener('click', toggleClass)

function toggleClass() {
    document.body.classList.toggle('hidden')
    modal.classList.toggle('open')
}