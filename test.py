var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '填入自己的資料',
    channelSecret: '填入自己的資料',
    channelAccessToken: '填入自己的資料'
});

bot.on('message', function(event) {
    event.reply('Hello, 你好');  
});
