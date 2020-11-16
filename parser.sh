#!/usr/bin/bash

# Cleanup
rm ./*.raw.txt 2> /dev/null

while read -r inputUrl targetFile; do
  echo Parsing "${inputUrl}" into "${targetFile}"
  rawFile="${targetFile}.raw.txt"

  # Allowing multiple input URLs to the same target
  curl -s -L "${inputUrl}" >> "${rawFile}"

  sort -u "${rawFile}" | grep '^||.*\^\$.*' | sed 's/[\*|^]//g' | sed 's/\$.*//g' | grep -v "\/" > "${targetFile}"
done < input.txt

# Cleanup
rm ./*.raw.txt 2> /dev/null
