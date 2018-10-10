[![NuGet](https://img.shields.io/nuget/v/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)](https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/) 
![Github commits (since latest release)](https://img.shields.io/github/commits-since/nordes/honosoft.dotnet.web.spa.projecttemplates/0.9.0.svg)

# Dotnet Core 2.1 + VueJs + Picnic CSS
Idea is to have the minimum as possible in order to have .Net Core 2.1 with Picnic CSS. There's already an [another project using Bootstrap 4+](https://github.com/MarkPieszak/aspnetcore-Vue-starter), however, I would like to have something lighter as a template.

This is wanted to be simple a SPA with a minimum dependencies or performance issues. It can however be modified as you please.

## Installation
Add the templates within your `dotnet new -l` list.

```bash
> dotnet new -i HoNoSoFt.DotNet.Web.Spa.ProjectTemplates
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
  - [x] Production
- [x] WebPack / Add a better management of external js/css as a plugins.....js
- [x] Implement the default page style
  - [x] Set the nav menu
  - [o] Put some content in the pages + about the template and what it contains
- [o] Add some api calls for the .Net WebApi stuff.
  - [o] Create a real endpoint with some kind of values. (Like the aspnet demo)
- [x] Rename the folder/app to some sort of template name.
- [x] Make a reload/production build
- [o] Add logo within the template (I think it is feasible, see ms doc).
- [x] Put this on github
- [o] Automate the build / CI
- [o] Add ts/x support (See example: https://github.com/aspnet/JavaScriptServices/blob/master/samples/misc/Webpack/webpack.config.js)
- [o] Add tslint/jslint
- [x] Change the folder structure to look like a template for visual studio.
  - [x] Add the template in the nuget gallery
  - [o] Add the template in the visual studio gallery (vsix?) ( maybe do https://docs.microsoft.com/en-us/visualstudio/misc/how-to-manually-package-an-extension-vsix-deployment?view=vs-2015 )
- [X] Add a favicon
- [X] Add the picnic css library part of vue
- [X] Compile the picnic css (SASS) with some custom alteration (file).
  - [X] Use of the min css instead for now. I don't think we need to use the sass.
- [o] Promote the stuff... who knows ;)
- [o] Add VueX for state management
- [o] Add some badges

> JQuery is not part of this, we want to avoid such a big library. I think most of the work can be done without it.

## Stats
- Once compiled: ?

|  | Development | Production |
|---|---------------|------------|
| site.css | ? kb | ? kb |
| vendors.css | ? kb | ? kb |
| site.js | ? kb | ? kb |
| vendors.js | ? kb | ? kb |

> Vendors files are the library from within nodejs we use (i.e.: VueJs and VueRouter just to name it)

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
