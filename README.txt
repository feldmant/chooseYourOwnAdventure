# ChooseYourOwnAdventure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Running the Code

`npm install`
`ng build --prod`
`ng serve --open`

## Project Overview

This is a choose your own adventure game where the object of the game is to solve climate change. Your progress through the game is kept by the thermometer on the right hand side. A temperature of 3.0F or above will lead you to the losing state of the game. A temperature of 1.0F or below will lead you to the winning state of the game. At each step of the game you are given a prompt and three choices to respond to it. Depending on your choice of action the temperature may move up or down or not at all. 

## Use of Features Covered

- HTML5 SVG: The dynamic thermometer graphic is an SVG that changes in response to the current temperature. The graphics for the start page, including the name dynamically written on the cape are SVG graphics. Finally the graphics for the end states of the game are SVGs as well.

- Local Storage: On every visit to the `/setup` route the current plot id as well as the current temperature is saved in local storage. If a player leaves and comes back to the site they are given the option to resume their game, if they chose to do so they are taken to their saved plot id and the temperature is set to the saved temperature. In addition if a player enters their name and then starts a new game that name is saved in local storage so that if they are to return to the site or start their game over it will automatically populate the name field as well as the cape with their name.

- Angular: This application is written in Angular 

- Services: The data structure that holds all of the possible prompts, actions, and resolutions is provided by a service. Two custom classes are also defined `plot` and `action` to create the data structure. In addition the temperature is set and updated using a service.

- Observables: The temperature-service creates an observable Subject that the thermometer component subscribes to and updates the view based on receiving updates from that Subject.

- Routing: This app is made with Angular routing. The `/setup` route takes an argument of `/:id` for which plot id is currently being rendered. The `/resolution` route takes an argument of what plot id the player is currently on as well as which lettered action they chose (a, b, or c). There are also routes for the start page and both end states of the game.

## Code Organization

```
|
-src
	|
	-app
		|
		-components
			| 
			-fiery-death
				holds files for the losing end game state
			-happily-ever-after
				holds files for the winning end game state
			-resolution
				holds files for the resolution page, describes to the player the outcome of the action they chose
			-setup
				holds the files for the setup page, gives the player the current prompt and their choices of actions
			-start
				holds the files for the start page of the game
			-thermometer
				holds the files for the thermometer
		-model
			actions-provider.service
				provides the overall plot data structure, individual plot objects, or individual action objects
			actions.ts
				defines the action class
			plot.ts 
				defines the plot class
			start-data.ts
				holds the data for all plot points and action items
		-services
			temperature-service
				sets and updates the temperature, pushes values to the Subject observable
	-assets
		all static images used in this site
```
