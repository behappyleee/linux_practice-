### Logs

-Logs need to be handle as a timeseries of textual events

- The application should not handle or save logs locally but must write them in stdout / stderr.

- A lot of services offer a centralized log management (Elastic Stack / ELK , Splunk, Logentries, ...), and most of them are very easily integrated with Docker.

Example of Logentries dashboard:

### **Meaning for our application**

-In order to centralize the logs, we can add a log service in our docker-compose file. The API token (provided by logentries) needs to be added to the service.

-As we can see in the volume section, the Docker socket needs to be mounted so logentries container can retrieve each logs emitted by the running containers and send them to logentries external service.

<br>

```
log:
  command: '-t XXXXXX-XXXXX-XXXXX-XXXXX'
  image: 'logentries/docker-logentries’
  restart: always
  volumes:
    - '/var/run/docker.sock:/var/run/docker.sock'
```


