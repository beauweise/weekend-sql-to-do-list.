CREATE TABLE "books" (
    "id" serial PRIMARY KEY,
    "task" varchar(50) NOT NULL,
    "taskDone" boolean default false
    
);