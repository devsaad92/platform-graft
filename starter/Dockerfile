FROM  nginx
COPY ./dist/ /usr/share/nginx/html
#RUN  rm /etc/nginx/site-available/default
COPY ./nginx-custom.conf /etc/nginx/site-available/default
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
