
var ALERT_TITLE = "Gefeliciteerd!";
var ALERT_BUTTON_TEXT = "Bekijk stand";
var ALERT_BUTTON_TEXT2 = "Speel opnieuw";

if(document.getElementById) {
    window.alert = function(txt1, text2, txt3, txt4, txt5) {
        createCustomAlert(txt1, text2, txt3, txt4, txt5);
    }
}

function createCustomAlert(txt1, txt2, txt3, txt4, txt5) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";


    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(txt2));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt1));
    msg.innerHTML = txt1;
    
    alertObjdiv = alertObj.appendChild(d.createElement("div"));
    
    btn = alertObjdiv.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(txt3));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }


    
    btn = alertObjdiv.appendChild(d.createElement("a"));
    btn.id = "closeBtn2";
    btn.appendChild(d.createTextNode(txt4));
    btn.href = "#";
    btn.focus();
    btn.onclick = function  () { removeCustomAlert2();return false; }

    alertObjdiv.style.display = "flex";
    closeBtn2.style.display = txt5;

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

function removeCustomAlert2() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer")); reloader();
}

function reloader () {
window.location.reload()
}
   //------------------------------------------                       Deler                ---------------------------------------------//  

  

     

        //------------------------------------------                       topbuttons                ---------------------------------------------//
 

lightBoxClose = function() {
  document.querySelector(".lightbox").classList.add("closed");
}
 
function myFunction4() {
  var x = document.getElementById("speler5");
  var y = document.getElementById("speler6");
   x.style.display = "none";
  y.style.display = "none";
  placeholder(".delenvijf", ".delenzes", ".delenvier");
  lightBoxClose();
  hide4();
  remover();
  vierspelers()
}

function myFunction5() {
  var x = document.getElementById("speler5");
  var y = document.getElementById("speler6");
    y.style.display = "none";
    x.style.display = "block";
    placeholder(".delenvier", ".delenzes", ".delenvijf");
    lightBoxClose();
    hide5();
    remover();
    vijfspelers()
}

function myFunction6() {
  var y = document.getElementById("speler6");
  var x = document.getElementById("speler5");
    y.style.display = "block";
    x.style.display = "block"
    placeholder(".delenvier", ".delenvijf", ".delenzes");
    lightBoxClose();
    hide6();
    remover();
    zesspelers()
}


        //------------------------------------------                       rondetotalen                ---------------------------------------------// 
        
function getUserName(id, id2) {
let num1 = document.getElementById(id).value;
let num2 = document.getElementById(id2).value;  
  if (num2 === '')  {
  return result1 = " ";  
} else  if (num1 === num2) {
 result1 = 10 + num2 * 1;
} if (num1 < num2) {
 result1 = num1 - num2;
  } else if (num1 > num2) {
 result1 = num2 - num1;
  }
return result1
 }

function getUserName2(id, id2) {
let num1 = document.getElementById(id).value;
let num2 = document.getElementById(id2).value;  
  if (num2 === '')  {
  return result1 = " "; 
} else  if (num1 === '0' && num2 === '0') {
 result1 = 20 + num2 * 1;    
} else  if (num1 === num2) {
 result1 = 10 + num2 * 1;
} if (num1 < num2) {
 result1 = num1 - num2;
  } else if (num1 > num2) {
 result1 = num2 - num1;
  }
return result1
 }
 
function roundtotal10 (id, id2, id3) {
let result1= getUserName(id, id2, id3);
let num3 = document.getElementById(id3);
document.getElementById(id3).innerText = result1;
  }
  
function roundtotal20 (id, id2, id3) {
let result1= getUserName2(id, id2, id3);
let num3 = document.getElementById(id3);
document.getElementById(id3).innerText = result1;
  }  
  
  
function looper(element) {
  const rijtwee = document.querySelectorAll(element)

rijtwee.forEach(element => {
element.style.visibility="visible";
});}


function placeholder(element3, element2, element) {
  const delen4 = document.querySelectorAll(element3)
  const delen5 = document.querySelectorAll(element2)
  const delen6 = document.querySelectorAll(element)


delen4.forEach(element3 => {
element3.placeholder="";
});

delen5.forEach(element2 => {
element2.placeholder="";
});

delen6.forEach(element => {
element.placeholder="Delen";
});
}

