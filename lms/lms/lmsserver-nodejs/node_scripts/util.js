exports.getNextId = function (objects, idLabel) {
    var ids = [];
    for (var i = 0; i < objects.length; i++) {
        ids[i] = objects[i][idLabel];
    }
    if (ids.length > 0) {
        var max = ids[0];
        for (var i = 1; i < ids.length; i++) {
            if (max < ids[i]) {
                max = ids[i];
            }
        }
        return max + 1;
    } else {
        return 1;
    }
};

exports.updateObject = function (objects, anObj, idLabel) {
    for (var i = 0; i < objects.length; i++) {
        if (objects[i][idLabel] == anObj[idLabel]) {
            objects[i] = anObj;
            break;
        }
    }
};

exports.deleteObject = function (objects, anObj, idLabel) {
    for (var i = 0; i < objects.length; i++) {
        if (objects[i][idLabel] == anObj[idLabel]) {
            objects[i] = objects[0];
            objects.shift();
            objects.sort(function (o1, o2) {
                return o1[idLabel] - o2[idLabel];
            });
            break;
        }
    }
}

//check if anObj (without id) exist in objects, if exist,return object with id
exports.checkObjectExists = function (objects, anObj, ...idLabels) {
    for (var i = 0; i < objects.length; i++) {
        // console.log(idLabels[i]);
        for (var j = 0; j < idLabels.length; j++) {
            if (objects[i][idLabels[j]] != anObj[idLabels[j]]) {
                break;
            }
            if ((j == idLabels.length - 1) && objects[i][idLabels[j]] == anObj[idLabels[j]]) {
                return objects[i];
            }
        }

    }
    return undefined;
}