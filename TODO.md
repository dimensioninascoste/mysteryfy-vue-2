LOGIN procedura
- utilizziamo un token: significa che:
a) l'utente si autentica con Apple/Google che inviano al client un token di autenticazione
b) il token di autenticazione viene spedito a al server gta.myasteryfy.com per un controllo di verifica sulla correttezza del token
c) gta.mysteryfy.com risponde con esito positivo/negativo inviando la risposta al client

Ad autenticazione avvenuta, il token viene inserito in un header:
    Authorization: Google <token>
    Authorization: Apple <token>

Quindi per verificare il login devo processare la risposta del server

