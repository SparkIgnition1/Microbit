music.play(music.stringPlayable("A C A C D D B G ", 120), music.PlaybackMode.UntilDone)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Square)
    led.setBrightness(3)
}