function remover() {
  const remover = document.querySelectorAll(".remover")
  const remover2 = document.querySelectorAll(".num1", "totaless")
  const remover3 = document.querySelectorAll(".totaless")
  const remover4 = document.querySelectorAll(".num")
  const remover5 = document.querySelectorAll(".num3")
  const remover6 = document.querySelectorAll(".num4")
  const remover7 = document.querySelectorAll(".num5")
  const remover8 = document.querySelectorAll(".num6")

remover.forEach(element => {
element.value="";
});

remover2.forEach(element => {
element.innerHTML="";
});

remover3.forEach(element => {
element.innerHTML="";
});

remover4.forEach(element => {
element.innerHTML="";
});

remover5.forEach(element => {
element.innerHTML="";
});

remover6.forEach(element => {
element.innerHTML="";
});

remover7.forEach(element => {
element.innerHTML="";
});

remover8.forEach(element => {
element.innerHTML="";
});
}
  //------------------------------------------                       speler 1 begint hier                  ---------------------------------------------//   


  
function getthetotal1 (){
var numbers = document.querySelectorAll(".num1");
var total = 0;

for (var i = 0; i < numbers.length; i++)
{
    total+= Number(numbers[i].innerText);
}
document.getElementById("total1").innerText = total;
}
   
 //------------------------------------------                       speler 2 begint hier                  ---------------------------------------------// 
   

       
   
function getthetotal (){
var numbers = document.querySelectorAll(".num");
var total = 0;

for (var i = 0; i < numbers.length; i++)
{
    total+= Number(numbers[i].innerText);
}
document.getElementById("result").innerText = total;
}
   
    

 //------------------------------------------                       speler 3 begint hier                  ---------------------------------------------//    
      
   
function getthetotal3 (){
var numbers = document.querySelectorAll(".num3");
var total = 0;

for (var i = 0; i < numbers.length; i++)
{
    total+= Number(numbers[i].innerText);
}
document.getElementById("result3").innerText = total;
}

 //------------------------------------------                       speler 4 begint hier                  ---------------------------------------------//    
      
   
function getthetotal4 (){
var numbers = document.querySelectorAll(".num4");
var total = 0;

for (var i = 0; i < numbers.length; i++)
{
    total+= Number(numbers[i].innerText);
}
document.getElementById("result4").innerText = total;
}

 //------------------------------------------                       speler 5 begint hier                  ---------------------------------------------//    
      
   
function getthetotal5 (){
var numbers = document.querySelectorAll(".num5");
var total = 0;

for (var i = 0; i < numbers.length; i++)
{
    total+= Number(numbers[i].innerText);
}
document.getElementById("result5").innerText = total;
}

 //------------------------------------------                       speler 6 begint hier                  ---------------------------------------------//    
      
   
function getthetotal6 (){
var numbers = document.querySelectorAll(".num6");
var total = 0;

for (var i = 0; i < numbers.length; i++)
{
    total+= Number(numbers[i].innerText);
}
document.getElementById("result6").innerText = total;
}


       //------------------------------------------                       winner                  ---------------------------------------------//  


    var sp11 = document.getElementById("zesendertig");
    var sp22 = document.getElementById("75");
    var sp33 = document.getElementById("111");
    var sp44 = document.getElementById("476");
    var sp55 = document.getElementById("586");
    var sp66 = document.getElementById("696");
    
  function vierspelers(){
    sp11.onblur = function winner9() {winner4()};
    sp22.onblur = function winner9() {winner4()};
    sp33.onblur = function winner9() {winner4()};
    sp44.onblur = function winner9() {winner4()};
  }

  function vijfspelers(){

    sp33.onblur = function winner90() {winner5()};

} 

  function zesspelers(){
    sp11.onblur = function winner901() {winner6()};
    sp22.onblur = function winner901() {winner6()};
    sp33.onblur = function winner901() {winner6()};
    sp44.onblur = function winner901() {winner6()};
    sp55.onblur = function winner901() {winner6()};
    sp66.onblur = function winner901() {winner6()};
}    


