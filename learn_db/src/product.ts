import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"


AppDataSource.initialize().then(async () => {
    const productsRepository = AppDataSource.getRepository(Product);
    await productsRepository.clear();

    var product = new Product();
    product.id = 1;
    product.name = "Americano";
    product.price = 40;
    await productsRepository.save(product);

    var product = new Product();
    product.id = 2;
    product.name = "Espresso";
    product.price = 50;
    await productsRepository.save(product);

    var product = new Product();
    product.id = 3;
    product.name = "Coco";
    product.price = 50;
    await productsRepository.save(product);

    var product = new Product();
    product.id = 4;
    product.name = "Cake 1";
    product.price = 70;
    await productsRepository.save(product);

    var product = new Product();
    product.id = 5;
    product.name = "Cake 2";
    product.price = 70;
    await productsRepository.save(product);

    var product = new Product();
    product.id = 6;
    product.name = "Somtum";
    product.price = 70;
    await productsRepository.save(product);

    const products = await productsRepository.find();
    console.log(products);

}).catch(error => console.log(error))
