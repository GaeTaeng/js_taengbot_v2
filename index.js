/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const {  Attachment } = require('discord.js'); //디스코드 모듈 불러오기

const config = require('./config.json');

const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client(); // 디스코드 객체 생성



// const chromium = require('chromium');
//내가 왜 쓸데없이 chromium까지 설치하고 온갖 생 고생을.... 뭐가 문제였을까요
//나중에 이 주석을 본다면 태훈아 .. 나 자신아..한번 확인해봅시다.
require('chromedriver');
const express = require("express");
// let client_cheerio = require('cheerio-httpcli');
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');


// const screen = {
//     width: 640,
//     height: 480
// };
// let driver;
let loadCheck = false;

// async function driverset() {
//     let options = await new chrome.Options();
//     //Below arguments are critical for Heroku deployment
//     await options.addArguments("--headless")
//     .addArguments("--disable-gpu")
//     .addArguments("--no-sandbox")
//     .windowSize(screen);
//     driver = await new webdriver.Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(options)
//         .build();

//     await driver.get('http://www.google.com').catch(err => console.log(err));
//     console.log("driver set complete");
//     loadCheck = await true;
// }

// driverset();

var app = express();
var port = process.env.PORT || 3000;
const date = new Date();

app.get("/", function (req, res) {
    res.send("봇이 작동되었습니다. from console(Check - 2020 01 11 04:27) // Starting Date : " + date);

});

app.listen(port);


client.on('ready', () => { //ready 이벤트를  받았을 때 실행
    console.log('봇이 작동되었습니다. from console');
    console.log(date);
    client.channels.find(x => x.name === '탱봇').send(new Discord.RichEmbed().addField("Start", "탱봇의 가동이 시작되었습니다.")
        .addField("접속자 수", "현재 " + client.users.size.toString() + "명이 이용중입니다.")
        .addField("채널 수", "현재 해당 서버에서는 " + client.channels.size.toString() + "개의 채널이 운영중입니다.")
        .addField("탱봇 사용 서버 수", "현재 " + client.guilds.size.toString() + "개의 서버에서 탱봇을 이용중입니다.")
    )
    //client.channels.find(x => x.name === '채팅').send(new Discord.RichEmbed().addField("Start","탱봇의 가동이 시작되었습니다."))
    //client.channels.find(x => x.name === '디스코드봇연습용').send(new Discord.RichEmbed().addField("Start","탱봇의 가동이 시작되었습니다."))


});
async function show_error_service_stop(message) {
    var embed = await new Discord.RichEmbed()
    .setDescription("지원을 중단한 기능입니다.")
    .addField("지원을 중단한 기능입니다.", true)
    .setColor(0x00FFFF)
    .setFooter("지원을 중단한 기능입니다.")
    .setThumbnail("지원을 중단한 기능입니다.");
    message.channel.sendEmbed(await embed);
    return;

}

