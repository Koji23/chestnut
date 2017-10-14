###
### Docker Tools (not project specific) ###
### 

# Delete every Docker container
# Must be run first because images are attached to containers
kill-all-containers:
	docker rm -f $(docker ps -a -q)

# Delete every Docker image
kill-all-images:
	docker rmi -f $(docker images -q)

###
### Docker Compose Tools ###
###

images:
	docker-compose build

containers:
	docker-compose up -d

###
### Backend ###
###

# Mix
backend_mix:
	docker-compose run --rm backend mix "$@"

# Run
backend_run:
	docker-compose run --rm backend "$@"

# Build
# docker build -t phoenix:1.3.0 .
