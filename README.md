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