FROM httpd:alpine

RUN a2enmod rewrite

COPY ./dist/ /usr/local/apache2/htdocs/
