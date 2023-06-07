### **Sails App 설치**

1. sails npm 설치

```
npm install sails -g
```

해당 명령어로 sail 를 설치

2. Application 을 생성

```
sails new messageApp
```

해당 명령어로 sails template messageApp 을 생성 후

```
cd messageApp
```
명령어로 생성 된 messageApp 디렉토리로 이동

3. Message Api 생성

```
sails generate api message
```

해당 명령어로 api message 를 생성

4. Application 실행

```
sails lift
```
해당 명령어 사용하여 Application 을 실행

5. 테스트 메세지 생성

Application 을 실행 후 윈도우 CMD 창에서 테스트 메세지를 생성하여 본다.

```
curl -XPOST http://localhost:1337/message?text="ThisIsTestMessage"
```

해당 메세지를 Curl POST 를 이용하여 생성 후 잘 생성 되었는지 확인 한다.

```
curl http://localhost:1337/message
```
생성 된 Message 를 변경하고 싶을 시에는 해당 명령어를 사용한다.

```
curl -XPUT http://localhost:1337/message/{MessageId}/text={변경 원하는 값}
```













