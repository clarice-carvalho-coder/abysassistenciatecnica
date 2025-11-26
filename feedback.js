const form = document.getElementById("feedbackForm");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const rating = document.querySelector("input[name='rating']:checked").value;
    const mensagem = document.getElementById("mensagem").value;

    const novaAvaliacao = {
        nome,
        servico,
        rating,
        mensagem,
        data: new Date().toLocaleDateString("pt-BR")
    };

    reviews.push(novaAvaliacao);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("Obrigado pelo seu feedback! ❤️");

    // REDIRECIONAMENTO APÓS SALVAR A AVALIAÇÃO
    window.location.href = "avaliacoes.html";

    form.reset();
});

