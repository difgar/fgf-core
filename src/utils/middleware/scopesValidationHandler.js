const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
    return (req, res, next) => {
        if (!req.user || (req.user && !req.user.scopes)) {
            return next(boom.unauthorized('Missing scopes'));
        }

        const hasAccess = allowedScopes.map((allowedScope) => req.user.scopes.includes(allowedScope)).find((allowed) => Boolean(allowed));

        if (!hasAccess) {
            return next(boom.unauthorized('Insufficient scopes'));
        }

        return next();
    };
}

module.exports = scopesValidationHandler;
