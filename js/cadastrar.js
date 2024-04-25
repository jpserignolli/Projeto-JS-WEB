document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnCadastrar").addEventListener("click", function() {
        var jogador = {
            nome: document.getElementById("nome").value,
            time: document.getElementById("time").value,
            gols: document.getElementById("gols").value,
            assistencias: document.getElementById("assistencias").value,
            foto: document.getElementById("foto").value
        };
    
        var jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    
        jogadores.push(jogador);
    
        localStorage.setItem('jogadores', JSON.stringify(jogadores));
    
        window.location.href = "index.html";
    });

   
    var jogadoresListContainer = document.getElementById('jogadores-list');
    jogadoresListContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-player')) {
            var jogadorIndex = event.target.dataset.index;
            var jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
            jogadores.splice(jogadorIndex, 1);
            localStorage.setItem('jogadores', JSON.stringify(jogadores));
            location.reload(); 
        }
    });
});