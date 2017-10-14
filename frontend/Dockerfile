FROM node:8.7

EXPOSE 3000

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN npm install

CMD ["npm", "start"]

