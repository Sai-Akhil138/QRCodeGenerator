const qrContainer = document.querySelector('.qr-container')
const qrInputText = document.getElementById('qr-input');
const qrBtn = document.getElementById('qr-submit');
const qrImage = document.getElementById('qr-image');
const errorMessage = document.getElementById('errorMessage');

qrBtn.addEventListener('click', () => {
    let qrValue = qrInputText.value;
    if(!qrValue){ 
        errorMessage.innerHTML = 'Please enter a valid text...';
        errorMessage.classList.add('error');
        return;
    } //If input is empty
    
    qrBtn.innerText = "Generating QR Code....";
    errorMessage.innerHTML = '';
    qrImage.src = `http://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=150x150`
    qrImage.addEventListener('load', () => {
        qrInputText.value = "";
        qrContainer.classList.add('active');
        qrBtn.innerText = "Generate QR Code"
    });
});

qrInputText.addEventListener('click', () => {
    if(!qrInputText.value){ 
        qrContainer.classList.remove('active');
    } 
});