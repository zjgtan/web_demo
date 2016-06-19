var xmlHttp

function showHint(str)
{
    if (str.length == 0) {
        document.getElementById("suggest").innerHTML = "";
        return;
    }

    xmlHttp = GetXmlHttpObject();
    
    var url = "action/gethint.php";
    url = url + "?q=" + str; //拼url
    //url = url + "&sid=" + Main.random();

    xmlHttp.onreadystatechange = stateChanged; // 回调函数
    // 发送请求
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function stateChanged()
{
    if (xmlHttp.readyState == 4 || xmlHttp.readState == "complete") {
        document.getElementById("suggest").innerHTML = xmlHttp.responseText;
    }
}

function GetXmlHttpObject()
{
    var xmlHttp = null;

    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e1) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    return xmlHttp;
}
