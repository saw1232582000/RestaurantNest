#!/bin/bash

# Build the NestJS application
echo "Building NestJS application..."
npm run build

# Ensure Prisma client is generated
echo "Generating Prisma client..."
npx prisma generate

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment process completed!" 