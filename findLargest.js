// 遍历目录，找出最大的一个文件
const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) return callback(err);
        let count = files.length;
        let errored = false;
        let stats = [];
        files.forEach(file => {
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return;
                if (err) {
                    errored = true;
                    return callback(err);
                }
                stats.push(stat);
                // 此处通过count计数来判断文件是否遍历完，达到控制异步流程的目的。
                if (--count === 0) {
                    let largest = stats
                        .filter(function(stat) { return stat.isFile(); })
                        .reduce(function(prev, next) {
                            if (prev.size > next.size) return prev;
                            return next;
                        });
                    callback(null, files[stats.indexOf(largest)]);
                }
            });
        });
    });
}

findLargest('../p2p', function(err, filename) {
    if (err) return console.error(err);
    console.log('largest file was:', filename);
});