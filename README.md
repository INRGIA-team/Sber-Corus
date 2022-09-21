# Запуск

Перед запуском сервера необходимо поместить в переменную окружения `MAIN_DIRECTORY` абсолютный путь до директории, из которой будет производиться запуск. Это поможет контейнеру локально сохраненять **LOG-файлы**. 

Предположим, что после извлечения нашего репозитория с GitHub, абсолютное расположение файла `docker-compose.yaml` на вашем локальном компьютере: `/The/Best/Site/In/The/World/docker-compose.yaml`. Тогда требуемая команда будет выглядеть так: 

    export MAIN_DIRECTORY="/The/Best/Site/In/The/World"
 
Далее для запуска серверной части необходимо выполнить из той же директории команду:

    docker compose up --build -d
    
После выполнения команды, по окончании сборки контейнера, сайт будет доступен по адресу: `http://localhost:3000/`
  
