#!/bin/bash

# This script does the following to all markdown files in the current directory:
# 1. uses pandoc to convert markdown to mediawiki
# 2. Does this for every markdown file in the same folder

find -type f -name \*.md | while read i; do
NAME=`echo $i | sed -e's/.md$//'`
  echo "Converting $NAME.md -> $NAME.mediawiki"
  pandoc $NAME.md -o $NAME.mediawiki
  echo "Done"
  echo
done
