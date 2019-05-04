const idcardGenerator = require('./index');
const fs = require('fs');
const path = require('path');
const config = {
    name: '刘强东',
    sex: '女',
    nation: '汉',
    year: '2002',
    mon: '2',
    day: '03',
    org: '喵喵县公安局',
    validTerm: '2014.01.27-2019.01.27',
    addr: '喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵',
    idn: '371100197308161831',
    avatar: './images/avatar.png'
}

idcardGenerator(config).then(e => {
    fs.writeFile('./output.png', e, err => {
        if(err){
            console.log('idcard-generator：测试失败 ' + e);
        } else {
            console.log('idcard-generator：测试成功，文件已保存在：' + path.resolve(__dirname, './output.png'));
        }
    })
}).catch(err => {
    console.log('idcard-generator：测试失败\n' + err.stack);
});
