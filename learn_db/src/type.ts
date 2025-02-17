import { AppDataSource } from "./data-source"
import { Type } from "./entity/Type";

AppDataSource.initialize().then(async () => {
    const typesRepository = AppDataSource.getRepository(Type);
    await typesRepository.clear();
    var type = new Type();
    type.id = 1;
    type.name = "drink";
    await typesRepository.save(type);

    var type = new Type();
    type.id = 2;
    type.name = "bekery";
    await typesRepository.save(type);

    var type = new Type();
    type.id = 3;
    type.name = "food";
    await typesRepository.save(type);

    const types = await typesRepository.find({ order: { id: "asc" } });
    console.log(types);
}).catch(error => console.log(error))
