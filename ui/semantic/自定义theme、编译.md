##自定义theme、编译

从官网下载源码包，解决压到目录 x，进入目录x；

在命令窗口执行npm install；

依据提示选择确认，关键点是，下面的选择，选“No Thank”，以便后续可以不用重新下载源即可进行编译；

```bash
? Should we remove set-up files? No Thanks

? Do you want to build Semantic now? Yes 
```

完整示例：

```bash
D:\ws\projects\opensources\Semantic-UI\Semantic-UI-2.3.1>cnpm install
√ Installed 41 packages
√ Linked 0 latest versions
Installing
------------------------------
Site folder exists, merging files (no overwrite) src/site/
[16:48:13] Starting 'create theme.config'...
Adjusting @siteFolder to:  site/
Modifying src/theme.config (LESS config) src/theme.config
[16:48:13] Finished 'create theme.config' after 19 ms
[16:48:13] Starting 'create semantic.json'...
Extending config file (semantic.json) semantic.json
[16:48:13] Finished 'create semantic.json' after 33 ms
[16:48:13] Finished 'create install files' after 103 ms
[16:48:13] Starting 'clean up install'...


? Should we remove set-up files? No Thanks
? Do you want to build Semantic now? Yes
[16:48:18] Starting 'build'...
Building Semantic
[16:48:18] Starting 'build-javascript'...
Building Javascript
[16:48:18] Starting 'build-css'...
Building CSS
[16:48:18] Starting 'build-assets'...
Building assets
[16:48:18] Finished 'clean up install' after 4.87 s
[16:48:18] Finished 'install' after 9.93 s
[16:48:18] Created: dist\components\site.js
[16:48:19] Created: dist\components\site.min.js
[16:48:19] Created: dist\components\form.js
[16:48:19] Created: dist\components\form.min.js
[16:48:19] Created: dist\components\accordion.js
[16:48:20] Created: dist\components\accordion.min.js
[16:48:20] Created: dist\components\checkbox.js
[16:48:20] Created: dist\components\checkbox.min.js
[16:48:20] Created: dist\components\dimmer.js
[16:48:20] Created: dist\components\dimmer.min.js
[16:48:20] Created: dist\components\dropdown.js
[16:48:21] Created: dist\components\dropdown.min.js
[16:48:21] Created: dist\components\embed.js
[16:48:21] Created: dist\components\reset.css
[16:48:21] Created: dist\components\reset.min.css
[16:48:21] Created: dist\components\embed.min.js
[16:48:21] Created: dist\components\modal.js
[16:48:21] Created: dist\components\modal.min.js
[16:48:21] Created: dist\components\nag.js
[16:48:22] Created: dist\components\nag.min.js
[16:48:22] Created: dist\components\popup.js
[16:48:22] Created: dist\components\popup.min.js
[16:48:22] Created: dist\components\progress.js
[16:48:22] Created: dist\components\progress.min.js
[16:48:22] Created: dist\components\rating.js
[16:48:22] Created: dist\components\rating.min.js
[16:48:22] Created: dist\components\search.js
[16:48:23] Created: dist\components\site.min.css
[16:48:23] Created: dist\components\site.css
[16:48:23] Created: dist\components\search.min.js
[16:48:23] Created: dist\components\shape.js
[16:48:23] Created: dist\components\shape.min.js
[16:48:23] Created: dist\components\sidebar.js
[16:48:23] Created: dist\components\sidebar.min.js
[16:48:23] Created: dist\components\sticky.js
[16:48:23] Created: dist\components\api.js
[16:48:24] Created: dist\components\sticky.min.js
[16:48:24] Created: dist\components\visibility.js
[16:48:25] Created: dist\components\api.min.js
[16:48:25] Created: dist\components\button.css
[16:48:25] Created: dist\components\button.min.css
[16:48:25] Created: dist\components\tab.js
[16:48:25] Created: dist\components\visibility.min.js
[16:48:25] Created: dist\components\transition.js
[16:48:25] Created: dist\components\tab.min.js
[16:48:25] Created: dist\components\transition.min.js
[16:48:25] Starting 'package compressed js'...
[16:48:25] Starting 'package uncompressed js'...
[16:48:25] Finished 'build-javascript' after 7.29 s
[16:48:25] Created: dist\components\container.min.css
[16:48:25] Created: dist\components\container.css
[16:48:30] Created: dist\semantic.min.js
[16:48:30] Finished 'package compressed js' after 4.51 s
[16:48:30] Created: dist\semantic.js
[16:48:30] Finished 'package uncompressed js' after 4.5 s
[16:48:30] Created: dist\components\divider.css
[16:48:30] Created: dist\components\divider.min.css
[16:48:30] Finished 'build-assets' after 12 s
[16:48:30] Created: dist\components\flag.css
[16:48:30] Created: dist\components\flag.min.css
[16:48:30] Created: dist\components\header.min.css
[16:48:30] Created: dist\components\header.css
[16:48:31] Created: dist\components\icon.css
[16:48:31] Created: dist\components\icon.min.css
[16:48:31] Created: dist\components\image.css
[16:48:31] Created: dist\components\image.min.css
[16:48:31] Created: dist\components\input.css
[16:48:31] Created: dist\components\input.min.css
[16:48:31] Created: dist\components\label.css
[16:48:31] Created: dist\components\label.min.css
[16:48:31] Created: dist\components\list.css
[16:48:31] Created: dist\components\list.min.css
[16:48:31] Created: dist\components\loader.css
[16:48:31] Created: dist\components\loader.min.css
[16:48:31] Created: dist\components\rail.css
[16:48:32] Created: dist\components\rail.min.css
[16:48:32] Created: dist\components\reveal.css
[16:48:32] Created: dist\components\reveal.min.css
[16:48:32] Created: dist\components\segment.css
[16:48:32] Created: dist\components\segment.min.css
[16:48:32] Created: dist\components\step.css
[16:48:32] Created: dist\components\step.min.css
[16:48:32] Created: dist\components\breadcrumb.css
[16:48:32] Created: dist\components\breadcrumb.min.css
[16:48:32] Created: dist\components\form.min.css
[16:48:32] Created: dist\components\form.css
[16:48:32] Created: dist\components\grid.css
[16:48:32] Created: dist\components\grid.min.css
[16:48:32] Created: dist\components\menu.css
[16:48:32] Created: dist\components\menu.min.css
[16:48:33] Created: dist\components\message.css
[16:48:33] Created: dist\components\message.min.css
[16:48:33] Created: dist\components\table.css
[16:48:33] Created: dist\components\table.min.css
[16:48:33] Created: dist\components\ad.css
[16:48:33] Created: dist\components\ad.min.css
[16:48:33] Created: dist\components\card.css
[16:48:33] Created: dist\components\card.min.css
[16:48:33] Created: dist\components\comment.css
[16:48:33] Created: dist\components\comment.min.css
[16:48:33] Created: dist\components\feed.min.css
[16:48:33] Created: dist\components\feed.css
[16:48:33] Created: dist\components\item.css
[16:48:33] Created: dist\components\item.min.css
[16:48:33] Created: dist\components\statistic.css
[16:48:33] Created: dist\components\statistic.min.css
[16:48:33] Created: dist\components\accordion.css
[16:48:34] Created: dist\components\accordion.min.css
[16:48:34] Created: dist\components\checkbox.min.css
[16:48:34] Created: dist\components\checkbox.css
[16:48:34] Created: dist\components\dimmer.css
[16:48:34] Created: dist\components\dimmer.min.css
[16:48:34] Created: dist\components\dropdown.min.css
[16:48:34] Created: dist\components\dropdown.css
[16:48:34] Created: dist\components\embed.css
[16:48:34] Created: dist\components\embed.min.css
[16:48:34] Created: dist\components\modal.css
[16:48:34] Created: dist\components\modal.min.css
[16:48:34] Created: dist\components\nag.css
[16:48:34] Created: dist\components\nag.min.css
[16:48:34] Created: dist\components\popup.css
[16:48:34] Created: dist\components\popup.min.css
[16:48:34] Created: dist\components\progress.min.css
[16:48:34] Created: dist\components\progress.css
[16:48:35] Created: dist\components\rating.css
[16:48:35] Created: dist\components\rating.min.css
[16:48:35] Created: dist\components\search.css
[16:48:35] Created: dist\components\search.min.css
[16:48:35] Created: dist\components\shape.css
[16:48:35] Created: dist\components\shape.min.css
[16:48:35] Created: dist\components\sidebar.css
[16:48:35] Created: dist\components\sidebar.min.css
[16:48:35] Created: dist\components\sticky.min.css
[16:48:35] Created: dist\components\sticky.css
[16:48:35] Created: dist\components\tab.css
[16:48:35] Created: dist\components\tab.min.css
[16:48:35] Created: dist\components\transition.css
[16:48:35] Starting 'package uncompressed css'...
[16:48:35] Created: dist\components\transition.min.css
[16:48:35] Starting 'package compressed css'...
[16:48:43] Created: dist\semantic.css
[16:48:43] Finished 'package uncompressed css' after 7.31 s
[16:48:43] Created: dist\semantic.min.css
[16:48:43] Finished 'package compressed css' after 7.24 s
[16:48:43] Finished 'build-css' after 25 s
[16:48:43] Finished 'build' after 25 s
√ Run 1 scripts
√ All packages installed (used 39s, speed 0B/s, json 0(0B), tarball 0B)
```



完成以上初始编译之后，会在x/dist目录下输出最终js、css等。

若需修改相应的样式，如修改Border-Radius为0px：

可进入x/src/site/globals/site.variables，加入以下代码

```css
/*-------------------
    Border Radius
--------------------*/

/* See Power-user section below
   for explanation of @px variables
*/
@relativeBorderRadius: 0px;
@absoluteBorderRadius: 0px;

@defaultBorderRadius: @absoluteBorderRadius;
```

再重新进入x目录，并在命令窗口执行npm install；

完成之后进入x/dist目录将文件copy到项目中使用即可。



**注：cnpm 淘宝NPM镜像**