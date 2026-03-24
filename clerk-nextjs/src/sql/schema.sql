create table users (
  clerk_id INT primary key generated always as identity,
  f_name varchar(50),
  l_name varchar(250),
  m_name varchar(250),
  age bigint,
  bio varchar(500),
  new_column bigint -- new_column doesn't do anything it's just an oversight
)

-- Seed data users
insert into
  users (f_name, L_name, M_name, Age, Bio, new_column)
values
  ('dave','wanger','wonger',43,'this worlds magic',1)

create table post (
  id INT primary key generated always as identity,
  sender bigint references users (clerk_id), -- references the user(id) of the poster
  Msg varchar(250), -- atm this is just text but we could use this for now until we make a list of items table for groceries
  reply_To bigint references post(id), --references the post(id) it responds to instead of post sender as 1 sender can have many posts
  Done boolean
)

-- hello Seed data post
  insert into
    Post (sender, Msg, reply_to, done)
  values
    (1, 'i have this julie', 1, true)

create table Posts_reactions (
  id INT primary key generated always as identity,
  reaction varchar(1),
  user_id bigint references users(clerk_id),
  post_id bigint references post(id)
  -- could make the id (user_id, post_id) in order to force the db to only have 1 reaction per user unless we want the user to be able to make multiple reactions
  -- or do (user_id, post_id, reaction) to make it so they can still do multiple reactions but not of the same letter/emoji
)
  insert into
    posts_reactions (reaction, user_id, post_id)
  values
    ('w', 1, 1)
    
  select
    poster.f_name as poster_first_name,
    poster.l_name as poster_last_name,
    poster.clerk_id as poster_clerk_id,
    p.msg as post_content,
    p.id as post_id,
    r.reaction as reaction_given,
    r.id as reaction_id,
    reactor.f_name as reactor_first_name,
    reactor.l_name as reactor_last_name,
    reactor.clerk_id as reactor_clerk_id
  from
    post p
    join users poster on p.sender = poster.clerk_id
    join posts_reactions r on p.id = r.post_id
    join users reactor on r.user_id = reactor.clerk_id
  order by
    p.id;

