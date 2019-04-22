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
