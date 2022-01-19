FROM node:lts-alpine

# Working in root app
WORKDIR /usr/source/app
COPY package.json package-lock.json tsconfig.json .prettierrc ./
COPY source source
RUN npm config set unsafe-perm true
RUN npm install

# build app
RUN ls -l source
RUN npm run build
# remove devDependencies libraries
RUN npm prune --production
RUN rm -r source

EXPOSE 9000

CMD ["npm", "start"]