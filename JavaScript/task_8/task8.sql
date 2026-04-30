create database taskdb;
go

use taskdb;


create table students (
    id int primary key identity(1,1),
    name nvarchar(100) not null,
    age int,
    class nvarchar(10) not null,
    city nvarchar(50) not null,
    grade int check (grade between 0 and 100),
    gender char(1) default 'm',
    register_date date
);

create table courses (
    id int primary key identity(1,1),
    course_name nvarchar(100) not null,
    instructor nvarchar(100) not null,
    hours int check (hours >= 10),
    price int check (price > 0),
    level nvarchar(50) default 'beginner',
    start_date date
);

create table books (
    id int primary key identity(1,1),
    book_name nvarchar(100) not null,
    author nvarchar(100) not null,
    pages int check (pages >= 50),
    category nvarchar(50) default 'general',
    price int check (price > 0),
    publish_date date
);


insert into students (name, age, class, city, grade, gender, register_date)
values 
('ahmed ali',20,'1a','cairo',88,'m','2023-09-01'),
('sara hassan',21,'2b','giza',92,'f','2023-09-03'),
('omar samir',19,'1a','cairo',75,'m','2023-09-05'),
('mona adel',22,'3c','alex',81,'f','2023-09-07'),
('youssef khaled',23,'2b','giza',90,'m','2023-09-10');

insert into courses (course_name, instructor, hours, price, level, start_date)
values
('database basics','ahmed tarek',30,1200,'beginner','2024-02-01'),
('web development','sara ali',45,2000,'intermediate','2024-03-10'),
('algorithms','mona samir',40,1800,'advanced','2024-04-05'),
('networking','omar khaled',35,1500,'beginner','2024-05-01');

insert into books (book_name, author, pages, category, price, publish_date)
values
('clean code','robert martin',450,'programming',500,'2008-08-01'),
('atomic habits','james clear',320,'self development',350,'2018-10-16'),
('deep work','cal newport',300,'productivity',300,'2016-01-05'),
('design patterns','gof',395,'programming',600,'1994-10-21');


select * from students;

select name, grade from students;

select * from students where age > 20;

select * from students where class = '1a';

select * from students where grade > 85;

update students set grade = 80 where name = 'omar samir';

select * from students where city = 'cairo';



select * from courses;

select course_name, instructor from courses;

select * from courses where price > 1500;

select * from courses where level = 'beginner';

select * from courses where hours between 30 and 40;

update courses set price = 1900 where course_name = 'algorithms';

select * from courses where instructor like '%a%';


select * from books;

select book_name, author from books;

select * from books where price < 400;

select * from books where category = 'programming';

select * from books where pages between 300 and 500;

update books set price = 350 where book_name = 'deep work';

select * from books where book_name like '%o%';
