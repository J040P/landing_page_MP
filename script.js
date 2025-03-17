
location = "https://api.whatsapp.com/send/?phone=5541999446102&text=Olá%2C+gostaria+de+saber+mais+como+eu+posso+alavancar+meu+patrimônio+com+consorcio&type=phone_number&app_absent=0"
document.getElementById("btn_ctt").addEventListener("click", function() {
    window.location.href = location;
    // ou para abrir em nova aba:
    // window.open("https://www.exemplo.com", "_blank");
});