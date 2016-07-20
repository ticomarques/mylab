var args = require('system').args;
var page = require('webpage').create();

//Desliga o javascript para o print
//page.settings.javascriptEnabled = false;

//Desliga as imagens
//page.settings.loadImages = false;

//Altera o user agent para versão desejada
//page.settings.userAgent = 'Scotchy McScotchFace';

//Caso queira dar um zoom na pagina
//page.zoomFactor = 0.25;


//Configura a viewport do browser que vai printar
//page.viewportSize = { width: 1366, height: 667 };


//Seleciona uma area de printagem
//page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };


//Abaixo existem alguns presets feitos usando o require('system').args;
//nenhum parametro está hardcoded direto no JS, ele será passado no comando:

// phantom arquivo.js site-que-deseja-printar nome-arquivo.png width height
// phantomjs generator.js https://scotch.io screenshot.png 1920 1080

// API com todas as propriedades e metodos
// http://phantomjs.org/api/webpage/property/settings.html


var url = args[1];
var save = args[2];


page.viewportSize = { width: 1366, height: 667 };

page.open(url, function () {
    page.render(save);
    phantom.exit();
});