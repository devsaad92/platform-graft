FROM  nginx
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx-debug", "-g", "daemon off;"]
