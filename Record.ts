import { User } from "./user";

/*
 * Record<Keys, Type>
 * Constructs a type with a set of properties Keys of type Type.
 * This utility can be used to map the properties of a type to another type.
 */

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cats.boris);
