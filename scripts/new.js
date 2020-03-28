var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "C:\Users\mc_00\AppData\Local\Programs\Microsoft VS Code\Code.exe" ' + data.path);
});