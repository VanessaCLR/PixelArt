var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variable para guardar colores de paleta"
var paleta = document.getElementById('paleta');
//Captura de click sobre paleta de colores//
paleta.addEventListener("click", indicador);
//Función que muestra previsualización de color de la paleta//
function indicador(e) {
    var color = e.target.style.backgroundColor;
    var indicadorColor = document.getElementById("indicador-de-color");
    indicadorColor.style.backgroundColor = color;
};
//Variable para guardar pixeles en la grilla//
var grillaPixeles = document.getElementById('grilla-pixeles');
//Captura de click sobre grilla de pixeles a colorear//
grillaPixeles.addEventListener("click", pintarPixel);
//Función que colorea pixeles de grilla//
function pintarPixel(e) {
    var pixel = e.target;
    var colorPaleta= document.getElementById("indicador-de-color");
    pixel.style.backgroundColor = colorPaleta.style.backgroundColor;

};
//Función que recorre colores y crea posición en la paleta de cada color//
function recorrerColores() {
  for (i = 0; i < nombreColores.length; i++) {
    var divColor = document.createElement("div");
    divColor.className = "color-paleta";
    var color = nombreColores[i];
    divColor.style.backgroundColor = color;
    paleta.appendChild(divColor);

  }
};
recorrerColores();
//Función que crea la grilla//
function grillaPixel() {
  for (i = 0; i < 1750; i++) {
    var divGrilla = document.createElement("div");
    divGrilla.className = "cursor-personalizado";
    grillaPixeles.appendChild(divGrilla);

  }
};
grillaPixel();

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    ;
    var indicadorColor = document.getElementById("indicador-de-color");
    indicadorColor.style.backgroundColor = colorActual;
  })
);

var estadoMouse = document.getElementById("grilla-pixeles");
var mouse = null;
estadoMouse.addEventListener("mousedown", apretado);
estadoMouse.addEventListener("mouseover", pintar)
estadoMouse.addEventListener("mouseup", noApretado);

function apretado(){
  mouse = true;
};

function noApretado(){
  mouse = false;
};

function pintar(e){
    if(mouse){
      pintarPixel(e);
    };
};