async function battleground(message, word) {

    show_error_service_stop(message);
    return;
    // //let driver = await new Builder().forBrowser('chrome').build();
    // //await app.get('https://pubg.op.gg/user/' + word);
    // try {
    //     let check = true;
    //     await driver.get('https://pubg.op.gg/user/' + word);
    //     await app.get('/battle', async function (req, res) {
    //         await res.send("배틀그라운드 크롤링" + word);
    //     });
    //     driver.wait(function () {
    //         console.log("Wait");
    //         return driver.findElement(By.id("user-content-layer__ranked-stats"));
    //     }, 10000);
    //     let notfound = await driver.findElement(By.className("not-found__desc")).length;
    //     if(notfound >= 1) {
    //         console.log("OP.GG에 등록되지 않은 플레이어입니다.");
    //         var embed = await new Discord.RichEmbed()
    //                     .setDescription("OP.GG에 등록되지 않은 플레이어입니다.")
    //                     .addField("OP.GG에 등록되지 않은 플레이어입니다.", true)
    //                     .setColor(0x00FFFF)
    //                     .setFooter("OP.GG에 등록되지 않은 플레이어입니다.")
    //                     .setThumbnail("OP.GG에 등록되지 않은 플레이어입니다.");
    //     }
    //     let modes = await driver.findElement(By.className("user-content-layer__ranked-stats")).findElement(By.className("ranked-stats-wrapper__l-cards")).findElements(By.className("ranked-stats-wrapper__card "));
    //     console.log(await modes.length);
    //     var modeName;
    //     for (i = 0; i < 3; i++) {
    //         switch (i) {
    //             case 0:
    //                 modeName = await "솔로";
    //                 break;
    //             case 1:
    //                 modeName = await "듀오";
    //                 break;
    //             case 2:
    //                 modeName = await "스쿼드";
    //                 break;
    //         }
    //         console.log("BattleGround Mode Select completed");
    //         try {
    //             if (await modes[i].findElement(By.className("ranked-stats"))) {
    //                 let rating = await modes[i].findElement(By.className("ranked-stats__rating-point"));
    //                 let tier = await modes[i].findElement(By.className("ranked-stats__l-tier"));
    //                 let rank = await modes[i].findElement(By.className("ranked-stats__rank"));
    //                 let kd = await modes[i].findElement(By.className("ranked-stats__value ranked-stats__value--imp "));
    //                 console.log("test");
    //                 var embed = new Discord.RichEmbed()
    //                     .setDescription(word + " - " + modeName)
    //                     .addField("레이팅", await rating.getText(), true)
    //                     .addField("등급", await tier.getText(), true)
    //                     .addField("랭킹", await rank.getText(), true)
    //                     .addField("K/D", await kd.getText(), true)
    //                     .setColor(0x00FFFF)
    //                     .setFooter(word + " - " + modeName)
    //                     .setThumbnail(message.author.avatarURL);
    //                 message.channel.sendEmbed(await embed);
    //             }
    //         } catch {
    //             if (await modes[i].findElement(By.className("ranked-stats__error"))) {
    //                 var embed = new Discord.RichEmbed()
    //                     .setDescription(word + " - " + modeName)
    //                     .addField("아직 진행한 경기가 없습니다.", "아직 진행한 경기가 없습니다.", true)
    //                     .setColor(0x00FFFF)
    //                     .setFooter(word + " - " + modeName)
    //                     .setThumbnail(await message.author.avatarURL);
    //                 await message.channel.sendEmbed(embed);

    //             }

    //         }
    //     }
    //     //ranked-stats-wrapper__l-card
    // } catch (err) {
    //     console.log(err);
    //     message.channel.send("-배틀그라운드 메세지 처리과정 중 에러가 발생하였습니다.-")
    // }
}

client.on('message', message => { //message 이벤트가 발생되었을 때 message가 생성
    
    if (message.author.bot) return;
    
    var test = /^\^/g;
    var args = message.content.split(" ");
    if (test.test(args[0])) {
        if(loadCheck == false) {
            console.log("아직 로딩이 완료되지 않았습니다!");
            message.channel.send("아직 로딩이 완료되지 않았습니다!");
            return;
        }
        switch (args[0].toLowerCase()) {
            case "^help":
            case "^HELP":
            case "^Help":
                var embed = new Discord.RichEmbed()
                    .addField("활성명령어", "^안녕 / / ^rip, ^Rip, ^RIP")
                    .addField("임시명령어", "^배그, ^배틀그라운드")
                    .setDescription("^HELP")
                message.channel.sendEmbed(embed);
                break;
            case "^안녕":
                message.channel.send('안녕하세요.');
                message.channel.send('저는 탱봇 입니다.');
                break;
            case "^배그":
            case "^배틀그라운드":
                //message.channel.send("현재 오류로 인하여 배틀그라운드 서비스는 중지되었습니다.")
                message.channel.send("배틀그라운드 전적검색 테스트중입니다!");
                battleground(message, args[1]);
                break;
            case '^rip':
            case '^Rip':
            case '^RIP':
                // Create the attachment using Attachment
                const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
                // Send the attachment in the message channel with a content
                message.channel.send(`${message.author},`, attachment);
                break;
        }
        // if (message.content === '^안녕') { //메시지 내용이 안녕이라면


        //     // Send "pong" to the same channel
        //     message.channel.send('안녕하세요.'); //메시지를 '안녕'메시지 받은 채널에 보냄
        //     message.channel.send('저는 탱봇 입니다.');
        // }
    }
});


client.on("guildMemberAdd", function (member) {
    member.guild.channels.find("name", "채팅").sendMessage(member.toString() + "님 개탱띠로 오신걸 환영합니다!");
    //member.addRole(member.guild.roles.find("name", "Newbie")); 역할 배분해주는거
});



// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.TOKEN);


client.off