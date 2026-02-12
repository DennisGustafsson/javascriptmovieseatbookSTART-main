# Movie Seat Booking

En enkel webbapp for att boka bioplatser. Val platser, se totalpris och spara valet lokalt.

## Funktioner
- Val av film och platser
- Dynamisk prisberakning
- Spara/återläs val med lokal lagring

## Kom igang
1. Installera beroenden: `npm install`
2. Starta utvecklingsserver: `npm run dev`

## Filer
- [index.html](index.html)
- [style.css](style.css)
- [script.js](script.js)

## Data
- [movie.json](movie.json)
- [db.json](db.json)




## Loggbok

### Dag 1 - Grundstruktur och layout
- Skapade grundlaggande HTML-struktur för salong och val av film.
- Satte upp grundstil i CSS för salong, rader och stolar.

### Dag 2 - Funktionalitet och interaktion
- Implementerade klickbara platser med vald/ej vald status.
- Kopplade filmval till biljettpris och totalberäkning.
- Visade antal valda platser och totalpris i realtid.

### Dag 3 - Data och sparning
- Lade till lokal lagring för valda platser och filmval.
- Återläst sparade val vid sidladdning.
- Kontrollerade att UI och data synkar efter uppdatering.