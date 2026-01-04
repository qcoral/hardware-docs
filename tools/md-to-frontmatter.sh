#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="${1:-.}"

find "$ROOT_DIR" -type f \( -name "*.md" -o -name "*.mdx" \) | while read -r file; do
  awk '
    BEGIN {
      replaced = 0
    }
    # Match the first H1 heading: "# "
    /^# / && replaced == 0 {
      title = substr($0, 3)
      gsub(/"/, "\\\"", title)  # escape double quotes
      print "---"
      print "title: \"" title "\""
      print "---"
      replaced = 1
      next
    }
    {
      print
    }
  ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done
