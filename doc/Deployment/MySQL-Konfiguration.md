## MySQL-Konfiguration 

in /etc/mysql/conf.d/levelup-mysql.cnf
[mysqld]

WICHTIG damit Doctrine Zend usw mit MySQL >= 5.7 funktioniert:
```sql
sql-mode="NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"

max_allowed_packet      = 32M
thread_cache_size       = 16
query_cache_size        = 0
query_cache_type        = 0

max_connections        = 200  # Tests brauchen viele gleichzeitige Verbindungen

innodb_buffer_pool_size    = 1000M
innodb_log_file_size    = 125M

read_rnd_buffer_size    = 16M
join_buffer_size        = 2M
sort_buffer_size	= 1M

tmp_table_size = 128M
max_heap_table_size = 64M
table_open_cache = 16384

innodb_file_per_table = 1
```

In **Mysql 8.0** muss zusätzlich gesetzt werden:
`information_schema_stats_expiry=0`

Außerdem muss  `sql-mode` eretzt werden durch:

`sql-mode="NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"`

Außerdem müssen die Zeilen mit "`query_cache`..." entfernt werden.

