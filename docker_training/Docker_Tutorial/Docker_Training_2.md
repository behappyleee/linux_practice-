## **Static Website Container 로 실행 시키기**

1. Docker Store 에서 이용 가능한 미리 생성을 해 둔 Single-page Website (docker pull 명령어를 이용 ) 가져온다.

```
docker run -d dockersamples/static-site
```

만약 현재 Docker Host 에서 docker image 가 사용이 불가능 하다면 Fetch 를 한다.

해당 명령어를 입력하면 Web Site 가 실행이 된다.

2. Docker Container 가 정상적으로 실행이 잘 되는지 확인을 한다.
```
docker ps 
```
해당 명령어를 사용 하여 Container 가 잘 실행 중인지 확인을 한다.

Container ID 를 확인 후 만약 Container 를 멈추고 싶으면 해당 명령어를 입력한다.
```
docker stop {ContainerID}

OR

docker rm {ContainerID}
```

3. Container 이름을 직접 지정도 가능이 하다.

```
docker run --name static-site -e AUTHOR="Your name" -d -P dockersamples/static-site
```

해당 명령어를 사용 하여 docker container 에 이름도 직접 지정이 가능하다.

```
-d : will create a container with the process detached from our terminal
-P : will publish all the exposed container ports to random ports on the Docker host
-e : is how you pass environment variables to the container
--name : allows you to specify a container name
AUTHOR is the environment variable name and Your Name is the value that you can pass
```

4. port 를 확인 한다.

```
docker port
```
해당 명령어를 사용하여 port 확인이 가능하다. 

5. 같은 Image 를 다른 Container 로 실행 시키는 방법이다.

```
docker run --name static-site-2 -e AUTHOR="Your Name" -d -p 8888:80 dockersamples/static-site
```

해당 명령어를 사용 시 8888 port 로 Container 를 하나 더 실행 시킬 수 있다.

6. Docker 르 실제 배포시에는 Docker 를 설치 후 docker command 를 입력을 한다. 

Docker Container 를 실행 시키는 방법을 알았으니 다음에는 Docker Image 를 생성하는 방법을 학습할 것이다 !


그 전에 더 이상 사용하지 않는 Docker Container 를 중지 할 것이다.

static-site 중지
```
docker stop static-site
```

static-site 제거
```
docker rm static-site
```

static-site-2 제거
```
docker rm -f static-site-2
```

해당 명령어로 중지하였는지 확인
```
docker ps
```