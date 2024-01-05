create DATABASE if not exists DBBabyplace;

use DBBabyplace; 

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null,
  password varchar(255) not null,
  isAdmin bool,
  unique(email)
);

insert into user (email, password, isAdmin) values ('user@demo.com', '1234', 0), ('admin@demo.com', '1234', 1);

alter table user rename column is_admin to isAdmin;