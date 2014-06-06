# Brite

A simple Octopress theme anyone can use. Currently in use for [my personal website](http://billpatrianakos.me).

![Brite theme in use](https://billpatrianakos.s3.amazonaws.com/blog_posts/brite-screenshot.png, "Brite being used on billpatrianakos.me")

## Installation

1. Clone this repository `git clone https://github.com/billpatrianakos/brite.git`
2. Move the folder into your Octopress themes folder `mv path/to/brite path/to/octopress-root/.themes/`
3. Because Brite uses some non-standard Octopress conventions (mostly differently named folders) you'll need to make some changes to your `config.rb` and `public` folder before installing. Those changes are:
    a. Delete the contents of your `sass` directory with `rm -rf path/to/octopress-root/sass/*`
    b. Delete the `javascripts` and `images` folder in `public/`
    c. Open your `config.rb` file and make sure the following config values match (this is only an excerpt of the full config showing only the settings that need to change):

```
http_images_path = "/img"
http_generated_images_path = "/img"
http_fonts_path = "/font"
css_dir = "public/css"
images_dir = "source/img"
fonts_dir = "source/font"
```

4. Install with `rake install[brite]` (in this case `brite` refers to the name of the theme folder - if you've renamed the folder use the new name in the rake command instead)
5. Now you can install, preview, and publish with `rake generate && rake preview`. Open a browser to [http://localhost:4000](http://localhost:4000) and if everything looks good (you may need to refresh a few times to get rid of cached styles) then run `rake deploy` to publish your site as usual.

## Customizations

Because this theme was developed primarily for myself, there are custom modifications you may want to undo. Future versions of this project will not include these extraneous things.

I recommend making these changes after installation because that's when you'll really see and understand them. Be sure to preview the site locally before deploying to see what I'm talking about. Luckily, for standard Octopress sites (no extra customization in your _config.yml file) these extra assets won't be visible on your site but you probably don't want them in your repository either. So here's how to remove them:

### Custom asides

__Modify__ the `about.html` aside to use your own personal details instead of mine.

__Modify or Delete__ the `google_ads.html` aside so that it either doesn't exist or uses your own Adsense code if you choose to use Adsense.

__Modify or Delete__ the `random_project.html` and `project_ads.html` asides. These asides show an image "poster" ad in the sidebar for one of my projects selected randomly from a list and show a list of my favorite projects respectively. If you choose to keep these, you'll see where the references to images point. For the random ad functionality, see `source/js/scripts.js` to dereference my projects and include your own files instead. If you just want to replace my project ad images, simply replace the files in `source/img/assets` with images of your own of the same name (that way you won't have to modify any JavaScript or HTML).

__Delete__ the `book_form.html` aside. This is the signup form for my book. You can replace this with your own Mailchimp signup for if you want but I suspect most people will want to simply get rid of it.

## License

The MIT License (MIT)

Copyright (c) 2014 Bill Patrianakos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.