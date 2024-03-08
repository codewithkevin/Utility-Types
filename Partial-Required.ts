import { User } from "./user";

/*
 *Partial <Type>,
 * Constructs a type with all properties of Type set to optional.
 *  This utility will return a type that represents all subsets of a given type.
 */

type PartialUser = Partial<User>;

const partialUserDetails: PartialUser = {
  id: 1,
  name: "John",
};

/*
 * Required<Type>
 * Constructs a type consisting of all properties of Type set to required.
 * This utility will return a type that represents all subsets of a given type.
 */

type RequiredUser = Required<User> & {
  id?: number;
  name?: string;
};

// const userDetails: RequiredUser = {
//   id: 1,
//   name: "John",
// };
