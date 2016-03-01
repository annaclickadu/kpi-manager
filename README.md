# kpi-manager

An opinionated kickstarter for [AngularJS](http://angularjs.org) projects.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git:git@github.com:annaclickadu/kpi-manager.git
$ npm install
$ bower install
$ grunt watch
```

Finally, open `file:///path/to/kpi-manager/build/index.html` in your browser.

Happy hacking!


## Learn

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
kpi-manager/
  |- grunt-tasks/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |- vendor/
  |  |- angular-bootstrap/
  |  |- bootstrap/
  |  |- placeholders/
  |- .bowerrc
  |- bower.json
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```

What follows is a brief description of each entry, but most directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

- `src/` - our application sources. [Read more &raquo;](src/README.md)
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. Anything added to this directory will need to be manually added
  to `build.config.js` and `karma/karma-unit.js` to be picked up by the build
  system.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `Gruntfile.js` - our build script; see "The Build System" below.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.