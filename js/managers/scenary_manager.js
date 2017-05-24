function ScenaryManager(){}

ScenaryManager.mapConfig = {
    columns : 16,
    rows : 16,
    tilesWidth : 100,
    tilesHeight: 100,

    tiles: [
        {
            name: "grass",
            percentage: 100,
            objects : [
                {
                    name: "Tree1",
                    min: 15,
                    max: 20
                },
                {
                    name: "Tree2",
                    min: 10,
                    max: 15
                },
                {
                    name: "Tree3",
                    min: 10,
                    max: 15
                },
                {
                    name: "Trunk",
                    min: 10,
                    max: 20
                }
            ]
        }
    ]
}

var mapConfig = ScenaryManager.mapConfig;


/**
    Generate the map of game in array forms
*/
ScenaryManager.generateMapArray = function(){
    var mapArray = initializeArray(mapConfig);

	var grassPositions = [];

	//Set Tiles
	for(var i = 0; i < mapConfig.columns; i++){
		var position = mapArray[i];
		for(j = 0; j < position.length; j++){

			var tile = "grass";

			position[j] = {
				tile: tile,
                tileInstance: null
			}

			grassPositions.push({column: i, row: j});
		}
	}

	// Setting quatities of objects in tiles
	for(var i = 0; i < mapConfig.tiles.length; i++){
		var tile = mapConfig.tiles[i];

		if(tile.name === "grass"){
			for(var j = 0; j < tile.objects.length; j++){

				//Tile
				var object = tile.objects[j]
				var quantity = MathAddons.getRandomInt(object.min, object.max);

				// Adding Object
				for(var objCount = 0; objCount < quantity; objCount++){
					// Select a random position in grass position
					var index = MathAddons.getRandomInt(0, grassPositions.length);
					var grassArray = grassPositions[index];

					mapArray[grassArray.column][grassArray.row].object = object.name;
					grassPositions.splice(index, 1);
				}

			}
		}
		
	}

	return mapArray;
}

// Private functions

var initializeArray = function (mapConfig){
	var mapArray = [];

	for(var column = 0; column < mapConfig.columns; column++){
		for(var row = 0; row < mapConfig.rows; row++){
			mapArray.push([column, row]);
			mapArray[column][row] = column + " - " + row;
		}
	}

	return mapArray;
}

