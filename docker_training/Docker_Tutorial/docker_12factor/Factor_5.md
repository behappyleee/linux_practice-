### **Port Binding**
- To be compliant with 12 factor, an app must use specialized dependencies (such as http server ....) and exposes its service through a port.

- Docker already handles that for us, docker-compose file 을 보면 app container 가 port 8000:80 에 내부적으로 연결 되어 있다.




