### **Docker Window 에서 사용**

1. docker version 확인

```
docker version

```
2. Running Windows Container

```
doker image pull mcr.microsoft.com/windows/nanoserver:1809
```
This download Microsoft's Nano Server Docker image onto your environment. That image is a minimal Windows server operation system, packaged to run as a Docker Container. You can use it as the base for your own apps, or you can run containers from it directly. 


3. Try a simple container, passing a command for the container to run.

```
docker container run mcr.microsoft.com/windows/nanoserver:sac2016
```

TODO 현재 nanoserver 가 windows 기반에서만 사용이 가능하다.

하지만 현재 docker 는 linux 기반이라

image operating system "windows" cannot be used on this platform: operating system is not supported

해당 ERROR 가 발생 --> 해결 필요




