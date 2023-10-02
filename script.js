/* toujours les liens entre les fichiers avant de commencer 
alert ('calculette pour débutant') */


/* DE */
function deleteLastCharacter() {
    var currentValue = document.calculatorForm.display.value;
    /*methode slice pour découper/retirer la dernière valeur afiichée */
    document.calculatorForm.display.value = currentValue.slice(0, -1);
}

/* AC */
function clearDisplay() {
    document.calculatorForm.display.value = '';
}

/* ajouter une valeur à input dans le formulaire calculatorForm */
function appendToDisplay(value) {
    document.calculatorForm.display.value += value;
}

/* try...catch pour évaluer une expression mathématique 
try = instruction -> bloc de code à exécuter
catch = instruction -> bloc de code pour gérer une erreur. */

function calculate() {
    try {
        /*eval(): prend une chaîne de caractères en tant qu'argument
         et l'évalue comme une expression mathématique valide  */
        var result = eval(document.calculatorForm.display.value);
        document.calculatorForm.display.value = result;
        
        /* Pour afficher une erreur: catch*/
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}