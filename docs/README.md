

# Collapsible-bar

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This app can be used as a collapsible bar block.

![Media Placeholder](https://user-images.githubusercontent.com/91450011/150082199-4ee68191-186b-4b99-8e38-f6a13f0dfb22.png)

## Configuration 
### Step 1:
Add `"echidna.collapsible-bar:"0.x"` as dependancy in manifest.json.

### Step 2:
Add block name `"collapsible-bar"` wherever you want to add it.

### Step3:
Declare the block with props as shown below:
```json 
"collapsible-bar#test":{
  "props":{
"iconRightOpen":"https://hotemoji.com/images/dl/3/pointing-up-emoji-by-google.png",
"iconRightClosed":"https://hotemoji.com/images/dl/u/finger-pointing-down-emoji-by-google.png",
"rightIconWidth":"20px",
"rightIconHeight":"20px",
"collapseHeader":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"collapseContent":"Lorem ipsum dolor s. Morbi mollis erat in porttitor scelerisque. Vivamus euismod, orci nec consectetur viverra, mauris diam ornare tortor, nec varius sem enim vel nunc. Curabitur vehicula at ipsum at imperdiet. Quisque iaculis vitae enim at viverra. Ut vehicula magna ut nulla fringilla iaculis. Integer tincidunt sem leo, nec maximus ligula tempus dignissim. Suspendisse pharetra turpis eu quam congue convallis. Fusce tincidunt dictum neque, eget consectetur dolor iaculis et."
  }
}
```
#### Note: If you want to use more than one block, you need to declare seperate blocks with different name (name after #).


### props

| Prop name    | Type            | Description    |                                                                                                                             |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `"collapseHeader"`      | `string`       | Text to display on bar         | 
| `"collapseContent"`      | `string`       | Text to display inside the bar body when toggled         | 
| `"iconRightOpen"`      | `image url`       | Icon will be displayed on the right side of the bar when bar is in open condition         | 
| ` "iconRightClosed"`      | `image url`       | Icon will be displayed on the right side of the bar when bar is in closed condition         | 
| `"iconLeftOpen"`      | `image url`       | Icon will be displayed on the left side of the bar when bar is in open condition         | 
| `"iconLeftClosed"`      | `image url`       | Icon will be displayed on the left side of the bar when bar is in closed condition         | 
| `"rightIconWidth"`      | `string`       | Right icon width         | 
| `"rightIconHeight"`      | `string`       | Right icon Height         | 
| `"leftIconWidth"`      | `string`       | Left icon width         | 
| `"leftIconHeight"`      | `string`       | Left icon height         | 
| `"blockClass"`      | `string`       | class name for the block for adding css         | 






| CSS Handles |
| ----------- | 
| `.barContainer` | 
| `.bar` | 
| `.iconContainerLeftOpen` | 
| `.leftIconOpen` | 
| `.iconContainerLeftClosed` | 
| `.leftIconClosed` |
| `.collapsibleHeader` |
| `.iconContainerRightOpen` |
| `.rightIconOpen` |
| `.iconContainerRightClosed` |
| `.rightIconClosed` |
| `.collapsibleContent` |
| `.contentsContainer` |




<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [Akshay S. H.](https://github.com/akshay-hegde96) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

