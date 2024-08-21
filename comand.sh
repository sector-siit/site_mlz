docker-compose build
docker-compose push




# intrasiit.lomasdezamora.gov.ar:5000/sitemlz:latest
# name of run sitemlz

if [ "$(docker ps -q -f name=sitemlz)" ]; then
    docker stop sitemlz
    docker rm sitemlz
fi

docker run -d -p 80:3000 -n sitemlz intrasiit.lomasdezamora.gov.ar:5000/sitemlz:latest