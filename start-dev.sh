#!/bin/bash

if [[ "$1" == "--build" ]]; then
  docker compose -f docker-compose.dev.yml up --build
else
  docker compose -f docker-compose.dev.yml up
fi
