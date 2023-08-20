# Game Players
Module for GET and POST data from\to users.db.

## Endpoints design concept
GET /player return all players from db as JSON.<br>
POST /player add new player into sql users.db.

## UI representation
Main page localhost:8080 return html page with form.<br>
There is possibility to add new player using this form.

## Prerequsisites
node v16.20.0 or higher

## Usage
#### Install Dependencies
npm i

#### Run server
npm start

#### Retrieving or sending data
Use postman or something like this to GET data using http://localhost:8080/player.

Use postman or something like this to POST data using http://localhost:8080/player using object in body e.g. <br>
{<br>
  "login": "Jude",<br>
  "password": "somepass",<br>
  "balance": {<br>
    "level": 7,<br>
    "currencyBalance": 100.5<br>
  },<br>
  "countryCode": "EU"<br>
}<br>

Also, http://localhost:8080 can be opened in browser.<br> 
Fill in all inputs and click Submit button for sending data on the server.

# Run tests
npm test