import { Plot } from './plot';

export const PLOTPOINTS: Plot[] = [ 
	{ 
		id: 1,
		setup: "So it's earth day, and you want to do something to help the environment. You look around the internet and you see some suggestions that you like. Which one do you choose?", 
		a: {
			action: "Plant a tree",
			resolution: "Tree are great, and they are great carbon sinks, but one tree just doesn't make much of a difference.",
			next: 2,
			tempDelta: 0.0
		},
		b: {
			action: "Vow never to use disposable coffee cups again, it's thermos or bust for you now",
			resolution: "Eventhough it feels like you create a lot of trash, there are 7.5 Billion people in the world. Now that's a lot of trash.",
			next: 2,
			tempDelta: 0.0
			},
		c: {
			action: "Pick up some trash in a local park",
			resolution: "Too small potatoes.",
			next: 2,
			tempDelta: 0.0
		}	
	},
	{ 
		id: 2,
		setup: "Alright, so maybe we're gonna have to think bigger.", 
		a: {
			action: "Plant 1,000,000 trees",
			resolution: "That's more like it!",
			next: 3,
			tempDelta: -0.2
		},
		b: {
			action: "Get rid of all single use plastic in the world",
			resolution: "Now we're getting somewhere",
			next: 3,
			tempDelta: -0.2
			},
		c: {
			action: "Divert all plastic and paper from waste streams into recycling",
			resolution: "Now you're getting the hang of it",
			next: 3,
			tempDelta: -0.2
		}	
	},
	{ 
		id: 3,
		setup: "Now that you've proven that you're serious about this, let's get down to business. The first question is, how are you going to go about it?", 
		a: {
			action: "Run for office",
			resolution: "Policians do have the power to change laws as well as minds, but during all that time you spent campaigning and working your way up to a seat in congress things kept progressing as usual. No major changes were made in that time, and the world has warmed 0.5 degrees",
			next: 4,
			tempDelta: 0.5
		},
		b: {
			action: "Stay in accademia",
			resolution: "Respectable choice, it takes a while for any of your research to make it to implementation, but if anyone is going to find the secret to carbon capture it's going to be in a lab.",
			next: 5,
			tempDelta: 0.0
			},
		c: {
			action: "Join the private sector",
			resolution: "The private sector does have the fastest route to impact, but let's be fair, it all depends on the money",
			next: 6,
			tempDelta: 0.0
		}	
	},
	{ 
		id: 4,
		setup: "It's time for your first big policy proposal", 
		a: {
			action: "Work across the aisle to get bipartisan support on a bill to research safer technologies for nuclear energy",
			resolution: "So close to solving it all, but no. Sorry. Nuclear has a bad reputation, and working on a bipartisan bill isn't as easy as it used to be.",
			next: 7,
			tempDelta: 0.1
		},
		b: {
			action: "Throw your support behind the New Green Deal",
			resolution: "Great! There are a lot of good ideas in there. However, it can't seem to pass a vote. Unfortunately many of it's greatest supporters are unwilling to compromise with Hawaii and Alaska on airplane travel or with the midwest on the role of Corn Ethanol.",
			next: 7,
			tempDelta: 0.1
			},
		c: {
			action: "Start out with something relatively non-controversial, sponsor a budget amendment allocating funds to energy storage research",
			resolution: "Congratulations, it passed!",
			next: 7,
			tempDelta: -0.2
		}	
	},
		{ 
		id: 7,
		setup: "You're learning quickly how frustraing it is to get anything done in Congress, it takes forever to get anything done. What will you do to get things moving?", 
		a: {
			action: "Give a speech at the United Nations, maybe appealing to a bigger audience will help",
			resolution: "Video of your speech goes viral online. The UN passes a joint resolution stating that it is a state of emergency for Climate Change. Unfortunately the UN has no ability to enforce any action of any kind and it has no effect.",
			next: 8,
			tempDelta: 0.2
		},
		b: {
			action: "Keep pushing your agenda, sometimes hard things take perserverance",
			resolution: "You're right, hard things take time. Unfortunately, we don't have a lot of time. Each year you slog through policy debates the earth warms a little bit mroe",
			next: 8,
			tempDelta: 0.3
			},
		c: {
			action: "Nevermind, let's head to the private sector",
			resolution: "Okay, you finish out your term in Congress and make the transition to the private sector.",
			next: 6,
			tempDelta: 0.1
		}	
	},
	{ 
		id: 8,
		setup: "Uh oh, there has been a natural disaster that creates unsafe conditions at a nuclear facility. Only one person is killed, but the incident spreads a fear of nuclear energy. What will you do?", 
		a: {
			action: "Scrap all plans for new nuclear facilities and retire the old ones. They're too dangerous to continue operating.",
			resolution: "Without the stable carbon free electricity that comes from nuclear power, the grid compensates with more coal. Polluion skyrockets. Greenhouse gasses increase.",
			next: 8,
			tempDelta: 2.0
		},
		b: {
			action: "Nothing, this is a minor incident",
			resolution: "You're voted out of office for being complacent.",
			next: 6,
			tempDelta: 0.1
			},
		c: {
			action: "Double down on your plan to launch new, safe nuclear energy plants. One death is nothing compared to the planet being at stake.",
			resolution: "Scientists cracked the code to infinite clean energy in the 50s, and now thanks to you it is a reality!",
			next: 8,
			tempDelta: -2.0
		}	
	},
	{ 
		id: 5,
		setup: "Ok, so what are you going to research?", 
		a: {
			action: "Carbon capture and storage",
			resolution: "Cool! It will eventually work but in the time it takes to figure it out, the temperatures rises.",
			next: 9,
			tempDelta: 1.0
		},
		b: {
			action: "Energy storage",
			resolution: "There are a lot of new ideas for batteries, some of them even work! It takes a while, but eventually you hit on a good one.",
			next: 9,
			tempDelta: 0.5
			},
		c: {
			action: "Nevermind, let's head to the private sector",
			resolution: "Seems worth a shot",
			next: 6,
			tempDelta: 0.1
		}	
	},
	{ 
		id: 9,
		setup: "So you did some research and you published your findings too much acclaim. What's next?", 
		a: {
			action: "New research topic",
			resolution: "Here we go again",
			next: 5,
			tempDelta: 0.0
		},
		b: {
			action: "Let's take it to market!",
			resolution: "You found a startup company with your new technology. It takes a while but eventually you manage to get some investors.",
			next: 9,
			tempDelta: 0.1
			},
		c: {
			action: "Nevermind, let's head to the private sector",
			resolution: "Seems worth a shot",
			next: 6,
			tempDelta: 0.1
		}	
	},
	{ 
		id: 6,
		setup: "Welcome to the private sector where things move fast but only in the direction of money. How will you make yours?", 
		a: {
			action: "Invest in wind farms",
			resolution: "The wind farms do well for you and for the environment.",
			next: 10,
			tempDelta: -0.5
		},
		b: {
			action: "Invest in cryptocurency",
			resolution: "The added pressure on the grid cause by tens of thousands of computers running bitcoin mining algorithms causes the oil burning peaking plants to come online.",
			next: 10,
			tempDelta: 2.0
		},
		c: {
			action: "Invest in an electric car company",
			resolution: "The electric cars do well, you make millions. Unfortunately the electricity they run on is still generated by coal, so it doesn't so much good.",
			next: 10,
			tempDelta: 0.3
		}	
	},
	{ 
		id: 10,
		setup: "So you've made yourself a nice pile of money, what will you do with it?", 
		a: {
			action: "Invest in wind farms",
			resolution: "The wind farms do well for you and for the environment.",
			next: 10,
			tempDelta: -0.5
		},
		b: {
			action: "Invest in anerobic digesters to turn trash into fuel",
			resolution: "The world has more trash than it knows what to do with, good thing you have a solution. Anerobic digesters take in trash and with the help of chemical processes break it down into ethanol which can be used as fuel.",
			next: 10,
			tempDelta: -0.5
		},
		c: {
			action: "Fund your own campaign and run for office",
			resolution: "Policians do have the power to change laws as well as minds, but during all that time you spent campaigning and working your way up to a seat in congress things kept progressing as usual. No major changes were made in that time, and the world has warmed 0.5 degrees",
			next: 4,
			tempDelta: 0.5
		}	
	}
		
]