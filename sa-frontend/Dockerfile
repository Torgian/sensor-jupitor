FROM node:lts-alpine
WORKDIR /sa-frontend

COPY sa-frontend /sa-frontend
# COPY ./package.json .
# COPY ./yarn.lock .

RUN yarn
RUN yarn install
RUN yarn build

EXPOSE 3000/tcp

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

ENV PATH=./node_modules/.bin/:$PATH

COPY . .

CMD ["yarn", "dev"]