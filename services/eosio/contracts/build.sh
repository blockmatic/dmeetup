#! /bin/bash

printf "\t=========== Building dmeetup Smart Contract ===========\n\n"

RED='\033[0;31m'
NC='\033[0m'

CORES=`getconf _NPROCESSORS_ONLY`
mkdir -p build
pushd build &> /dev/null
cmake ../
make -j${CORES}
popd &> /dev/null

cp build/dmeetup/dmeetup.wasm dmeetup/dmeetup.wasm