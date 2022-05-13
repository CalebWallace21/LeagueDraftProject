const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db');
        const { userEmail: email, userPassword: password } = req.body;
        const [ existingUser ] = await db.check_existing_user(email);

        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [ newUser ] = await db.register_user(email, hash);
        const [ cart ] = await db.create_cart(newUser.user_id);

        delete newUser.hash;

        newUser.cart = cart.cart_id;
        console.log(newUser)

        req.session.user = newUser;
        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const { userEmail: email, userPassword: password } = req.body;

        const [ existingUser ] = await db.check_existing_user(email);

        if (!existingUser) {
            return res.status(404).send('User does not exist');
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash);

        if (!isAuthenticated) {
            return res.status(403).send('Incorrect email and/or password');
        }
    },
        logout: (req, res) => {
            req.session.destroy();
            res.sendStatus(200);
        },
        getSession: (req, res) => {
            if (req.session.user) {
                res.status(200).send(req.session.user);
            } else {
                res.sendStatus(403);
            }
        }
}