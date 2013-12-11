// Gist from https://gist.github.com/tcorral/1272956
// @tcorral
function namespace(sNamespace){
    var oObj = window;
    var aElements = sNamespace.split(".");
    var nElement = 0;
    var nLenElements = aElements.length;
    var sElement = null;
    for(; nElement < nLenElements; nElement++){
        sElement = aElements[nElement];
        oObj = typeof oObj[sElement] !== 'undefined' ? oObj[sElement] : oObj[sElement] = {};
    }
    
    try{
        return oObj;
    }finally{
        oObj = aElements = nElement = nLenElements = sElement = null;
    }
}