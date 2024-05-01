const fs = require('fs');
const fileName = __dirname + '/../data/users.json';

/** @type { { items: User[] } } */
let data //= require('../data/users.json');

function isFileAccessible(fileName) {
    return new Promise((resolve, reject) => {
        fs.access(fileName, fs.constants.F_OK, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, content) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(content);
        });
    });
}

function writeFile(fileName, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

isFileAccessible(fileName)
    .then(() => readFile(fileName))
    .then(content => {
        data = JSON.parse(content);
    })
    .catch(err => {
        console.error(err);
    });

function save() {
    return writeFile(fileName, JSON.stringify( data , null, 2) );
}

/**
 * @typedef {import('../../client/src/model/users').User} User
 * */

/**
 * @returns {User[]}
 * */
async function getAll() {
    return data.users;
}

/**
 * @param {number} id
 * @returns {User}
 * */
async function get(id) {
    return data.users.find(user => user.id == id);
}

/**
 * @param {string} q
 * @returns {User[]}
 * */
async function search(q) {
    return getAll().filter(item => 
        new RegExp(q, 'i').test(item.firstName) ||
        new RegExp(q, 'i').test(item.lastName) ||
        new RegExp(q, 'i').test(item.username) ||
        new RegExp(q, 'i').test(item.email) );
}

/**
 * @param {User} user
 * @returns {User}
 * */
async function add(user) {
    user.id = data.users.length + 1;
    data.users.push(user);
    save().catch(console.error);
    return user;
}

/**
 * @param {User} user
 * @returns {User}
 * */
async function update(user) {
    const index = data.users.findIndex(item => item.id == user.id);
    if (index >= 0) {
        data.users[index] = {
            ...data.users[index],
            ...user
        };
        save().catch(console.error);
        return user;
    }
    return null;
}

/**
 * @param {number} id
 * @returns {User | null}
 * */
async function remove(id) {
    const index = data.users.findIndex(item => item.id == id);
    if (index >= 0) {
        const deleted = data.users.splice(index, 1);
        save().catch(console.error);
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, get, search, add, update, remove
}