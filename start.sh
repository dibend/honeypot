#!/bin/bash

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080

nohup sudo node server.js > index.txt &
