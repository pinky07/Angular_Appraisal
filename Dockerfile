FROM httpd:alpine

COPY ./dist/ /usr/local/apache2/htdocs/
COPY ./ci.htaccess /usr/local/apache2/htdocs/
COPY ./ci.httpd.conf /usr/local/apache2/conf/httpd.conf

RUN ls -al /usr/local/apache2/htdocs/
RUN ls -al /usr/local/apache2/conf/httpd.conf
RUN ls -al /etc/apache2/mods-enabled/