function largest4() {
var num11   = parseInt(document.getElementById("total1").textContent);
var num12 = parseInt(document.getElementById("result").textContent);
var num13 = parseInt(document.getElementById("result3").textContent);
var num14 = parseInt(document.getElementById("result4").textContent);
var largestnumber4 = Math.max(num11, num12, num13, num14);
return largestnumber4;
}

function largest5() {
var num11   = parseInt(document.getElementById("total1").textContent);
var num12 = parseInt(document.getElementById("result").textContent);
var num13 = parseInt(document.getElementById("result3").textContent);
var num14 = parseInt(document.getElementById("result4").textContent);
var num15 = parseInt(document.getElementById("result5").textContent);
var largestnumber5 = Math.max(num11, num12, num13, num14, num15);
return largestnumber5;
}


function largest6() {
var num11   = parseInt(document.getElementById("total1").textContent);
var num12 = parseInt(document.getElementById("result").textContent);
var num13 = parseInt(document.getElementById("result3").textContent);
var num14 = parseInt(document.getElementById("result4").textContent);
var num15 = parseInt(document.getElementById("result5").textContent);
var num16 = parseInt(document.getElementById("result6").textContent);
var largestnumber6 = Math.max(num11, num12, num13, num14, num15, num16);
return largestnumber6;
}



