document.getElementById('pesquisar').addEventListener('click', function (event) {
    event.preventDefault(); 
    
    const campoBusca = document.getElementById('campoBusca').value.trim();
    let mensagemBusca = document.getElementById('mensagemBusca');

    if (!mensagemBusca) {
        mensagemBusca = document.createElement('p');
        mensagemBusca.id = 'mensagemBusca';
        mensagemBusca.style.backgroundColor = '#FFFFFF';
        mensagemBusca.style.color = '#005CFF';
        mensagemBusca.style.fontSize = '14px';
        mensagemBusca.style.marginTop = '10px';
        mensagemBusca.style.position = 'absolute';  

        document.querySelector('.pesquisa').appendChild(mensagemBusca);
    }

    if (campoBusca !== '') {
        mensagemBusca.textContent = `Você buscou por: '${campoBusca}'`;
    } else {
        mensagemBusca.textContent = 'Por favor, insira um termo para buscar.';
    }
});

document.getElementById('campoBusca').addEventListener('blur', function () {
    const campoBusca = document.getElementById('campoBusca').value.trim();
    const mensagemBusca = document.getElementById('mensagemBusca');

    if (mensagemBusca && campoBusca === '') {
        mensagemBusca.remove(); 
    }
});