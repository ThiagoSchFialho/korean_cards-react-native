import { CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO } from './casaListData'
import { FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS } from './comidaListData';
import { ESCRITORIO, COMPUTADOR, PROFISSOES } from './trabalhoListData';
import { SUPERMERCADO, FARMACIA, SHOPPINGCENTER } from './comprasListData';
import { ESCOLA, MATEMATICA, GEOGRAFIA } from './educacaoListData';
import { BICICLETA, AVIAO, CAMINHAO, CARRO } from './transportListData';
import { FAMILIA, EMOCOES, CORPO, CORPO2 } from './pessoasListData';
import { ROUPASMASCULINAS, ROUPASFEMININAS, CALCADOS, MATERIAL, JOIAS, ACESSORIOS } from './aparenciaListData';
import { PRAIA, ACAMPAMENTO, TEATRO, JOGOS } from './lazerListData';
import { CORES, ANIMAIS, NUMEROS } from './basicoListData';

// Usado em learnList.js e practiceList.js
// Nomes das listas
export var listNames = [
    ['casa', 'cozinha', 'sala de estar', 'quarto', 'banheiro'],
    ['frutas', 'legumes', 'bebidas', 'padaria', 'sobremesas'],
    ['escritório', 'computador', 'profissões'],
    ['supermercado', 'farmácia', 'shopping center'],
    ['escola', 'matemática', 'geografia'],
    ['bicicleta', 'avião', 'caminhão', 'carro'],
    ['família', 'emoções', 'corpo', 'corpo 2'],
    ['roupas masculinas', 'roupas femininas', 'calçados', 'material', 'joias', 'acessórios'],
    ['praia', 'acampamento', 'teatro', 'jogos'],
    ['cores', 'animais', 'números']
];

// Usado em learnList.js e practiceList.js
// Icones das listas
export var listIcons = [
    ['home', 'fridge', 'television-classic', 'bed', 'shower'],
    ['food-apple', 'carrot', 'beer', 'baguette', 'cake'],
    ['city-variant', 'desktop-tower-monitor', 'briefcase'],
    ['cart', 'gamepad-round', 'escalator-up'],
    ['book-open-page-variant', 'calculator-variant', 'earth'],
    ['bicycle', 'airplane', 'truck', 'car'],
    ['human-female-boy', 'emoticon-happy', 'human-handsdown', 'human-handsdown'],
    ['human-male', 'human-female', 'shoe-formal', 'texture-box', 'diamond-stone', 'sunglasses'],
    ['beach', 'campfire', 'drama-masks', 'google-controller'],
    ['palette', 'dog-side', 'numeric']
];

// Usado em learnList.js
// Constantes que guardam o conteúdo das listas
export var ListData = [
    [CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO],
    [FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS],
    [ESCRITORIO, COMPUTADOR, PROFISSOES],
    [SUPERMERCADO, FARMACIA, SHOPPINGCENTER],
    [ESCOLA, MATEMATICA, GEOGRAFIA],
    [BICICLETA, AVIAO, CAMINHAO, CARRO],
    [FAMILIA, EMOCOES, CORPO, CORPO2],
    [ROUPASMASCULINAS, ROUPASFEMININAS, CALCADOS, MATERIAL, JOIAS, ACESSORIOS],
    [PRAIA, ACAMPAMENTO, TEATRO, JOGOS],
    [CORES, ANIMAIS, NUMEROS]
];

// Usado em practiceList.js
// Número de palavras em cada lista de palavras
export var nWords = [
    [10, 13, 10, 10, 11],
    [12, 10, 9, 6, 8],
    [14, 9, 11],
    [10, 10, 14],
    [15, 16, 12],
    [14, 16, 10, 13],
    [14, 11, 17, 18],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0]
];

// Usado em cards.js
export const lists = {
    "casa" : CASA,
    "cozinha" : COZINHA,
    "sala de estar" : SALADEESTAR,
    "quarto" : QUARTO,
    "banheiro" : BANHEIRO,
    "frutas" : FRUTAS,
    "legumes" : LEGUMES,
    "bebidas" : BEBIDAS,
    "padaria" : PADARIA,
    "sobremesas" : SOBREMESAS,
    "escritório" : ESCRITORIO,
    "computador" : COMPUTADOR,
    "profissões" : PROFISSOES,
    "supermercado" : SUPERMERCADO,
    "farmácia" : FARMACIA,
    "shopping center" : SHOPPINGCENTER,
    "escola" : ESCOLA,
    "matemática" : MATEMATICA,
    "geografia" : GEOGRAFIA,
    "bicicleta" : BICICLETA,
    "avião" : AVIAO,
    "caminhão" : CAMINHAO,
    "carro" : CARRO,
    "família" : FAMILIA,
    "emoções" : EMOCOES,
    "corpo" : CORPO,
    "corpo 2" : CORPO2,
    "roupas masculinas" : ROUPASMASCULINAS,
    "roupas femininas" : ROUPASFEMININAS,
    "calçados" : CALCADOS,
    "material" : MATERIAL,
    "joias" : JOIAS,
    "acessórios" : ACESSORIOS,
    "praia" : PRAIA,
    "acampamento" : ACAMPAMENTO,
    "teatro" : TEATRO,
    "jogos" : JOGOS,
    "cores" : CORES,
    "animais" : ANIMAIS,
    "números" : NUMEROS
}