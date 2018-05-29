# Stage 0, based on Node.js, to build and compile Angular
FROM node:8.6 
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY ./ /app/
EXPOSE  3000
CMD ["npm", "start"]
