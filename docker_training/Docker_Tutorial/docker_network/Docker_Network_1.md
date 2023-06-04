### **Docker Network Command**

1. Docker Network 확인

```
docker network
```
해당 명령어는 컨테이너 네트워크를 구성하고 설정하는데 가장 주요한 명령어이다.

2. DOcker Network List 확인

```
docker network ls
```
해당 명령어는 컨테이너 네트워크들을 보여준다.

3. Inspect a Network

```
docker network inspect bridge
```
해당 명령어는 Network 구성 자세한 사항 들을 보여준다.
Container Network Host 에 자세한 네트워크 구성 정보를 확인하기 위하여 보통 사용한다. 

```
docker net work inspect bridge
```
해당 명령어는 bridge 라고 불리는 네트워크게 상세 구성 정보를 보여준다.

- NOTE : docker network inspect `<network>` 해당 network 는 network Name 이나 NetWorkID 이며 driver 확인이 아니다.


4. List Network Driver Plugins

```
docker info
```
해당 명령어는 Docker Installation 에 대한 정보들을 보여준다







