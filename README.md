
# Weatherlly
Weather forecast application, built with TypeScript and ReactJs. [Weatherlly](https://chandonn.github.io/weatherlly/)

## Running the application locally

- Copy the link under the "code" button

- Open the terminal

- Type `git clone ${link}` (this assumes you have git installed locally)

- Type `cd weatherly` to enter the project folder

- Run `npm install` to get the dependencies

- Run `npm start` to run the project, once the installation finishes

## Publically available application

Head to [Weatherlly](https://chandonn.github.io/weatherlly/) to see the live project

## Project decisions

### Architecture

- Clean architecture: Organizing the project contents, components, and files, makes it easier to find anything and extend the project.

- Flux architecture for state management: Because it makes the project more scalable and maintainable.

### State management

- Context API with flux architecture: Normally ReduxJs would be used, but since it's intended to be a small project, it was decided to use the ContextAPI with a good structure as the flux provides.

### The weather API

- [Open Meteo API](https://open-meteo.com/en/docs) is used to get weather data and geolocation data. It was chosen due to its free and open-source nature

### Libraries

- [Font Awesome](https://fontawesome.com/)
- [Weather Icons React](https://najens.github.io/weather-icons-react/)
- [GitHub Pages](https://www.npmjs.com/package/gh-pages)
- [React Spring](https://www.npmjs.com/package/react-spring)

### UI
- Font: [Roboto](https://fonts.google.com/specimen/Roboto)
- Images: [Unsplash](https://unsplash.com/)
- Animations: [React Spring](https://www.npmjs.com/package/react-spring)

The UI design was built using a simple and clean design. Combining elements such as thin fonts for texts and translucent containers. That enhances the experience when using the application, which showcases beautiful background images, catching users' attention, while presenting the most important pieces of information at the top of the screen.