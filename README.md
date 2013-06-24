## Basics
This project works with the MoovSDK.

See detailed documentation for the MoovSDK at http://beta.moovweb.com

## Domains
Remember to put all domains you're going to hit in your etc/hosts
or to run your server with the `-auto-hosts=true` option.

    127.0.0.1   mlocal.igadgetcommerce.com

## Tutorial

This project illustrates how to link to a microsite from the mobile site. The microsite keeps the look and feel of the mobile site you set up, but has content only linked to on mobile.

### MicroSite

Firstly, you must set up your webapp. We used [Parse](http://parse.com) to set up a simple survey site, which can be seen [here](http://simplesurvey.parseapp.com). The survey asks the user to upload a photo, then give feedback on some products. In return, the user gets a promotional code.

Parse has [some great tutorials](https://parse.com/docs/cloud_code_guide) to help you get started. Once your microapp is up and running, you can begin to integrate it with your Moovweb project. Follow these steps:

1. Sign up for Parse
2. Create a project or [clone Sean's project](https://github.com/sjezewski/micropromo)
3. Push a project live
4. Get the domain
5. Use the domain in your Tritium project

### Link

While running the project, you can see the mobile-only promo is linked to from the menu button in the header. The link is added in the *header.ts* file, at the bottom:

    insert_before("li") {
      insert_top("a", "Promo", href: magic_passthrough("/"))
    }   

The href value uses a special function written for this project. There are alternative ways to link to the microapp, which will be discussed next.

### Redirecting to the Microsite

There are a few options to redirect users from the mobile site to the web app you just set up:

- [Set up a new subdomain using Moovweb](#Subdomain)
- [Use a unique path](#Unique+Path) - **seen in this demo**

#### Subdomain

Our webapp is hosted on [simplesurvey.parseapp.com](http://simplesurvey.parseapp.com/). In the config.json file of your project, you can set up so that a subdomain of the site pulls information from this external site.

    "$.survey.igadgetcommerce.com => simplesurvey.parseapp.com"

The link to the survey on your site should point to "m.survey.igadgetcommerce.com". The user will then complete the survey at the subdomain before being redirected back to the regular domain of the site.

In order for this method to work, you would need to add an extra DNS entry for this subdomain when setting up the site.

#### Unique Path

If you do not want to set up a unique subdomain for the survey, you can match a unique path and have that request the survey. This is the method used in the current project. The "Promo" link points to a URL with `__promo__` in the path.

Via the `request_main.ts` file in the project, the header is changed from the regular URL with the `__promo__` path to the simple survey URL. When the request is made upstream, this is the content that is returned.

### Styling

Obviously, the main page of the survey isn't styled. The page can be transformed and styled using Tritium and Sass much like [any other Moovweb project](https://console.moovweb.com/learn/tutorials/building_a_site/project_structure). Generate a new .ts file and stylesheet for each page, then map the pages based on their paths and import appropriate Tritium scripts.

