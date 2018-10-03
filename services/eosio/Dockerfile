FROM eosio/eos-dev:v1.3.0

RUN apt-get update && apt-get install curl -y

COPY ./ /opt/application

VOLUME /opt/application

WORKDIR /opt/eosio/bin
