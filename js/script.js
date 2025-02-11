// Lista de imagens e títulos
const images = [
    { src: 'images/data_analysis_projects/income_statement_dashboard.png', title: 'Income Statement Dashboard',link: 'data_analysis_project/income_statement/income_statement.html' },
    { src: 'images/data_analysis_projects/databricks.png', title: 'ETL using Databricks', link: 'data_analysis_project/etl_databricks/pyspark.html' },
    { src: 'images/data_analysis_projects/rossmann.png', title: 'Sales Prediction', link: 'data_analysis_project/etl_databricks/pyspark.html' }
];


let currentIndex = 0; // Começa com a primeira imagem

function updateCarousel(){

const imageElement = document.getElementById('carouselImage');
    const titleElement = document.getElementById('carouselTitle');
    const linkElement = document.getElementById('carouselLink');
    const dots = document.querySelectorAll('.dot'); // Seleciona todas as bolinhas

    // Adiciona a classe fade-out para a transição suave
    imageElement.classList.add('fade-out');

    // Depois de 1 segundo (duração da transição), atualiza a imagem
    setTimeout(() => {
        imageElement.src = images[currentIndex].src;
        titleElement.textContent = images[currentIndex].title;
        linkElement.href = images[currentIndex].link;
    
        // Atualiza as bolinhas
        dots.forEach((dot, index) => {
            dot.classList.remove('active'); // Remove a classe 'active' de todas as bolinhas
            if (index === currentIndex) {
                dot.classList.add('active'); // Adiciona a classe 'active' à bolinha correspondente à imagem
            }
        });

        // Remove a classe fade-out após a transição
        imageElement.classList.remove('fade-out');
    }, 1500); // Tempo que o fade-out leva (deve ser igual ao tempo da transição no CSS)

    // Atualiza o índice da imagem
    currentIndex = (currentIndex + 1) % images.length;  // Avança para a próxima imagem e volta para o início quando chega no final
}

// Chama a função para trocar de imagem a cada 5 segundos
setInterval(updateCarousel, 5000);

// Atualiza o carrossel assim que a página carrega
updateCarousel();



/*
{
    
    
    
    // Atualiza a imagem e o título
    const imageElement = document.getElementById('carouselImage');
    const titleElement = document.getElementById('carouselTitle');
    const linkElement = document.getElementById('carouselLink'); // Adiciona o link da imagem
    
    imageElement.src = images[currentIndex].src;  // Atualiza a imagem
    titleElement.textContent = images[currentIndex].title;  // Atualiza o título
    linkElement.href = images[currentIndex].link; // Atualiza o link

    // Atualiza as bolinhas
    const dots = document.querySelectorAll('.dot');  // Seleciona todas as bolinhas
    dots.forEach((dot, index) => {
        dot.classList.remove('active');  // Remove a classe 'active' de todas as bolinhas
        if (index === currentIndex) {
            dot.classList.add('active');  // Adiciona a classe 'active' à bolinha correspondente à imagem
        }
    });

    // Atualiza o índice da imagem
    currentIndex = (currentIndex + 1) % images.length;  // Avança para a próxima imagem e volta para o início quando chega no final
}

// Chama a função para trocar de imagem a cada 5 segundos
setInterval(updateCarousel, 5000);

// Atualiza o carrossel assim que a página carrega
updateCarousel();*/