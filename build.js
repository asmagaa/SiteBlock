const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'siteblock.js');
const distPath = path.join(__dirname, 'dist', 'siteblock.user.js');

fs.readFile(srcPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading source file:', err);
        return;
    }
    
    fs.writeFile(distPath, data, (err) => {
        if (err) {
            console.error('Error writing dist file:', err);
            return;
        }
        console.log(`Successfully built: ${distPath}`);
    });
});