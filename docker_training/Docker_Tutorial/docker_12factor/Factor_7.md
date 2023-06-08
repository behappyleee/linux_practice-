### **Disposability**

- it must have a quick start up
    - ease the horizontal scalability

- it must ensure a clean shutdown
   - stop listening on the port
   - finish to handle the current request
   - usage of a queueing system for long lasting (worker type) process

#### **Meaning for our application**

- Our application exposes HTTP endPoints that are easy and quick to handle. if we were to have some long lasting worker processes, the usage of a queueing system, like Apache Kafka, would be a great choice.

- Kafka stores indexes of events processed by each worker. When a worker is restarted, it can provided an index indicating at which point in time it needs to restart the event handling. Doing so no events are lost.

#### Kafka 설정 docker-compose 파일에 추가


```

... 

# Kafka message broker
zookeeper:
  image: wurstmeister/zookeeper
  ports:
    - "2181:2181"
kafka:
  image: wurstmeister/kafka
  ports:
    - "9092:9092"
  links:
    - zookeeper:zk
  environment:
    KAFKA_ADVERTISED_HOST_NAME: 192.168.99.100
    KAFKA_CREATE_TOPICS: "DATA:1:1"
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
```






