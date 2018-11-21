# 部署

## SSL(Secure Socket Layer)配置

### 采用云服务商的证书
在[阿里云](https://www.aliyun.com/)或其它腾讯云等申请免费的ssl证书。
::: warning 参考文章
[https的SSL证书在服务器端的部署，基于tomcat,spring boot](https://blog.csdn.net/gary_yan/article/details/77973711)
:::

### 采用自有证书（不建议）
在JDK或者JRE的bin目录下有一个工具keytool，它是一个证书管理工具，可以用来生成自签名的证书。
在控制台输入如下命令：
```bash
keytool -genkey -alias tomcat -keyalg RSA
```
会在当前目录下生成了一个.keystore文件，也就是我们需要的证书文件。
::: warning 注意
需指定keyalg RSA否则，在chrome等浏览器访问应用时，会出现ERR_SSL_VERSION_OR_CIPHER_MISMATCH错误，导致无法访问
自有证书在chrome等浏览器访问时，不被认可，需要点击高级再进一步继续访问才可行。
:::
