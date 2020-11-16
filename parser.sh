#!/usr/bin/env bash

# Cleanup
rm -rf output
rm -rf temp
mkdir output
mkdir temp

while read -r inputUrl targetFilename; do
  targetFile="./output/${targetFilename}"
  echo Parsing "${inputUrl}" into "${targetFile}"
  rawFile="./temp/${targetFilename}.raw.txt"

  # Allowing multiple input URLs to the same target
  curl -s -L "${inputUrl}" >> "${rawFile}"

  grep '^||.*\^' "${rawFile}" | sed 's/[\*|^]//g' | sed 's/\$.*//g' | grep -v "\/" | sort -u > "${targetFile}"
done < input.txt

# Cleanup
rm -rf temp
