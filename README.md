Page: [Star Wars Gallery](https://daluvi.github.io/ERswapiGallery/)

The example project was built with React, Redux, and React-router.
(The router was built with hashRouter because the post to the Git page doesn't have a server to resolve with BrowserRouter.)

It uses the Parcel build tool to develop something faster and more conveniently. This build tool is simpler than Webpack and has the same difficulty as Vite. It's just a choice.

The project is a set of pages that list cards for characters, movies, species, spaceships, and vehicles, which is information about the Star Wars movie.

It has a serverworker that gets the response from the [SWAPI API](https://swapi.dev/) and images from [Starwars-Visualguide](https://starwars-visualguide.com/), which this project uses. It's part of the SPA to create a PWA. which the user can install as an app on mobile or desktop.
 
It has a home page that has cards with links to the pages, this leads to the page that lists the cards. Also, we can navigate through the pages via links in the header. 

Each page has your pagination, the cards have a flip to show more info about the info which show.

Also, the project has a combo to select a different theme related to the color of the sable. That is in the header

