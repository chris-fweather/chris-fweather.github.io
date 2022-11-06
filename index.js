// template_jp9pj9d
// service_mw5im8a
// YcgZSTOSI6PGEcVTc

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs.sendForm(
         "service_mw5im8a",
         "template_jp9pj9d",
         event.target,
         "YcgZSTOSI6PGEcVTc"
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            'The email service is temporarily unavailable. Please contact me directly on: chris.fweather@gmail.com'
        )
    })
}


let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true
    document.body.classList += ' modal--open'
}