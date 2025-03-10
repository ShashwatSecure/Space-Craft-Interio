/*
  Warnings:

  - The values [DELHI,MUMBAI,BANGALORE,HYDERABAD,CHENNAI,KOLKATA,PUNE,JAIPUR,AHMEDABAD,LUCKNOW,CHANDIGARH,KOCHI,INDORE,BHOPAL,VISAKHAPATNAM,SURAT,GUWAHATI,PATNA,BHUBANESWAR,VARANASI] on the enum `City` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "City_new" AS ENUM ('BOKARO', 'DEOGHAR', 'DHANBAD', 'EAST_SINGHBHUM', 'GIRIDIH', 'HAZARIBAGH', 'KODARMA', 'RAMGARH', 'RANCHI', 'SARAIKELA', 'WEST_SINGHBHUM', 'OTHERS');
ALTER TABLE "FreeDesignConsultation" ALTER COLUMN "city" TYPE "City_new" USING ("city"::text::"City_new");
ALTER TYPE "City" RENAME TO "City_old";
ALTER TYPE "City_new" RENAME TO "City";
DROP TYPE "City_old";
COMMIT;
