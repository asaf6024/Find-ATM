
## Weather Forecast 

[Live Demo](https://find-atm-asaf.netlify.app/)

A simple React app that displays a google map with markers of a chosen city from several API sources:

- **react-places-autocomplete**: location autocomplete
- **Geocoding API**
- **data.gov.il**: ATMs

![Home Page](https://github.com/asaf6024/Find-ATM/blob/master/public/images/findMyAtm.JPG)


## Getting started

Sign up and get to following API key:
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)

Fork the project and clone it locally.<br />
Create a file at the root of the project called `.env` with the following contents:

```sh
REACT_APP_API_KEY = 'The API key you obtained from Geocoding API'
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
