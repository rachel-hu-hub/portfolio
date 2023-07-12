#!/bin/bash

TIMELINE_ENDPOINT="http://127.0.0.1:5000/api/timeline_post"

POST_DATA='name=Rachel&email=rachel@gmail.com&content=Testing $(date +%s'

# POST
curl -X POST "$TIMELINE_ENDPOINT" -d "$POST_DATA"
# GET
GET_RESULT=$(curl "$TIMELINE_ENDPOINT")

if [[ "$GET_RESULT" =~ "Rachel" ]]; then
    echo "Part 1: Post successfully retrieved."
else
    echo "Part 1: Failed to retrieve post."
fi

ID=$(echo "$GET_RESULT" | jq -r '.timeline_posts[0].id')

# DELETE
curl -X DELETE "${TIMELINE_ENDPOINT}/${ID}"
echo "Bonus: Deleted post #${ID} successfully."
