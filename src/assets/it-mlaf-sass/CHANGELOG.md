# it-mlaf-sass changelog

## 4.1.0-alpha

- [FEATURE] Made it-mlaf-sass consumeable via our internal npm registry, [pixi](http://pixi.intel.com/). When implementation is complete, a dev can add it-mlaf-sass to their project using: `npm install it-mlaf-sass`. However, if they use the app generator they will get it-mlaf-sass _for free_.

## 4.0.2
- [BUGFIX] Fixed the breadcrumbs to display arrows between the links.

## 4.0.1
- [BUGFIX] Fixed wrong hex color values.

## 4.0.0
- [FEATURE] New icons (old content codes no longer valid), changed colors, added custom stylized checkbox and radio controls.

### Why did we skip to 4.0.0?
We had to change the content codes of the icons due to some changes in their graphic style and export from icomoon. Due to these changes, hard coded content codes will not display with the latest icon font file.

## 3.4.0
- [FEATURE] New styles for UI elements: wizard, mega menu, side navs, nested drop down nav, footer.

## 3.3.0
- [FEATURE] New icons added to the icon library.

## 3.2.1
- [BUGFIX] Removed a typo from after the truetype font URL string in _intel-fonts.scss.

## 3.2.0
- [FEATURE] Change the modular scale to provide more useful values by using just one base value and adding a second ratio. This provides a better range of values. Chose 1.16666 and 1.33333 as the ratio values. Also fixes a bug, described below.
- [BUGFIX] Addressed issue with delta between heading sizes being too small by changing the modular scale setup, described above.

## 3.1.3
- [BUGFIX] Increased right padding of dropdowns in navs to accommodate the caret override introduced in 3.1.0.
- [BUGFIX] Changed non-link text in default navbar to have pale blue text, per the MLAF spec.

## 3.1.2
- [BUGFIX] Corrected verison number mismatch between release and bower.json

## 3.1.1
- [BUGFIX] Inverse navbar adjusted to be white background with blue text, since that is the actual inverse of the default navbar (white text on blue background).
- [BUGFIX] All disabled buttons (btn-primary, btn-secondary, etc) now look the same.
- [BUGFIX] Corrected borders in btn-group for primary and danger buttons. Used some fancy first-of-type and last-of-type selectors to do this.
- [USABILITY] Increased spacing between checkboxes and radios.
- [BUGFIX] Tweaked new caret padding and positioning across button sizes.

## 3.1.0
- [BUGFIX] Corrected table header to have $light-gray background
- [FEATURE] Overrode Bootstrap caret class to use the intelicon-down intelicon
- [BUGFIX] Fixed btn-primary and btn-danger inner border when in a btn-group
- [BUGFIX] Fixed background color of active tab in nav-tabs
- [BUGFIX] Removed all unapproved variables, re-introduced [approved color variations](https://wiki.ith.intel.com/download/attachments/221656181/Complete%20color%20list_Aug_7_2014.PNG?version=1&modificationDate=1407456685547&api=v2) that were accidentally removed.

## 3.0.2
- Moved back to current brand colors, since new colors will not be finalized until mid-May 2015 at the earliest.

## 3.0.1
- [BUGFIX] Fix to btn- variants.

## 3.0.0

### Design goals
- Full coverage of ALL of Bootstrap. That allows a dev to be able to copy Bootstrap sample code from the community (Bootstrap docs, Stack Overflow, CodePen, etc.) and the result is something MLAF-compliant. This was not possible for many elements in 0.2.5.
    - This in turn required the ability to test for full coverage, and there was no way to do so. To achieve this, the [Bootstrap docs were cloned and MLAF-ified](https://github.intel.com/pages/IT-UI-Assets/it-mlaf-sass/). Build steps were created with gulp to easily test changes locally. Now we can make changes and test their impact.
- Use the Bootstrap nav as a base for the app frame instead of reinventing the styles with multiple separate and conflicting options.
- Override Bootstrap with variables whenever possible, rather than overriding classes. Less code, less fragile, easier to maintain.
- Mirror Bootstrap's code in our overrides to make it easier to understand what we are doing.
- Make colors accessible! [White text on Intel green](http://leaverou.github.io/contrast-ratio/#%23fff-on-%23C4D600), for example, was failing [WCAG 2.0](http://www.w3.org/TR/WCAG20/). All color choices should be accessible, and it should be easy for developers to make accessible color choices.
- Refactor!
    - Only override the variables we need and nothing more.
    - Remove dependency code that was copied into the project itself.
    - Separate all our custom styles into separate files, just as Bootstrap itself does.

### Why did we skip to 3.0.0?
We were advertising it-mlaf-sass as version 2.5 on the docs, and we need the versions to be consistent with what we advertise. A little weird, but necessary.

### Changelog
- [FEATURE] New colors from branding.
- [FEATURE] **Eliminated our Ruby dependency** by making everything compatible with node-sass/libsass and ditching compass. Now we have one fewer dependency (node-sass is just an npm package), and **sass compilation is much faster** (libsass is written in C).
- [BUGFIX] Contextual classes were broken. For example, an "error" contextual class would result in red background with white text. Variables and classes were changed so that all contextual backgrounds are accounted for and have appropriate contrast ratios.
- [CLEANUP] There were large portions of bootstrap-sass code copied into MLAF-SASS (mixins, blocks of SASS, *all* of the variables), instead of just copying over the subset of variables that need to be overridden. This was a problem waiting to happen, as the dependency code would never get updated with the code that was copied into this repo! Now, *only* the variables we actually override have been copied in, and nothing more.
- [BUGFIX] There were variables we were not overriding that we should have been - I think we are at 100% coverage now. Coverage is tested by [bringing in the Bootstrap docs and MLAF-ifying them](https://github.intel.com/pages/IT-UI-Assets/it-mlaf-sass/).
- [FEATURE] Introduced a new [Modular Scale](http://www.modularscale.com/) component to make sizing type, margins, and padding more consistent. Modular scale is based on 15px font size and 50px (the height of the header at the top of the page), and has a ratio of 1.333. You can see our configuration on the [Modular Scale website](http://www.modularscale.com/?15,50&px&1.333&sass&text), and you can use it in your code with the `ms` SASS function.
- [BUGFIX] We are now using the correct bootstrap-sass bower package (not sure why we were using the bootstrap-sass-official package before, maybe that was the old name of the bootstrap-sass project or something).
- [BUGFIX] Updated the dependency on bootstrap-sass to latest (3.3.3). Also added a `~`` prefix so we get patches. Before bootstrap-sass was set hard to 3.1.1, so patch updates were not coming through.
- [CLEANUP] App Frame styles were for some reason part of it-mlaf-sass, rather than being part of the App Frame component itself. These styles were removed from it-mlaf-sass and now live with the App Frame itself, which has been broken out of it-mlaf-ui and now lives in its own repo, [intc-app-frame](https://github.intel.com/intc/intc-app-frame).
- [CLEANUP] Overrode Bootstrap grays and other subtle differences so we consistently use Intel's grays across it-mlaf-sass.
- [ACCESSIBILITY] Changed several states and colors and color/background combinations so that we no longer fail WCAG 2.0 accessibility requirements.
- Aligned version numbers with what is advertised for MLAF. MLAF was advertised to be at 2.5 on the docs, but the it-mlaf-sass version was only 0.2.5.
- Changed headings so they stand out from the rest of the content. A combination of size and low font weight resulted in h3, h4, h5, and h6 all blending in with the paragraph text.
- intc-app-frame was updated to accommodate these breaking changes in MLAF. This includes bringing in [bourbon](http://bourbon.io/) to replace the compass mixins that were lost after moving to node-sass.
- [FEATURE] Added breakpoints for larger screen sizes. Bootstrap's largest breakpoint was at 1200px. Also overrode md and lg breakpoints to match more common screen sizes. The md breakpoint is now at 1024px, and the lg breakpoint is at 1280px. These changes bring Bootstrap more in line with what [frameworks like Foundation do](http://foundation.zurb.com/docs/media-queries.html). There may be further iteration here.
- [CLEANUP] Removed intel-navbar in favor of just changing the bootstrap navbar (and inverted navbar) to be Intel-ized by default. Then teams can easily create their own Intel-ized navbars when the intc-app-frame doesn't work for them.
- [CLEANUP] Removed header-intel in favor of settling on a single nav/header base that leverages all the Bootstrap classes and functionality.
- [CLEANUP] Removed table-intel in favor of just overriding existing bootstrap tables with the colors we want. This way devs have a single clear option that is MLAF-compliant.
- [FEATURE] pick_best_color SASS function for automatic choosing of black or white text color based on which has the best contrast. We can now just use the right text color (blackish or white) depending on the colors. The SASS functions are located in /scss/functions/_contrast.scss. The auto color picking are now being done for buttons, and can be added to other elements. These functions will be handy in the framework and for app developers in their projects.
- [ACCESSIBILITY] Success/warning/error form feedback was very inaccessible (poor contrast of brand green color of labels on a white background). Now the text is always dark, which is always legible.
- [FEATURE] Created MLAFd Bootstrap docs to show the coverage of it-mlaf-sass on Bootstrap. Before there was no way to test our coverage of Bootstrap. This is how many of the gaps were found in the first place. Documented the process to produce the MLAFd Bootstrap docs, and provide the manual instructions for how to keep it up to date. There will likely be future iteration here to make this simpler.
- [CLEANUP] Before there were multiple app frames all with different styling, and the Bootstrap nav styling was mostly separate from those. Now the Bootstrap nav has been properly overriden, and all new navs should build on top of that. Better to maintain, plus then Bootstrap takes care of styling/padding/etc.
- [BUGFIX] Fixes to alignment of text inside alerts when there is >1 line.
- Added some explanation in the README for font-paths, which can be annoying for newer devs.
- [BUGFIX] Removed btn-success, btn-warning, and btn-info, since they are not MLAF-compliant. They now render the same as btn-default.

## <= 0.2.5
- No release notes were kept, but everything up through 0.2.5 was the initial heavy lifting that went into making Bootstrap MLAF-compliant, as well as extra functionality added by members of the UI Assets team. Some release notes are available for 0.2.5 and 0.2.4-beta on the [repo Releases page](https://github.intel.com/IT-UI-Assets/it-mlaf-sass/releases).

