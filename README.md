# cluster-expander-js
JS library to animate and expand a group of div elements

## Instructions:

1) Pass in the array of div elements to be expanded. Do this using the init function, which accepts an array of dom elements:
```
clusterExpander.init(domElements);
```
2) Invoke the expand function:
```
clusterExpander.expand();
```
## Assumptions and Requirements:
* Can pass up to 11 div elements to be exploded/expanded. Works best with 7, 3, 9, or 11.
* Elements will expand within their parent element. For best results the parent element should have a height greater than 0.
* You can set the element css visibility to 'hidden' initially. Elements will be shown before expand animation starts
* You must take care of setting the z-indexes for the elements, if you expect them to be hidden behind the initial main div element.
* The first div element will be shown in the middle of the parent div.
* Refer to the example index.html page, which uses jQuery to initially invoke the clusterExpander function and pass in some div elements with background images.
