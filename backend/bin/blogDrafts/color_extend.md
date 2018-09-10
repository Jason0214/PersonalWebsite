# Properties of Color
Color is not about RGB, it is far more complex, here briefly talk about physically important properties of color such as **greyscale**, **HSV** as well as **gamma** value in color display

### HSV/HSL concepts
People may familiar with RGB color space due to its simplicity for picking and mixing colors. However, RGB colors does not reflect human's real perception of color. HSV/HSL color space physically makes more sense.

Both HSV (hue, saturation, value) and HSL (hue, saturation, lightness) color can be easily visualized by a cylinder, these two color space use the same design with just a little difference in saturation and lightness amplitude.

![HSV cylinder](https://en.wikipedia.org/wiki/File:HSV_color_solid_cylinder_saturation_gray.png)

**some useful terminology**
- **tint**: color mix with white
- **tont**: color mix with grey (or color mix with white and black altogether)
- **shade**: color mix with black

#### Hue
Hue means 'pure color', it is the angular dimension in the cylinder, evevry hue value represent a fixed color. For example, hue 0 refers to red, hue 1/3 refers to green.

#### Saturation
Saturation is the value along the radius. It describe the additional tint upon the pure color. In HSV, Saturation is reduced by tint with white. In HSL, it is a little different, Saturation can only be changed by tont with both black and white

#### Value/lightness
Value or called lightness is the height in the cylinder, it represents how much the color is shaded with black

<!-- ### HSV channel separate
    TODO -->

### HSV/HSL geometry explaination
Though the above section introduce the basic of HSV, I am not satisfied with that pure concepts, here I found a wonderful graph illustrating the building of HSV and HSL color space.

![build flow](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hsl-and-hsv.svg/600px-Hsl-and-hsv.svg.png)

It start with a RGB cude, obviously any RGB color fall into this cube. Then have a vertical axis and place the white corner of cube at the top and the black color at the bottom. The up axis is now has some meaning of **lightness**, very reasonable.

Although, the exact lightness formula differs among models

HSV use `V(lightness) = max(R, G, B)`
HSL use `L(lightness) = (min(R, G, B) + max(R, G, B)) / 2`

Now, calculate lightness for the six vertex of cube (which are hue), in HSV, they have `lightness = 1`, while in HSL they have `lightness = 0.5`. Thus result the shape of hexcone and the double hexcone.

Note that, either hexcone and double hexcone, the third parameter (which named as `saturation`) has the valid range depend on lightness, which is not friendly for user to set a color. So the both HSV and HSL are scaled along radius to cylinder.

For detailed illustration see [1](https://en.wikipedia.org/wiki/Cylindrical-coordinate_color_model), it has fantastic explanation.

### Color gamma


### Reference
[1] https://en.wikipedia.org/wiki/Cylindrical-coordinate_color_model
[2] http://infohost.nmt.edu/tcc/help/pubs/colortheory/web/hsv.html
