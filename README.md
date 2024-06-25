# react-auth-express

Esercizio di oggi: react-auth-express
## Esercizio
Partendo dall’esercizio precedente terminiamo il sistema di autenticazione utilizzando le API che abbiamo sviluppato durante il modulo express 

Ecco le principali funzionalità che ci aspettiamo:
- L’utente, tramite un form in una pagina, deve poter effettuare il login all’area amministrativa
  - In caso di errore, mostriamo il messaggio di errore ricevuto dal backend
  - In caso di successo, reindirizziamo l’utente alla dashboard
- L’utente autenticato deve poter aggiungere, modificare o cancellare gli articoli del blog
- L’utente autenticato deve poter effettuare il logout.

**N.B** come al solito, lo stile non è importante!
## BONUS:
- Gestire la pagina 404, anche per la pagina del singolo articolo :linguaccia_occhi_chiusi:
- Distinguere tra le pagine che possono accedere tutti gli utenti e quelle che possono accedere solo gli utenti di tipo "admin"