drop table if exists post_pikabu

create table post_pikabu
(
    id int generated always as identity primary key,
    title text not null,
    author text not null,
    text_post text
);

create table users
(
    nickname text not null,
    post_user int not null references post_pikabu
);
