# npm 发包和更新

## npm 登录

```
npm login

Username: chaohua 
Password:
Email: (this IS public) chaohua@outlook.com =>注册时邮箱
Logged in as chaohua on https://registry.npmjs.org/. =>标识登录成功
```

## 发包

`npm publish`

根据 package.json 中配置进行发包:

- `name`: 包名,不能重复
- `version`: 版本号
- `description`: npm 描述信息
- `main`: 引用模块是的入口文件
- `bin`: 全局命令与本地文件名的映射

## 更新

查看版本号: `npm view jasmine-fs versions`

两个步骤：

- `npm version patch/minor/major`
    - patch: 更新一个补丁,版本 x.y.z => x.y.z+1
    - minor: 更新一个小改动,版本 x.y.z => x.y+1.z
    - major: 更新一个大改动,版本 x.y.z => x+1.y.z
- `npm publish`


注意：  

- 在 npm 更新之前，package.json 中的版本号，无需改变，直接 npm 更新后，package.json 中的版本号会自动更新，需要我们自己上传至 github（直接 `push`）.
- 如果出现了更新完但是npm官网上没有更新: `npm publish .`