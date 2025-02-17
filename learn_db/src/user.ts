import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.clear();
    console.log("Inserting a new user into the Memory...");
    var user = new User();
    user.id = 1;
    user.email = "admin@email.com";
    user.gender = "male";
    user.password = "Pass@1234";
    console.log("Inserting a new user into the Database...");
    await userRepository.save(user);

    const admin = await userRepository.findOneBy({ id: 1 });
    console.log(admin);

    user = new User();
    user.id = 2;
    user.email = "user1@email.com";
    user.gender = "male";
    user.password = "Pass@1234";
    console.log("Inserting a new user into the Database...");
    await userRepository.save(user);

    const user1 = await userRepository.findOneBy({ id: 2 });
    console.log(user1);

    user = new User();
    user.id = 3;
    user.email = "user2@email.com";
    user.gender = "female";
    user.password = "Pass@1234";
    console.log("Inserting a new user into the Database...");
    await userRepository.save(user);

    const user2 = await userRepository.findOneBy({ id: 3 });
    console.log(user2);

}).catch(error => console.log(error))
