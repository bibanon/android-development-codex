#!/bin/bash

# Scripted by: Lawrence Wu <sagnessagiel [at] gmail [dot] com>

# This script does the following to all markdown files in the current directory:
# 1. uses pandoc to convert markdown to mediawiki
# 2. Does this for every markdown file in the same folder
# 3. Converts Gollum Wikilinks to Mediawiki using Perl regex
# 4. Removes temporary files

# ==============================
# Constants
# ==============================
INP_FRMT=markdown
OUT_FRMT=mediawiki
INP_FNAME=md
OUT_FNAME=mediawiki

# ==============================
# Check compatibility to be safe
# ==============================
command -v pandoc >/dev/null 2>&1 || { echo "Please install pandoc before using this script." >&2; }
command -v perl >/dev/null 2>&1 || { echo "Please install perl before using this script." >&2; }

# ==============================
# loop to execute commands on every file under the current directory
# ==============================
find -type f -name \*.$INP_FNAME | while read i; do
  
  # ==============================
  # Get name by removing the extension
  # ==============================
  NAME=`echo $i | sed -e "s/.$INP_FNAME$//"`

  # ==============================
  # Convert with pandoc
  # ==============================
  echo "Converting $NAME.$INP_FNAME -> $NAME.$OUT_FNAME using Pandoc"
  pandoc -f $INP_FRMT -t $OUT_FRMT $NAME.$INP_FNAME -o $NAME.$OUT_FNAME.tmp

  # ==============================
  # Convert Gollum wikilinks to Mediawiki with Perl
  # ==============================
  echo "Converting Gollum-style wikilinks to Mediawiki-style using Perl"
  perl -pe 's/\[\[([\w ]+)\|([\w ]+)?\]\]/[[$2|$1]]/' $NAME.$OUT_FNAME.tmp > $NAME.$OUT_FNAME

  # ==============================
  # Remove temporary files
  # ==============================
  rm $NAME.$OUT_FNAME.tmp
  
  # ==============================
  # Remove input file (make backups!)
  # ==============================
  #rm $NAME.$INP_FNAME
  
  echo "Done"
  echo
done
