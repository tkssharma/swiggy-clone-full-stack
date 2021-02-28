#!/usr/bin/env sh
#title           :sequelize.sh
#description     :This script will assist in setting up server
#author          :Extended from Wilson's Version @WSM
#usage           :sh sequelize.sh
#notes           :Install Docker and docker-compose to use this script.
#==============================================================================
sqlz="./node_modules/.bin/sequelize"
ROOT_PASSWD_HASH='$2a$10$%^&*(WERTGHJGF).%^&43567456.435678%$#@'
## env values
if [ ! -f ./env.sh ]; then
    echo "env.sh File not found!"
    printf "To use default value press Enter or CTRL+C to exit"
    read -r dummy
    USERNAME=root
    HOST=127.0.0.1
    PASSWORD=root
    DATABASE=TestDB
else
    . ./env.sh # load env variables from file

    if [ $? != 0 ]; then
        echo "Error loading environment variables"
        exit 1;
    else
        echo "====== Environment variables loaded form .env file ======";
    fi
fi

drop_db(){
    $sqlz db:drop
}
create_db(){
    $sqlz db:create
}
group_by_fix(){
    mysql -u$USERNAME -h$HOST -p$PASSWORD -e "SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION'"
}
migrate_schema(){
    $sqlz db:migrate
}
migrate_procedures(){
    mysql -u$USERNAME -h$HOST -p$PASSWORD $DATABASE < mysql/procTrig.sql
}
seed_db(){
    $sqlz db:migrate --migrations-path seeders
}
set_default_root_pswd(){
    mysql -hmysql -uroot -proot $DATABASE -e  \
    "UPDATE User SET password = '${ROOT_PASSWD_HASH}' WHERE id IN (1, 2)"
}
setup_project(){
    # if [ $1 = 'test' ]; then
    #     export DATABASE=PacTest
    # fi
    drop_db
    create_db
    last_cmd_status
    group_by_fix
    last_cmd_status
    migrate_schema
    last_cmd_status
    seed_db
    set_default_root_pswd
}
run_test() {
    if grep docker /proc/1/cgroup -qa; then
        echo "I'm running on docker."
        setup_project test
    else
        echo "Running on host"
        ./docker.sh 7
        npm list grpc -g > /dev/null
        if [ $? != 0 ]; then
            npm i -g grpc
            npm rebuild
        fi
    fi
    npm run coverage
}
load_dev_dump() {
    case $1 in
        dev)
            exec_load_dump $1
        ;;
        qa)
            exec_load_dump $1
        ;;
        uat)
            exec_load_dump $1
        ;;
        ## For all other cases
        *)
            echo 'Please choose one of "dev", "qa" or "uat"' >&2
        exit 1
    esac
    exec_load_dump $1
}

exec_load_dump(){
    exit 0

}
last_cmd_status(){
    if [ $? != 0 ]; then
        echo "======Operation faild======";
        exit 1;
    else
        echo "======Done======";
    fi
}

run_cmd(){
    case "$1" in

    1)  echo "Dropping TestDB";
        drop_db
        ;;
    2)  echo  "Creating database TestDB";
        create_db
        ;;
    3)  echo  "Fixing GROUP BY error";
        group_by_fix
        ;;
    4)  echo  "Migrating schema to database";
        migrate_schema
        ;;
    5)  echo  "Migrating procedures and triggers";
        migrate_procedures
        ;;
    6)  echo  "Seeding database";
        seed_db
        ;;
    7)  echo  "Running Test";
        run_test
        ;;
    8)  echo  "setup test databse";
        setup_project test
        ;;
    9)  echo  "Seting up Database";
        setup_project
        ;;
    10)  #echo "Load remote dump"
        load_dev_dump $2
        ;;
    11)  echo "Runing migration and seeder"
        migrate_schema
        seed_db
        ;;
    0)  echo "exiting sequelize script"
        exit 0
        ;;
    *)  echo "Invalid input";
        ;;
    esac
}
if [ $# -eq 0 ]; then
    echo "0. exit"
    echo "1. drop db";
    echo "2. create db";
    echo "3. GROUP BY fix";
    echo "4. migrate db schema";
    echo "5. migrate procedures and triggers";
    echo "6. seed database";
    echo "7. run test";
    echo "9. setup new project";
    echo "10. Load remote dump";
    echo "11. Run Migration & Seeder";
    printf " Select operation: ";
    read -r userInput
    run_cmd $userInput;
else
    run_cmd $@
    exit $?
fi


