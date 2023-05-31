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


