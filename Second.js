//.Lets go :)



.Mouse events
    .Touch events
    .Form events
    .Keyboard events
    .DOM events;


.Mouse events(
        .click;
        .hover;
        .moueeup;
        .mousedown;
        .mouseover - moje da broi kolko pyti si minal po elementa;
        .mouseout;
        .mouse enter - samo edin pyt kazva dali si entered ili ne;
    )
    .Touch events(
        .tap - click;
        .touchstart;
        .touchmove;
        .i drugi

    )
    .Keyboard events(
        .keypress;
        .keydown; - za butoni ot klaviaturata;
    )
    .UI events(
        .load - document.onload = function() { < script >
                sama lama duma luma you asuming im a human what i gotta do to get it trough to you im superhuman!!!
                    < \/script>
        };
        .abrot
        .select
        .resize
        .input -

    )
    .Focus events(
        .focusin
        .focusout
        .and ufcourse focus;
    )


btn.addEventListener('click', function() {
    alert;
}, faulse);
var button = document.getElementById("click-button");
button.addEventListener("click", function() {
    console.log("You clicked me");
}, false);

HTML elements have propertiesfor content
    .innerHTML
    ...Returns as a string the content of the element, without the element
    .outerHTML
    ....Returns as a string the content of the element, with the element
    .innerText / textContent
    ...Returns as a string the text content of the element, without the tags

///3//5//za click eventa ima i koordinati

ev.target.value - imame da pokazva kakvo e imalo v inputa

za keypressed element pokazva i koi key e natisnat;
!!!!!!-STRUKTURA - window(kazvash na koe da se zakacha).addEventListener('keydown' (pri kakvo polojenie da s eizpylnqva), DoSomething(funkciqta koqto da se izpylnqva), false);

wrapper.classList.add('Musho'); - moje da se dobavq dopylnitelen klass sys js

wrapper.parentNode / Element(opisva samo elementite a node i dopylnitelnoto mqsto)

{
    var div = document.createElement('div');
    div.style.width = '200px';
    wrapper.appendChild(div); - ako napravim samo gornite dva reda diva nqma da se izpishe nikyde makar che ste byde syzdaden: )
}

samo roditelq moje da si tre deteto

Syzdavame fragment(var dFrag = document.createDocumentFragment(); dFrag.appendChild(div);

    //appending more elements
    document.body.appendChild(dFrag);) i go pylnim s neshta i dokato ne se e napylnil ne se izpisvat neshtata - .stava - mnogo - po - byrzo

fragmenta e konteiner koito nqma html predstavqne

cloneNode(true) - clonira dylboko sys deca i vsichno v nego kogato e true

var trainers = document.getElementsByTagName("ul")[0];
var trainer = trainers.getElementsByTagName("li")[0];
trainers.removeChild(trainer);

//remove a selected element
var selectedElement = //select the element
    selectedElement.parentNode.removeChild(selectedElement);


As HTML Attribute

Event handlers can be attached by simply setting a value to the handler attribute
This value is pure JavaScript and is not always a

function
//<!-- html -->
< button onclick = "onButtonClick()" > Click Me < /button>
    // js
function onButtonClick() {
    console.log("You clicked the Button");
}

//demo
































































//..
