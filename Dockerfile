FROM httpd:alpine

COPY ./dist/ /usr/local/apache2/htdocs/
COPY ./ci.htaccess /usr/local/apache2/htdocs/.htaccess
COPY ./ci.httpd.conf /usr/local/apache2/conf/httpd.conf

# Test configuration
RUN httpd -t

RUN ls -al /usr/local/apache2/htdocs/
