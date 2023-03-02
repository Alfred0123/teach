docker run -d -p 5432:5432 \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=password \
-e POSTGRES_DB=postgres \
--name postgresql postgres:latest
# -e PGDATA=/data/postgres --name postgresql \
# -v ~/docker/postgres:/data/postgres postgres:latest