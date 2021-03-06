const express = require('express');
const passport = require('passport');
const UsersService = require('../services/users');
const { userIdSchema, createUserSchema } = require('../utils/schemas/users');
const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

//JWT stratigy
require('../utils/auth/strategies/jwt');

function usersApi(app) {
    const router = express.Router();
    app.use('/api/users', router);

    router.get('/',
        async (req, res, next) => {
            try {
                const users = await UsersService.getUsers();

                res.status(200).json({
                    status: 'OK',
                    message: 'users listed',
                    data: users,
                });
            } catch (error) {
                next(error);
            }
        });

    router.get('/:userId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['create:users']),
        validationHandler(userIdSchema, 'params'),
        async (req, res, next) => {
            const { userId } = req.param;
            try {
                const users = await UsersService.getUser({ userId });

                res.status(200).json({
                    status: 'OK',
                    message: 'user listed',
                    data: users,
                });
            } catch (error) {
                next(error);
            }
        });

    router.post('/', validationHandler(createUserSchema, 'body'), async (req, res, next) => {
        const { body: user } = req;
        try {
            const userId = await UsersService.createUser({ user });

            res.status(200).json({
                status: 'OK',
                message: `user '${userId}' created`,
                data: userId,
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:userId', validationHandler(userIdSchema, 'params'), validationHandler(createUserSchema, 'body'), async (req, res, next) => {
        const { body: user } = req;
        const { userId } = req.param;
        try {
            const newUserId = await UsersService.updateUser({ userId, user });

            res.status(200).json({
                status: 'OK',
                message: `user '${newUserId}' updated`,
                data: userId,
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = usersApi;
