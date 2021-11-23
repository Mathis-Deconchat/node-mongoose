const mongoose = require('mongoose');
const userSchema = require('./schema')

async function main() {
    mongoose.set('debug', true);
    await mongoose.connect('mongodb://mongoadmin:mongoadmin@127.0.0.1:27017/node-mongo?authSource=admin');
    

    const Gl_user = mongoose.model('Gl_user', userSchema);
    
    const firstUser = new Gl_user(
      {
        test: "hello",
        gl_username : 'Silence',
        gl_password : "password",
        is_active: 1,
       })

    console.log(firstUser)
    await firstUser.save()

    allUsers = await Gl_user.find()
    console.log(allUsers[0])
}



main().catch(err => console.log(err));
