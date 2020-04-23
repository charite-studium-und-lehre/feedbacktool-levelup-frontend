## PHP-Konfiguration 


in /etc/php/7.X/fpm/conf.d/20-levelup.ini

```
date.timezone = "Europe/Berlin"
session.gc_maxlifetime = 43200

; Matomo statistics requirements:
always_populate_raw_post_data = -1
```