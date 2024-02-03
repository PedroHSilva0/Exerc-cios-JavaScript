var inputIdFirst = "valueOfX",inputIdSecond = "valueOfY",outputId = "resultHere";

var getInputs = function(id) {
    return parseInt(document.getElementById(id).value);
}

var showOutput = function(outputValue, outputIdAsArg) {
  //if no argument is given then by default "outputId" taken
  document.getElementById(outputId).innerHTML = outputValue;
}

var manuplateAs = function(operationName, valueOfX, valueOfY) {
  if(operationName == 'add')
    return valueOfX + valueOfY;
  else if(operationName == 'sub')
    return valueOfX - valueOfY;
  else if(operationName == 'mul')
    return valueOfX * valueOfY;
  else if(operationName == 'div')
    return valueOfX / valueOfY;
  //can add as many as you wish 
} 

var operation = function(operationName){
  x = getInputs(inputIdFirst);
  y = getInputs(inputIdSecond);
  output = manuplateAs(operationName, x, y);
  showOutput(output);
  console.log(x + " " + operationName + " " + y + " = " + output)
  //see console to understand this more
  console.log(this)
};