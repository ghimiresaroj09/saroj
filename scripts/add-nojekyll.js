const fs = require('fs');
const path = require('path');

// Add .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
const outDir = path.join(__dirname, '..', 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

if (fs.existsSync(outDir)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll file');

  // Copy CNAME if it exists
  const cnameSrc = path.join(__dirname, '..', 'CNAME');
  const cnameDest = path.join(outDir, 'CNAME');
  
  if (fs.existsSync(cnameSrc)) {
    fs.copyFileSync(cnameSrc, cnameDest);
    console.log('✓ Copied CNAME file');
  }
} else {
  console.error('✗ out directory not found. Run next build first.');
  process.exit(1);
}
