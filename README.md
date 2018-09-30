# Base VueJs UX w/ Picnic CSS
Idea is to have the minimum as possible in order to have .Net Core 2.1 with Picnic CSS. There's already an another project using Bootstrap 4+, however, I would like to have something lighter as a template.

This is wanted to be a SPA. It can however be modified as you please.

## Installation
`> dotnet new -i GarciaSoftware.ConsoleTemplate.CSharp`

## Available
- Picnic CSS (https://picnicss.com/)
- SASS, for style in a more elegant way
- VueJs (To build the components/UI)
- Vue-Router (For the SPA)
- WebPack (To pack)
- Babel (To transpile)

> JQuery is not part of this, we want to avoid such a big library. I think most of the work can be done without it.

## Stats
- Once compiled:

## Todo
- **In progress** Implement the default page style
  - **In progress** Set the nav menu
- Add some api calls for the .Net WebApi stuff.
  - Create a real endpoint with some kind of values. (Like get employees)
  - Use of a csv or LocalDb database or similar? (why not...)
- Rename the folder/app to some sort of template name.
- Make a reload/production build
- Put this on github
- Automate the build / CI
- Add ts/x support (See example: https://github.com/aspnet/JavaScriptServices/blob/master/samples/misc/Webpack/webpack.config.js)
- Add tslint/jslint
- Change the folder structure to look like a template for visual studio.
  - Add the template in the visual studio gallery ?
- Promote the stuff... who knows ;)
- [X] Add a favicon
- [X] Add the picnic css library part of vue
- [X] Compile the picnic css (SASS) with some custom alteration (file).
  - [X] Use of the min css instead for now. I don't think we need to use the sass.


### Page filling
- Keep register/login for the last part.

## Idea of improvement
- Possibility to use injected title?
- Make it with authentication? (Google?/O365?)
  - Add VueX for login state
- Add a possibility of having SignalR (Optionized possibility with template?)

- Extra reading (template) : https://docs.microsoft.com/en-us/dotnet/core/tutorials/create-custom-template
