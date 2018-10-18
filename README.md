[![NuGet](https://img.shields.io/nuget/v/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)](https://www.nuget.org/packages/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/) 
![Github commits (since latest release)](https://img.shields.io/github/commits-since/nordes/honosoft.dotnet.web.spa.projecttemplates/1.0.0.svg)

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

## Look'n feel
![Sample](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home.png "Sample")

### Responsive design
![Sample responsive](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-responsive.png "Sample responsive")

### Responsive menu
![Sample responsive menu](https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/raw/master/screenshot/screenshot-home-responsive.png "Sample responsive menu")

## Stats
_To be reviewed. The number are a bit higher but not that much._

|  | Development | Production |
|---|---------------|------------|
| main.css | -- | 0.6 kb |
| vendors.css | -- | 36.8 kb |
| main.js | 91 kb | 10.4 kb |
| vendors.js | 526 kb | 124 kb |

> Vendors files are the library from within nodejs we use (i.e.: VueJs and VueRouter just to name it)

## About the author
My name is Nordès Ménard-Lamarre, you can find more details on me over my [blog](https://blog.honosoft.com) (FR) or over [HoNoSoFt site](https://www.honosoft.com).

## License
![License MIT](https://img.shields.io/github/license/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates.svg)
