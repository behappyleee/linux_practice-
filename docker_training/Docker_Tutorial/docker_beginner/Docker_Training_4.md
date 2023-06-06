### 자신만의 Image 직접 생성하여 보기
#### 이번 Section 목적은 작은 Python Flask App 을 만들어 볼 것이다. 매번 다른 고양이들이 표출 될 것이다.

<br>

1. flask-app 은 다음 과 같은 File 들을 생성할 것이다.

- app.py
- requirements.txt
- templates/index.html
- Dockerfile


Dockerfile 은 Docker Daemon 을 실행 하기 위한 Command List 를 포함하고 있다.
Dockerfile 은 Docker 가 app 을 실행 시키는데 필요한 정보들을 포함하고 있다.

```
# our base images
FROM alpine:3.5

# Install python and pip
RUN apk add --update py2-pip

# install Python modules needed by the Python app
COPY app.py /usr/src/app/

# copy files required for the app to run
COPY templates/index.html /usr/src/app/templates/

# tell the port number the container shoule expose
EXPOSE 5000

# Run The Application
CMD ["python", "/usr/src/app/app.py"]
```

2. Image 를 Build 한다.
Dockerfile 이 있으면 Image build 가 가능하다. ```docker build``` 명령어는 Dockerfile 에서 docker 이미지를 생성하여 준다.

3. docker file 명령어는 꽤 심플하다 

docker_app 디렉토리에 app 을 실행하는데 필요한 파일들을 생성해 두었다

해당 디렉토리로 이동 후

```
docker build -t {YourName}/myfirstapp .
```
-t 는 옵션 사항이며 tag name tag 이다. 
. 은 현재 directory 에 Dockerfile 이 있으면 . 을 써준다.


4. Image 를 Build 를 하였으면 Container 를 실행 한다.

```
docker run -p 8888:5000 --name myfirstapp lee/myfirstapp
```

container 를 실행 한 후 http://localhost:8888 로 접속


TODO 2.3.4 Run your image 까지 학습 다음 학습 하기 !!!

5. Terminal 에서 Docker Cloud 에 Image 를 올리기 위하여 로그인

```
docker login
```

해당 명령어를 통하여 기존 Docker 계정으로 로그인

6. Docker 로그인을 한 후 터미널에서 Docker Image 를 Push

```
docker push {이미지 이름}
```

Docker 저장소에 자신의 Image 를 올림


### Docker Image 들을 Docker Hub 에 Push 하는 방법

1. Docker Login

```
docker login
```
Docker Login 명령어를 입력 시 Username 을 입력하라고 한다. 그럼 Docker Hub 계정 id 를 입력 하면 곧 이어 Password 입력도 요구 한다.

2. Docker Image 생성

```
docker build -t {Docker 계정 UserName} / {Docker App 이름}
```
!! 여기서 주의하여야 할 점은 Docker Image 를 생성 시 Docker Username 과 동일하게 생성하여야 한다는 것이다. 아니면 denied 가 발생한다

3. 생성된 Docker Image Push

```
docker push {Docker 계정 UserName} / {Docker App 이름}
```
생성이 된 Image 를 Docker Hub 에 Push 를 해주면 Docker Hub 웹사이트에서 Push 된 Image 확인이 가능하다.


### Docker Command Summary

- FROM : starts the Dockerfile. Dockerfile 은 반드시 FROM 명령어로 시작함, FROM Command 는 Argument 로 Imgae 이름을 필요로 함

- RUN : RUN 명령어는 만들어진 Image 를 build 할 시에 사용, Docker 는 만들어진 이미지를 실행할 시에 Run 명령어를 사용할 것이다. 

- COPY : Local File 들을 Container 로 복사함

- CMD : CMD 명령어는 Image 가 실행 되었을 때 실행하는 명령어로 정의한다. 이것은 Image ㅡㄹㄹ 새로 생성을 하는 것이 아닌 간단하게 Command 를 실행을 한다. 오직 하나의 Docker / Image 마다 한개씩 사용이 가능하다. 

- EXPOSE : 사용자를 위하여 hint 를 생성을 한다. 이것은 inspect 명령어에 표출 될 정보를 포함한다.

- PUSH : 자신의 Image 를 Docker Cloud 에 Push 를 한다.









