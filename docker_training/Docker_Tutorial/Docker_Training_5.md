### Vorting App Docker Application 실습

1. git clone 하기

```
git clone https://github.com/docker/example-voting-app.git
```

clone 받은 후 directory 이동

```
cd example-vorting-app
```

2. App Deploy

Docker Swarm mode 를 이용하여 Cluster 관리와 Docker Engine 에 embeded 되어 있는 Orchestration 을 관리할 것이다.
Swarm 은 Docker Machine 을 많은 Node 들을 생성할 수 있게 도와준다.

3. Create a swarm

```
docker swarm init
```

4. Docker Compose 파일 작성
Window 나 Mac 을 사용하면 이미 설치되어있어 따로 설치가 필요 없다.

```
docker stack deploy
```
해당 명령어는 파일들을 Docker Compose format 으로 허용하여 준다.

root level 에 있는 docker-stack.yml 파일이 필요하다. 


5. First Deploy

```
docker stack deploy --compose-file docker-stack.yml vote
```

6. Deploy 된 stack 확인


```
docker stack services vote
```