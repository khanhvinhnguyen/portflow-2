import { StaticImport } from "next/dist/shared/lib/get-img-props";

export class Project {
  id!: number;
  title!: string;
  date!: string;
  description!: string;
  image!: string | StaticImport;
  tags!: string[];
  category!: string;
  github?: string;
  webapp?: string;
  member?: Member[];
}

export class Member {
  img!: string | StaticImport;
  name!: string;
  linkedin?: string;
  github?: string;
}