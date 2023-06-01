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



