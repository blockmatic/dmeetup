project(meetupmeetup)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( meetupmeetup meetupmeetup meetupmeetup.cpp )
target_include_directories( meetupmeetup PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( meetupmeetup ${CMAKE_SOURCE_DIR}/../ricardian )