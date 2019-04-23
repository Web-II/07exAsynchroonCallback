# 07exAsynchroonCallback
## Oefening 1:  Caesar encryption.
Dit is een oefening op callback en events.

De bedoeling is dat je bij het intypen van je tekst, deze onmiddellijk wordt omgezet naar de Caesar encryption, zie [oefening 1 bij hoofdstuk 4](https://github.com/Web-II/04exCollections#1-caesarcijfer)  

Voorbeeld:

![Caesar.png](/docs/Caesar.png 'Resultaat')

Zorg ervoor dat bij elke toetsaanslag de tekst uit het input veld wordt omgezet volgens de Caesar encryptie en onmiddellijk wordt weergegeven.

Het event dat hiervoor instaat is het keyup event. Zorg er dus voor dat de callback function, die de encryptie uitvoert gekoppeld wordt aan dit event.

Maak voor de encryptie gebruik van alphabetUpper en alphabetLower.

Volgende code (oplossing oefening 1 hoofdstuk 4) kan misschien een beetje helpen:

    const tecoderen = 'Errare humanum est.';
    const caesar = tecoderen
        .split('')
        .map(value => 
            alfabetUpper.includes(value) 
                ? alfabetUpper[(alfabetUpper.indexOf(value) + 3) % alfabetUpper.length]
                : alfabetLower.includes(value) 
                    ? alfabetLower[(alfabetLower.indexOf(value) + 3) % alfabetLower.length]
                    : value)
        .join('');
        
        
## Oefening 2:  Country quiz.
Dit is een oefening op promises.

Deze oefening is een quiz, waarbij je tien maal de juiste hoofdstad van een (random gekozen) land moet kiezen uit een select list. 
Deze lijst met tien mogelijke hoofdsteden wordt bij elk nieuw land opnieuw opgebouwd en moet (logischerwijze) ook de juiste hoofdstad bevatten. Na elke vraag (10 in totaal) wordt de juiste hoofdstad weergegeven, met het gekozen antwoord en een correct of fout melding.

Voorbeeld na 3 vragen:

Start:

![Quiz1.png](/docs/Quiz1.png)

Select List:

![Quiz2.png](/docs/Quiz2.png)

Drie vragen beantwoord:

![Quiz3.png](/docs/Quiz3.png)

De landen van europa met hoofdstad en vlag staan in countries.js. 

Bekijk deze code: dit is een array van JSON objecten. Elk object bevat:
- een property name (naam van het land)
- een property flag (url van de vlag): wordt in deze oefening niet gebruikt.
- een property capital (hoofdstad van het land)

Met een import wordt deze array toegevoegd aan quiz.js en is dan ook toegankelijk.

De quiz.js bevat naast de import ook een Class Country met de gepaste getters en setters. Deze code mag niet aangepast worden.

Vervolgens is er nog de klasse QuizApp. 
- Deze bevat alle members en methods om de quiz te spelen. 
- Alle nodige getters en setters zijn reeds aanwezig.
- De constructor:
    - map de array van JSON objecten naar een array van Country objecten - wordt bijgehouden in de member countriesArray.
    - maakt een Set object aan - questionsQuiz. Via de methode createQuestions zal deze 10 verschillende landen (country objecten) bevatten. Deze landen worden random gekozen.
    - maakt een Map object aan - answers, die de antwoorden bijhoudt (key = country object, value = antwoord)
- de methode createQuestions zal door gebruik te maken van een promise de 10 verschillende landen random toevoegen aan questionsQuiz.
    - indien dit succesvol gebeurt wordt de eerste vraag gesteld: methode askQuestion(q) - de parameter q is het volgnummer van de vragen.
    - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd en is de quiz afgelopen.
- de methode askQuestion(q) zal:
    - de juiste vraag (q is het volgnummer van de vraag) ophalen uit questionsQuiz
    - deze vraag (het land) weergeven op de webpagina
    - de selectList met 10 mogelijke hoofdsteden (de juiste hoofdstad en 9 random gekozen hoofdsteden uit countriesObject opbouwen en weergeven. Om de selectList van hoofdsteden op te bouwen wordt gebruikt gemaakt van de methode createSelectList(c), waarbij de parameter c het juiste antwoord is.
    - vervolgens wordt bij een keuze uit de selectList van hoofdsteden (maak gebruik van het change event) 
        - indien succesvol
            - het antwoord bijgehouden in answers
            - het resultaat weergegeven (methode showResult)
            - de volgende vraaag gesteld (methode askQuestion(q+1))
        - niet succesvol - stuur een geschikte boodschap naar de console.
    - maak ook hier op een correcte manier gebruik van een Promise.
- de methode createSelectList(c) zal:
    - de selectList van mogelijke antwoorden bevatten: 10 verschillende hoofdsteden (9 random gekozen uit countriesArray), waaronder het juiste antwoord (parameter c van deze methode).
    - de gesorteerde selectlist weergeven op de pagina.
- de methode showResult geeft de antwoorden als een table weer op de webpagina (zie screenshot hierboven). Hier maken we gebruik van het DOM. Maak gebruik van de correct.png en wrong.png in de map images om het antwoord visueel als juist of fout weer te geven.

## Oefening 3:  Country quiz - alternatief met vlag.

Herwerk oefening 2 zodat een vlag wordt getoond ipv de naam van het land en maak dan een keuze uit 10 mogelijke landen.

Start:

![Quiz4.png](/docs/Quiz4.png)

Select List:

![Quiz5.png](/docs/Quiz5.png)

Drie vragen beantwoord:

![Quiz6.png](/docs/Quiz6.png)

## Oefening 4: Doorprik de illusie.

Dit is een oefening op callback-eventhandling - storage - DOM - Canvas (alle code hiervoor is gegeven).

In deze oefening gaan we een eenvoudig spelletje programmeren. De gebruiker moet in zo weinig mogelijk tijd alle rode bollen (cirkels) wegklikken. In totaal zijn er 40 bollen in 5 verschillende kleuren. Van elke kleur zijn er initieel dus evenveel bollen: 8. Iedere keer de gebruiker klikt op een rode bol, wordt deze verwijderd en worden alle resterende bollen ergens anders getekend. Er is ook een top tijd. Deze wordt bijgehouden in de storage. Alle bollen worden op een canvas getekend (de code hiervoor is gegeven).

![DPDI1.png](/docs/DPDI1.png)

Er zijn drie klassen gedefinieerd:
- Circle - bevat alle eigenschappen voor een bol te tekenen (code is gegeven):
    - x- en y-coördinaat op canvas van het middelpunt van de cirkel.
    - straal van de cirkel.
    - kleur van de cirkel.
- Game:
    - members:
        - array van 40 cirkels.
        - array van 5 kleuren ('red', 'lightblue', 'lightgreen', 'black', 'lightyellow').
        - aantal seconden dat het spel loop.
        - aantal cirkels per kleur en aantal rode cirkels, namelijk 8.
    - de nodige getters (reeds gegeven)
    - methods:
        - createCircles: 
            - maakt 40 cirkels (circleObjects) aan (8 van elke kleur).
            - straal van cirkel heeft waarde tussen 10 en 20.
            - x- en y-coördinaat staan oorspronkelijk op 0.
        - checkClick(x,y):
            Deze methode heeft 2 parameters x en y, die de x – coördinaat en de y-coördinaat van de muisklik op het canvas voorstellen. In deze functie wordt er gecontroleerd of de gebruiker op een rode cirkel heeft geklikt. Als de gebruiker op een rode cirkel heeft geklikt, wordt deze cirkel verwijderd uit de array circles. 
	    Overloop alle cirkels uit de array circles.
	    Als de afstand tussen het middelpunt van één rode cirkel en de coördinaten van de muisklik kleiner is dan of gelijk aan de straal, wil dit zeggen dat de gebruiker in een rode cirkel heeft geklikt. In dat geval wordt deze cirkel verwijderd uit de array circles. Maak hiervoor gebruik van de JavaScript functie splice en wordt het numberOfRedBalls met 1 verminderd.
	    Om de afstand tussen 2 punten (x_1,y_1 ) en (x_2,y_2) te berekenen, maken we gebruik van de formule √((x_2- x_1 )* (x_2- x_1 )+ (y_2- y_1 )* (y_2- y_1 ) ) met (x_1,y_1 ) de coördinaten van de klik op het canvas en (x_2,y_2) het middelpunt van de cirkel. 
	    - checkEndGame: return true als alle rode ballen veerwijderd zijn, in het andere geval false.
	    
De code in JavaScript om de afstand tussen middelpunt van cirkel en klik op canvas te bepalen is: 

	const distance = Math.sqrt(Math.pow((this.circles[i].x - x), 2) + Math.pow((this.circles[i].y - y), 2)).

- DPDIApp heeft:
	- een canvas om te tekenen (code gegeven)
	- een game object
	- een timer object
	- een storage object
	- methods:
		- drawGame en drawCircles: tekenen het spel op het canvas (code volledig gegeven)
		- showNumberOfRedBalls: toont het aantal resterende rode cirkels op de webpagina (zie screenshot hierboven)
		- startChronometer: een timer wordt gestart zodat na elke seconde de methode showTime wordt uitgevoerd. Een timer starten kan adhv de methode window.setInterval(function, aantalmilliseconden). De function is de methode die wordt uitgevoerd telkens als er aantalmilliseconden verstreken zijn.
		- stopChronometer: een timer kan je stoppen via de methode window.clearInterval(deTimer) - deTimer bevat een verwijzing naar de timer die gestopt dient te worden.
		- checkClick(x,y): roept de methode checkClick van het game object aan - x en y zijn de coördinaten waar op het canvas geklikt werd (later hier meer over)
		- showTime: toont de verlopen tijd (sinds start van chronometer) op de webpagina (maak gebruik van de algemen functie convertSeconds - code gegeven) om de tijd in mm:ss weer te geven.
		- getTimeRecordFromStorage en setTimeRecordInStorage halen respectievelijk de recordtijd op uit de storage of schrijft deze weg naar de storage.
		- showRecordTime: toont de recordTijd op de webpagina (code gegeven)
		- checkEndGame: ga het einde van het spel na (code gegeven)
		- stopGame: stopt de chronometer, toont recordTijd op de webpagina en slaat eventueel de nieuwe recordtijd op in storage, zorgt ervoor dat er niets meer gebeurt als op het canvas geklikt wordt.

De init functie - initialisatie van de applicatie:
- haalt het canvas op (code gegeven).
- maakt een DPDIApp object aan met 2 parameters: canvas object en storage object
- zorg ervoor dat als er op het canvas geklikt wordt:
	- gecheckt wordt of er een op een rode bol geklikt is. Hiervoor geeft je de x en y coördinaat van de klik op het canvas door aan de gepaste methode. 
	- het spel hertekend wordt op het canvas
	- geckeckt wordt of het spel ten einde is.

Volgende code gebruikt worden om de x en y coordinaat van het klikken op het canvas te bepalen:
	
	// xco is de xcoördinaat van de muisklik op het canvas
	const xco = event.pageX - DPDI.canvas.offsetLeft;
	// yco is de xcoördinaat van de muisklik op het canvas
	const yco = event.pageY - DPDI.canvas.offsetTop;


	
