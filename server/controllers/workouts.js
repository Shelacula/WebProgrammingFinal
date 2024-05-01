const workouts = require('../models/workouts')
const express = require('express');
const app = express.Router();

/** 
 * @typedef {import('../../client/src/model/workouts').Workout} Workout 
 * @typedef {import('../../client/src/model/transportTypes').DataEnvelope<Workout> } WorkoutDataEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataListEnvelope<Workout> } WorkoutDataListEnvelope
 * */

app
    .get('/', (req, res, next) => {
        workouts.getAll()
        .then(all => {
            /** @type { WorkoutDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        workouts.search(search)
        .then(result => {
            /** @type { WorkoutDataListEnvelope } */
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .get('/:pid', (req, res, next) => {
        const pid = req.params.pid;
        workouts.get(+pid)
        .then(result => {
            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .get('/:uid', (req, res, next) => {
        const uid = req.params.uid;
        workouts.get(+uid)
        .then(result => {
            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        const workout = req.body;
        workouts.add(workout)
        .then(result => {
            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:pid', (req, res, next) => {
        const workout = req.body;
        workout.pid = req.params.pid;
        workouts.update(workout)
        .then(result => {
            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }

            res.send(response);
        }).catch(next);
    })
    .delete('/:pid', (req, res, next) => {
        const pid = req.params.pid;
        workouts.remove(+pid)
        .then(result => {
            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })




module.exports = app