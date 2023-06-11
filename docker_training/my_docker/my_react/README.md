### Docker Deploy Test Project

1. TypeScript 기반 Project 생성

2. Dockerfile Script 작성

```
# 가져올 이미지를 정의
FROM node:latest

# 경로 설정 하기
WORKDIR /app

# package.json 워킹 디렉토리에 복사 (. 은 설정한 워킹 디렉토리를 의미)
COPY package.json .

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사
COPY . .

# 3000 번 포트
EXPOSE 3000

# npm script 실행
CMD ["npm", start]
```

3. Docker Script Build

현재 Project 경로로 이동하여 (Dockerfile 존재하는 경로로 이동) 해당 명령어 실행

```
docker build . -t my_react
```

4. Docker Image 가 잘 생성 되었는 지 확인

```
docker images
```


5. 빌드 된 Docker image Container 로 실행하기

- docker run -d --name <container-name> <image-name>
    - d Option : 컨테이너를 백그라운드로 (detached 모드) 로 실행하고 실행 결과로 컨테이너ID 출력하는 옵션 (해당 옵션이 없으면 터미널에 컨테이너 로그가 출력이 되고 종료하기 위하여 Crtl + C 를 입력 하여야 한다.)

```
docker run -d --name react_container my_react
```

```
docker ps
```
해당 명령어로 현재 Container 가 실행 중인지 확인 한다 

6. docker run 을 하였지만 바로 port 접속은 힘들다

- docker run 명령어를 사용하여 docker image 를 container 로 실행하였지만 바로 해당 PORT 로 접속이 불가능하다. (ex: localhost:3000 으로 접속 시 접속이 바로 불가능 하다.)
    - 컨테이너는 호스트 환경 과 격리 된 파일 시스템과 네트워크를 가지기 때문
    - 호스트에서는 컨테이너로 접근 가능하도록 포트 포워딩을 시켜주어야 한다.

    - ``` docker rm <container_name> 으로 도커 컨테이너 제거 (보통 실행 중지 후 도커 컨테이너 제거)```

7. Port Forwarding 시켜주기
- Port Forwarding : 포트를 전달해주는 것

```
docker run -d -p 3308:3000 --name <container-name> <image-name>
```

결과를 구분하기 위하여 Host Port 를 3306 으로 지정, -p 3306:3000 의 의미는 로컬 머신 (127.0.0.1) 의 3000 번 포트로 접근하는 모든 트래픽을 도커 컨테이너의 3000 번 포트로 보낸 다는 뜻이다.

```
http://localhost:3308
```

해당 주소로 접속하면 Docker Container 로 실행하였던 Image 실행이 가능 !!!!

### Docker Engine 은 Host 에서 실행이 되고, Container 는 Linux 기반의 OS 만 수행이 가능, Docker 는 VM 처럼 Hardware 를 가상화 해주는 것이 아닌 Guest OS (Container) 를 Isolation 해준다. Container 는 기본적으로 Linux OS 만 지원을 해주는 데 Container 자체에는 Kernel 등의 OS 이미지가 들어가 있지 않다. Kernel 은 말 그대로 Host OS 를 그대로 사용하되, Host OS 와 Container OS 의 다른 부분만 Container 내에 같이 Packing 된다. 




