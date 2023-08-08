ARG PLATFORM=linux/arm64
ARG IMAGE=arm64v8/node:18

FROM --platform=$PLATFORM $IMAGE AS deps
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .

FROM --platform=$PLATFORM $IMAGE AS builder
WORKDIR /app
COPY --from=deps /app .
RUN npm run build


FROM --platform=$PLATFORM $IMAGE AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app .


EXPOSE 3000
ENTRYPOINT ["npm","run","start"]

#Rapido
# ARG PLATFORM=linux/arm64
# ARG IMAGE=arm64v8/node:18-alpine

# FROM --platform=$PLATFORM $IMAGE AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build \
#     && npm prune --omit=dev

# ##############################################


# FROM  --platform=linux/arm64 arm64v8/node:18-alpine

# WORKDIR /app

# COPY --from=build /app/package*.json ./
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/public ./public

# RUN npm ci --omit=dev \
#     && npm cache clean --force

# EXPOSE 3000
# CMD ["npm", "run", "start"]
#Padrao
# FROM node

# WORKDIR /app

# COPY ./ .

# RUN npm install

# RUN npm run build

# EXPOSE 3000
# ENTRYPOINT ["npm", "run", "start"]