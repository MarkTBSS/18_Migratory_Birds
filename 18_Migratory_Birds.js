function migratoryBirds(arr) {
    var bird1 = arr.filter((x) => x === 1)
    var bird2 = arr.filter((x) => x === 2)
    var bird3 = arr.filter((x) => x === 3)
    var bird4 = arr.filter((x) => x === 4)
    var bird5 = arr.filter((x) => x === 5)

    var countBirdSpecies = []
    countBirdSpecies.push(bird1.length)
    countBirdSpecies.push(bird2.length)
    countBirdSpecies.push(bird3.length)
    countBirdSpecies.push(bird4.length)
    countBirdSpecies.push(bird5.length)
    //console.log(countBirdSpecies)
    var maxCount = Math.max(...countBirdSpecies)
    //console.log(maxCount)

    var typeChecker = 0
    typeChecker = countBirdSpecies.indexOf(maxCount) + 1;

    return typeChecker;
}

arr = [1, 4, 4, 4, 5, 3]
console.log(migratoryBirds(arr))

/* var typeChecker = 0
for (var i = 0; i < arr.length; i++) {
    if (countBirdSpeciesCopy[0] === countBirdSpecies[i]) {
        typeChecker = i + 1
        break
    }
}
 */