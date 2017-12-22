# [IT MLAF Documentation](https://mlaf.intel.com/)

it-mlaf-sass is an IT MLAF (Master Look and Feel) compliant theme of the popular Bootstrap CSS framework.

it-mlaf-sass follows [semver](http://semver.org/).

Please check out [our official docs](https://mlaf.intel.com/) to see information on getting started and examples.

# Upgrading to it-mlaf-sass v3.x

If you are upgrading from v0.2.x, we have made it simpler to incorporate it-mlaf-sass into your project. However, this also means that you will have to change your main SASS file and potentially the configuration of your SASS compiler (libsass or compass).

There are a few main differences in how you will use it-mlaf-sass in your project compared to v0.2.x:
- You no longer have to import bootstrap-sass. it-mlaf-sass imports it for you.
- it-mlaf-sass no longer requires compass. This means you can use libsass via node-sass, which is a lot faster :). You can continue to use compass if you want to, of course.
- You will need to add the `bower_components` folder to your includePaths in your libsass/compass configuration.

Continue reading for more specific setup instructions.

# Importing it-mlaf-sass 3.x into your project

## Font paths and it-mlaf.scss import

To use it-mlaf-sass in your project, set the font and icon path variables and `@import` the base `it-mlaf.scss` file into your main SCSS file. Both the font paths and @import path need to be relative to the location of your compiled CSS file(s).
```
$icon-font-path: "../bower_components/bootstrap-sass/assets/fonts/bootstrap/";
$intel-font-path: "../bower_components/it-mlaf-sass/fonts/";

@import "it-mlaf-sass/it-mlaf";
```

## SASS includePaths (makes dealing with paths easier in SASS)
You also need to configure your SASS build process to use include paths. Otherwise, all the imports in it-mlaf.scss will fail.

If you are using node-sass with gulp or grunt via [gulp-sass](https://github.com/dlmanning/gulp-sass) or [grunt-sass](https://github.com/sindresorhus/grunt-sass), just add the following to your configuration:
```
includePaths: ['bower_components']
```

For example, in the [gulpfile](https://github.intel.com/intc/starter-angular-fractal/blob/beta/gulpfile.js) of a project generated with [intc-cli](https://github.intel.com/intc/intc-cli), this is what running gulp-sass looks like:
```
.pipe(gulp-sass({
  includePaths: ['bower_components']
}))
```

If the `bower_components` directory is in a different directory than your gulpfile/gruntfile, then change the path accordingly.

# Fonts not working in your build?
Your build process must be changing file structures in such a way that the default relative font paths no longer point to your fonts. You may also just not be moving your fonts over to your build.

Be sure to override the $intel-font-path and $icon-font-path in your main.scss file with the new relative font paths. You will need to set these variables *before* you import it-mlaf-sass.

# Deprecated Intel color variables
All of the below SASS variables are now deprecated:

- $paleBlue
- $lightBlue
- $mediumBlue
- $intelBlue
- $mediumDarkBlue
- $darkBlue
- $darkYellow
- $orange2
- $paleGreen
- $lightGreen
- $mediumDarkGreen
- $darkGreen
- $lightRed
- $mediumRed
- $red
- $mediumDarkRed
- $darkRed
- $darkGray
- $gray
- $lightGray
- $gray4
- $gray3
- $gray2
- $gray1
- $offwhite

In the next major version, v4, these variables will be removed from it-mlaf-sass. Please start changing your assets and applications to use the new variables. Check [\_intel-variables.scss](https://github.intel.com/IT-UI-Assets/it-mlaf-sass/blob/master/scss/_intel-variables.scss) for the current color variables.

In v3, these deprecated variables map to the best possible variables choices from the new color variables.

