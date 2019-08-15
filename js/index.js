var audio = document.querySelector(".audio");
var bg = document.querySelector(".bg");
var icon = document.querySelector(".name");
var left = document.querySelector(".left");
var off = document.querySelector(".off");
var right = document.querySelector(".right");
console.log(icon);
// 开关
var isOff = false;
//索引
var index = 0;
var arrSrc = [
    { "img": "./img/1.jpg", "song": "file/CRITTY- 闲岁.mp3" },
    { "img": "./img/2.jpg", "song": "file/晴愔 - 眉间雪(剧情歌).mp3" },
    { "img": "./img/3.jpg", "song": "file/CRITTY- 闲岁.mp3" }
];


off.onclick = function() { //暂停播放
    if (isOff) { //开关关闭的
        audio.pause(); //播放
        icon.classList.add("pause");
        off.innerHTML = "<img src='img/zanting.png'>";
        isOff = false;
    } else { //开关打开的
        audio.play(); //可以播放
        icon.classList.remove("pause");
        off.innerHTML = "<img src='img/bofang.png'>";
        isOff = true;
    }

}


right.onclick = function() { //右按钮
    index++;
    index = index > (arrSrc.length - 1) ? 0 : index;
    audio.src = arrSrc[index].song; //更改歌曲路径
    bg.style.backgroundImage = "url(" + arrSrc[index].img + ")";
    icon.style.backgroundImage = "url(" + arrSrc[index].img + ")";

    //检测是否是播放状态
    if (isOff) { //关闭状态
        audio.play();
    } else { // 开启状态
        audio.pause();
    }
}

left.onclick = function() { //左按钮
    index--;
    index = index < 0 ? arrSrc.length - 1 : index;
    audio.src = arrSrc[index].song; //更改歌曲路径
    bg.style.backgroundImage = "url(" + arrSrc[index].img + ")";
    icon.style.backgroundImage = "url(" + arrSrc[index].img + ")";

    //检测是否是播放状态
    if (isOff) { //关闭状态
        audio.play();
    } else { // 开启状态
        audio.pause();
    }
}

audio.oncanplay = function() {
    console.log(audio.duration); //总时长
    var duration = audio.duration;
    var currentTime = audio.currentTime;
}