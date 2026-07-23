DROP TABLE IF EXISTS basics.value_examples;


CREATE TABLE basics.value_examples (
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    bio TEXT,
    score INTEGER
   
);


INSERT INTO basics.value_examples (nickname, bio, score)

VALUES
   (null,'learning postgresql',3),
   ('', 'empty nick name', 20),
   ('miraj','',0),
   ('hey',null,null);


--    SELECT * FROM basics.value_examples;


SELECT * FROM basics.value_examples WHERE nickname IS NULL;



SELECT * FROM basics.value_examples WHERE nickname ='';
SELECT * FROM basics.value_examples WHERE score = 0;
SELECT * FROM basics.value_examples WHERE nickname IS NOT NULL;