# Brite

A simple Octopress theme anyone can use. Currently in development and use for [my (Bill Patrianakos) personal website](http://billpatrianakos.me).

__Note:__ This theme currently includes custom links that will most likely only apply to my personal setup. You'll need to make sure you edit the source HTML files - specifically the header, head, and footer files and replace my information with yours. I'm currently working on a new branch that will separate my customizations from the white-label version that will be for anyone to consume. Otherwise this theme is ready for use (for the most part).

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