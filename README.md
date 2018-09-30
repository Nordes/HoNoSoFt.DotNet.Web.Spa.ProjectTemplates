# Base VueJs UX w/ Picnic CSS
Idea is to have the minimum as possible in order to have .Net Core 2.1 with Picnic CSS. There's already an another project using Bootstrap 4+, however, I would like to have something lighter as a template.

This is wanted to be a SPA. It can however be modified as you please.

## Installation
Add the templates within your `dotnet new -l` list.

```bash
> dotnet new -i GarciaSoftware.ConsoleTemplate.CSharp
```

Then to create your project afterwards you will simply type:

```bash
> dotnet new vuejs-picnic
```

## What's inside
- [x] Picnic CSS (https://picnicss.com/)
- [x] SASS, for style in a more elegant way
- [x] VueJs (To build the components/UI)
- [x] Vue-Router (For the SPA)
- [x] WebPack (To pack/hot-reload)
- [x] Babel
- [x] Environments
  - [x] Development
  - [] Production
- [] **In progress** Implement the default page style
  - [] **In progress** Set the nav menu
- [] Add some api calls for the .Net WebApi stuff.
  - [] Create a real endpoint with some kind of values. (Like get employees)
  - [] Use of a csv or LocalDb database or similar? (why not...)
- [x] Rename the folder/app to some sort of template name.
- [] Make a reload/production build
- [x] Put this on github
- [] Automate the build / CI
- [] Add ts/x support (See example: https://github.com/aspnet/JavaScriptServices/blob/master/samples/misc/Webpack/webpack.config.js)
- [] Add tslint/jslint
- [x] Change the folder structure to look like a template for visual studio.
  - [x] Add the template in the nuget gallery
  - [] Add the template in the visual studio gallery (vsix?)
- [X] Add a favicon
- [X] Add the picnic css library part of vue
- [X] Compile the picnic css (SASS) with some custom alteration (file).
  - [X] Use of the min css instead for now. I don't think we need to use the sass.
- [] Promote the stuff... who knows ;)
- [] Add VueX for state management
- [] Add some badges

> JQuery is not part of this, we want to avoid such a big library. I think most of the work can be done without it.

## Stats
- Once compiled: ?

### Page filling
- Keep register/login for the last part.

## Idea of improvement
- Make a template with authentication
  - Make it with authentication? (Google?/O365?)
- Create a template for SignalR integration (Should I)
- Extra reading (template) : https://docs.microsoft.com/en-us/dotnet/core/tutorials/create-custom-template

## About the author
My name is Nordès Ménard-Lamarre, you can find more details on me over my [blog](https://blog.honosoft.com) (FR) or over [HoNoSoFt site](https://www.honosoft.com).

## License
![License MIT](https://img.shields.io/github/license/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)