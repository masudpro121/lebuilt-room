

export const generatePrompt = ({image, style, type}) => {
  const prompts = {
    luxurious: `STYLE: Normal-angle Shot | GENRE: Luxurious Elegance in Taiwan | CAMERA: Nikon D850 | FOCAL LENGTH: 28mm | SHOT TYPE: Normal-angle | COMPOSITION: Rule of Thirds | ROOM TYPE: ${type.name} | TIME: Late morning | LOCATION TYPE: Interior | POST- PROCESSING: Enhanced saturation and vibrancy, slight boost to shadows, increased sharpness and clarity.`,
  
    vintage: `STYLE: Normal-angle Shot | GENRE: Vintage Style Interior design in Taiwan | CAMERA: Nikon D850 | FOCAL LENGTH: 28mm | SHOT TYPE: Normal-angle | COMPOSITION: Rule of Thirds | ROOM SIZE: ${type.name} | TIME: Late morning | LOCATION TYPE: Interior | POST- PROCESSING: Enhanced saturation and vibrancy, slight boost to shadows, increased sharpness and clarity.`,
  
    minimalist: `STYLE: Normal-angle Shot | GENRE: Minimalist | EMOTION: Serene | SCENE: a white living room in a neutral tone, | TAGS: Eclectic, vibrant, artistic, relaxing, colorful, boho | CAMERA: Nikon D850 | FOCAL LENGTH: 28mm | SHOT TYPE: Normal-angle | COMPOSITION: Rule of Thirds | ROOM TYPE: ${type.name} | TIME: Late morning | LOCATION TYPE: Interior | POST- PROCESSING: Enhanced saturation and vibrancy, slight boost to shadows, increased sharpness and clarity. `,
  
    "serene minimalism": `STYLE: Normal-angle Shot | GENRE:  Serene minimalism | SCENE: a dining room with lights on and white tables, in the style of zen minimalismdark beige and amber subtle details, asymmetric balance | TAGS: functional design, asymmetric balance, comfortable, neon lightin | CAMERA: Nikon Z7 II | FOCAL LENGTH: 50mm | SHOT TYPE: Normal-angle | COMPOSITION: Rule of thirds| LIGHTING: subtle lighting, kintsugi, light amber | MATERIALS: dining room | DECORATIONS: A few plates and one artwork | ROOM TYPE: ${type.name} | WINDOW TREATMENT: no windows | TABLES: A simple, wooden bedside table | TIME: Early morning | LOCATION TYPE: Interior | POST-PROCESSING: Enhanced brightness and clarity, boosted vibrancy of colors, and increased contrast for depth`,
  
    "american style": `STYLE: Normal-angle Shot | GENRE:  American Style | CAMERA: Nikon D850 | FOCAL LENGTH: 28mm | SHOT TYPE: Normal-angle | COMPOSITION: Rule of Thirds | ROOM TYPE: ${type.name} | TIME: Late morning | LOCATION TYPE: Interior | POST- PROCESSING: Enhanced saturation and vibrancy, slight boost to shadows, increased sharpness and clarity.`,
  };
  
  return `${image}, ${prompts[style.name]}`
}