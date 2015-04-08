CCWP
=====

This is a simple skeleton for quick scaffolding of a WordPress site.
It uses Composer to manage all WP dependencies and comes with a simple multi env wp-config structure. 

Installation
------------

 1. Clone repo 
 2. Edit `composer.json` to fit the needs of your project 
 3. Run `composer install` 
 4. Create a `local-config.php` in `/config` with your DB details 
 5. Visit your new install in your browser in order to complete WordPress' installation
 6. Grab a fresh copy of _underscores (check sass option) to use as starter theme
 7. Edit themename in .bowerrc, gulpfile.js, wp-config.php, .gitignore
 8. Run `npm install`
 9. Run `bower install` 
 10. `@import` susy grid and breakpoint-sass into style.scss
 11. `enque_script` in function.php to add Modernizer 
 12. Run `gulp` to watch files changes, compile your sass...
 7. That's it, you're done

Folders/files structure
----------------

    Site
    	|__ config
	    | |__ local-config.php
    	|__ vendor
    	|__ web
    	| |__ apps
    	| | |__ languages
    	| | |__ plugins
    	| | |__ mu-plugins
    	| | |__ themes
    	| |__ core
    	| |__ medias
    	| |__ wp-config.php
        |__ .bowerrc
    	|__ .gitignore
    	|__ .htaccess
        |__ .jshintrc
        |__ bower.json
    	|__ composer.json
    	|__ composer.lock
        |__ gulpfile.js
    	|__ index.php
        |__ package.json
    	|__ README.md


Composer.json
-------------
To easy the scaffolding of WordPress sites, the composer.json comes with the following custom packages backed in:

**WP mirror from *John P. Bloch***: https://github.com/johnpbloch/wordpress

> *A fork of WordPress with Composer support added. Branches, tags, and trunk synced from upstream every 15 minutes.*


**Installers from *Composer***: http://composer.github.com/installers

> A Multi-Framework Composer Library Installer.
> It will install WP packages to their correct location based on the specified package type (*wordpress-theme*, *wordpress-plugin*, *wordpress-muplugin*).


**Dropin installer from *Koodimonni***: http://languages.koodimonni.fi/

> This composer plugin helps you to move your composer packaged files where you want them to be. 
> It was  originally created for installing multiple languages for WordPress with composer.



WordPress Must Use (MU) plugins
-------------------------------

We've packed in mu-plugins a **site custom functions** file to help you start customizing WordPress to your needs. (see `/web/apps/mu-plugins/site-custom-functions.php`).