function winner4 () {
  var naam1 = document.getElementById("eerstenaam").value;
  var naam2 = document.getElementById("tweedenaam").value;
  var naam3 = document.getElementById("derdenaam").value;
  var naam4 = document.getElementById("vierdenaam").value;
  var num11 = parseInt(document.getElementById("total1").textContent);
  var num12 = parseInt(document.getElementById("result").textContent);
  var num13 = parseInt(document.getElementById("result3").textContent);
  var num14 = parseInt(document.getElementById("result4").textContent);
  var sp1 = document.getElementById("zesendertig").value;
  var sp2 = document.getElementById("75").value;
  var sp3 = document.getElementById("111").value;
  var sp4 = document.getElementById("476").value;


  if (sp1 !== '' && sp2 !== '' && sp3 !== '' && sp4 !== ''){
  if (num11 === largest4() && num12 === largest4()) {
    alert(naam1 + " en " + naam2 + " hebben beiden " + largest4() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest4() && num13 === largest4()) {
    alert(naam1 + " en " + naam3 + " hebben beiden " + largest4() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest4() && num14 === largest4()) {
    alert(naam1 + " en " + naam4 + " hebben beiden " + largest4() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest4() && num13 === largest4()) {
    alert(naam2 + " en " + naam3 + " hebben beiden " + largest4() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest4() && num14 === largest4()) {
    alert(naam2 + " en " + naam4 + " hebben beiden " + largest4() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num13 === largest4() && num14 === largest4()) {
    alert(naam3 + " en " + naam4 + " hebben beiden " + largest4() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest4()) {
    alert(naam1 + " heeft gewonnen!" + " <br> "  + largest4() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num12 === largest4()) {
    alert(naam2 + " heeft gewonnen!" + " <br> "  + largest4() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw")
    } else if (num13 === largest4()) {
    alert(naam3 + " heeft gewonnen!" + " <br> "  + largest4() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw")
    } else if (num14 === largest4()) {
    alert(naam4 + " heeft gewonnen!" + " <br> "  + largest4() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw")
    }
  } 
}

function winner5() {
  var naam1 = document.getElementById("eerstenaam").value;
  var naam2 = document.getElementById("tweedenaam").value;
  var naam3 = document.getElementById("derdenaam").value;
  var naam4 = document.getElementById("vierdenaam").value;
  var naam5 = document.getElementById("vijfdenaam").value;
  var num11 = parseInt(document.getElementById("total1").textContent);
  var num12 = parseInt(document.getElementById("result").textContent);
  var num13 = parseInt(document.getElementById("result3").textContent);
  var num14 = parseInt(document.getElementById("result4").textContent);
  var num15 = parseInt(document.getElementById("result5").textContent);
  var sp1 = document.getElementById("zesendertig");
  var sp2 = document.getElementById("75");
  var sp3 = document.getElementById("111");
  var sp4 = document.getElementById("476");
  var sp5 = document.getElementById("586");
  var sp6 = document.getElementById("696");
  if (sp1 !== '' && sp2 !== '' && sp3 !== '' && sp4 !== '' && sp5 !== ''){
    if (num11 === largest5() && num12 === largest5()) {
    alert(naam1 + " en " + naam2 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest5() && num13 === largest5()) {
    alert(naam1 + " en " + naam3 + " hebben beiden " + largest5() + " punten" , "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest5() && num14 === largest5()) {
    alert(naam1 + " en " + naam4 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest5() && num13 === largest5()) {
    alert(naam2 + " en " + naam3 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest5() && num14 === largest5()) {
    alert(naam2 + " en " + naam4 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num13 === largest5() && num14 === largest5()) {
    alert(naam3 + " en " + naam4 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num13 === largest5() && num15 === largest5()) {
    alert(naam3 + " en " + naam5 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num14 === largest5() && num15 === largest5()) {
    alert(naam4 + " en " + naam5 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest5() && num15 === largest5()) {
    alert(naam1 + " en " + naam5 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest5() && num15 === largest5()) {
    alert(naam2 + " en " + naam5 + " hebben beiden " + largest5() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest5()) {
    alert(naam1 + " heeft gewonnen!" + " <br> "  + largest5() + " punten" , "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw"  )
    } else if (num12 === largest5()) {
    alert(naam2 + " heeft gewonnen!" + " <br> "  + largest5() + " punten" , "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num13 === largest5()) {
    alert(naam3 + " heeft gewonnen!" + " <br> "  + largest5() + " punten" , "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num14 === largest5()) {
    alert(naam4 + " heeft gewonnen!" + " <br> "  + largest5() + " punten" , "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num15 === largest5()) {
    alert(naam5 + " heeft gewonnen!" + " <br> "  + largest5() + " punten" , "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    }
} }
 
function winner6() {
  var naam1 = document.getElementById("eerstenaam").value;
  var naam2 = document.getElementById("tweedenaam").value;
  var naam3 = document.getElementById("derdenaam").value;
  var naam4 = document.getElementById("vierdenaam").value;
  var naam5 = document.getElementById("vijfdenaam").value;
  var naam6 = document.getElementById("zesdenaam").value;
  var num11 = parseInt(document.getElementById("total1").textContent);
  var num12 = parseInt(document.getElementById("result").textContent);
  var num13 = parseInt(document.getElementById("result3").textContent);
  var num14 = parseInt(document.getElementById("result4").textContent);
  var num15 = parseInt(document.getElementById("result5").textContent);
  var num16 = parseInt(document.getElementById("result6").textContent);

  var sp1 = document.getElementById("zesendertig");
  var sp2 = document.getElementById("75");
  var sp3 = document.getElementById("111");
  var sp4 = document.getElementById("476");
  var sp5 = document.getElementById("586");
  var sp6 = document.getElementById("696");
  if (sp1 !== '' && sp2 !== '' && sp3 !== '' && sp4 !== '' && sp5 !== '' && sp6 !== ''){
    if (num11 === largest6() && num12 === largest6()) {
    alert(naam1 + " en " + naam2 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest6() && num13 === largest6()) {
    alert(naam1 + " en " + naam3 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest6() && num14 === largest6()) {
    alert(naam1 + " en " + naam4 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest6() && num13 === largest6()) {
    alert(naam2 + " en " + naam3 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest6() && num14 === largest6()) {
    alert(naam2 + " en " + naam4 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num13 === largest6() && num14 === largest6()) {
    alert(naam3 + " en " + naam4 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest6() && num16 === largest6()) {
    alert(naam1 + " en " + naam6 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num12 === largest6() && num16 === largest6()) {
    alert(naam2 + " en " + naam6 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num13 === largest6() && num16 === largest6()) {
    alert(naam3 + " en " + naam6 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num14 === largest6() && num16 === largest6()) {
    alert(naam4 + " en " + naam6 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num15 === largest6() && num16 === largest6()) {
    alert(naam5 + " en " + naam6 + " hebben beiden " + largest6() + " punten", "Gelijkspel!", "Bekijk stand", "Speel opnieuw")
    } else if (num11 === largest6()) {
    alert(naam1 + " heeft gewonnen!" + " <br> "  + largest6() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw"  )
    } else if (num12 === largest6()) {
    alert(naam2 + " heeft gewonnen!" + " <br> "  + largest6() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num13 === largest6()) {
    alert(naam3 + " heeft gewonnen!" + " <br> "  + largest6() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num14 === largest6()) {
    alert(naam4 + " heeft gewonnen!" + " <br> "  + largest6() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } else if (num16 === largest6()) {
    alert(naam6 + " heeft gewonnen!" + " <br> "  + largest6() + " punten", "Gefeliciteerd!", "Bekijk stand", "Speel opnieuw" )
    } } else {
    winner5()
    }
}

function hide6() {
   var hiddens = document.querySelectorAll(".fulltext");
   var showing = document.querySelectorAll(".smalltext");
showing[0].innerHTML="gv"
showing[1].innerHTML="gk"
showing[2].innerHTML="pt"

showing[3].innerHTML="gv"
showing[4].innerHTML="gk"
showing[5].innerHTML="pt"

showing[6].innerHTML="gv"
showing[7].innerHTML="gk"
showing[8].innerHTML="pt"

showing[9].innerHTML="gv"
showing[10].innerHTML="gk"
showing[11].innerHTML="pt"

showing[12].innerHTML="gv"
showing[13].innerHTML="gk"
showing[14].innerHTML="pt"

showing[15].innerHTML="gv"
showing[16].innerHTML="gk"
showing[17].innerHTML="pt"
} 

function hide5() {
   var hiddens = document.querySelectorAll(".fulltext");
   var showing = document.querySelectorAll(".smalltext");
showing[0].innerHTML="gevr"
showing[1].innerHTML="gekr"
showing[2].innerHTML="ptn"

showing[3].innerHTML="gevr"
showing[4].innerHTML="gekr"
showing[5].innerHTML="ptn"

showing[6].innerHTML="gevr"
showing[7].innerHTML="gekr"
showing[8].innerHTML="ptn"

showing[9].innerHTML="gevr"
showing[10].innerHTML="gekr"
showing[11].innerHTML="ptn"

showing[12].innerHTML="gevr"
showing[13].innerHTML="gekr"
showing[14].innerHTML="ptn"

showing[15].innerHTML="gevr"
showing[16].innerHTML="gekr"
showing[17].innerHTML="ptn"
} 



function hide4() {
   var hiddens = document.querySelectorAll(".fulltext");
   var showing = document.querySelectorAll(".smalltext");
showing[0].innerHTML="gevraagd"
showing[1].innerHTML="gekregen"
showing[2].innerHTML="punten"

showing[3].innerHTML="gevraagd"
showing[4].innerHTML="gekregen"
showing[5].innerHTML="punten"

showing[6].innerHTML="gevraagd"
showing[7].innerHTML="gekregen"
showing[8].innerHTML="punten"

showing[9].innerHTML="gevraagd"
showing[10].innerHTML="gekregen"
showing[11].innerHTML="punten"

showing[12].innerHTML="gevraagd"
showing[13].innerHTML="gekregen"
showing[14].innerHTML="punten"

showing[15].innerHTML="gevraagd"
showing[16].innerHTML="gekregen"
showing[17].innerHTML="punten"

} 

function moveOnMax(field, nextFieldID) { 
if (document.getElementById('speler6').style.display==='block') {''
} else if (field.value.length >= field.maxLength) { 
nextFieldID.focus(); } 
}

function moveOnMax2(field, nextFieldID, nextFieldID2,nextFieldID3) { 
if (document.getElementById('speler6').style.display==='block') {''
} else if (field.value.length >= field.maxLength) { 
if (nextFieldID.style.display === "none") { nextFieldID2.focus(); } else {nextFieldID3.focus()}} }

 Eerste - 39 - 76 - 441 - 551 - 661
 
function adder(num1) {
 var eersterij = parseInt(document.getElementById('Eerste').value) + parseInt(document.getElementById('39').value) + parseInt(document.getElementById('76').value) + parseInt(document.getElementById('441').value) 
 var tweederij = parseInt(document.getElementById('derde').value) + parseInt(document.getElementById('41').value) + parseInt(document.getElementById('78').value) + parseInt(document.getElementById('443').value) 
 var derderij = parseInt(document.getElementById('vijf').value) + parseInt(document.getElementById('43').value) + parseInt(document.getElementById('80').value) + parseInt(document.getElementById('445').value) 
 var vierderij = parseInt(document.getElementById('zeven').value) + parseInt(document.getElementById('45').value) + parseInt(document.getElementById('82').value) + parseInt(document.getElementById('447').value) 
 var vijfderij = parseInt(document.getElementById('negen').value) + parseInt(document.getElementById('47').value) + parseInt(document.getElementById('84').value) + parseInt(document.getElementById('449').value) 
 var zesderij = parseInt(document.getElementById('elf').value) + parseInt(document.getElementById('49').value) + parseInt(document.getElementById('86').value) + parseInt(document.getElementById('451').value) 
 var zevenderij = parseInt(document.getElementById('dertien').value) + parseInt(document.getElementById('51').value) + parseInt(document.getElementById('88').value) + parseInt(document.getElementById('453').value) 
 var achtsterij = parseInt(document.getElementById('vijftien').value) + parseInt(document.getElementById('53').value) + parseInt(document.getElementById('90').value) + parseInt(document.getElementById('455').value) 
 var negenderij = parseInt(document.getElementById('zeventien').value) + parseInt(document.getElementById('55').value) + parseInt(document.getElementById('92').value) + parseInt(document.getElementById('457').value) 
 var tienderij = parseInt(document.getElementById('negentien').value) + parseInt(document.getElementById('57').value) + parseInt(document.getElementById('94').value) + parseInt(document.getElementById('459').value) 
 var elfderij = parseInt(document.getElementById('eenentwintig').value) + parseInt(document.getElementById('59').value) + parseInt(document.getElementById('96').value) + parseInt(document.getElementById('461').value) 
 var twaalfderij = parseInt(document.getElementById('drieentwintig').value) + parseInt(document.getElementById('61').value) + parseInt(document.getElementById('98').value) + parseInt(document.getElementById('463').value) 
 var dertienderij = parseInt(document.getElementById('vijfentwintig').value) + parseInt(document.getElementById('63').value) + parseInt(document.getElementById('100').value) + parseInt(document.getElementById('465').value) 
 var veertienderij = parseInt(document.getElementById('zevenentwintig').value) + parseInt(document.getElementById('65').value) + parseInt(document.getElementById('102').value) + parseInt(document.getElementById('467').value) 
 var vijftienderij = parseInt(document.getElementById('negentwintig').value) + parseInt(document.getElementById('67').value) + parseInt(document.getElementById('104').value) + parseInt(document.getElementById('469').value) 
 var zestienderij = parseInt(document.getElementById('eenendertig').value) + parseInt(document.getElementById('69').value) + parseInt(document.getElementById('106').value) + parseInt(document.getElementById('471').value) 
 var zeventienderij = parseInt(document.getElementById('drieendertig').value) + parseInt(document.getElementById('71').value) + parseInt(document.getElementById('108').value) + parseInt(document.getElementById('473').value) 
 var achtienderij = parseInt(document.getElementById('vijfendertig').value) + parseInt(document.getElementById('74').value) + parseInt(document.getElementById('110').value) + parseInt(document.getElementById('475').value) 

if (document.getElementById('speler6').style.display==='block' || document.getElementById('speler5').style.display==='block' ) {''
} else if (eersterij === 1 || tweederij === 1 || derderij === 2 || vierderij === 3 || vijfderij === 4 || zesderij === 5 || zevenderij === 6 || achtsterij === 7 || negenderij === 8 || 
tienderij === 8 || elfderij === 7 || twaalfderij === 6 || dertienderij === 5 || veertienderij === 4 || vijftienderij === 3 || zestienderij === 2 || zeventienderij === 1 || achtienderij === 1 ) {
    alert(" Het totaal aantal gevraagde slagen is hetzelfde als het totaal aantal mogelijke slagen", "Pas op!", "Ga door", "Sluit spel af", "none")
} 
}



