# Review Movies APP
> Review movies APP build with Laravel 8 & Docker

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
## composer load 
```
$ docker exec review_app_nginx bash -c "cd var/www/htdocs && cp .env.example .env && composer install"
```

## migration
```
$ docker exec review_app_nginx bash -c "cd var/www/htdocs && php artisan migrate"
```
## Seed
```
$ docker exec review_app_nginx bash -c "cd var/www/htdocs && php artisan db:seed"
```

## API host
```
http://localhost
```

## access to phpMyAdmin
```
http://localhost:8080
```
