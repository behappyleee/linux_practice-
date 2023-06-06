## **Docker Image 생성**

<br>

### 이번 Section 은 Docker Image 에 대하여 조금 더 깊게 학습을 할 것이다. 

<br>

Docker Image 는 Container 에 기본 구성 요소이다. 자신만의 Image 를 Build 할 수도 있고 해당 Image 를 자신의 Local 에서 실행도 가능하다. Docker Cloud 에 Image Push 도 가능하다.

```
docker images
```

<br>

해당 명령어를 사용 시 Docker Image 들의 목록 확인이 가능하다.

<br>

Image 에 각기 다른 `TAG` 를 사용이 가능하다.
TAG는 쉽게 말새 git 이랑 비슷하다고 생각하면 된다. 버전 관리에 용이하다.

```
docker pull ubuntu:12.04
```
명령어를 사용 하며 ubuntu 에 특정 버전을 Pull 이 가능하다.
만약 Version 을 명시할 수 없는 경우에는 ```latest``` 이름이 붙은 Version 이 생성이 된다.

```
docker pull ubuntu
```
해당 명령어를 사용하면 ubuntu:latest: 가 Pull 이 된다.

새로운 Docker Image 를 얻기 위하여서는 Docker Store 에서 Pull 을 하거나 직접 생성도 가능하다.

Docker Store 에서 수백가지에 이미지가 이용이 가능하다.

```
docker search 
```

또한 해당 명령어를 사용하여 Image 검색도 Command Line 에서 가능하다.

#### Base Image 와 Child Image

- Base Images : No Parent Image, 대부분 OS 같은 Image (ubuntu, alpine, debian) 

- Child Images : Base Iamge 를 기반으로 Build 된 Image 그리고 추가적인 기능이 있는 Image 

#### Ofiicial Image 와 User Image

- Official Image : python, node, alpine, nginx 같은 image 들이 Official 이미지 들이다.

- User Image : User 들이 직접 생성한 Image 들이다.






















