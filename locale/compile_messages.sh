#!/bin/bash

DOMAIN_NAME=simple-extension

for p in *
do
	if [ -d $p ]; then
		echo "found locale directory $p"
		`msgfmt ./${p}/LC_MESSAGES/$DOMAIN_NAME.po -o ./${p}/LC_MESSAGES/$DOMAIN_NAME.mo`
	fi
done