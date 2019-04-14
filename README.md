[![NuGet](https://img.shields.io/nuget/v/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)](https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/) 
[![Build status](https://ci.appveyor.com/api/projects/status/okfn33vwyff1xb3h/branch/master?svg=true)](https://ci.appveyor.com/project/Nordes/honosoft-dotnet-web-spa-projecttemplates/branch/master)

# <img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/VueJs.Picnic.CSharp/ClientApp/static/images/logo.png" height="30" /> Dotnet Core 2.2 + VueJs + Picnic CSS

Idea is to have the small, but really versatile and responsive UI using .Net Core 2.2, VueJS and Picnic CSS. The API's are easy to manage using .Net Core WebAPI classes. If you prefer to use Bootstrap and a different, but quite similar template, there's already [another project](https://github.com/MarkPieszak/aspnetcore-Vue-starter). This template have been created from scratch using some bit of code I've commited in the other project.

This is wanted to be simple a SPA with a minimum dependencies or performance issues. It can however be modified as you please. The VueJs is configured with Vuex, but this can be removed if you don't feel it meets your requirement. The same goes for the CSS framework.

# Table Of Contents
- [<img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/VueJs.Picnic.CSharp/ClientApp/static/images/logo.png" height="30" /> Dotnet Core 2.2 + VueJs + Picnic CSS](#img-src%22httpsgithubcomnordeshonosoftdotnetwebspaprojecttemplatesrawmastervuejspicniccsharpclientappstaticimageslogopng%22-height%2230%22--dotnet-core-22--vuejs--picnic-css)
- [Table Of Contents](#table-of-contents)
  - [Release](#release)
  - [Technology inside](#technology-inside)
    - [Template: vuejs-picnic](#template-vuejs-picnic)
    - [Template: vuejs-picnic-table](#template-vuejs-picnic-table)
  - [Installation](#installation)
    - [Update your installation?](#update-your-installation)
    - [Uninstallation? Because it could happen](#uninstallation-because-it-could-happen)
  - [Publishing your application](#publishing-your-application)
    - [Before publishing](#before-publishing)
    - [Publishing](#publishing)
    - [Extra if you use NginX](#extra-if-you-use-nginx)
  - [Docker](#docker)
    - [Docker - Build yourself](#docker---build-yourself)
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

## Release
Please see [release notes](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/wiki/Release-Notes). I am trying to keep it updated.

## Technology inside
### Template: vuejs-picnic
| Tech | Tech | Tech |
|:----:|:----:|:----:|
| .Net Core 2.2 | VueJs | Webpack 4 |
| Picnic CSS | VueX | Babel |
| Fontello | Vue-Router | Eslint (standard+vuejs-recommended) |

**Sample website:** [https://vue-picnic.azurewebsites.net/](https://vue-picnic.azurewebsites.net/)

### Template: vuejs-picnic-table
| Tech | Tech | Tech |
|:----:|:----:|:----:|
| .Net Core 2.2 | VueJs | Webpack 4 |
| Picnic CSS | VueX | Babel |
| Fontello | Vue-Router | Eslint (standard+vuejs-recommended) |
| **Vue-i18n** | **Swagger** | **Vee-validate** |

**Sample website:** [https://vue-picnic-table.azurewebsites.net/](https://vue-picnic-table.azurewebsites.net/)

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

## Publishing your application
### Before publishing
You need to ensure that your wwwroot is empty before starting the process.

### Publishing
Simply use the normal way of publishing using DotNet Core CLI

```bash
> dotnet publish your.project.csproj -c release -o ./publish/
```

You can also add all the other parameter from the dotnet cli. Please [visit the MSDN site](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish?tabs=netcore21) to know more about it.
This will do a rebuild of your project and then after it will use the special target to rebuild your client (vuejs) in production mode.

### Extra if you use NginX
You might need to have more configuration in case of publishing behing a NginX server. Let's say you have your base site `http://www.example.com` and that in your NginX configuration you would like to have your dotnet app within `http://www.example.com/myApp`. You will need in such a scenario to set the base uri for the index.html. Instead of doing that manually between development and production, you have the file `./build/base.prod.config.js` which contains a possible override.

Simply set your override like the following:

```javascript
module.exports = {
  baseUriPath: '/myApp/'
}
```

When you will publish next time, the path will then be taken into account and it will sets automatically the base uri path.

## Docker
The project already add some docker container available through the Docker Hub. You can pull the image if you want. It will make the sample available locally. The image is using the Alpine version so it only use a small footprint.

* [vuejs-picnic](https://hub.docker.com/r/honosoft/vuejs-picnic/)
* [vuejs-picnictable](https://hub.docker.com/r/honosoft/vuejs-picnictable/)

### Docker - Build yourself
Since containers in docker are quite popular, a `Dockerfile` is also included within the template root folder. The help in order to build the template is also within that file. Don't forget the `.dockerignore` where some files are being ignored in order to avoid some unwanted file to be copied before publishing.

> Ensure that you have Docker installed :)

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
<img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home.png" height="300px" style="border: 1px #666 solid" />

<img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-menu-collapsed.png" height="200px" style="border: 1px #666 solid" />

### Responsive design
<img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-responsive.png" height="300px" style="border: 1px #666 solid" />

### Responsive menu
<img src="https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-responsive-menu.png" height="300px" style="border: 1px #666 solid" />

## Stats
App Size is really small, the latest version of the template can be seen on Azure, I think it reflects better than the previous table:
* [VueJs-Picnic template](https://vue-picnic.azurewebsites.net/)
* [VueJs-PicnicTable template](https://vue-picnic-table.azurewebsites.net/)

The reason why the table is a bit bigger, is because there's 1 more page and then a few extra components within the template (such as Vee-validate, I18n, etc.).

## More information about what's inside or how it works?
The wiki is currently under construction. So please visit sometimes ;).

## About the author
My name is Nordès Ménard-Lamarre, you can find more details on me over my [blog](https://blog.honosoft.com) (FR) or over [HoNoSoFt site](https://www.honosoft.com).

## License
![License MIT](https://img.shields.io/github/license/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)
