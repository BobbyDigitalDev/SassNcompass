#Sass with Compass and Susy
This is a quick tut I did on SASS with Compass and Susy Mixins under the Grunt.js workflow.
###What is SASS?
+ Syntactically Awesome Style Sheets
+ Allows for additional functionality not yet supported by CSS or browsers
 1. Variables like JS
 2. Nesting - to group related rules
 3. Operators - math in CSS
 4. Control flow
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
Nesting in sass helps keep things organized by grouping similar declarations
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

#### After being compliled
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





####Susy for mobile first resposive mixins
####Grunt Task manager workflow
###Helpful links
***
http://www.sass-lang.com/
