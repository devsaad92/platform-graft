# Stage 0, based on Node.js, to build and compile Angular
FROM node:8.6 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --aot --environment $env


FROM  nginx
COPY --from=node /app/dist/ /usr/share/nginx/html
#RUN  rm /etc/nginx/site-available/default
COPY ./nginx-custom.conf /etc/nginx/site-available/default
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
