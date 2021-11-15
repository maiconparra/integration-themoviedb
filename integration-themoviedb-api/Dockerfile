FROM node:latest
ENV NODE_ENV=development

ARG user
ARG uid

WORKDIR /var/www/integration-themoviedb-api/

COPY ["package.json", "yarn-lock*", "./"]

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add 
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y yarn

RUN yarn install

RUN useradd -G www-data,root -u $uid -d /home/$user $user

COPY . .

CMD [ "yarn", "start" ]

EXPOSE 3333