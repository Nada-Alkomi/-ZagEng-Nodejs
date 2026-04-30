create database hospital;
go

use hospital;

create table departments (
    dept_id int primary key identity(1,1),
    dept_name nvarchar(100) not null,
    head_doctor_id int null
);

create table doctors (
    doctor_id int primary key identity(1,1),
    doctor_name nvarchar(100) not null,
    specialization nvarchar(100),
    dept_id int not null,
    foreign key (dept_id) references departments(dept_id)
);

create table patients (
    patient_id int primary key identity(1,1),
    patient_name nvarchar(100) not null,
    date_of_birth date,
    phone_number nvarchar(20)
);

create table appointments (
    appointment_id int primary key identity(1,1),
    doctor_id int not null,
    patient_id int not null,
    appointment_date date,
    diagnosis nvarchar(200),
    fee decimal(10,2),
    foreign key (doctor_id) references doctors(doctor_id),
    foreign key (patient_id) references patients(patient_id)
);


insert into departments (dept_name) values
('cardiology'),
('neurology');

insert into doctors (doctor_name, specialization, dept_id) values
('ahmed ali','cardiology',1),
('sara mohamed','neurology',2);


update departments set head_doctor_id = 1 where dept_id = 1;

insert into patients (patient_name, date_of_birth, phone_number) values
('ali hassan','2000-05-10','01000000000'),
('mona adel','1998-07-20','01111111111');

insert into appointments (doctor_id, patient_id, appointment_date, diagnosis, fee) values
(1,1,'2024-02-01','checkup',200),
(1,2,'2024-02-02','consultation',300),
(2,1,'2024-02-03','treatment',250);


alter table departments
add constraint fk_head_doctor
foreign key (head_doctor_id) references doctors(doctor_id);


select d.dept_name, doc.doctor_name as head_doctor
from departments d
left join doctors doc
on d.head_doctor_id = doc.doctor_id;


select doctor_id, sum(fee) as total_revenue
from appointments
group by doctor_id;

select avg(a.fee) as avg_fee
from appointments a
inner join doctors d on a.doctor_id = d.doctor_id
inner join departments dep on d.dept_id = dep.dept_id
where dep.dept_name = 'cardiology';