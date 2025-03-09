// Custom build script for Vercel
const { execSync } = require('child_process');
const path = require('path');

console.log('Starting Vercel build process...');

try {
  // Ensure we're using the locally installed binaries
  const nodeModulesBin = path.join(process.cwd(), 'node_modules', '.bin');
  const PATH = `${nodeModulesBin}:${process.env.PATH}`;
  
  console.log('Generating Prisma client...');
  execSync('npx prisma generate', { 
    stdio: 'inherit',
    env: { ...process.env, PATH }
  });
  
  console.log('Building NestJS application...');
  execSync('npx nest build', { 
    stdio: 'inherit',
    env: { ...process.env, PATH }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 