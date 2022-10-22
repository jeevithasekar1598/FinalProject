create database miauniversity_db;
use miauniversity_db;

create table course(
id int,
cname varchar(84),
duration varchar(84),
constraint pk_course primary key (id) );

insert into course values(104,"ECE","4 years");
insert into course values(102,"Civil","4 years");
insert into course values(101,"Mechanical","3 years");
insert into course values(105,"M.E-It","2 years");
insert into course values(103,"M.E-CSE","2 years");

create table stu(
id int auto_increment,
sname varchar(84),
gender varchar(84),
address varchar(80),
email varchar(86),
mobileno varchar(15) ,
admissiondate date,
fees int,
course_id int,
image_path varchar(45) DEFAULT NULL,
constraint pk_stu primary key (id),
constraint fk_courseno foreign key (course_id) references course (id)
);

insert into stu values(1121,'Jeevitha','Female','Chidambaram','jeevitha21@gmail.com','9845675632',str_to_date('17/11/2015','%d/%m/%Y'),30000,101,null);
insert into stu values(1156,'Ram','Male','Chennai','ramnp11@gmail.com','9856998596',str_to_date('10/03/2018','%d/%m/%Y'),40000,103,null);
insert into stu values(1137,'Priya',"Female",'Kallakurichi','priya12@gmail.com','8564056987',str_to_date('24/08/2018','%d/%m/%Y'),42000,104,null);
insert into stu values(1234,'Kiran','Male','Thirchy','kiran45@gmail.com','9787562301',str_to_date('19/09/2018','%d/%m/%Y'),37000,103,null);
insert into stu values(1258,'Hari','Male','Coimbatore','hari34@gmail.com','7893214560',str_to_date('23/02/2020','%d/%m/%Y'),42000,105,null);
insert into stu values(1456,'Karan','Male','Salem','karan35@gmail.com','8562374102',str_to_date('16/05/2021','%d/%m/%Y'),38000,102,null);


select * from course;
select * from stu;
drop table stu;