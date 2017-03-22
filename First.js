 Ne se bash kompilira a se interpretira;

 moje da manipulira dom - a

 alert('gosho pop-up');

 scripta ili lika(

     < script src = "genialno.js"
     type = "text/javascript" > < /script>

 ) kym scripta e vinagi v kraq


 var gosho = 15;

 alert(gosho);

 console.log(gosho);
 console.error(gosho);

 function sum(a, b) {

     return a + b;
 }

 < button id = "spammable" > Spam < /button>

 document.getElementById('spamable').onclick = function() {
     console.error('spamim');

 };

 // NODE.JS

 Prochita js i kompilira koda.

 var,
 let (promenlivi koito sa v scope),
 const (ne mojete da davate novi stoinosti)

 + , * , = , != , && , ++, ..

 Ne e vajen tipa na promenlivite, a na stoinostite!!!


     Imame malko po razlichno arrays

 Ivona[1, 2, 3]

 a += 1; - Better!

     let neshto = confirm('kazvash li se Harry Potter?');
 console.log(neshto);

 alert() i confirm i prompt

 Nqma klasove



 Math.max() --Infinity, a pyk Math.min() - Infinity;


 console.log(new Date());

 console.dir();

 // TOOLS

 snippet - kazvash kakvo da napishesh i kakvo da ti izliza;

 //danni

 let za promenlivite

 Ima slaba tipizaciq, zashtoto se opitva da go napravi da raboti

 typeof x

 Math.round(6.5);

 Losho predstavqne na chislata i zaradi tova si ima napraveni biblioteki it.n.


 let name = 'gosho';
 'My name is ${name}' == >
 "My name is gosho"

 Stringovete mogat da se parsvat s chisla i floats;

 NaN - not a number: )

 Number('123.55');

 new ne moje da e ime na
 let no New moje


 var x = 16 + 4 + "Volvo";
 Result:
     20 Volvo
 but!!
     var x = "Volvo" + 16 + 4;
 Result:
     Volvo164


 var x; // Now x is undefined
 var x = 5; // Now x is a Number
 var x = "John"; // Now x is a String

 var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

 // Operatori i izrazi

 + - * /%++--;(aritmeticheski)

 && || ^ (xor) !;
 (logicheski)

 & | ^ ~(obryshta vsqko bitche: -)) << (mesti bitove) >> >>> ;
 (pobitovi)

 == != < > <= >= TIQ DYLGITE POLZVAI === !== ;
 (sravnenie)

 = += -= *= /= %= ^= <<= >>=;(po byrzi sa i ne polzvai i++!)

 + (sybira string sys chisla);

 .(dava ni da dostypvame dadeni propertita ili poleta)[](moje da se smenqt neshta i propertita na obektite)() ? : new in , delete, void, typeof, instanceof;

 if (y = true) {
     x = 10;
 } else {
     x = 15;
 } === to;
 y ? 10 : 15

     "The fee is " + (isMember ? "$2.00" : "$10.00");

 con ? true : false

 // konstrukcii
 /* globals console*/
     "use strict";
 // true-like: anyth.else +[]
 //false-like : NaN, "",0,undefined,null
 (You can check it with!!(""))

 to string;
 kogato se pishe s
 var a ne s
 let, vsichki definicii trqbva da sa otgore;

 var x,
     y;

 number = +number

 // number += number tova e sybirane

 if (number % 2) {
     //odd
 } else {
     //even
 }

 //.

 if
 else if
 else if
 //switch case.

 switch (dayInWeek) {
     case 1:
         console.log('Monday');
         break;
     case 2:
         console.log('Monday');
         break;
     case 3:
         console.log('Monday');
         break;
     default:
         Exit;
         break;

 }

 switch (dayInWeek) {
     case "Monday":
     case "Monday1":
     case "Monday2":
         console.log('Monday');
         break;
     default:
         console.log('Exit');
         break;

 }

 ///LOOOOOPS///

 while (true) {
     console.log(num);
     num -= 1;
 }

 kato proverqvame dali e prosto moje da proverqvame do korena mu;

 var dec = 14;


 var bin = "";
 while (dec) {
     bin += dec % 2 + bin;
     dec /= 2;
     dec |= 0;
 }
 bin = (dec & 1) + bin;
 dec >> ;

 //for loop

 for (var i = 0; i < MyVar.length; i++) {
     MyVar[i]
 }
 //.

 var line = "",
     prop;


 for (prop in console) {
     line += prop + ", ";

 }

 console.log(line);
 //obhojda obekt name age

 var obj = {
     "name": "John",
     "age": 17
 };


 for (prop in obj) {
     line += prop + ", ";

 }

 console.log(line);

 // obhojda obektjohn 17
 var obj = {
     "name": "John",
     "age": 17
 };

 for (prop of obj) {
     line += prop + ", ";

 }

 console.log(line);

 //MASIVI


 var numb = [1, 2, 3];

 var numb2 = new Array(...numb);

 // i+=1!!!

 // for of e nai dobre za polzvane

 Push i unshift(prenarejda indexite na vsichki)
 Pop i shift(smenq pak indexite ta ne se polzva)

 === proverqva dali tipa im e ednakyv i togava sravnqva

 reverse i join: 3

 // result.push

 result = [].concat(x, y); //sybira x i y

 splice - vzimame si chast ot masiva
 y = x.slice(1, 7)

 y = [...x];
 posle kato pravim promeni po y te si ostavat samo po nego: )


 deleteCount = 2;

 x.indexOf(3);

 //funkcii

 Razdelqme si hubavo funkciite s opisatelni imena!

     Moje da se podavat funkcii kato parametri

 //Example print

 function printSign(number) {

     number = +number;

     if (number > 0) {
         console.log('The numb ${number} is +');
     } else if (number < 0) {
         console.log('The numb ${number} is -');
     } else {
         console.log('The numb ${number} is 0');
     }

 }

 arguments - chete dopylnitelni parametri

 args = [].slice.apply(arguments);


 for (prop in obj)

     Poslednata deklaraciq na funkciq s edno ime se zachita;

 function getRandomValue(str, start, end) {

     start = start || 0;
     (za da se raboti s 0 vmesto s undefined)
     end = end || str.length;

 }

 //.Obekti :)

 { name: 'pesho' }

 //
 let catName = 'Richi';
 let catAge = 2;

 let cat = {
     color: 'ginger',
     name: catName,
     age: catAge,
     mew: function() {
         console.log('mew');
     }
 }

 cat.age = 50;


 console.log(cat.age);
 //ostava agea ot gore

 // My short way
 // for my cat factory

 function makeCat(name, color, age) {

     function mew() {
         console.log('mew');
     }

     return {
         name,
         color,
         age,
         mew,
         toString: function() {
             return this.name + 'is' + this.age + 'years old and is' + this.color;
         }
     };

 }

 let Richi = makeCat('richi', 'red', 2),

     George = makeCat('george', 'magenta', 1);


 let manyCats = [
     richi,
     george,
     makeCat('malkoKote', 'brown', 3),
     makeCat('ginka', 'transperant', NaN)

 ];

 let oldLady = {
     name: 'Genka',
     age: '90',
     pets: manyCats,
     relatives: [{ name: 'Stncho' }]

 };

 for (var i = 0; i < oldLady.pets.length; i++) {
     console.log(oldLady.pets[i].toString());
 }


 ///arrays

 [].every(callback);
 /vryshta boollike promenliva/
 var result = arr.some(function(pesho, gosho, mariika) {
     return !(number % 2);
 });


 [].every(callback);
 var array = [2, 3, 2, , 2, 1];

 function isOdd(n) {
     cvbdfgd;
 }
 col - array.every(isOdd)
 or..
 col - (array.every(function(n) {
     fbdsfg;
 }))

 array.every(n => n % 2 !== 0)

 array.some(isOdd) - ima li elementi otgovarqshti na tva uslovie

 function every(array, condition) {

     for (var i in this) {
         if (!condition(this[i])) { //ako ima dori edin koito e v greshka returnva
             return false;
         }
     }
     return true;
 }

 Array.prototype.some = some;

 po logikata se pravi sys this kato obekta...

 for of gi obhojda po stoinosta(33 px) a in propertita v obekti(hight: )

 ako polzvame
 const conditiona nqma da moje da ni promenq stoinosta


 //Transformaciq na masivi

     [].filter(callback)
 filtrira neshtata koito ni otgovarqt na uslovieto

 Array.prototype.filter = function(condition) {

     var filterArray = [];

     for (var value of this) {
         if (condition(value)) {
             filterArray.push(this[i]);
         }
     }
     return filterArray;
 };



 var filterArray = array.filter(isOdd);

 Map ///.   priloji tazi funkciq na vsqko chislo po otdelno !

 function solve(srgs) {
     var numbers = args[0].split(' ')
         .map(x => +x)
         .filter(dfdsfgsd) //chaning - polezno e vzime rezultata i prodyljava
     col.log(numbers);

     implementirane na map
     Array.prototype.map

     function(f) {

         let mapArray = [];
         for (let i in this) {
             mapArray[i] = f(this[i], i, this);
         }
         return mapArray;
     };


     [].reduce

     f = +

         0[43, 43, 4, 8]
     fold left
         (((((0 + 43) + 43) + 4) + 8)

             col - array.reduce((a, b) => a > b ? a : b, 0)); - v kraina smetka shte ni vyrne maksimuma ot array - q


     ima i reduceRight...

     concatenate - vate gi v obraten red.

     Array.prototype.foldL = function(combine, initial) {

         for (var i of this) {
             initial = combine(initial, this[i]);
         }
         return initial;

         //.

         array.forEach(x => col - x);

         sys
         for of se vzima indexa, a sys
         for each dava se i indeksa i masiva ni(moje da se syzdade nov scope)


         //Find 
         col - array.find(x => x < 3); //nameri pyrvoto koeto otgovarq na kriteriq ni.

         //find index 
         kato index of e

         ne se poddyrja browzeri
         trqq da se definira sys Array.prototype

         //sort
         rsboti navsqkyde

         // compare(this[i] , this[j]) > 0


         array.sort((a, b) => a - b)
             .filter(x => x % 2)
             .map(x => x * 3)
             .forEach(x => col - x)


         //fill
         col - [].fill(1, 2, 5));
     Pravi kopie na masiva
     ot 2 do 5 zapylva s edinici

     //Chaning - kogato funkciqta vryshta this/tova s koet rabotim.mojem da chainvame s .

     Array.prototype.fillWith = function(generator, start = 0, end = this.lenght) {
         for (let i = start; i < end; i += 1) {
             this[i] = generator();
         }
         return this;
     };

     col - [1, 2, 3].fillWith(x => Math.random);
     //

     (var = );

     (function() {
         let counter = 0;

         return function() {
             counter += 1;
             return counter;
         }
     }());

     //s takava funkciq imame neshto kato private promenlivi

     col - [1, 2, 3].fillWith(incrementGen);

     //scanr


     /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /=/ = /==/ = /=/
     //NIZOVE STRINGS
     //nizove 4 u //

     var str1 = `
    joker
    `;
     (sys apostrof se zapazvat novite redove)

     multyline stringa moje da se slaga js kod $ {};

     var name = 'jon snow';

     var firstName = name.substr(0, 4);

     //syzdavame nov obekt i za tova name ne se promenq(otrqzvame)

     string.length(leko ochevidno a ? );

     name.charAt(9) == ~name[9] priblizitelno podobni

     name.forEach((ch, i) => console.log(name[i]);)

     var newname = name.replace('jon', 'mark');
     //no namira i replaceva samo pyrviq osven ako nqma regulqrni

     name.replace nqma da zapazi noviq string nikyde

     var hasIt = name.search(/h/);
     //tyrsi i dava index ako go ima

     var fullname `${first} ${last}`;

     indexOf - vryshta nai lqvoto namirane ili po tochno negoviq index;
     lastIndexOf(word) - naopaki;

     while (index >= 0) {

         console.log(`Found ${word} at ${index}`);
         index = name.indexOf(word, index + 1);

     }



     trim - izchistva dopylnitelnite spacove samo v nachaloto i v kraq

     trimLeft - samo ot lqvo / trimRight - samo ot dqsno
         //split
     var text = 'this is some text';
     var words = text.split('one');

     ako iskame da splitnem po zapetaika shte ni dolqpq i prazen string i za tova e nai dobre da napravim taka:

         var words = text.split(/[, ]/)


     console.log(words);

     // sumirane
     var text = '1 2 3 4 5 6 7 8';

     var sum = text.split('')
         .map(Number)
         .reduce((s, n) => s + n, 0);


     ako go nqma map otgor etrqq da ima dva plusa v reduce

     substr(s, h) - start howManySImbols
     substring(s, e) - start i end sa dvata parametyra

     prototip e obekt koito se zakacha kym vsichki ot vida

     String.prototype.htmlEscape = function() {
         return this.replace(/</g, '&lt;');
     }

     ^ pokazvame che iskame vsichki sys g

         '1'.padLeft('0', 2);

     za da se izpishe '01'
     vmesto 1

     //REGEX cooooooooooooooool//
     //////////////////
     ///////////
     ////////
     /////
     ///
     //
     Principno sa shabloni..koito moje da polzvame

     regex101.com moje da se izprobvat

     moje da se syzdavat po dva nachina
     1. literal -
         const regex = /^pe/gi;

     2. sys new ama e bavno;

     \ - slaga se tova za da se polzvat specialni znaci

     match, replace, split;


     sys skobi pravim grupi
         * -0 ili poveche; //f
     + -1 ili poveche pyti

     Za URL = /^[a-z|\d]+\.(com|net)$/ig;

     nachalo - ^ ;
     krai - $;

     a - z, b - d - s tirence se pishe range

         ^ vsichko bez

         / [ ^ [xyz] { 3 }] / g - vsqkoi tri elementa v koito podred nqma tezi tri bukvi
         //zadachka za extraktvane na img

     const imgSrcRegex = /<img\s.*?src="(.*?)"/gi;

     let currentMatch = ingSrcRegex.exec(html);

     while (currentMatch) {

         console.log(currentMatch[1]);
         currentMatch = ingSrcRegex.exec(html);
     }

     const rows = +args[0]; - prevryshta v chislo;

     .
