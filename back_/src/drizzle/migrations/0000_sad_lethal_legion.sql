CREATE TABLE IF NOT EXISTS "user" (
	"name" varchar(255) PRIMARY KEY NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "user_name_unique" UNIQUE("name")
);
