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
* All elements must be nested within a parent div element with a set height and width. This allows the plugin to expand to fill this parent div.
* Elements passed in must have a set height and width.
* You must take care of setting the z-indexes for the elements, if you expect them to be hidden behind the initial main div element.
* The first div element will be shown in the middle of the parent div.
* Refer to the example index.html page, which uses jQuery to initially invoke the clusterExpander function and pass in some div elements with background images.
