[![NuGet](https://img.shields.io/nuget/v/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)](https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/) 
![Github commits (since latest release)](https://img.shields.io/github/commits-since/nordes/honosoft.dotnet.web.spa.projecttemplates/1.1.0.svg)

# <img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/VueJs.Picnic.CSharp/ClientApp/static/images/logo.png" height="30" /> Dotnet Core 2.1 + VueJs + Picnic CSS

Idea is to have the minimum as possible in order to have .Net Core 2.1 with Picnic CSS. There's already an [another project using Bootstrap 4+](https://github.com/MarkPieszak/aspnetcore-Vue-starter), however, I would like to have something lighter as a template.

This is wanted to be simple a SPA with a minimum dependencies or performance issues. It can however be modified as you please.

# Table Of Contents
- [<img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/VueJs.Picnic.CSharp/ClientApp/static/images/logo.png" height="30" /> Dotnet Core 2.1 + VueJs + Picnic CSS](#img-src%22httpsgithubcomnordeshonosoftdotnetwebspaprojecttemplatesrawmastervuejspicniccsharpclientappstaticimageslogopng%22-height%2230%22--dotnet-core-21--vuejs--picnic-css)
- [Table Of Contents](#table-of-contents)
  - [Technology inside](#technology-inside)
  - [Installation](#installation)
    - [Update your installation?](#update-your-installation)
    - [Uninstallation? Because it could happen](#uninstallation-because-it-could-happen)
  - [Some Automation](#some-automation)
    - [Kestrel serving using Gzip compression](#kestrel-serving-using-gzip-compression)
    - [Base components](#base-components)
    - [Webpack build](#webpack-build)
    - [Webpack hot-reload](#webpack-hot-reload)
    - [Vuex](#vuex)
  - [Look'n feel](#lookn-feel)
    - [Responsive design](#responsive-design)
    - [Responsive menu](#responsive-menu)
  - [Stats](#stats)
  - [More information about what's inside or how it works?](#more-information-about-whats-inside-or-how-it-works)
  - [About the author](#about-the-author)
  - [License](#license)

## Technology inside
| Tech | Tech | Tech |
|:----:|:----:|:----:|
| .Net Core 2.1 | VueJs | Webpack 4 |
| Picnic CSS | VueX | Babel |
| Fontello | Vue-Router |  |

## Installation
Add the templates within your `dotnet new -l` list.

```bash
> dotnet new -i HoNoSoFt.DotNet.Web.Spa.ProjectTemplates
```
> You are behind a corporate proxy and are having trouble due to the HTTPS issues? Not a problem, [download the NuGet package](https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/) from the official site. After you've completed the download, simply run the command `dotnet new -i ./path/to/your/file.nupkg`

Then to create your project afterwards you will simply type:

```bash
> dotnet new vuejs-picnic
```

### Update your installation?
Simply do like the previous step. As long as the version number are not equals, you won't have any unexpected behaviour.

### Uninstallation? Because it could happen

Type the following command from the shell:

```bash
> dotnet new -u HoNoSoFt.DotNet.Web.Spa.ProjectTemplates
```

## Some Automation

### Kestrel serving using Gzip compression
The code is having built-in the Gzip compression on the HTTPs. It's good to use that code especially if you use Kestrel. Otherwise, if you use IIS, please remove that specific code found in the `Startup.cs`. Normally, IIS offer it's own compression module which is more performant.

That being said, having it in Kestrel is still better than having nothing ;).

### Base components
As described within the Wiki, there's some automation regarding the `Components` available within _./ClientApp/Components/**/*_. All the file starting with the keyword `base` are going to be declared as global and the name of the component to be used anywhere will be defined in snake case without the `base` keyword.

Example: `baseHelloWorld` will be registered as `hello-world` and you are going to be able to use it in your Vue Template.

```html
<template>
  <div>
    <hello-world /> works!
  </div>
</template>
```

> **Tips:** There's a real example within the project for the title for each page. The name of the component is `basePageTitle.vue`.

### Webpack build
The css is not generated while you are in development mode. They are going to be created only when you will use the `dotnet publish` command or as an alternative, you can also go and type `npm run build -- --prod` which will launch the production build with the minification and extraction of the files. 

> **Important:** Currently, webpack clean the entire wwwroot folder within the .Net project. So, if you have static files, move them within the _./ClientApp/static/_ folder.

### Webpack hot-reload
When the .Net process is started, `dotnet run your app`, you will have to wait a little that the file are published in your `wwwroot` folder. After it is completed, you will be able to access your application at `https://localhost:5001`. Any modification made within the _ClientApp_ folder will trigger a live update within the browser. This is particularily useful.

### Vuex
Vuex, for the people who come from React, is the redux from VueJs. You have mutation, state management and much more. It is quite useful when you want to propagate your change or for example login auser and update the entire UX at once. The same goes for refreshing a token.

I don't think I should go more in depth on that topic. There is a sample in the counter page. Please go and look for yourself and then go on the [official site](https://vuex.vuejs.org) for more details and how to apply the best practices.

## Look'n feel
![Sample](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home.png "Sample")

### Responsive design
![Sample responsive](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-responsive.png "Sample responsive")

### Responsive menu
![Sample responsive menu](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-responsive-menu.png "Sample responsive menu")

## Stats

| File | Development | Production (with gzip) |
|---|---------------|------------|
| main.css | -- | 7.5 kb (contains `picnic.(s)css`) |
| main.js | tbd kb | 4.4 kb |
| vendors.js | tbd kb | 43.4 kb |

> Vendors files are the library from within nodejs we use (i.e.: VueJs and VueRouter just to name it)

## More information about what's inside or how it works?
The wiki is currently under construction. So please visit sometimes ;).

## About the author
My name is Nordès Ménard-Lamarre, you can find more details on me over my [blog](https://blog.honosoft.com) (FR) or over [HoNoSoFt site](https://www.honosoft.com).

## License
![License MIT](https://img.shields.io/github/license/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)
