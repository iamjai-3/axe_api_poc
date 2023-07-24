cp package.json knexfile.js Dockerfile build/
cp -R migrations build/migrations
cd build || exit
npm install --only=production
