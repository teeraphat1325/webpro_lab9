import { AppDataSource } from "./data-source"
import { Role } from "./entity/Role";
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const userRepository = AppDataSource.getRepository(User);
    const rolesRepository = AppDataSource.getRepository(Role);

    const adminRole = await rolesRepository.findOneBy({ id: 1 });
    const userRole = await rolesRepository.findOneBy({ id: 2 });

    await userRepository.clear();
    console.log("Inserting a new user into the Memory...");
    var user = new User();
    user.id = 1;
    user.email = "admin@email.com";
    user.gender = "male";
    user.password = "Pass@1234";
    user.roles = [];
    user.roles.push(adminRole);
    user.roles.push(userRole);
    console.log("Inserting a new user into the Database...");
    await userRepository.save(user);

    user = new User();
    user.id = 2;
    user.email = "user1@email.com";
    user.gender = "male";
    user.password = "Pass@1234";
    user.roles = [];
    user.roles.push(userRole);
    console.log("Inserting a new user into the Database...");
    await userRepository.save(user);

    user = new User();
    user.id = 3;
    user.email = "user2@email.com";
    user.gender = "female";
    user.password = "Pass@1234";
    user.roles = [];
    user.roles.push(userRole);
    console.log("Inserting a new user into the Database...");
    await userRepository.save(user);

    const users = await userRepository.find({ relations: { roles: true } });
    console.log(JSON.stringify(users, null, 2));

    const roles = await rolesRepository.find({ relations: { users: true } });
    console.log(JSON.stringify(roles, null, 2));
}).catch(error => console.log(error))
