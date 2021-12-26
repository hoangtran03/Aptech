--tao bang customer
create table customer (
cust_no int primary key,
cust_name nvarchar(30),
phone_no nvarchar(16)
)
--chen du lieu vao bang
insert into customer(cust_no, cust_name, phone_no)
values
(1,'David Gordon','0231-5466356'),
(2,'Prince Fernandes','0221-5762382'),
(3,'Charles Yale','0321-8734723'),
(4,'Ryan Ford','0241-2343444'),
(5,'Bruce Smith','0241-8472198')
--xem du lieu
select * from customer
--tao bang items
create table items (
item_no nvarchar(16) primary key,
description nvarchar(30),
price int
)
--chen du lieu vao bang
insert into items(item_no, description, price)
values
('HW1','Power Supply',4000),
('HW2','Keyboard',2000),
('HW3','Mouse',800),
('SW1','Office Suite',15000),
('SW2','Payroll Software',8000)
--xem du lieu
select * from items
--tao bang oder_details
create table oder_details(
ord_no int,
item_no nvarchar(16),
qty int
)
--chen du lieu vao bang
insert into oder_details( ord_no, item_no, qty)
values
(101,'HW3',50),
(101,'SW1',150),
(102,'HW2',10),
(103,'HW3',50),
(104,'HW2',25),
(104,'HW3',100),
(105,'SW1',100)
--xem du lieu
select * from oder_details
--tao bang oder_august
create table oder_august(
ord_no int,
ord_date datetime,
cust_no int
)
--chen du lieu 
insert into oder_august(ord_no, ord_date, cust_no)
values
(101,'2012-08-02',1),
(102,'2012-08-11',2),
(103,'2012-08-21',3),
(104,'2012-08-28',4),
(105,'2012-08-30',5)
--xem du lieu
select * from oder_august