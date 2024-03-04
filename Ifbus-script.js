// Função para realizar a busca pela palavra-chave e redirecionar para a página correspondente
function searchKeyword() {
    // Obtém o valor do campo de entrada de busca e remove espaços em branco no início e no final e converte a String para caracteres minúsculos
    var keyword = document.getElementById('searchInput').value.trim().toLowerCase();

    // Verifica se a palavra-chave não está vazia
    if (keyword !== '') {
        // Chama a função para redirecionar para a página correspondente com a palavra-chave fornecida
        redirectToPage(keyword);
    }
}

// Função para redirecionar para a página correspondente com base na palavra-chave
function redirectToPage(keyword) {
    // Utiliza uma instrução switch para comparar a palavra-chave e redirecionar para a página apropriada
    switch (keyword) {
        case 'irecê':
            window.location.href = 'irece.html';
            break;
        case 'irecê centro':
            window.location.href = 'irece-centro.html';
            break;
        case 'irecê rodoviária':
            window.location.href = 'irece-rodoviaria.html';
            break;
        case 'uibaí':
            window.location.href = 'uibaí.html';
            break;
        case 'central':
            window.location.href = 'central.html';
            break;
        case 'ibititá':
            window.location.href = 'Ibitita.html';
            break;
            
         default: 
         window.location.href = 'Erro.html';
            break;  
    }   
}
