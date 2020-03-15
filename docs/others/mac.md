# Mac 使用入门

## 1.快捷键

### 1.1 修饰符

- Command（或 Cmd）⌘
- Control（或 Ctrl）⌃
- Option（或 Alt）⌥
- Shift ⇧
- Caps Lock ⇪

### 1.1 系统

- `⌘ + ⌃ + Q`：锁屏
- `^ +↑ `：调度中心
- `^ + ↓`：显示最前面的 App 的所有窗口
- `⌘ + Tab`：切换应用
- `F11`：显示桌面
- `⌃ + 空格`：切换输入法
- `⌘ + 空格`：聚焦搜索
- `⌥ + 空格`：启动 Alrfed

### 1.2 程序通用

- `⌘ + M`：最小化窗口
- `⌘ + H`：隐藏窗口
- `⌘ + N`：新建窗口
- `⌘ + T`：新建标签页
- `⌘ + O`：打开
- `⌘ + S`：保存
- `⌘ + W`：关闭
- `⌘ + Q`：退出
- `⌥ + ⌘ + esc`：强制提出程序
- `⌘ + ⌃ + F`：当前 App 进入、退出全屏
- `⌘ + ,`：打开 App 偏好设置
- `⌘ + +`：放大
- `⌘ + -`：缩小

### 1.3 文件操作

- `空格` 快速查看
- `回车` 重命名
- `⌘ + Delete`：删除 
- `⌘ + ⇧ + Delete`：清空回收站 
- `⌘ + ⇧ + N`：新建文件夹 
- `⌘ + I`：显示介绍 
- `⌘ + A`：删除 
- `⌘ + C` 复制 
- `⌘ + V`：粘贴 
- `⌘ + F`：搜索 
- `⌘ + Delete`：删除

### 1.4 Magnet 窗口操作

- `^ + ⌥ + ←`：左
- `^ + ⌥ + →`：右
- `^ + ⌥ + ↑`：上
- `^ + ⌥ + ↓`：下
- `^ + ⌥ + 回车`：最大
- `^ + ⌥ + Delete`：默认
- `^ + ⌥ + C`：中间Meslo LG M for Powerlinev

### 1.6 Alrfed 快捷操作

- `空格 + query`：Finder 中查询
- `dash + query`：Dash 中查找
- `sb + query`：扇贝翻译
- `yd + query`：有道翻译
- `ip`：获取 IP 地址
- `fi`：Finder to iTerm2
- `if`：iTerm2 to Finder
- `lock`: 锁屏
- `restart`: 重启
- `shut down`: 关机

## 2.终端

### 2.1 [iTerm2](https://www.iterm2.com)

下载安装：

- 直接[下载](https://www.iterm2.com/downloads.html)，安装
- Homebrew 进行安装 `brew cask install iterm2`

配置 [Dracula](https://draculatheme.com/iterm/) 主题：

- 根据官网操作
- iTerm2 中，command+, 调出设置页面，Preferences -> Profiles -> Colors -> Color Presets -> import 刚才克隆地中中的文件，最后选择 Dracula

快捷键:

- 选中即复制
- `⌘ + w`：关闭标签
- `⌘ + 数字`，`⌘ + 左右方向键`：切换标签
- `⌘ + t`：新建标签
- `⌘ + enter`：切换全屏
- `⌘ + f`：查找
- `⌘ + d`：水平分屏
- `⌘ + ⇧ + d`：垂直分屏
- `⌘ + ⌥ + 方向键`，`⌘ + [`，`⌘ + ]`：切换屏幕
- `⌘ + ;`：查看历史命令
- `⌘ + ⇧ + h`：查看剪贴板历史
- `⌃ + u`：清除当前行
- `⌃ + l`：清屏
- `⌃ + a`：到行首
- `⌃ + e`：到行尾
- `⌃ + f/b`：前进后退
- `⌃ + p`：上一条命令
- `⌃ + r`：搜索命令历史

在当前文件夹打开 iTerm2:

- 系统本身完成
    + 打开 iTerm2
    + 在 finder 中将文件夹图标拖拽到 iTerm2 中，回车即跳转到该文件夹路径
- Alfred + TerminalFinder 
    + workflow
    + Alfred + fi 从 finder 开到 iTerm2
    + Alfred + if 从 iTerm2 开到 finder

### 2.2 oh-my-zsh

下载安装：

- 方式一: 使用 git 这里下载到 ~/.oh-my-zsh下
    + `$ git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh`
- 方式二: 使用c url
    + `$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
- 方式三: 使用 wget
    + `$ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"`

设置默认 shell:

- 查看所有 shell：`cat /etc/shells `
- 查看默认 shell：`echo $0`，如果不是 `-zsh`
- 设置 zsh 为默认 shell：`chsh -s /bin/zsh`
- 切换回原来的 dash：`chsh -s /bin/bash`

更换 [zsh 主题](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)为 agnoster：

- `ZSH_THEME="agnoster"`
    + 编辑配置文件 `vim ~/.zshrc`
    + 输入 `i` 进入编辑模式，设置 `ZSH_THEME="agnoster"`
    + 按下 `esc` 键，退出编辑，`:wq` 保存退出
- 安装字体，解决乱码
    + [下载](https://github.com/powerline/fonts)字体
    + 解压后，执行 `./install.sh`
    + 在 iterm2 中设置该字体，Preferences -> Profiles -> Text 中同时将Font(勾选 Use a different font for non—ASCII text) 和 non—ASCII Font 设置为 Meslo LG M DZ Regular for Powerline
    + vsCode 中乱码：在设置中查找 terminal，Font Family 中添加字体 `Meslo LG M for Powerline`

其他

- 很多设置都是重启 iterm2 才生效，可以只用 `source ~/.zshrc`
- `⌘+Q` 关闭i Term 2 时每次弹窗提示问题：iTerm 2 中，进入Preference -> General -> Closing 栏目，将Confirm "Quit iTerm2(⌘Q)" command 选项勾选去掉

### 2.3 安装命令高亮插件 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

- 下载到用户名下 .zsh 文件夹下：`sudo git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.zsh/zsh-syntax-highlighting
`
- 编辑配置文件，使用插件
    + `vim ~/.zshrc`
    + 添加 `source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh`
    + 重启

### 2.4 安装命令提示插件 [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

- 下载到用户名下 .zsh 文件夹下：`sudo git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions`
- 编辑配置文件，使用插件
    + `vim ~/.zshrc`
    + 添加 `source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh`
    + 重启

***

参考

[利用iTerm2+oh-my-zsh+Dracula主题打造我的Mac终端利器](https://blog.csdn.net/daiyuhe/article/details/88667875)  
[Mac下终端工具iTerm2安装](https://www.jianshu.com/p/ba08713c2b19)  
[解决Mac下VSCode打开zsh乱码](https://my.oschina.net/u/4192650/blog/3095142)