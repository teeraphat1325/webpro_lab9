import { AppDataSource } from "./data-source"
import { Order } from "./entity/Order";
import { OrderItem } from "./entity/OrderItem";
import { Product } from "./entity/Product";
import { User } from "./entity/User";

const orderDto = {
    orderItems: [
        { productId: 1, qty: 1 },
        { productId: 2, qty: 2 },
        { productId: 4, qty: 1 },
    ],
    userId: 2,
}

AppDataSource.initialize().then(async () => {

    const usersRepository = AppDataSource.getRepository(User);
    const productsRepository = AppDataSource.getRepository(Product);
    const orderItemsRepository = AppDataSource.getRepository(OrderItem);
    const ordersRepository = AppDataSource.getRepository(Order);
    const user = await usersRepository.findOneBy({ id: orderDto.userId })

    const order = new Order();
    order.user = user;
    order.total = 0;
    order.qty = 0;
    order.orderItems = [];
    for (const oi of orderDto.orderItems) {
        const orderItem = new OrderItem();
        orderItem.product = await productsRepository.findOneBy({ id: oi.productId });
        orderItem.name = orderItem.product.name;
        orderItem.price = orderItem.product.price;
        orderItem.qty = oi.qty;
        orderItem.total = orderItem.price * orderItem.qty;

        await orderItemsRepository.save(orderItem);
        order.orderItems.push(orderItem);
        order.total += orderItem.total;
        order.qty += orderItem.qty;
    }
    await ordersRepository.save(order);

    const orders = await ordersRepository.find({ relations: { orderItems: true, user: true } });
    console.log(JSON.stringify(orders, null, 2));
}).catch(error => console.log(error))
