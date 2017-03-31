// created by bai on 2017/02/20
// 利用createJs引擎中的soundJs处理音频方法

// 首先引用soundjs文件：
// <script src="https://code.createjs.com/soundjs-0.6.2.min.js"></script>

var sounds = {
    path:"./music/",                       //音频所在文件夹path   
    manifest: [
        {id: "sound1", src:"sound1.mp3"}   //自定义音频id名，音频src
    ]
};
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.addEventListener("fileload", readytoplayAudio);
createjs.Sound.registerSounds(sounds);

function readytoplayAudio() {
    // 音频加载完成
    console.log("音频加载完成");
}

function playAudio() {
    // 音频播放
    createjs.Sound.play("sound1");          //利用id控制播放音频（可选播放属性：interrupt、delay、offset、loop、volume、pan、startTime、duration）
}

function stopAudio() {
    // 音频暂停
    createjs.Sound.stop("sound1");          //利用id控制暂停音频
}