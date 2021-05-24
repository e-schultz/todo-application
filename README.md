# Tech Stack 👨‍💻

| Frontend    | Backend  |
| ----------- | -------- |
| React       | Firebase |
| Redux       |
| CSS Modules |
| Material UI |

# Demo 📺

- [Todo-App](https://www.loom.com/share/78a871ba135a409c8c1ce32db0dd51df)

# Currently supported feature set ✅

- Add a new item
- Toggle an item as completed / still in-progress

# Motivation 🤔

Todo app exists to ease your daily tasks that anyone can use.
For a good over view of the motivations of the project you can take a look
at these external resources:

- 📖 [Redux](https://redux-toolkit.js.org/)
- 📖 [Firebase](https://firebase.google.com/docs)
- 📖 [Material-ui](https://material-ui.com/)

# Documentation 📖

## About 👋

1. Get started

   - Use `git clone` to clone the project on your machine.

   - Open a terminal:

     > Make sure you are on the same directory you cloned the project at

   - Use `npm install` to to install all the dependencies.

     > In case of any errors please make sure to run the following command in order

     ```
     npm update
     npm install
     ```

2. Backend service

   - [Create firestore](https://firebase.google.com/docs/firestore?authuser=1)
   - Database structure should be like:

     ```javascript
     fbStructure = [
       {
         inProgress: boolean,
         todo: "string",
         timestamp: timestamp,
       },
     ];
     ```

   - Copy your auto generated SDK setup and configuration:

     ```javascript
     const firebaseConfig = {
       apiKey: "api key",
       authDomain: "authDomain",
       databaseURL: "db url",
       projectId: "prject-id",
       ...
     };
     ```

   - Carete a new `.env` in the project root directory **to make sure your credentials are secured**
   - Past the SDK config insdie the `.env`

3. Use `npm start` to start the project 🚀
