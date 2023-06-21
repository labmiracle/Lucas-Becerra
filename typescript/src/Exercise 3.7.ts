const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection <T >(item: T, collection: T[]) {
    collection.push(item);
    return collection;
}

pushToCollection('false', stringCollection);
pushToCollection('hi', stringCollection);
pushToCollection('[]', stringCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Exercise 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);

console.log("[Exercise 3.7]", `[${incrementedByTwo}] debe ser igual a [3,4,5]`);