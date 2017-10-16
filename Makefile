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

up:
	docker-compose up -d

down:
	docker-compose down

create:
	docker-compose down \
	&& docker-compose build \
	&& docker-compose run --rm backend mix ecto.create \
	&& docker-compose run --rm backend mix ecto.migrate \
	&& docker-compose up

reset-db:
	docker-compose down \
	&& docker-compose run --rm backend mix ecto.reset

migrate:
	docker-compose run --rm backend mix ecto.migrate

###
### Chestnut Tools ###
###



###
### Backend ###
###

# Mix
backend_mix:
	docker-compose run --rm backend mix "$@"

# Run
backend:
	docker-compose run --rm backend "$@"

schema:
	docker-compose run --rm backend mix phx.gen.schema Accounts.User users

# Build
# docker build -t phoenix:1.3.0 .


# Postgres
see_db:
	docker exec -it chestnut_db_1 psql -U chestnut -W