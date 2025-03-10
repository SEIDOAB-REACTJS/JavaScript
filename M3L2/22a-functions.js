'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


function createFriend(_seeder)
{
    const f = {};
    f.name = _seeder.fullName;
    return f;
}

const createAnotherFriend = function (_seeder)
{
    const f = {};
    f.name = _seeder.fullName;
    return f;
}

const createYetAnotherFriend = createAnotherFriend;

const createYetYetAnotherFriend = (_seeder) => {
    const f = {};
    f.name = _seeder.fullName;
    return f;
}

const _seeder = new seedGenerator();
let friend = createFriend(_seeder);
friend = createAnotherFriend(_seeder);
friend = createYetAnotherFriend(_seeder);
friend = createYetYetAnotherFriend(_seeder);


