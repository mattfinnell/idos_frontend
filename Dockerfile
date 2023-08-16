FROM node:alpine
WORKDIR /frontend
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]