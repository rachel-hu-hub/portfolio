#!/bin/bash

tmux kill-session -a
cd /usr/projects/portfolio
git fetch && git reset origin/main --hard
source venv/bin/activate
pip install -r requirements.txt
tmux new-session -d -s portfolio
tmux send-keys -t portfolio "cd /usr/projects/portfolio" C-m
tmux send-keys -t portfolio "source venv/bin/activate" C-m
tmux send-keys -t portfolio "flask run" C-m