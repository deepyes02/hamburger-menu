# Hamburger Menu Implementation #

_This codebase includes html, css and a few lines of javascript that implements a hamburger menu, completely build from scratch with no additional frameworks_
<a href="https://deepyes02.github.io/hamburger-menu/" target="_blank"><h2> Live Demo</h2> </a>
## Build Stack ##
1. HTML 5
2. CSS3
3. Javascript
4. A live server or modern browser(chrome, firefox, etc)
5. Visual Studio Code Editor

## Learn Web Design, Frontend ##
Web Development is complicated. It's easy to get overwhelemed with frameworks for CSS(Bootstrap, UIKIT, material UI, etc) as well as Javascript Frameworks(React, Vue, Angular). I think to be a better developer it's important to understand the fundamentals of markup (HTML), design (CSS) and programming(Javascript). 

This is a part of my personal project where I create various components of website from scrach where possible, and customizations of available plugins for sliders, carousels and other parts where reinventing the wheel is unnecessary.

## Landing Hero Area with Logo, Hamburger, and Landing Image ##
Usage of CSS3 styling and HTML Markup to create and position various divs and segments. Refer to html and css files. CSS File also contains additional classes not included in HTML but via javascript.

## Render Menu Items on Click ##
Using CSS Transition and implementation of class via Javascript. Only a few lines of Javascript is used to implement properties of a custom class.<br>Example code below (element names not necessarily matching up, but the idea is to implement properties of css className to the element)
```css
body{
	overflow-x:hidden; /*hides horizontal overflow*/
}
#menuDiv{
	position:absolute; /*positions the div inside it's parent div, which has position:relative attribute*/
	right: -400px; /*pushes the div outside the browser*/
	/*apply transition properties so that the elements take time to move instead of abruptly appearing*/
	transition: right 0.4s ease-in-out;
}
.customCss{
	/*properties to add dynamically using javascript*/
	right: 0px !important;
}
```
```Javascript
document.querySelector('#menuIcon').addEventListener('click', function(){
	//function that adds custom class properties to an element
	document.querySelector('#menuDiv').toggleClass('customCss');
})
```
## Logic ##
The menu container is positioned about 400px right of the viewport. Additionally, overflow on x-axis of the website is disabled, to prevent horizontal scrolling. We have a class called "customCss" predefined in the *style.css* file. So when the menu is clicked the className is added to the HTML element via Javascript.

## Result ##
As expected, the menu items appear and disappear when the menu icon is clicked.