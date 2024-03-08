import { User } from "./user";

/*
 * Omit<Type, key>
 * Constructs a type by picking all properties from Type and then removing key.
 * then removing key (string, literal or union of string literals)
 */

type UserProfile = Omit<User, "password" | "role">;

interface UserProfileInterface extends Omit<User, "password" | "role"> {}

/*
 * Pick<Type, key>
 * Constructs a type by picking the set of properties K from Type
 */

type UserCredentials = Pick<User, "email" | "password">;
