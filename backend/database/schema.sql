create DATABASE if not exists DBBabyplace;

use DBBabyplace; 

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null,
  password varchar(255) not null,
  is_admin bool,
  unique(email)
);

insert into user (email, password, is_admin) values ('user@demo.com', '1234', 0), ('admin@demo.com', '1234', 1);
