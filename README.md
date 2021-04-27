# 07exAsynchroonCallback

## Oefening 1: Caesar encryption.

Dit is een oefening op callback en events.

De bedoeling is dat je bij het intypen van je tekst, deze onmiddellijk wordt omgezet naar de Caesar encryption, zie [oefening 1 bij hoofdstuk 4](https://github.com/Web-II/04exCollections#1-caesarcijfer)

Voorbeeld:

![Caesar.png](/docs/Caesar.png "Resultaat")

Zorg ervoor dat bij elke toetsaanslag de tekst uit het input veld wordt omgezet volgens de Caesar encryptie en onmiddellijk wordt weergegeven.

Het event dat hiervoor instaat is het keyup event. Zorg er dus voor dat de callback function, die de encryptie uitvoert gekoppeld wordt aan dit event.

Maak voor de encryptie gebruik van alphabetUpper en alphabetLower.

Volgende code (oplossing oefening 1 hoofdstuk 4) kan misschien een beetje helpen:

    const tecoderen = 'Errare humanum est.';
    const caesar = tecoderen
        .map(value =>
            alfabet.includes(value)
                ? alfabet[(alfabet.indexOf(value) + 3) % alfabet.length]
                : alfabet.includes(value.toUpperCase())
                    ? alfabet[(alfabet.indexOf(value.toUpperCase()) + 3) % alfabet.length].toLowerCase()
                    : value)
        .join('');

## Oefening 2: Country quiz.

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

De landen van Europa met hoofdstad en vlag staan in countries.js.

Bekijk deze code: dit is een array van objecten. Elk object bevat:

- een property name (naam van het land)
- een property flag (url van de vlag): wordt in deze oefening niet gebruikt.
- een property capital (hoofdstad van het land)

Met een import wordt deze array toegevoegd aan quiz.js en is dan ook toegankelijk.

De quiz.js bevat naast de import ook een Class Country met de gepaste getters. Deze code mag niet aangepast worden.

Er is ook een Class Quiz. Deze bevat een collection van Country Objecten (map de JSON objecten uit de landen van Europa),
een collection van vragen (bevat 10 verschillende Country objecten) en tot slot een collection met antwoorden, deze bevat de vraag (Country object) en het antwoord van de quizzer.

Implementeer de methodes van de Quiz klasse.     
- createQuestions() : genereert random 10 vragen (Country object).   
- getQuestion(): retourneert de volgende vraag (geen gebruik maken van idiote tellerkes). Denk na hoe je kan weten wat de volgende vraag is...
- addAnswer(question, answer): voegt het antwoord toe aan de collection van antwoorden. Tip: key is de vraag en value is het antwoord.
- getRandomCountryName(): retourneert random een countryname uit de collection van Country objecten.

Vervolgens is er nog de klasse QuizApp.

- Deze bevat alle members en methods om de quiz te spelen.
- de constructor: maakt een Quiz object aan, dit duurt 10 seconden. Toon een gepaste boodschap op de pagina. 
- de methode play de vragen aanmaken, dit duurt ook 10 seconden
  - indien dit succesvol gebeurt wordt de eerste vraag getoond door middel van de methode showQuestion(question), waarbij de vraag wordt opgevraagd aan het Quiz object.
  - indien dit niet succesvol gebeurt, dan wordt een gepast bericht weergegeven op de pagina.
- de methode showQuestion(question) zal:
  - deze vraag (het land) weergeven op de webpagina
  - de selectList met 10 mogelijke hoofdsteden (de juiste hoofdstad en 9 random gekozen hoofdsteden uit countriesObject opbouwen en weergeven). Om de selectList van hoofdsteden op te bouwen wordt gebruikt gemaakt van de methode createSelectList(c), waarbij de parameter c het juiste antwoord is. Het aanmaken van de lijst met mogelijke antwoorden duurt 2 seconden. Geef ook een gepaste melding op de pagina. De selectlist wordt pas getoond van zodra deze correct is aangemaakt. Indien niet correct aangemaakt, stuur een gepaste boodschap naar de pagina.
  - vervolgens wordt een keuze uit de selectList van hoofdsteden (maak gebruik van het change event) gemaakt
      - het antwoord wordt toegevoegd aan de collection van antwoorden van het Quiz object.
      - het resultaat wordt weergegeven (methode showResult)
      - de volgende vraaag wordt gesteld (methode showQuestion())
- de methode createSelectList(c) zal:
  - de selectList van mogelijke antwoorden bevatten: 10 verschillende hoofdsteden (9 random gekozen uit countriesArray), waaronder het juiste antwoord (parameter c van deze methode).
  - de gesorteerde selectlist weergeven op de pagina.
- de methode showResult geeft de antwoorden als een table weer op de webpagina (zie screenshot hierboven). Deze code mag niet gewijzigd worden.
- de methode showMessage geeft de boodschap weer op de pagina en toont al dan niet de spinner.
- de methode hideMessage verbergt de boodschap van zodra die niet getoond moet worden.
## Oefening 3: Country quiz - alternatief met vlag.

Herwerk oefening 2 zodat een vlag wordt getoond ipv de naam van het land en maak dan een keuze uit 10 mogelijke landen.

Start:

![Quiz4.png](/docs/Quiz4.png)

Select List:

![Quiz5.png](/docs/Quiz5.png)

Drie vragen beantwoord:

![Quiz6.png](/docs/Quiz6.png)
