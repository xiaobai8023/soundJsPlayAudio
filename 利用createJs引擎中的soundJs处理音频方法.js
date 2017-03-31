// created by bai on 2017/02/20
// 利用createJs引擎中的soundJs处理音频方法

// 首先引用preloadjs/soundjs文件：
// <script src="https://code.createjs.com/preloadjs-0.6.2.min.js"></script>
// <script src="https://code.createjs.com/soundjs-0.6.2.min.js"></script>

var queue = new createjs.LoadQueue();
queue.installPlugin(createjs.Sound);
queue.addEventListener("complete", handleComplete, this);
// queue.loadFile({id:"sound", src:"http://path/to/sound.mp3"});       //加载单个资源
queue.loadManifest([                                                //加载资源列表清单
    {id: "sound1", src:"sound1.mp3"}
]);

function handleComplete() {
    // 音频加载完成
    console.log("音频加载完成");
}

function playAudio(id) {
    // 音频播放
    createjs.Sound.play(id, {interrupt: createjs.Sound.INTERRUPT_ANY, delay:500, offset:0, loop:-1, colume:1, pan:-1, startTime:0, duration:500});          //利用id控制播放音频（可选播放属性：interrupt、delay、offset、loop、volume、pan、startTime、duration）
}

function stopAudio(id) {
    // 音频暂停
    createjs.Sound.stop(id);          //利用id控制暂停音频
}