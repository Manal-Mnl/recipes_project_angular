# Recipe-Book

## Overview
The Recipe Book is a web application built using Angular for the frontend client and Firebase as a complete backend solution. This documentation provides an overview of the project, its features, and key concepts used in its development.


[![Angular](https://img.shields.io/badge/Client%20-Angular-red?style=for-the-badge&logo=angular)](https://angular.io/)


<br />

## Contents

<br />

## Project Features
1. Authentication:
* Users can create accounts, log in, and log out securely.
* Authentication guards protect routes for authorized access only.
  
2. Recipe Management:
* Create, update, and delete recipes.
* Add ingredients to recipes.
* Display recipes with images and descriptions.


3. Shopping List:
* Add, update, and delete ingredients.
* Easily transfer ingredients from recipes to the shopping list.

4. Forms:
* Two types of forms:
  * Template-driven forms.
  * Reactive forms for advanced form handling.

 
<br />

## Angular Concepts
This project leverages various key Angular concepts:

* Angular Modules:
  * Modules are used to organize and encapsulate different parts of the application.

* NgModule:
  * The `@NgModule` decorator defines a module in Angular. It specifies what components, directives, and services belong to the module.

* Components:
  * Components are the building blocks of an Angular application, representing different parts of the user interface.

* Directives:
  * Directives modify the DOM's structure, appearance, or behavior. Examples include `ngFor` and `ngIf`.

* Services and Dependency Injection:
  * Services are used to encapsulate reusable logic or data.
  * Dependency Injection is a design pattern in Angular to provide dependencies to components and services.

* Data Binding:
  * Angular supports various types of data binding:
    * Event Binding.
    * Property Binding.
    * Two-Way Binding.

* String Interpolation:
  * String interpolation is used to display dynamic data in the template.

* HTTP in Angular:
  * Angular's `HttpClient` is used to make HTTP requests to the backend.
  * Firebase's REST API is used to interact with the backend.

* Resolver:
  * Route resolvers ensure that data is loaded before navigating to a route.

* RxJS Operators:
  * Operators like `map`, `switchMap`, and `catchError` are used to transform data and handle asynchronous operations.


* Observables and Promises:
  * Observables are used extensively to work with asynchronous data.
  * Promises are used for simpler asynchronous operations.

* Subjects:
  * Subjects are a type of observable used for multicasting.

* Authentication Guards:
  * Auth guards secure routes based on user authentication status.
 

<br />

## Project Setup
To run the project locally:
* Clone the repository.
```
npm install
ng serve
```
* Open the web application in your browser.

<br />

## Configure environment variables
```
export const environment = {
  production: true,
  firebaseAPIKey: your_firebase_APIKey,
};
```

<br />

## Steps to deploy an Angular application to Firebase Hosting:

* Install Firebase Tools:
  * Run `npm install -g firebase-tools` to install the Firebase CLI globally on your machine.

* Login to Firebase:
  * Use the command `firebase login` to log in to your Firebase account. This will open a browser window where you can authenticate.

* Initialize Firebase Project:
  * Navigate to your project's root directory in the terminal.
  * Run `firebase init` to start the Firebase initialization process.

* Configure Hosting:
  * Choose "Hosting" from the list of Firebase features by pressing the spacebar and then Enter.
  * Select an existing Firebase project or create a new one.
  * Set your public directory as `dist/your-project-name`. This is the directory where your built Angular app is located.

* Single-Page App Configuration:
  * Answer "Yes" to configuring the app as a single-page app. This ensures that all URLs are rewritten to `/index.html`, which is crucial for Angular's routing to work correctly.

* Overwrite index.html:
  * If Firebase asks whether to overwrite `dist/your-project-name/index.html`, choose "No" since you've likely already built your app.

* Build Your Angular App:
  * Before deploying, make sure to build your Angular app. You can do this using the Angular CLI: `ng build`.

* Deploy to Firebase:
  * Once your Angular app is built, deploy it to Firebase Hosting by running `firebase deploy`.

* Deployment Complete:
  * After a successful deployment, Firebase will provide you with a Hosting URL where your app is now live.

* Access Your App:
  * You can now access your Angular app on the provided Hosting URL, and it's ready for the world to see.
