Get a list of all the books
```sql
SELECT DISTINCT "book" 
FROM "kjv";
```

Get list of chapter in a book

```sql
SELECT COUNT(DISTINCT "chapter") AS chapter_count
FROM "kjv"
WHERE "book" = 'GEN';
```

list all the versus in chapter

```sql
SELECT "verseID", "startVerse", "verseText"
FROM "kjv"
WHERE "book" = 'GEN'
  AND "chapter" = '1'
ORDER BY CAST("startVerse" AS INTEGER);  
```