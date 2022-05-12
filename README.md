# What I learnt today...

## 12/5/2022 - Thu
### Docker - Resources Management

**Docker containers may use unlimited CPU, memory, and device I/O resources.**

### Memory & CPU

Listing the container resources:
```bash
docker stats ch6_mariadb
```

```bash
CONTAINER ID   NAME          CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O         PIDS
94e69fffaa2a   ch6_mariadb   0.00%     82.61MiB / 256MiB   32.27%    2.54kB / 0B   4.51MB / 45.2MB   19
```

```bash
docker container run|create <number><optional unit> where unit = b, k, m or g
```

for example:
```bash
docker container run -d --name ch6_mariadb \        #"container" command is added
--memory 256m \                             #sets the memory constraint
--cpu-shares 1024 \                         #relative process weight (integer)
--cpus  \                                   #CPU cores
--cpuset-cpus 0 \                           #restrictig to core number (avoid context switching)
--cap-drop net_raw \
-e MYSQL_ROOT_PASSWORD=test \               #env. variable provided passwd.
mariadb:5.5
```
Only protects for overconsumption, does not guarantee the given memory for the app.

### Devices

Share the hosts webcam with the container (mount exactly to the same spot)
```bash
docker container run -it --rm \
--device /dev/video0:/dev/video0 \          #/dev/webcam
ubuntu:16.04 ls -al /dev
```

### Shared Memory
If you need to run programs that communicate with shared memory in different
containers, then you’ll need to join their IPC namespaces with the *--ipc* flag.
The IPC namespace prevents processes in one container from accessing the mem-
ory on the host or in other containers.


```bash
docker container run -d --name ch6_ipc_consumer \
--ipc container:ch6_ipc_producer \              #referencing another containers memory namespace
dockerinaction/ch6_ipc -consumer
```
Sharing memory between containers is
a safer alternative than sharing memory with the host. Sharing memory with the host
is possible using the *--ipc=host* option. However, sharing host memory is difficult in
modern Docker distributions because it contradicts Docker’s secure-by-default pos-
ture for containers.

### Users
The root user has almost full privileged access to the state
of the container. Any processes running as th at user inherit those permissions. It fol-
lows that if there’s a bug in one of thos e processes, it might damage the container.
There are ways to limit the damage, but the most effective way to prevent these types
of issues is not to use the root user.

```bash
docker container run --rm --entrypoint "" busybox:1.29 whoami
```
Running a simple *whoami* to determine the default user (entrypoint which is the images "stratup script" is set no none, to avoid some possible user switching)

```bash
docker container run --rm \
--user nobody \                     #set container's run-as user
busybox:1.29 id
```

By default, the Docker
daemon API is accessible via a UNIX domain socket located on the host at /var/run/
docker.sock. The domain socket is protected with filesystem permissions ensuring that
only the root user and members of the docker group may send commands or retrieve
data from the Docker daemon. 



## 10/5/2022 - Tue
### Docker
### Bind fs
Substitutes a container file with a host file. WARNING: **in lines with *--mount*, there is no space after "," !**. *readonly* option is nice.
Works on single files only. [ref](https://docs.docker.com/storage/bind-mounts/)

```bash
docker rm -f diaweb
CONF_SRC=~/example.conf; \
CONF_DST=/etc/nginx/conf.d/default.conf; \

LOG_SRC=~/example.log; \
LOG_DST=/var/log/nginx/custom.host.access.log; \

docker run -d --name diaweb \
--mount type=bind,src=${CONF_SRC},dst=${CONF_DST},readonly=true \
--mount type=bind,src=${LOG_SRC},dst=${LOG_DST} \
-p 80:80 \
nginx:latest
```
### tmpfs
In memory storage. Never stored statically in the container. (mostly sensitive data). Permission is octal.
```bash
docker run --rm \
--mount type=tmpfs,dst=/tmp,tmpfs-size=16k,tmpfs-mode=1770 \
--entrypoint mount \
alpine:latest -v
```
### Volumes
Same as bind mount but with directories. “I need a place to put some data that I’m working with.” Docker auto remove unused files. Share data between containers by using volumes
```bash
docker volume create \
--driver local \
--label example=cassandra \ #--label key=value
cass-shared
```

```bash
docker run -d \
--volume cass-shared:/var/lib/cassandra/data \ #path in the container
--name cass1 \
cassandra:2.2
```

```bash
docker volume list
docker volume create
docker volume remove
docker inspect volumeName
docker volume prune --filter example=cassandra  #removes volumes via interactive confirmation (--force to supress)
```

Reuse an already existing volume in another container *--volumes-from imageName* (takes all volume). Mount points cannot be changed. Race condition.

```bash
docker run --name fowler \
--mount type=volume,dst=/library/PoEAA \
--mount type=bind,src=/tmp,dst=/library/DSL \
alpine:latest \
echo "Fowler collection created."

docker run --name knuth \
--mount type=volume,dst=/library/TAoCP.vol1 \
--mount type=volume,dst=/library/TAoCP.vol2 \
--mount type=volume,dst=/library/TAoCP.vol3 \
--mount type=volume,dst=/library/TAoCP.vol4.a \
alpine:latest \
echo "Knuth collection created"

docker run --name reader \
--volumes-from fowler \
--volumes-from knuth \
alpine:latest ls -l /library/
```

* Mount points allow many filesystems from many devices to be attached to a single file tree. Every container has its own file tree.
* Containers can use bind mounts to attach parts of the host filesystem into a container.
* In-memory filesystems can be attached to a container file tree so that sensitive or temporary data is not written to disk.
* Docker provides anonymous or named storage references called volumes.
* Volumes can be created, listed, and deleted using the appropriate docker volume subcommand.
* Volumes are parts of the host filesystem that Docker mounts into containers at specified locations.
* Volumes have life cycles of their own andmight need to be periodically cleaned up.
* Docker can provide volumes backed by network storage or other more sophisticated tools if the appropriate volume plugin is installed.

### Networks

```bash
docker network ls   #list all network
```

```bash
NETWORK         ID          NAME    DRIVER  SCOPE
63d93214524b    bridge      bridge  local       #bridge: intercontainer connectivity on one machine (not recommended. use own bridge network)
6eeb489baff0    host        host    local       #host: will not create any network (localhost)
3254d02034ed    none        null    local       #only loopback interface available
#local, global (created on every node with no adress), swarm (multi host, cluster wide)
```

That IP address is the one that any other container **on this bridge network** would use to communicate with services you run in this container. 
The **loopback** interface can be used only for communication **within the same container**.

The overlay network driver is availabl e on Docker engines where swarm mode is
enabled. Overlay networks are similar in construction to bridge networks, but the log-
ical bridge component is multihost-aware and can route intercontainer connections
between every node in a swarm.

In short, always deploy con-
tainers with appropriate application-level access-control mechanisms because contain-
ers on the same container network will have mutual (bidirectional) unrestricted
network access.