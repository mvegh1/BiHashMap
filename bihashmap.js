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
              hashmap_values[value][key] = true;

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
  
		DeleteByKey: function (key) {
		  var value =  hashmap_keys[key];
                delete hashmap_values[value];
                delete hashmap_keys[key];
		},
		DeleteByValue: function (value) {

                for(var x in hashmap_values[value]) {
                  delete hashmap_keys[x];
                }
		  
                delete hashmap_values[value];

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
