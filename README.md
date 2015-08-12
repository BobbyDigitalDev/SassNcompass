#Sass with Compass and Susy
This is a quick tut I did on SASS with Compass and Susy Mixins under the Grunt.js workflow.
###What is SASS?
Syntactically Awesome Style Sheets.

Two 2 flavors: .SASS and .SCSS. .SCSS is newer and is written closer to regular css. You can even write regular css in it.

Sass allows for additional functionality not yet supported by CSS or browsers
 1. Variables like JS
 2. Nesting - to group related declarations
 3. Operators - math in CSS
 4. Control Structures - if, else statements
 5. Mixins - similar to JS functions

####Variables
We can assign a variable name to different things like colors and reuse them later. If you change your color scheme, you only have to change the color declaration in one place.
```
$main_color : #023E54;

    .navbar {
      background: $main_color;
    }

    h1, h2, h3 {
      background: $main_color;
    }
```

####Nesting in Sass
Nesting in sass helps keep things organized by grouping related declarations
```
.pixgrid {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      float: left;
      width: 96px;
      height: 96px;
      padding: 0 5px 5px 0;
    }
    img {
      max-width: 96px;
      cursor: pointer;
    }//img
  }
}
```

##### *After compilation*
```
.pixgrid ul {
  margin: 0;
  padding: 0:
  list-style: none:
}
.pixgrid ul li {
  float: left;
  width: 96px;
  height: 96px;
  padding: 0 5px 5px 0;
}
.pixgrid ul img {
    max-width: 96px;
    cursor: pointer;
}
```

#### Operators
Operators allow arithmetic to be carried out on your declarations
```
$border_thickness : 1px;
$thicker : $border_thickness*5;

.sidebar {
  border: $thicker solid black;
}
```

##### *After compilation*
```
.sidebar {
  border: 5px solid black;
}
```

#### Control Structures
Certain styles can be applied depending on certain parameters
```
$border_thickness : 1px;
$thicker : $border_thickness*5;

.sidebar {
  @if ($border_thickness<=1){
    background-color: red;
  } @else {
    background-color: yellow;
  }
}
```
##### *After compilation*
since th background is equal or less than 1px we get the following when compiled.
```
.sidebar {
  background-color: red;
}
```

#### Mixins - JS functions in CSS!
Allows the creation of functions that can be passed in various arguments that can be reused in a formula called a mixin. In this example, we created a mixin called rounded and we were able to use @include to call it and pass in a custom size as an argument. If we left that area blank it would go to the default of 10px.
```
@mixin rounded( $radius: 10px) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
  background-clip: padding-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;

    li img {
      display: block;
      @include rounded(20px);
    }
}
```
##### *After compilation*

```
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li img {
  display: block;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  background-clip: padding-box;
}
```
###What is Compass?
 Compass is a group of preset mixins that run on top of SASS. There are mixins that handle css support for gradients, shadows and rounded edges among others. It speeds up your workflow. It saves time by allowing you to include multiple declarations you use most often in combinations and keeps you from having to write out vendor prefixes for certain declarations over and over again.

 Handy Compass Mixins
```
@include clearfix;
@include border-radius(50%);
@include text-shadow($paleryellow 1px 1px);
@include background(linear-gradient(to bottom, red, blue));
```
### What is Susy?
Mobile first responsive mixins you can use on top of SASS to control how your site responds to different viewport sizes.

Typical set up:
```
//Susy Setup ------------------------------------------------------------
//Susy proviles a way to make layout changes without having to mess with your html

$total-columns      : 12; //12 column grid
$column-width       : 4em;
$gutter-width       : 1em;
$grid-padding       : $gutter-width;

@include border-box-sizing;//allows us to keep the boxes at their set size and not grow due to padding

//media query break-points
$small              : 30em;
$medium             : 47em;
$large              : 75em;
```

You can include the breakpoints in your layout by calling an @include at-breakpoint() like this:
```
@include at-breakpoint($medium) {//all the code contained within happens at the medium breakpoint

```
You can also set the column range a particular div element should occupy by using the span column mixin. It sets the containing class to have an 8 out of 12 column width.
```
@include span-columns(8,12);
```
_Omega_ tells sass that this is the last 4 of 12 columns and should be floated to the right. Omega is helpful for changing your layout around on the fly.
```
@include span-columns(4 omega, 12);
```


### What is Grunt?
Grunt is a task manager that can do a number of repetitive tasks for you. Gulp is the latest competitor to Grunt. They do similar things in slightly different ways.
What I used Grunt for in this project:
1. JS minification via the Uglify plugin
2. Compiling of SCSS Sass files to CSS via the Compass plugin
3. Live browser reload and realtime triggering of the tasks on file save via the watch plugin and default tasks


###Helpful links
***
#####Sass Docs

http://www.sass-lang.com/

#####Compass Mixins

http://compass-style.org/index/mixins/

#####Susy Docs

http://susy.oddbird.net/

##### Grunt Docs

http://gruntjs.com/getting-started
