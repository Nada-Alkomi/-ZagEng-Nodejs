create database e_ccommerce;
go

use e_ccommerce;


create table products (
    product_id int primary key identity(1,1),
    name nvarchar(100) not null,
    category nvarchar(50),
    stock_quantity int check (stock_quantity >= 0),
    discount decimal(5,2) null
);



create table orders (
    order_id int primary key identity(1,1),
    order_date date,
    status nvarchar(50)
);

create table order_items (
    order_id int,
    product_id int,
    quantity int not null,
    unit_price decimal(10,2) not null,
    primary key (order_id, product_id),
    foreign key (order_id) references orders(order_id),
    foreign key (product_id) references products(product_id)
);

insert into products (name, category, stock_quantity, discount) values
('laptop','electronics',10,5),
('phone','electronics',20,10),
('book','education',50,null);

insert into orders (order_date, status) values
('2024-01-01','shipped'),
('2024-01-05','pending');

insert into order_items (order_id, product_id, quantity, unit_price) values
(1,1,2,1000),
(1,2,1,500),
(2,3,3,100);




select 
    o.order_id,
    sum(oi.quantity * oi.unit_price) as total_revenue
from orders o
inner join order_items oi
on o.order_id = oi.order_id
group by o.order_id;