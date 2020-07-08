/* function random_words(words)
{
  
    return words[Math.floor(Math.random()*words.length)];
        
}

var words = [254, 45, 212, 365, 2543];
console.log(random_words(words));

palavras_selecionadas = [random_words(words),random_words(words)];
console.log(palavras_selecionadas);

var mudar = document.querySelector('p');
mudar.textContent = random_words(words);
console.log(words); */
/* 
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log(makeid(10));
 */

/* 
function random_words(palavras)
{
  
    return palavras[Math.floor(Math.random()*palavras.length)];
        
}

 function makeid(length) {
    var result           = '';
    var palavras       = ['banana','batata',3,4,5];
    var charactersLength = palavras.length;
    var palavras_selecionadas = [];
    for ( var i = 0; i < length; i++ ) {
        palavras_selecionadas.push(random_words(palavras));
        palavras_selecionadas.splice(0,1)
    }
    return palavras_selecionadas;
}

console.log(makeid(3)); */


var numero_palavras = 25;
 
 function makeid(length) {
    var result           = '';
 
    var charactersLength = palavras.length;
    
    for ( var i = 0; i < length; i++ ) {
        let palavra_aleatoria = palavras[Math.floor(Math.random()*palavras.length)]
        palavras_selecionadas.push(palavra_aleatoria);
        
        
        const index = palavras.indexOf(palavra_aleatoria);
        if (index > -1) {
            palavras.splice(index, 1);
        }
        
    }
    
    return palavras_selecionadas;
}

var palavras       = ['Banana','Batata','Páraquedas',
'Trem','Ferrovia','Van','Submarino','Empilhadeira','Burro','Patins','Canoa',
'África','Agua','Águia','Índia','Óleo','Ópera','Órgão','Abóbora','Abelha','Acordo',
'Acre','Adulto','Advogado','Agente','Agulha','Alemanha','Alfabeto','Algodão','Alienígena',
'Alma','Alvo','América','Amazonas','Ambulância','Brasília','Anão','Anel','Anjo','Antártida',
'Aprendiz','Ar','Aranha','Arco','Arquivo','Assinatura','Astro','Atlântida','Austrália','Avião',
'Bíblia','Búfalo','Baú','Bacia','Balão','Bala','Balanço','Baleia','Banco','Banda','Banheiro',
'Bar','Barco','Barra','Bateria','Berlim','Bermuda','Bloco','Boca','Bola','Bolo','Bolsa','Bomba',
'Botão','Bota','Braço','Brilhante','Brinco','Broto','Bruxa','Buraco','Círculo','Código','Cabeça','Cabo',
'Cacho','Cachorro','Cadeira','Café','Caixa','Calça','Cama','Caminhão','Caminho','Campo','Canadá',
'Canguru','Cano','Capa','Capital','Capuz','Cara','Carga','Caro','Carro','Cartão','Casca','Casco',
'Cassino','Cauda','Cavaleiro','Cavalo','Cedo','Cela','Cenoura','Centauro','Centro','Cerca','Chave','Chiclete',
'Chifre','China','Chocolate','Churrasco','Chuveiro','Cientista','Cinto','Clube','Cobertura','Coelho','Cola','Colher','Coluna',
'Composto','Comprimido','Concerto','Conexão','Conta','Conto','Contrato','Coração','Coral',
'Coroa','Corpo','Correio','Corrente','Corte','Costa','Crédito','Cravo','Cruz','Cura','Dado',
'Dente','Dia','Arranha-céu','Dia','Diafragma','Diamante','Dinossauro','Direita','Direito','Divisão','Doce',
'Doutor','Dragão','Edifício','Egito','Embaixada','Encontro','Enfermeira','Escala','Escola',
'Escorpião','Espaço','Espião','Espinha','Esquerda','Estádio','Estado','Estrela','Europa','Fé','Fósforo',
'Faca','Falcão','Fantasma','Fechadura','Ferradura','Ferro','Ficha','Figura','Fila','Filme',
'Fita','Flauta','Floresta','Fluxo','Fogo','Folha','Fonte','Força','França','Frio','Furo',
'Gás','Gêmeos','Gênio','Galo','Gancho','Garfo','Garoto','Garrafa','Gato','Gelo','Germe','Gigante',
'Elefante','Gota','Grécia','Cigano','Grade','Grama','Grau','Gravata','Guerra','Guia','Helicóptero',
'Herói','Himalaia','Hortelã','Hospital','Hotel','Igreja','Ilha','Inglaterra','Inscrição',
'Júpiter','Jogo','Língua','Laço','Laboratório','Ladrão','Lama','Lance','Laranja','Lava','Lavadora','Leão',
'Leito','Lesma','Leste','Libra','Liga','Limão','Limusine','Linha', 'Lixa','Loja','Londre','Lua',
'Lutador','Luva','Luz','Máquina','Mármore','Mão','Mês','Mídia','Missão','Maçã','Macaco','Magia',
'Mal','Mamute','Manga','Janeiro','Marca','Marcha','Marfim','Massa','Mato','Medida','Meia',
'Meio','Mel','Mercúrio','Milionário','Carta','México','Miscrocópio','Mina','Mochila','Modelo',
'Mole','Morcego','Morro','Morte','Moscou','Muda','Mudança','Mula','Negativo',
'neve','ninja','noite','nota','recife','novela',
'olho','onda','ordem','ouro','pássaro','pátio','pé',
'pó','polo','pacífico','palha','panela','papel','parada','parede',
'parque','rádio','partida','passado','passo','pata','porca','pauta','peão',
'peça','pedra','peixe','penhasco','peru','piano','piloto','pimenta',
'pincel','piano','piloto','pimenta','pincel','pinguim','pino','pirâmide','pirata',
'piso','pistola','plástico','plano','planta','poder','polícia','política','polegar',
'polvo','ponte','ponto','pinta','porto','posto','praia','prato','presente','presunto',
'primavera','princesa','professor','programa','prova','quadra','quadrado','quadro','quarto',
'feira','rainha','raio','raiz','ramo','rascunho','rato','real','recreio','rede','rei','relógio','revolução','rio','robô','roda','rodada','roleta','rolo','roma',
'rosa','rosca','russo','sapato','satélite','saturno','sede','sela','selo','sentença','servidor','sexta','sino',
'sexta','sino','sola','soldado','som','sombra','sonho','sorte',
'sorvete','tênis','tóquio','tanque','teatro','teia','tela','telescópio','templo','tempo','terno','terra','tiro','tocha','toco','tomada','torre','torta','trama','trave','trem','triângulo','trilha',
'tronco','tubarão','tubo','unha','unicórnio','urso','vácuo','vara','vaso','vela','veneno','vento',
'verão','verde','verme','vestido','viagem','vida','vidro','volante','volta','dedo','sal','sol','violão',
'canela','tronco','brigadeiro','registro','corda','mancha','pelo','fio','circuito','elemento','seda','cera','chuva','cicatriz',
'bode','mangueira'
];
let palavras_selecionadas = [];

