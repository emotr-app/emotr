#!/bin/bash
concurrently --kill-others scripts/start.sh "webpack server --open"