const { User } = require('./models'); // Adjust the path to your model

// Create a new user
User.create({ name: 'John Doe', email: 'johndoe@example.com' })
    .then(user => {
        console.log(`Created user: ${user.name}`);
    })
    .catch(error => {
        console.error('Error creating user:', error);
    });


User.findAll()
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.error(error);
    })
