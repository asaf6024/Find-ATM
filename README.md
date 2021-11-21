
# Find my ATM

## [Live Demo](https://find-atm-asaf.netlify.app/)

A simple React app that displays a Map included ATMs markers of a chosen city.

Using several API sources:

- **react-places-autocomplete**
- **Geocoding API**
- **data.gov.il**: ATMs

![findATM](https://user-images.githubusercontent.com/33829557/142764641-cad3c999-1fa3-4581-91e6-93b91276f01b.gif)

## Getting started

Sign up and get to following API key:
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)

Fork the project and clone it locally.<br />
Create a file at the root of the project called `.env` with the following contents:

```sh
REACT_APP_GOOGLE_KEY = 'The API key you obtained from Geocoding API'
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Press ![](https://github.com/asaf6024/Find-ATM/blob/master/public/images/windows.JPG)
 + 
 ![](https://github.com/asaf6024/Find-ATM/blob/master/public/images/r_letter.JPG)
 and paste:
```sh
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```
Click Enter and Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
