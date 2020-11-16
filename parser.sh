#!/usr/bin/bash

# Cleanup
rm ./*.sorted.txt ./*.unsorted.txt 2> /dev/null

while read -r inputUrl targetFile; do
  echo Parsing "${inputUrl}" into "${targetFile}"
  unsortedFile="${targetFile}.unsorted.txt"
  sortedFile="${targetFile}.sorted.txt"

  # Allowing multiple input URLs to the same target
  curl -s -L "${inputUrl}" >> "${unsortedFile}"

  sort -u "${unsortedFile}" | grep ^\|\|.*\^$ | grep -v \/ > "${sortedFile}"
  sed 's/[\*|^]//g' < "${sortedFile}" >> "${targetFile}"
done < input.txt

# Cleanup
rm ./*.sorted.txt ./*.unsorted.txt 2> /dev/null
