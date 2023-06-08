### Build / Release / Run

- Build / release and Run phase must be kept seperated.


#### **Dockerfile 생성 후 Script 작성**

```
FROM node:4.4.5
ENV LAST_UPDATED 20230608T210500

# Copy Source Code
COPY . /app

# Change Working Directory
WORKDIR /app

# Install dependencies
RUN npm install

# EXPOSE API port to the outside
ENV PORT 80
EXPOSE 80

# Launch application
CMD ["npm", "start"]
```

Script 작성 후 docker 를 이용하여 build 함

```
docker build -t message-app:v0.1 .
```

docker image 잘 생성되었는 지 확인

```
docker images
```

- There are several options to inject the configuration in the build, among them

- create a new image based on the build
- define a Compose file

#### docker-compose.yml 파일도 생성
```
version: '3'
services:
  mongo:
    image: mongo:3.2
    volumes:
      - mongo-data:/data/db
    expose:
      - "27017"
  app:
    image: message-app:v0.1
    ports:
      - "8000:80"
    links:
      - mongo
    depends_on:
      - mongo
    environment:
      - MONGO_URL=mongodb://mongo/messageApp
volumes:
  mongo-data:
```

이 docker-compose 파일은 Build 될 때 Environment 환경이 주입 될 것이다.
Run phase 는 수동으로 할 수 있다 Compose CLI 나 orchestrator (Docker Cloud) 

Compose CLI 는 는 전역적으로 간단하게 docker-compose up-d 라고 사용한다.










