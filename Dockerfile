FROM httpd:alpine

RUN a2enmod rewrite

COPY ./dist/ /usr/local/apache2/htdocs/
COPY ./ci.htaccess /usr/local/apache2/htdocs/
COPY ./ci.httpd.conf /usr/local/apache2/conf/httpd.conf
