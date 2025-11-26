const reviewsList = document.getElementById("reviews-list");

// Carregar avaliações salvas
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

renderReviews();

function renderReviews() {
    reviewsList.innerHTML = "";

    if (reviews.length === 0) {
        reviewsList.innerHTML = "<p>Ainda não há avaliações registradas.</p>";
        return;
    }

    reviews.forEach((r, index) => {
        reviewsList.innerHTML += `
            <div class="review-card">
                <div class="review-header">
                    <span class="review-name">${r.nome}</span>
                    <span class="review-service">${formatService(r.servico)}</span>
                </div>

                <div class="review-stars">${"⭐".repeat(r.rating)}</div>
                
                <p class="review-comment">${r.mensagem}</p>

                <small style="color:#666;">${r.data}</small>

            </div>
        `;
    });
}


function formatService(servico) {
    const map = {
        "consultoria": "Consultoria",
        "instalacao": "Instalação de Software",
        "manutencao": "Manutenção",
        "suporte-tecnico": "Suporte Técnico"
    };
    return map[servico] || servico;
}