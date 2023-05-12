#Требования к системе
    Php не ниже 7.3
    Mysql не ниже 5.7
    Наличие composer
    
#Разворачивание проекта
1. Спулить данный репозиторий
2. Запустить команду 
```
composer install
```
3. Создать в mysql БД с любым именем
4. Настроить подключение к БД
    4.1. В корне проекта есть файл .env.example. Его скопировать и переименовать в .env
    4.2. В файле .env поставить значения следующим переменным:
        - DB_DATABASE - имя созданной в mysql БД
        - DB_USERNAME - имя пользователя mysql (по дефолту root)
        - DB_PASSWORD - пароль пользователя mysql, если таковой имеется (по дефолту отсутствует)
        
        Если mysql запущена не локально, или крутится не на дефолтном порте, то также надо определить значение следующим переменным:
        - DB_HOST - имя хоста, на котором вертится mysql
        - DB_PORT - порт, на котором крутится mysql      
5. Запустить команду 
```
php artisan migrate --seed
```
6. Запустить команду 
```
php artisan serve
```
7. Перейти в браузере на http://127.0.0.1:8000 (должна открыться страница авторизации)
    
