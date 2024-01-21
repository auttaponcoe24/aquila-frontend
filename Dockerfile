FROM node:alpine

WORKDIR '/app'

COPY . '/app'

# RUN pnpm install
RUN npm install -g pnpm
COPY pnpm-lock.yaml .
RUN pnpm fetch


CMD [ "pnpm","dev" ]

#  docker build --tag react-cc14 .