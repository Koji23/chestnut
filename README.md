# RPP Starter

  RPP starter is a quick boilerplate for starting up dockerized applications with React,
  Phoenix, and Postgres. In it's current form it's configured to spin up three services
  to handle the frontend, backend, and database services. However it's model can be
  extended for larger micro-service architectures.

  TODO: clean up folder/image/container naming, for now backend is called mango

# From Scratch

    1. docker-compose run --rm rpp_mango mix phx.new . --app mango

    2. update db config in dev.exs

    3. docker-compose build

    4. docker-compose run --rm tm_mango mix ecto.create

    5. docker-compose run --rm tm_mango mix ecto.migrate

    6. docker-compose up

    7. localhost:4000


#References
  http://blog.cloud66.com/deploying-your-phoenix-applications-in-production-using-docker/
  https://blog.polyscribe.io/a-complete-guide-to-deploying-elixir-phoenix-applications-on-kubernetes-part-2-docker-and-81e934c3fceb
  https://github.com/nicbet/docker-phoenix

# Weird known warnings
  https://github.com/phusion/baseimage-docker/issues/58
  https://github.com/phusion/baseimage-docker/issues/319