// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

function icons() {
  return [
    { name: "cat", prefix: "fa-", type: "animal", family: "fas" },
    { name: "crow", prefix: "fa-", type: "animal", family: "fas" },
    { name: "dog", prefix: "fa-",type: "animal",family: "fas" },
    { name: "dove", prefix: "fa-", type: "animal", family: "fas" },
    { name: "dragon", prefix: "fa-", type: "animal", family: "fas" },
    { name: "horse", prefix: "fa-", type: "animal", family: "fas" },
    { name: "hippo", prefix: "fa-", type: "animal", family: "fas" },
    { name: "fish", prefix: "fa-", type: "animal", family: "fas" },
    { name: "carrot", prefix: "fa-", type: "vegetable", family: "fas" },
    { name: "apple-alt", prefix: "fa-", type: "vegetable", family: "fas" },
    { name: "lemon", prefix: "fa-", type: "vegetable", family: "fas" },
    { name: "pepper-hot", prefix: "fa-", type: "vegetable", family: "fas" },
    { name: "user-astronaut", prefix: "fa-", type: "user", family: "fas" },
    { name: "user-graduate", prefix: "fa-", type: "user", family: "fas" },
    { name: "user-ninja", prefix: "fa-", type: "user", family: "fas" },
    { name: "user-secret", prefix: "fa-", type: "user", family: "fas" },
  ];
}


function iconsColored(arrayVanilla){
  arrayVanilla.forEach(element => {
    switch (element.type) {
      case "animal":
        element.color = "blue";
        break;
  
      case "vegetable":
        element.color = "orange";
        break;
  
      case "user":
        element.color = "purple";
    }    
  });
  return arrayVanilla;
}


function getTypeArray(array) {
  let typeArray = []; 
  array.forEach(element => {
    if ( !typeArray.includes(element.type)) {
      typeArray.push(element.type);
    }
  });
  return typeArray;
}


function iconsPrinted(arrayWithColors) {
  arrayWithColors.forEach(element => {
    $('.icons').append(
                      `<div>
                          <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
                          <div class="title">${element.name.toUpperCase()}</div> 
                       </div> `
                      );
  });
};


function selectOptionsPrinted(typedArray) {
  typedArray.forEach(element => {
    $('#type').append(
                      `<option value="${element}">
                          ${element.charAt(0).toUpperCase()}${element.slice(1)}
                       </option>`
                     );
  });
};


function iconsFiltered(arrayWithColors) {
  
  $('#type').change(function () {
    $('.icons').empty();
    let checkedOption = ($(this).val());
    let filteredArray;
    let check = 0;
    arrayWithColors.forEach(element => {
      if ( checkedOption === element.type) {
        filteredArray = arrayWithColors.filter(element => element.type === checkedOption);
        check = 1;
        console.log(check);
      }
    });
    if ( check == 1) {
      iconsPrinted(filteredArray);     
    } else {
      iconsPrinted(arrayWithColors);
    } 
  });
}

function init() {
  //->DATA<-
  icons();
  //->VIEW<-
  iconsPrinted(iconsColored(icons()));
  selectOptionsPrinted(getTypeArray(icons()));
  iconsFiltered(iconsColored(icons()));
}


$(document).ready(init);