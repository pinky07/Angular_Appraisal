FROM httpd:alpine

COPY ./dist/ /usr/local/apache2/htdocs/
COPY ./ci.htaccess /usr/local/apache2/htdocs/.htaccess
COPY ./ci.httpd.conf /usr/local/apache2/conf/httpd.conf

RUN httpd -l
RUN httpd -M

RUN ls -al /usr/local/apache2/htdocs/
RUN ls -al /usr/local/apache2/conf/httpd.conf