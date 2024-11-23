(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

function cambiarUbicacion(tienda) {
    var iframe = document.getElementById("map");
    if (tienda === 'independencia') {
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62443.3338972706!2d-77.10248703737078!3d-11.994669988131681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cefcdc27762f%3A0xe806931518f626e6!2siShop!5e0!3m2!1ses-419!2spe!4v1729265203375!5m2!1ses-419!2spe";
    } else if (tienda === 'mall-sur') {
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.380471157772!2d-76.98517562606717!3d-12.154479888090814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9a4469d1c3b%3A0x3f7217529afa8b52!2siShop!5e0!3m2!1ses-419!2spe!4v1729266086431!5m2!1ses-419!2spe";
    } else if (tienda === 'san-isidro') {
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18962.879626757865!2d-77.05592896767615!3d-12.109901746901425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83f1d6e9c19%3A0x8c83a1cc4c10b244!2siShop!5e0!3m2!1ses-419!2spe!4v1729266276424!5m2!1ses-419!2spe";
    }
    
}
const videoTienda = document.getElementById('tienda-video');
videoTienda.muted = true; 
