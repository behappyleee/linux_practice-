### Running a Registry Container in Linux

- Docker expects all registries to run on HTTPS. 

- This part tutorial will run a version on HTTP.

- The docker engine needs to be explicitly setup to use HTTP for the insecure registry.


1. Edit or create /etc/docker/docker

```
sudo vi /etc/docker/docker

# add this line
DOCKER_OPTS="--insecure-registry localhost:5000"
```

2. Close and save the file, then restart the docker daemon.

```
sudo service docker restrat
```

