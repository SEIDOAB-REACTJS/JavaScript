'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

console.group('Standard function')
function createFriend(_seeder)
{
    const f = {name: _seeder.fullName};
    return f;
}

console.group('Function expression');
const createAnotherFriend = function (_seeder)
{
    const f = {};
    f.name = _seeder.fullName;
    return f;
}

const createYetAnotherFriend = createAnotherFriend;

console.group('Arrow function')
const createYetYetAnotherFriend = (_seeder) => {
    const f = {};
    f.name = _seeder.fullName;
    return f;
}

const _seeder = new seedGenerator();
let friend = createFriend(_seeder);
console.log(friend);

friend = createAnotherFriend(_seeder);
console.log(friend);

friend = createYetAnotherFriend(_seeder);
console.log(friend);

friend = createYetYetAnotherFriend(_seeder);
console.log(friend);


