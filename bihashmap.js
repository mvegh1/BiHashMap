var BiHashMap = function () {
    var hashmap_keys = [];
  var hashmap_values = [];
    return {
        Add: function (key, value) { 
		    if(hashmap_keys[key]) {
			   console.warn("Add failed. Key already exists in map. Delete the key first");
			   return false;
			}
            hashmap_keys[key] = value;
            if (!hashmap_values[value]) {
                hashmap_values[value] = [];
            }
              hashmap_values[value].push(key);

            return true;
        },
        ContainsValue: function (value) {
            if (hashmap_values[value]) {
                return true;
            }
            return false;
        },
        ContainsKey: function (key) {
            if (hashmap_keys[key]) {
                return true;
            }
            return false;
        },
            //This function should be re-written for efficiency
		Delete: function (key) {
		  delete hashmap_keys[key];
		  var deleteValue = true;
		  for(var x in hashmap_values) {
		  deleteValue = true;
		     for(var y in hashmap_values[x]) {
			    if(hashmap_values[x][y] == key) {
				   delete hashmap_values[x][y];
				} 
				else if(deleteValue){
				  deleteValue = false;
				}
			 }
			 if(deleteValue) {
			    delete hashmap_values[x];
			 }
		  }
		},
        GetValueFromKey: function(key) {
           return hashmap_keys[key];
        },
        GetKeysFromValue: function(value) {
          return hashmap_values[value];
       },
        GetKeyToValueMap: function () {
            return hashmap_keys;
        },
        GetValueToKeyMap: function () {
            return hashmap_values;
        }
        //.....add the rest of your object definition 
    }

}
