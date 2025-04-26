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


document.getElementById('categorias').addEventListener('click', function () {
    console.log('Botão de categorias clicado'); // Verifica se o evento está funcionando

    let categoriasContainer = document.getElementById('categoriasContainer');

    if (!categoriasContainer) {
        console.log('Criando categoriasContainer'); // Verifica se a div está sendo criada
        categoriasContainer = document.createElement('div');
        categoriasContainer.id = 'categoriasContainer';
        categoriasContainer.className = 'categorias-container';

        categoriasContainer.innerHTML = `
            <h2>Categorias</h2>
            <div>
            <ul>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
            </ul>
            <ul>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
            </ul>
            <ul>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
            </ul>

            <div class="campoImg">
                
                <h3>Confira os Produtos <span class='bold2'>Que acabaram De chegar</span></h3>
                <button class="verMais">Ver Todos</button>
            </div>
            </div>
        `;

        document.body.appendChild(categoriasContainer);
    }

    if (categoriasContainer.style.display === 'none' || categoriasContainer.style.display === '') {
        categoriasContainer.style.display = 'flex';
    } else {
        categoriasContainer.style.display = 'none';
    }
});