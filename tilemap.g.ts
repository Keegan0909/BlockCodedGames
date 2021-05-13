// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202050202020101020202020202020202020102020202010201010102020101010201020202020102010201020201020102010202030101010102010202040201020102020201020202020102020202010201020202010101010201010101010102010202020202020202010202020202020102020201010101010102020202020201020202010202020202020202020202010202020102020202020202020202020102020201010101020101010101010101020202010202020201020202010202020202020102020202010202020102020202020201010101010102020201010101010202020202020202020202020202020202`, img`
2 2 2 2 . . . . . . . . 2 . 2 . 
2 . . 2 2 2 2 2 2 2 2 2 2 . 2 . 
2 2 . 2 . . . 2 2 . . . 2 . 2 . 
2 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 
. . . . . 2 . 2 2 . 2 . 2 . 2 . 
2 . 2 2 2 2 . 2 2 2 2 . 2 . 2 . 
2 . . . . 2 . . . . . . 2 . 2 . 
2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 . 
2 . . . . . . 2 . . . . 2 . 2 . 
2 . 2 2 2 2 2 2 . . . . 2 . 2 . 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
2 . . . . 2 . . . . . . . . 2 . 
2 . 2 2 2 2 . 2 2 2 . 2 2 2 2 . 
2 . 2 2 2 2 . 2 . 2 . 2 2 2 2 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
