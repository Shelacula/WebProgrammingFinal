const fs = require('fs');
const fileName = __dirname + '/../data/workouts.json';

/** @type { { items: Workout[] } } */
let data //= require('../data/workouts.json');

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
 * @typedef {import('../../client/src/model/workouts').Workout} Workout
 * */

/**
 * @returns {Workout[]}
 * */
async function getAll() {
    return data.workouts;
}

/**
 * @returns {Workout[]}
 * */
async function getUserWorkouts(uid) {
    return data.workouts.filter(workout => workout.uid == uid);
}

/**
 * @param {number} pid
 * @returns {Workout}
 * */
async function get(pid) {
    return data.workouts.find(workout => workout.pid == pid);
}

/**
 * @param {string} q
 * @returns {Workout[]}
 * */
async function search(q) {
    return getAll().filter(item => 
        new RegExp(q, 'i').test(item.firstName) ||
        new RegExp(q, 'i').test(item.lastName) ||
        new RegExp(q, 'i').test(item.username) ||
        new RegExp(q, 'i').test(item.email) );
}

/**
 * @param {Workout} workout
 * @returns {Workout}
 * */
async function add(workout) {
    workout.pid = data.workout.length + 1;
    data.workout.push(workout);
    save().catch(console.error);
    return workout;
}

/**
 * @param {Workout} workout
 * @returns {Workout}
 * */
async function update(workout) {
    const index = data.workout.findIndex(item => item.pid == workout.pid);
    if (index >= 0) {
        data.workouts[index] = {
            ...data.workouts[index],
            ...workout
        };
        save().catch(console.error);
        return workout;
    }
    return null;
}

/**
 * @param {number} pid
 * @returns {Workout | null}
 * */
async function remove(pid) {
    const index = data.workouts.findIndex(item => item.pid == pid);
    if (index >= 0) {
        const deleted = data.workouts.splice(index, 1);
        save().catch(console.error);
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, getUserWorkouts, get, search, add, update, remove
}