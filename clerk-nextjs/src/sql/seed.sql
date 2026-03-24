insert into
  Post (sender, Msg, reply_to, done)
values
  (1, 'i have this julie', 1, true)

create table Posts_reactions (
  id INT primary key generated always as identity,
  reaction varchar(1),
  user_id bigint,
  post_id bigint
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