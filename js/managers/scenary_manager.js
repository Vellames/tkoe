function ScenaryManager(){
	// Singleton
	var instance;
	ScenaryManager = function(){
		return instance;
	}
	instance = this;

	
}

generateMapArray(
 {
		columns : 16,
		rows : 16,
		tilesSize : "100x100",

		tiles: [
			{
				name: "grass",
				percentage: 100,
				objects : [
					{
						name: "tree1",
						min: 4,
						max: 8
					},
					{
						name: "tree2",
						min: 4,
						max: 8
					},
					{
						name: "tree3",
						min: 4,
						max: 8
					},
					{
						name: "trunk",
						min: 2,
						max: 6
					}
				]
			}
		]
	}
)

function generateMapArray(mapConfig){

	var mapArray = initializeArray(mapConfig);

	var grassPositions = [];

	//Set Tiles
	for(var i = 0; i < mapConfig.columns; i++){
		var position = mapArray[i];
		for(j = 0; j < position.length; j++){

			var tile = "grass";

			position[j] = {
				tile: tile
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


function initializeArray(mapConfig){
	var mapArray = [];

	for(var column = 0; column < mapConfig.columns; column++){
		for(var row = 0; row < mapConfig.rows; row++){
			mapArray.push([column, row]);
			mapArray[column][row] = column + " - " + row;
		}
	}

	return mapArray;
}

