#!/bin/bash

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/github 

ssh-add -l

git push -u origin master

# Fim do algoritmo
echo "Fim do programa."