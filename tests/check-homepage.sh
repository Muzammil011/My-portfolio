#!/bin/bash

URL="https://muzammil011.github.io/My-portfolio/"
TEXT="Hello, I'm Muzammil."

response=$(curl -s $URL)

if echo "$response" | grep -q "$TEXT"; then
  echo "Site content is correct."
  exit 0

else
  echo "ERROR: Expected text not found on homepage."
  exit 1
fi
