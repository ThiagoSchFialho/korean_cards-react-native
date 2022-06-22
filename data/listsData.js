import { HANGUL, CORES, ANIMAIS, NUMEROS, SINOCOREANOS } from './basicoListData';
import { CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO } from './casaListData'
import { FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS } from './comidaListData';
import { ESCRITORIO, COMPUTADOR, PROFISSOES } from './trabalhoListData';
import { SUPERMERCADO, FARMACIA, SHOPPINGCENTER } from './comprasListData';
import { ESCOLA, MATEMATICA, GEOGRAFIA } from './educacaoListData';
import { BICICLETA, AVIAO, CAMINHAO, CARRO } from './transportListData';
import { FAMILIA, EMOCOES, CORPO, CORPO2 } from './pessoasListData';
import { ROUPAS, ROUPAS2, MATERIAL, JOIAS, ACESSORIOS } from './aparenciaListData';
import { PRAIA, ACAMPAMENTO, TEATRO, JOGOS } from './lazerListData';

// Usado em learnList.js e practiceList.js
// Nomes das listas
export var listNames = [
    ['hangul', 'cores', 'animais', 'números', 'sino-coreanos'],
    ['casa', 'cozinha', 'sala de estar', 'quarto', 'banheiro'],
    ['frutas', 'legumes', 'bebidas', 'padaria', 'sobremesas'],
    ['escritório', 'computador', 'profissões'],
    ['supermercado', 'farmácia', 'shopping center'],
    ['escola', 'matemática', 'geografia'],
    ['bicicleta', 'avião', 'caminhão', 'carro'],
    ['família', 'emoções', 'corpo', 'corpo 2'],
    ['roupas', 'roupas 2', 'material', 'joias', 'acessórios'],
    ['praia', 'acampamento', 'teatro', 'jogos']
];

// Usado em learnList.js e practiceList.js
// Icones das listas
export var listIcons = [
    ['syllabary-hangul', 'palette', 'dog-side', 'numeric', 'numeric'],
    ['home', 'fridge', 'television-classic', 'bed', 'shower'],
    ['food-apple', 'carrot', 'beer', 'baguette', 'cake'],
    ['city-variant', 'desktop-tower-monitor', 'briefcase'],
    ['cart', 'gamepad-round', 'escalator-up'],
    ['book-open-page-variant', 'calculator-variant', 'earth'],
    ['bicycle', 'airplane', 'truck', 'car'],
    ['human-female-boy', 'emoticon-happy', 'human-handsdown', 'human-handsdown'],
    ['tshirt-crew', 'tshirt-crew', 'texture-box', 'diamond-stone', 'sunglasses'],
    ['beach', 'campfire', 'drama-masks', 'google-controller']
];

// Usado em learnList.js e quiz.js
// Constantes que guardam o conteúdo das listas
export var ListData = [
    [HANGUL, CORES, ANIMAIS, NUMEROS, SINOCOREANOS],
    [CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO],
    [FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS],
    [ESCRITORIO, COMPUTADOR, PROFISSOES],
    [SUPERMERCADO, FARMACIA, SHOPPINGCENTER],
    [ESCOLA, MATEMATICA, GEOGRAFIA],
    [BICICLETA, AVIAO, CAMINHAO, CARRO],
    [FAMILIA, EMOCOES, CORPO, CORPO2],
    [ROUPAS, ROUPAS2, MATERIAL, JOIAS, ACESSORIOS],
    [PRAIA, ACAMPAMENTO, TEATRO, JOGOS]
];

// Usado em practiceList.js
// Número de palavras em cada lista de palavras
export var nWords = [
    [40, 13, 16, 28, 33],
    [10, 13, 10, 10, 11],
    [12, 10, 9, 6, 8],
    [14, 9, 11],
    [10, 10, 14],
    [15, 16, 12],
    [14, 16, 10, 13],
    [14, 11, 17, 18],
    [13, 11, 20, 11, 12],
    [13, 11, 11, 9]
];

// Usado em cards.js
export const lists = {
    "hangul" : HANGUL,
    "cores" : CORES,
    "animais" : ANIMAIS,
    "números" : NUMEROS,
    "sino-coreanos" : SINOCOREANOS,
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
    "roupas" : ROUPAS,
    "roupas 2" : ROUPAS2,
    "material" : MATERIAL,
    "joias" : JOIAS,
    "acessórios" : ACESSORIOS,
    "praia" : PRAIA,
    "acampamento" : ACAMPAMENTO,
    "teatro" : TEATRO,
    "jogos" : JOGOS
}