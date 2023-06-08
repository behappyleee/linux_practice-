### Code Base

하나의 Code Base 가 여러곳에 배포 시에 사용 된다.

- development
- staging
- production

#### TEST 를 위하여 README.md 파일을 생성

<br>

```
echo "# messageApp" >> README.md
```

#### sails-mongo 설치

<br>

```
npm install sails-mongo --save
```
해당 명령어를 사용하여 sails-mongo 를 설치

<br>

#### Handle external services as external resources of the application.

- database
- log services
- ...

##### This is ensure the application is loosely coupled with the services so it can easily switch provider or instance if needed.
- ex) connection.js 에 설정 하였던 MONGO_URL 처럼 MongoDB 에 뭔가 문제가 생기면 우리는 쉽게 다른 instance 로 switch 가 가능하다. 새로운 MONGO_URL 을 environment variable 을 설정 해주면 된다.


















