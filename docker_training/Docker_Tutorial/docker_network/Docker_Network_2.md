### **Bridge Networking**

1. Default Bridge Network

```
docker network ls 
```
해당 명령어로 bridge 네트워크를 확인한다.

bride 네트워크가 bridge 드라이버와 관련있는 bridge 네트워크를 보여준다.

네트워크란 driver 가 서로 연결 되어 있다는 것을 아는 것은 중요하다. 하지만 두 가지는 같은것은 아니다. (이번 섹션에서는 같은것이라고 가정하겠다, 하지만 두 가지는 같은 것은 절대 아니다 !)

- Bridge 네트워크는 Scope 가 Locally 이다. 이 말은 Network 는 오직 Docker Host 에만 존재한다는 뜻이다. Bridge driver 는 오직 single-host networking 만 제공을 한다.

- 모든 Bridge 네트워크들은 Linux Bridge 에 기반한다 (a.k.a a virtual switch)


2. Install brct1 

```
install brct1
```

해당 명령어를 사용하여 docker host 에 brct1 을 설치한다. 


3. 

