const fs = require('fs');
const products = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf8'));

const imgMap = {
  'p-001': '/images/products/oud-noir-1.png',
  'p-002': '/images/products/rose-de-minuit-1.png',
  'p-003': '/images/products/ambre-dore-1.png',
  'p-004': '/images/products/jasmin-etoile-1.png',
  'p-005': '/images/products/cedre-blanc-1.png',
  'p-006': '/images/products/vetiver-imperial-1.png',
  'p-007': '/images/products/iris-sauvage-1.png',
  'p-008': '/images/products/musc-sacre-1.png',
  'p-009': '/images/products/jasmin-etoile-1.png', // bergamote fallback
  'p-010': '/images/products/rose-de-minuit-1.png', // fleur de nuit fallback
  'p-011': '/images/products/oud-noir-1.png', // encens fallback
  'p-012': '/images/products/ambre-dore-1.png', // santal dore fallback
};

products.forEach(p => {
  p.images = [imgMap[p.id]];
});

fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));
console.log('Updated products.json with 8 new PNG images');
