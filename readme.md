**Never edit .css or .min.js files. These files are automatically optimzied by the tools below, and if you make changes they will be overwritten by the next developer.**


### Setting up the tools, quick guide
If you want an in depth explanation, read the next section instead.

```sh
* Make sure you have Ruby
$ gem update --system
$ gem install compass

* Make sure you have NodeJS/NPM
$ cd [root of this theme]
$ npm install
$ grunt build
```

Now you can run ```$ grunt watch``` and focus on theming, as automation happens in the background.

## Setting up the tools, with explanation

### CSS: Sass / Compass
We're using Sass as our CSS preprocessor and we're using Compass as our Sass compiler engine. **This means you must NEVER edit .css files directly!**

The full description of installing Compass on your system can be found here: http://compass-style.org/install/ however here's a quick sum up:

```sh
You'll need Ruby. If you're on a UNIX system, this should already be sorted, but if not (or if you want to update) check here: 
http://www.ruby-lang.org/en/downloads/

$ gem update --system
$ gem install compass
```

Now you should have Compass set up. If all you're looking for is playing with CSS, you're now ready to compile the .scss files (in styles/sass) into .css files (styles/css)

```sh
$ cd [root of this theme]
$ compass watch
```

Now when you edit .scss files, Compass automatically compiles the CSS files.

### Grunt - an automation taskrunner.
We're using Grunt for automating various tasks, such as compressing .js files and various other things.

In order to use Grunt, you must first install NodeJS (and NPM, which comes with NodeJS):

https://nodejs.org/en/download/

or, using your favourite package manager:

https://nodejs.org/en/download/package-manager/

After that, do the following to setup Grunt:

```sh
$ cd [root of this theme]
$ npm install
Generate the theme build files for the first time
$ grunt build
```

You can now run ```$ grunt watch``` and it will automatically listen for patternlab, sass files and javascript files. 

Checkout the Gruntfile.js to get an idea of what tasks you have available

### PatternLab
This theme also comes with a PatternLab installation. Patternlab makes it a ton easier to create frontend patterns that can then be displayed to the client (or other developers), totally circumventing Drupal.

Read more about Patternlab here: http://patternlab.io/ - there's also an excellent PatternLab demo here:

http://foodbank.bradfrostweb.com/patternlab/v10/?p=pages-homepage

PatternLab generates A LOT of static HTML files, which should never be committed to the repo (It will make your life a hell), so to get it up and running locally, you must first generate it. You can do that with grunt ```$ grunt build```, or just with PHP ```$ php patternlab/core/builder.php -g```

After that, you can visit the patternlab/public folder in your browser. Unless you've set up an Apache config, the URL will be a little awkward though :)


