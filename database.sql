CREATE TABLE "student" (
	"id" serial NOT NULL,
	"name" text NOT NULL,
	"surname" text NOT NULL,
	"pass" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	CONSTRAINT "student_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "admin" (
	"id" serial NOT NULL,
	"name" text NOT NULL,
	"surname" text NOT NULL,
	"pass" text NOT NULL UNIQUE,
	"email" text NOT NULL UNIQUE,
	CONSTRAINT "admin_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "school" (
	"id" serial NOT NULL unique,
	"admin" serial NOT NULL unique,
	"student" serial NOT NULL unique,
	"atricle" serial NOT NULL unique,
	CONSTRAINT "school_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "article" (
	"id" serial NOT NULL,
	"name" serial NOT NULL,
	"filling" serial NOT NULL,
	CONSTRAINT "article_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "student" ADD CONSTRAINT "student_fk0" FOREIGN KEY ("id") REFERENCES "school"("student");
ALTER TABLE "admin" ADD CONSTRAINT "admin_fk0" FOREIGN KEY ("id") REFERENCES "school"("admin");
ALTER TABLE "article" ADD CONSTRAINT "article_fk0" FOREIGN KEY ("id") REFERENCES "school"("atricle");




