const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'backend');
const folders = [
  'src/config',
  'src/controllers',
  'src/models',
  'src/routes',
  'src/middlewares',
  'src/services',
  'src/sockets',
  'src/jobs',
  'src/utils',
];

const files = {
  'src/app.js': '',
  'src/server.js': '',
  'Dockerfile': '',
  '.env': '',
  'package.json': '{}',
  'README.md': '# Service Booking Backend\n',
};

function createStructure() {
  // Create base directory
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);

  // Create folders
  folders.forEach(folder => {
    const dirPath = path.join(baseDir, folder);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  });

  // Create files
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(baseDir, filePath);
    fs.writeFileSync(fullPath, content);
  });

  console.log('✅ Backend folder structure created successfully!');
}

createStructure();
