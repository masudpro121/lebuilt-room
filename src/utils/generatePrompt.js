

export const generatePrompt = ({image, style, type}) => {
  const prompts = {
    "tali8hho2zu34bhgpsta": `ROOM TYPE: ${type} | STYLE: in the style of light pink and dark indigo, caia koopman, woven/perforated, curvaceous simplicity, margaret olley, light black and brown | COMPOSITION: Rule of Thirds | PHOTO TYPE: Interior Design.`,
  
    "yelg1w3kzs3ii9gl9l9r": `ROOM TYPE: ${type} | STYLE:  in the style of woven/perforated, light white and light maroon, architectural interventions, petzval 85mm f/2.2, symmetrical grid, soft and airy compositions, multi-panel compositions | COMPOSITION: Rule of Thirds | PHOTO TYPE: Interior Design.`,

    "dsxakki9wi8zsk6mra0t": `ROOM TYPE: ${type} | STYLE: sleek, contemporary, stylish, chic, trendy, wood, iron, bronze, aluminum, anti-matter, dusk, dawn, evening, morning, cozy, illuminated, serene, vibrant, lively, wood, iron, bronze, aluminum, anti-matter, Brick, Bronze, Carbon Fiber, Cardboard, Cellulose, Ceramic, Cotton, Fabric, Fiber Optic, Foil, Gasoline, Glass, Gold, Gummies, Latex, Leather, Magma, Metallic, Nickel, Nylon, Paper, Plastic, Quartz, Shrink Wrap, Skin, Slime, Wooden, Yarn, Zinc, Copper, Plasma, Liquid Ice | COMPOSITION: Rule of Thirds | PHOTO TYPE: Interior Design.`,
  
    "1d7eafc8e8c466fb05b587297fa04bb1": `ROOM TYPE: ${type} | STYLE: in the style of dark green and dark beige, naturalistic settings, afro-colombian themes, daz3d, naturalistic lighting, lucy glendinning, gray and beige | PHOTO TYPE: Interior Design.`,
    
    "uwdyvimkpvshkazkxjdl": `ROOM TYPE: ${type} | STYLE: dark earthy tones, IT business, open plan office | PHOTO TYPE: Interior Design.`,
    
    "l70vikqbktenu0acsnga": `ROOM TYPE: ${type} | STYLE: Small Luxurious Elegance Studio in Taiwan | | PHOTO TYPE: Interior Design.`,
    
    "r5chygepzrdf12bpfika": `ROOM TYPE: ${type} | STYLE: in the style of emotive lighting, matte drawing, danish design, luminous quality | PHOTO TYPE: Interior Design.`,        
    
		"d50c21a6fbc7baa05e167e00e76659cd": `ROOM TYPE: ${type} | STYLE: in the style of michal karcz, dark brown and dark beige, kintsugi, varying wood grains, subtle chiaroscuro, layered veneer panels, juxtaposition of hard and soft lines | PHOTO TYPE: Interior Design.`,        

		"179e71556de6df22457bac6a4d8dc6e2": `ROOM TYPE: ${type} | STYLE: in the style of subdued minimalism, uhd image, thin steel forms, dark beige, matte photo, layered translucency, monochromatic shadows | PHOTO TYPE: Interior Design.`,        
    
		"4b81ff29487cd0a1f6855819c34d1873": `ROOM TYPE: ${type} | STYLE:  in the style of light bronze and light beige, ethereal minimalism, varying wood grains, light wood, anamorphic lens, detailed, nature - inspired, beige`,        
    
		"52d50cd11d69797d26aa95eb13592760": `ROOM TYPE: ${type} | STYLE:  a width of three meters. The room boasts a contemporary aesthetic, featuring light - colored wood grain flooring that adds warmth and sophistication to the space. Positioned at the front is a small balcony with a doorway measuring 1. 5 feet wide, seamlessly blending indoor and outdoor living. The interior design showcases a harmonious fusion of sleek furniture, minimalist decor, and clean lines, creating an inviting and modern atmosphere. Step into this well - designed space and immerse yourself in a perfect balance of style and comfort.`,   
    
		"f64d2879fd086dcef1df44a9274f51dc": `ROOM TYPE: ${type} | STYLE:   in the style of curved mirrors, vintage minimalism, danish design, light black and brown, tabletop photography, silhouette lighting, traditional craftsmanship.`,
  };
  
  return `${image}, ${prompts[style.name]}`
}