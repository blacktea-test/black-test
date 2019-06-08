var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '露娜test',
    channelSecret: '7d71d9b52e15b539fa4c3993e44dca9e',
    channelAccessToken: 'cdkwdBVbwTLQyao98X80ZO6zP5+KCcZgcDTLtnopA9oVWK+Mc1ksx67HE5ND8OOvxKbXL75BGl2IG0y/cwD+KGC3arHlRD8DLtE7ICR8UVXnYTtSTttoPyzh7EI5L/zHohxtOFit+Brik63bcyym8gdB04t89/1O/w1cDnyilFU=
'
});

bot.on('message', function(event) {
    event.reply('Hello, 你好');  
});
