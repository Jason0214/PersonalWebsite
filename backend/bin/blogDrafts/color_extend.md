# Properties of Color
Color is not about RGB, it is far more complex, here briefly talk about physically important properties of color such as **greyscale**, **HSV** as well as **gamma** value in color display

### HSV/HSL concepts
People may familiar with RGB color space due to its simplicity for picking and mixing colors. However, RGB colors does not reflect human's real perception of color. HSV/HSL color space physically makes more sense.

Both HSV (hue, saturation, value) and HSL (hue, saturation, lightness) color can be easily visualized by a cylinder, these two color space use the same design with just a little difference in saturation and lightness amplitude.

![HSV cylinder](https://upload.wikimedia.org/wikipedia/commons/3/33/HSV_color_solid_cylinder_saturation_gray.png)

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
The conecpt of color gamma is coming from human perception of color. Human eye does not perceive light linearly to amount of photons eye receives (camera does that).

According to [[4]](https://www.cambridgeincolour.com/tutorials/gamma-correction.htm)

>Compared to a camera, we are much more sensitive to changes in dark tones than we are to similar changes in bright tones. There's a biological reason for this peculiarity: it enables our vision to operate over a broader range of luminance. Otherwise the typical range in brightness we encounter outdoors would be too overwhelming.

A simple illustration:

![perception_vs_actual_lum](https://cdn.cambridgeincolour.com/images/tutorials/gamma_chart1e.png)

#### Monitor gamma
In order to fit with human eye's perception, all the modern monitor has what it displays nonlinear to the its input color data, more accurately, it use a exponential formula with its exponent called **gamma**.

![gamma](https://snag.gy/PK4nWe.jpg)

A widely used gamma value is 2.2 and A is 1, but note that it is only an approximation, more accurate gamma formula exists in some image process libraries.

#### Image storage gamma
Most image processing and graphics render application are working in linear color space, as it has a lot of advantages, for example, if you want to add two images' effection, you just need to sum up the RGB values. However, this sum up is under the assumption that human eye will perceive the color linearly, so you need an addtional step to cancel the gamma converting applied by moniter. (More on [[5]](https://graphicdesign.stackexchange.com/questions/46768/why-do-i-have-to-use-a-gamma-of-2-2-when-using-a-jpeg-picture)

Instead of doing this gamma correction in display image, a more computing saving approach is to directly apply the gamma correction onto stored image file, thus avoid doing gamma correction in displaying every frame. Most image and video file format such as JPEG and MPEG already has its contained data gamma corrected.

#### Non color texture
You may have seen an option `Non-Color` for image texture in some game engine or 3d assets software. Now you may have known why it is needed. Because the gamma value is directly encoded in image files, for an `Non-Color` texture such as normal map, you would like it to use its original value. In that case configued it as `Non-Color` would do an additional gamma correction to convert to its true RGB while loading the texture.


### Reference
[1] https://en.wikipedia.org/wiki/HSL_and_HSV
[2] http://infohost.nmt.edu/tcc/help/pubs/colortheory/web/hsv.html
[3] https://en.wikipedia.org/wiki/Gamma_correction
[4] https://www.cambridgeincolour.com/tutorials/gamma-correction.htm
[5] https://graphicdesign.stackexchange.com/questions/46768/why-do-i-have-to-use-a-gamma-of-2-2-when-using-a-jpeg-picture
[6] *Fundamentals of Computer Graphics* 3rd Edition, Chapter 3.3
[7] https://docs.blender.org/manual/en/dev/render/post_process/color_management.html
