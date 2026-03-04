# Tally Counter REST API & Logging

Tämä projekti sisältää kaksi tehtävää: Winston-lokituksen toteutuksen ja Express-pohjaisen laskuri-rajapinnan.

## Käytetyt versiot

- Node.js: 18
- Express: 4.18.2
- Winston: 3.11.0
- Mocha & Chai (testaukseen)

## Asennus

1. `npm install`

## Käyttö

- Käynnistä palvelin: `node src/main.js`
- Aja testit: `npx mocha src/test.js`

## Rajapinnat (Endpoints)

- `GET /counter-increase` : Kasvattaa laskuria ja lokittaa tapahtuman.
- `GET /counter-read` : Palauttaa laskurin nykyisen arvon.
- `GET /counter-reset` : Nollaa laskurin.

## Lokitus

- Lokit tallentuvat `logs/`-kansioon:
  - `combined.log` (kaikki tapahtumat)
  - `error.log` (vain virheet)
