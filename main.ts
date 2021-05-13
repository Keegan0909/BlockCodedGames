scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.over(true, effects.blizzard)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 f 9 f 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . 9 . 9 . . . . . . . 
    . . . . . 9 . . . 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
info.startCountdown(8)
scene.cameraFollowSprite(mySprite)
