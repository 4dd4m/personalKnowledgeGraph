# What I learnt today...

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