---
sidebar: auto
---

# 配置

## spring application.properties
```properties
#### DB ####
spring.datasource.primary.name=prod
spring.datasource.primary.jdbc-url=jdbc:mysql://localhost/geelato?useUnicode=true&characterEncoding=utf-8&useSSL=false&allowMultiQueries=true&serverTimezone=GMT%2B8
spring.datasource.primary.url=jdbc:mysql://localhost/geelato?useUnicode=true&characterEncoding=utf-8&useSSL=false&allowMultiQueries=true&serverTimezone=GMT%2B8
spring.datasource.primary.username=root
spring.datasource.primary.password=123456
spring.datasource.primary.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.primary.validationQuery=select 1 from dual
#spring.datasource.secondary.name=prod
#spring.datasource.secondary.url=jdbc:mysql://localhost/geelato?useUnicode=true&characterEncoding=utf-8&autoreconnect=true&useSSL=false&allowMultiQueries=true
#spring.datasource.secondary.username=root
#spring.datasource.secondary.password=123456
#spring.datasource.secondary.driver-class-name=com.mysql.cj.jdbc.Driver
spring.servlet.multipart.max-file-size=50MB
spring.servlet.multipart.max-request-size=50MB

#### LOG ####
logging.level.root=WARN
logging.level.org.geelato=INFO
logging.level.org.apache.shiro=INFO
logging.level.org.springframework.jdbc.core=INFO
logging.file=log/log.log
logging.file.max-size=30Mb
logging.file.max-history=10
# logging.exception-conversion-word
logging.pattern.console=[%-5level]%d{ss.SSS} %logger{36} %L- %m%n
# logging.pattern.file=%d{mm:ss.SSS} %-5level %logger{70} - %msg%n
# logging.pattern.level=DEBUG

#### geelato专用配置 ####
# geelato.env=dev
# 元数据扫描，包名用逗号分隔，默认为org.geelato
geelato.meta.scan-package-names=org.geelato
# 系统初化执行的sql脚本,默认geelato/data/init.sql,从个脚本用“，”分开
geelato.init.sql=geelato/web/platform/data/init.sql,geelato/web/platform/data/province_city.sql
#geelato.res.path=D:/ws/projects/personal/geelato/geelato-core/src/main/resources/geelato
# 若在WIN系统运行本应用，且配置了CMD命令，则在应用启动后执行
# chrome 49以上的版本，支持跨域，需增加设置--user-data-dir=chrome,否则登录的后检查是否登录时拿不到cookie，具体路径可以自己定
geelato.exec.cmd.after.started=start chrome --args --disable-web-security --user-data-dir=chrome http://localhost:8080
geelato.meta.field.description=description
```


