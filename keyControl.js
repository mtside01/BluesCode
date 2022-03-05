function selectedKey()
{
    const rootCodeNum = 6;
    const dominantCodeNum = 2;
    const subDominantCodeNum = 3;
    const seventhString = "7";
    const dominantDegree = 4;
    const subDominantDegree = 3;

    const codeArray = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G');
    var key = Number(document.getElementById("key").value);
    var dominantCode = key + dominantDegree;
    var subDominantCode = key + subDominantDegree;

    dominantCode = dominantCode > codeArray.length - 1 ? dominantCode - (codeArray.length) : dominantCode; 
    subDominantCode = subDominantCode > codeArray.length - 1 ? subDominantCode - (codeArray.length) : subDominantCode;

    for (var i = 0; i < rootCodeNum; i++)
    {
        document.getElementsByName("root")[i].innerText = codeArray[key] + seventhString;
    }

    for (var i = 0; i < dominantCodeNum; i++)
    {
        document.getElementsByName("dominant")[i].innerText = codeArray[dominantCode] + seventhString;
    }

    for (var i = 0; i < subDominantCodeNum; i++)
    {
        document.getElementsByName("subDominant")[i].innerText = codeArray[subDominantCode] + seventhString;
    }

    document.getElementsByName("variableCode")[0].innerText = codeArray[key] + seventhString + " (" + codeArray[subDominantCode] + seventhString + ")";
}