rem # 设置编码
CHCP 65001
rem # 确保脚本抛出遇到的错误
set -e

rem # 生成静态文件
npm run docs:build

rem # 进入生成的文件夹
cd dist/docs

rem # 发布到自定义域名
echo www.geelato.org > CNAME

git init
git add -A
git commit -m 'deploy'

rem # 发布到 https://geeloto-projects.github.io
git push -f git@github.com:geelato-projects/geelato-projects.github.io.git master
