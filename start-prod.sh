#!/bin/bash

if [[ "$1" == "--logs" ]]; then
  docker compose up --build sdpm
else
  docker compose up --build -d sdpm
fi
