// first assignment
function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}
var resultOfMile = feetToMile(100000);
 console.log(resultOfMile, "mile");


// second assignment
function woodCalculator (chair, table, bed){
    var woodAmountForChair = chair*1;
    var woodAmountFortable = table*3;
    var woodAmountForbed = bed*5;
    var totalWoodAmount = woodAmountForChair+woodAmountFortable+woodAmountForbed;
    return totalWoodAmount;
}
var resultOfWoodAmount = woodCalculator(3, 5, 8);
  console.log(resultOfWoodAmount, "qubic feet");


// third assignment
function brickCalculator (floor){
    if(floor<=10){
        var brickAmountForFirstTenFloor = 1000*15;
        var totalBrickAmountForFirstTenFloor = brickAmountForFirstTenFloor*floor;
        return totalBrickAmountForFirstTenFloor;
    }
    if(floor<= 20){
        var tenFloorBrickAmount = 150000;
        var availableFloorForSecondPart = floor-10;
        var brickAmountForSecondTenFloor = 1000*12;
        var extraBrickAmountForSecondTenFloor = brickAmountForSecondTenFloor*availableFloorForSecondPart;
        var totalBrickAmountForSecondTenFloor = tenFloorBrickAmount+extraBrickAmountForSecondTenFloor;
        return totalBrickAmountForSecondTenFloor;
    }
    else{
        var twentyFloorBrickAmount = 270000;
        var availableFloorForlastPart = floor-20;
        var brickAmountForAboveTwentyFloor = 1000*10;
        var extraBrickAmountForAboveTwentyFloor = brickAmountForAboveTwentyFloor* availableFloorForlastPart;
        var totalBrickAmountForAboveTwentyFloor = twentyFloorBrickAmount+extraBrickAmountForAboveTwentyFloor;
        return totalBrickAmountForAboveTwentyFloor;
    }
}
var resultOfBrickAmount = brickCalculator(37);
 console.log(resultOfBrickAmount, "piece brick");


// fourth assignment

    