### 1. Alpine Linux (a light weight linux distribution) Container 를 Pull  

```
docker pull alpine
```

### 2. docker images 명령어를 사용하여 pull 받은 모든 image 를 확인 가능

```
docker images
```

docker 에서 모든 image 들을 출력

### 3. docker run 명령어를 활용하여 Docker Container 를 Run 하기

```
docker run alpine ls -l 
```

명령어를 입력시 alpine 을 run 한 후 그 다음 ls -l 명령어를 실행하여 디렉토리 리스트 확인 가능

Docker 명령어를 RUN 할 시  

### 4. Docker Run 명령어 입력 시 일어나는 현상

1. Docker 는 client 에게 Docker Daemon 연결을 시도

2. Docker Daemon 은 먼저 Local Store 를 확인 후 Local 에서 image 가 사용 가능하면 사용하고 아니면 Docker Store 에서 Download 를 받는다. (docker run 으로 할 시 docker pull 과정은 생략 가능)

3. Docker Daemon 은 컨테이너를 생성을 하고 Container 안에서 run 명령어를 실행 한다.

4. Docker Daemon 은 Docker Client 에게 output Stream 을 전달하여 준다.

```
docker run alpine echo "hello from alpine"
```

5. Virtual Machine 을 키고 명령어를 실행 후 실행 한것을 죽인다

```
docker run alpine /bin/sh
```
아무일도 일어 나지 않는다. 이러한 상호작용은 Shell 이 Script 를 실행 후 바로 나간다. 

만약에 상호작용 Terminal 에서 실행하고 싶을 시 

```
docker run -it alpine /bin/sh
```
해당 명령어를 사용 시 바로 Shell 을 나오지 않고 그 안에서 Command 실행이 가능하다 

6. 현재 실행 중인 Container 들을 확인 하는 방법이다.

```
docker ps
```

해당 command 는 현재 실행중인 Container 들을 보여준다.
더 유용한 명령어는 

```
docker ps -a
```

해당 명령어는 실행 하였던 모든 Container 들을 보여준다.
해당 명령어를 실행 후 STATUS 를 확인을 하면 현재 실행 중이지 않은 컨테이너들은 Exited a few minutes ago 라는 상태로 기록이 된다.


## 용어

- Images : Container 를 생성하기 위한 File System 과 Application 정보이다. 더 많은 정보를 찾기 위하여서는 ``` docker inspect alpine``` 해당 명령어를 입력 한다.

- Containers : Docker Image 를 Running 시 Container 는 실제 Application 을 실행 시킨다. Container 는 Application 에 모든 Dependencies 들을 포함한다. 그리고 사용자 OS 공간에서 독립적으로 실행이 된다. ``` docker run ``` 해당 명령어를 사용하여 Container 를 생성할 수 있다. 
실행 중인 Container 목록들은 docker ps 를 통하여 확인이 가능하다. 

- Docker Daemon : Docker Container 들을 관리하기 위하여 background 에서 실행 중인 서비스 이다.

- Docker Client : Docker Daemon 과 상호작용 할 수 있도록 해주는 도구이다.

- Docker Store : Docker Image 저장소 이다. 












