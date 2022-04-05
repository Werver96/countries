/*
    var countrysH={};

    function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;
    }

    function deleteCountry(countryName) {
        delete countrysH[countryName];
    }

    function getCountryInfo(countryName) {
        if ( countryName in countrysH )
            return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
        else
            return 'нет информации о стране ' + countryName + '!' ;
    }

    function listCountrys() {
        var res="";
        for ( var CN in countrysH )
            res+='\n'+getCountryInfo(CN);
        return res;
    }

    addCountry('Германия','Берлин');
    addCountry('Венгрия','Будапешт');
    addCountry('Франция','Париж');

    console.log( "список стран:" + listCountrys() );
*/


var allNames={};
function inputName(){
    var countryName=prompt('Введите название страны');
    var capitalName=prompt('Введите название сталицы');
    allNames[countryName]=capitalName;
}
var infoCapital;
function infoName(){
    var infoCountry=prompt('Введите название страны которая вам интересна');
    if (infoCountry in allNames) {
    alert('Страна ' + infoCountry + ' найдена.' + '\n' + 'Eё сталица: ' + allNames[infoCountry] + '.');
}
    else(alert('Такой страны не найдено !'));
}

function allCountry (){
for (var k in allNames)
    console.log('Есть в мире страна ' + k + ' и ее сиалица ' + allNames[k] + '.');
}

function delCountry(){
    var delName=prompt('Назовите страну от которой хотите избавиться: \n(некоторым это может не понравиться!)')
    if (delName in allNames){
        delete allNames[delName]
        alert('Страна '+delName+' удалена.' + ' Eё сталица была ' + allNames[delName] + '. \nОшибка, определить сталицу невозможно, отсутствуют данные!');
}
    else(alert('К сажелению кто то вас опередил и избавился от страны ' + delName + ' до вас. \nТакой страны найдено небыло!'));
}