makeid(numero_palavras);

console.log(palavras_selecionadas);

/* var mudar = document.querySelector('p');
mudar.textContent = palavras_selecionadas.toString(); */

function nomear_botoes(id){
    document.querySelector(`button[name=w${id}]`).innerHTML = palavras_selecionadas[id];
}


for ( var i = 0; i < numero_palavras; i++ ) {
    nomear_botoes(i);
    clicar(i);
}


var vermelho = '#f00'


/* let num_cor = 2;


function proxima_cor(){
    var num_cor = 2;
    var x = 2
    var cor = "#f55";
    if (num_cor = 1){
        cor = "f00";
    } else if (num_cor = x){
        cor ='#f55';
    }

    return cor;
    
} 
    var nova_cor = proxima_cor();
*/

/* function clicar(id){
    var quadrado = document.querySelector(`button[name=w${id}]`);

    quadrado.onclick = function(){
        quadrado.innerHTML = "clicado";
      //  quadrado.style.backgroundColor = vermelho;
        quadrado.style.backgroundColor = vermelho;

        //criar um if com as condições para vermelho, azul e marrom
        // segunda opção seria adicionar uma class/tag no botão e mudar a cor pelo código css
    }
} */

function clicar(id){
    var quadrado = document.querySelector(`button[name=w${id}]`);

    const changeColor = document.querySelector(`button[name=w${id}]`),
    colors      = [' #ff4000',  '#003399' , '#339966', '#121418'];
    let   colorIndex  = 0;
    
    changeColor.addEventListener('click', () => {
      quadrado.style.backgroundColor = colors[colorIndex];      
      colorIndex = (colorIndex + 1) % colors.length
    });

}




/* function changeColor() {
    var col = document.getElementById("body");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}

document.querySelectorAll(".reset").onclick = function(){
    document.querySelectorAll(".reset").innerHTML = "clicado"
} */
