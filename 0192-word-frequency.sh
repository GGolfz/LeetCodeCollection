cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -nr | awk '{printf("%s %s\n",$2,$1)}'
