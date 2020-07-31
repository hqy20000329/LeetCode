node_modules不应该跟踪  因为太大了
npm i   会修改package.json文件

ls 查看当前目录 
ls -al
cd 进入目录
pwd 显示绝对物理路径
cat 文件  输出文件

输入yarn就可通过下载下来的package.json来下载node_modules
git pull origin master


1. 删除node_modules
    git rm
2. .gitignore
3. 提交删除