#Sass with Compass and Susy
This is a quick tut I did on SASS with Compass and Susy Mixins under the Grunt.js workflow.
###What is SASS?
+ Syntactically Awesome Style Sheets
+ Allows for additional functionality not yet supported by CSS or browsers
 1. Variables like JS
 2. Nesting - to group related rules
 3. Operators - math in CSS
 4. Control Structures
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







####Susy for mobile first resposive mixins
####Grunt Task manager workflow
###Helpful links
***
http://www.sass-lang.com/
