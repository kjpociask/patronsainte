FROM dockerfile/nodejs

RUN npm install -g bower gulp

RUN mkdir /patronsainte.com
WORKDIR /patronsainte.com

ADD . /patronsainte.com

RUN npm install
RUN bower install --allow-root
