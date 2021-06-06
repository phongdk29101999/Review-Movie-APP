# Review Movies API
## Dependence
[frontend](https://github.com/minhld99/React_Movie_Review)

## Requirement
Docker-CE 

## build
```
$ docker-compose build
```

## run
```
$ docker-compose up -d
```

## migration
```
$ docker exec review_app_nginx bash -c "cd var/www/htdocs && php artisan migrate"
```
## Seed
```
$ docker exec review_app_nginx bash -c "cd var/www/htdocs && php artisan db:seed"
```

## access to web api
```
http://localhost
https://localhost
```

## access to phpMyAdmin
```
http://localhost:8080
```
