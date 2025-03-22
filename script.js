document.querySelectorAll("#btn_ctt").forEach(button => {
    button.addEventListener("click", function() {
        window.open("https://api.whatsapp.com/send/?phone=5541999446102&text=Olá%2C+gostaria+de+saber+mais+como+eu+posso+alavancar+meu+patrimônio+com+consorcio&type=phone_number&app_absent=0", "_blank");
    });
});

document.querySelectorAll("#btn_simula").forEach(button => {
    button.addEventListener("click", function() {
        window.location.href = "https://autorizado.ademicon.com.br/marcia-paranhos";
    });
});
