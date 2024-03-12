-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('men', 'women', 'kid', 'unisex');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[],
    "slug" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
