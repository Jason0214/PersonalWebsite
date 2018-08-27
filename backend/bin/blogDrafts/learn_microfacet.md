# Learn Basic Microfacet
Recently we have heard more and more about physcial based rendering, in most PBR implementation, they use a **microfacet** to simulate the rough surface of material.

### Introduction
In microfacet theory a surface is consisting of millions of micro surface, each micro surface is perfectly smooth, they only reflect according to their normal (this normal is **NOT** the surface normal). There is one good picture from [[1]](http://simonstechblog.blogspot.com/2011/12/microfacet-brdf.html) illustrate this simulation:

![microfacet_visual](https://snag.gy/OTfMoc.jpg)

It can be seen that for a rought surface incident light is scattered into different direction by different facing micro surface.

Note that every micro surface is perfectly smooth, so micro surfaces involving in a reflection can be described by light direction and view direction, surface normal is called half-vector and denoted by ***h***, `h = normalize(l + v)` (***l*** is the light direction, ***v*** is the view direction).

### Microfacet formula
A general form of microfacet model is: [[2]](https://disney-animation.s3.amazonaws.com/library/s2012_pbs_disney_brdf_notes_v2.pdf)

![mocrofacet_model](https://snag.gy/z5iCeV.jpg)

It has four terms **diffuse**, **distribution term (D)**, **fresnel term (F)** and **geometry term(G)**. Different model has different implementation in these four terms.

##### Distribution term
distribution describe how the micro surface normal arranged along the light direction

##### Fresnel term
fresnel is a physcial phenomenon that reflective light amount is related to incident light angle. It is significant in physical based render (you may heard about fresnel zero a lot). A famous example of fresnel in real world:

![fresnel](https://snag.gy/oJveED.jpg)

In the nearby area, the difference of light direction and water surface normal is small, then most of the light is transmission (refraction), however in the far area, the angle difference become large, most of the light is reflected.

##### Geometry term
Geometry term describe the light reflected by micro surface may block by other micro surfaces.


### Well-known microfacet models

- [Smith Geometrical shadow](https://ieeexplore.ieee.org/document/1138991/): an old and succesful
- [Oren Nayar Diffuse](http://www1.cs.columbia.edu/CAVE/publications/pdfs/Oren_SIGGRAPH94.pdf)
- [Schlick](https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8659.1330233) famous for its approximation of fresnel and geommetry terms
- [GGX](https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.html)
- [Disney Principle](https://disney-animation.s3.amazonaws.com/library/s2012_pbs_disney_brdf_notes_v2.pdf) a mix of GGX and Schlick mode as well as new diffuse term. It is designed to have a simple usage for artists. Blender adopted this model, also it aligns well with real time PBR engine like Godot and Unreal.


### Reference
[1]http://simonstechblog.blogspot.com/2011/12/microfacet-brdf.html
[2]https://disney-animation.s3.amazonaws.com/library/s2012_pbs_disney_brdf_notes_v2.pdf
[3]https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.html
[4]http://www1.cs.columbia.edu/CAVE/publications/pdfs/Oren_SIGGRAPH94.pdf
[5]https://ieeexplore.ieee.org/document/1138991/
[6]https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8659.1330233
