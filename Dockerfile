FROM nginx:stable-alpine
LABEL version="1.0"

COPY default.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/FormBuilder/ .
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]