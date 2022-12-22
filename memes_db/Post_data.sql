drop table if exists post_data cascade;

create table post_data (
    text_post text,
    phone text
);

insert into post_data(text_post, phone)
values ('', ''),
       ('', ''),
       ('', ''),
       ('', ''),
       ('', '');