### Process

- An Application 은 몇 가지 과정으로 만들어 진다.

- Each process must be stateless and must not have local storage (sessions ...)

- for scalability
- fault tolerance (crashes ...)

- The database that need to persisted, must be saved in a stateful resources (Database, shared filesystems ...)


### config/session.js 에서 Session 설정

- config/session.js 파일에 설정 추가

```
adapter: 'redis',
host: process.env.REDIS_HOST || 'localhost',
```
해당 Key Value 추가 후 다시 Rebuild

```
docker build -t message-app:v0.2 .
```

### docker-compose version 2 새로 작성

REDIS_HOST 는 docker-compose 에 추가되어야 함

```
version: '3'
services:
  mongo:
    image: mongo:3.2
    volumes:
      - mongo-data:/data/db
    expose:
      - "27017"
  kv: 
    image: redis:alpine
    volumes:
      - redis-data:/data
    expose:
      - "6379"
  app:
    image: message-app:v0.2 # new version taking into account REDIS_URL
    ports:
      - "8000:80"
    links:
      - mongo
    depends_on:
      - mongo
    environment:
      - MONGO_URL=mongodb://mongo/messageApp
      - REDIS_URL=redis
volumes:
  mongo-data:
  redis-data:
```




