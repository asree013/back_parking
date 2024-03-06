
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Parks
 * 
 */
export type Parks = $Result.DefaultSelection<Prisma.$ParksPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model SlipPayment
 * 
 */
export type SlipPayment = $Result.DefaultSelection<Prisma.$SlipPaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.parks`: Exposes CRUD operations for the **Parks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parks
    * const parks = await prisma.parks.findMany()
    * ```
    */
  get parks(): Prisma.ParksDelegate<ExtArgs>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs>;

  /**
   * `prisma.slipPayment`: Exposes CRUD operations for the **SlipPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlipPayments
    * const slipPayments = await prisma.slipPayment.findMany()
    * ```
    */
  get slipPayment(): Prisma.SlipPaymentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Parks: 'Parks',
    Bookings: 'Bookings',
    Payments: 'Payments',
    SlipPayment: 'SlipPayment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'parks' | 'bookings' | 'payments' | 'slipPayment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Parks: {
        payload: Prisma.$ParksPayload<ExtArgs>
        fields: Prisma.ParksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>
          }
          findFirst: {
            args: Prisma.ParksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>
          }
          findMany: {
            args: Prisma.ParksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>[]
          }
          create: {
            args: Prisma.ParksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>
          }
          createMany: {
            args: Prisma.ParksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>
          }
          update: {
            args: Prisma.ParksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>
          }
          deleteMany: {
            args: Prisma.ParksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParksPayload>
          }
          aggregate: {
            args: Prisma.ParksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParks>
          }
          groupBy: {
            args: Prisma.ParksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParksGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParksCountArgs<ExtArgs>,
            result: $Utils.Optional<ParksCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      SlipPayment: {
        payload: Prisma.$SlipPaymentPayload<ExtArgs>
        fields: Prisma.SlipPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlipPaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlipPaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>
          }
          findFirst: {
            args: Prisma.SlipPaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlipPaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>
          }
          findMany: {
            args: Prisma.SlipPaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>[]
          }
          create: {
            args: Prisma.SlipPaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>
          }
          createMany: {
            args: Prisma.SlipPaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SlipPaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>
          }
          update: {
            args: Prisma.SlipPaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>
          }
          deleteMany: {
            args: Prisma.SlipPaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SlipPaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SlipPaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlipPaymentPayload>
          }
          aggregate: {
            args: Prisma.SlipPaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSlipPayment>
          }
          groupBy: {
            args: Prisma.SlipPaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SlipPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlipPaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<SlipPaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }



  /**
   * Count Type ParksCountOutputType
   */

  export type ParksCountOutputType = {
    bookings: number
  }

  export type ParksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ParksCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes

  /**
   * ParksCountOutputType without action
   */
  export type ParksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParksCountOutputType
     */
    select?: ParksCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ParksCountOutputType without action
   */
  export type ParksCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }



  /**
   * Count Type PaymentsCountOutputType
   */

  export type PaymentsCountOutputType = {
    slipPayment: number
  }

  export type PaymentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slipPayment?: boolean | PaymentsCountOutputTypeCountSlipPaymentArgs
  }

  // Custom InputTypes

  /**
   * PaymentsCountOutputType without action
   */
  export type PaymentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsCountOutputType
     */
    select?: PaymentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PaymentsCountOutputType without action
   */
  export type PaymentsCountOutputTypeCountSlipPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlipPaymentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    idCard: string | null
    email: string | null
    address: string | null
    image_user: string | null
    phone: string | null
    role: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    idCard: string | null
    email: string | null
    address: string | null
    image_user: string | null
    phone: string | null
    role: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    firstname: number
    lastname: number
    idCard: number
    email: number
    address: number
    image_user: number
    phone: number
    role: number
    create_date: number
    update_date: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstname?: true
    lastname?: true
    idCard?: true
    email?: true
    address?: true
    image_user?: true
    phone?: true
    role?: true
    create_date?: true
    update_date?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstname?: true
    lastname?: true
    idCard?: true
    email?: true
    address?: true
    image_user?: true
    phone?: true
    role?: true
    create_date?: true
    update_date?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstname?: true
    lastname?: true
    idCard?: true
    email?: true
    address?: true
    image_user?: true
    phone?: true
    role?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    password: string
    firstname: string
    lastname: string
    idCard: string | null
    email: string | null
    address: string | null
    image_user: string | null
    phone: string | null
    role: string
    create_date: Date
    update_date: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    idCard?: boolean
    email?: boolean
    address?: boolean
    image_user?: boolean
    phone?: boolean
    role?: boolean
    create_date?: boolean
    update_date?: boolean
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    idCard?: boolean
    email?: boolean
    address?: boolean
    image_user?: boolean
    phone?: boolean
    role?: boolean
    create_date?: boolean
    update_date?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      firstname: string
      lastname: string
      idCard: string | null
      email: string | null
      address: string | null
      image_user: string | null
      phone: string | null
      role: string
      create_date: Date
      update_date: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookings<T extends Users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly firstname: FieldRef<"Users", 'String'>
    readonly lastname: FieldRef<"Users", 'String'>
    readonly idCard: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly image_user: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly create_date: FieldRef<"Users", 'DateTime'>
    readonly update_date: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.bookings
   */
  export type Users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Parks
   */

  export type AggregateParks = {
    _count: ParksCountAggregateOutputType | null
    _min: ParksMinAggregateOutputType | null
    _max: ParksMaxAggregateOutputType | null
  }

  export type ParksMinAggregateOutputType = {
    id: string | null
    name_park: string | null
    image_park: string | null
    active: boolean | null
    create_date: Date | null
    update_date: Date | null
  }

  export type ParksMaxAggregateOutputType = {
    id: string | null
    name_park: string | null
    image_park: string | null
    active: boolean | null
    create_date: Date | null
    update_date: Date | null
  }

  export type ParksCountAggregateOutputType = {
    id: number
    name_park: number
    image_park: number
    active: number
    create_date: number
    update_date: number
    _all: number
  }


  export type ParksMinAggregateInputType = {
    id?: true
    name_park?: true
    image_park?: true
    active?: true
    create_date?: true
    update_date?: true
  }

  export type ParksMaxAggregateInputType = {
    id?: true
    name_park?: true
    image_park?: true
    active?: true
    create_date?: true
    update_date?: true
  }

  export type ParksCountAggregateInputType = {
    id?: true
    name_park?: true
    image_park?: true
    active?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type ParksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parks to aggregate.
     */
    where?: ParksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParksOrderByWithRelationInput | ParksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parks
    **/
    _count?: true | ParksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParksMaxAggregateInputType
  }

  export type GetParksAggregateType<T extends ParksAggregateArgs> = {
        [P in keyof T & keyof AggregateParks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParks[P]>
      : GetScalarType<T[P], AggregateParks[P]>
  }




  export type ParksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParksWhereInput
    orderBy?: ParksOrderByWithAggregationInput | ParksOrderByWithAggregationInput[]
    by: ParksScalarFieldEnum[] | ParksScalarFieldEnum
    having?: ParksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParksCountAggregateInputType | true
    _min?: ParksMinAggregateInputType
    _max?: ParksMaxAggregateInputType
  }

  export type ParksGroupByOutputType = {
    id: string
    name_park: string
    image_park: string | null
    active: boolean
    create_date: Date
    update_date: Date
    _count: ParksCountAggregateOutputType | null
    _min: ParksMinAggregateOutputType | null
    _max: ParksMaxAggregateOutputType | null
  }

  type GetParksGroupByPayload<T extends ParksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParksGroupByOutputType[P]>
            : GetScalarType<T[P], ParksGroupByOutputType[P]>
        }
      >
    >


  export type ParksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_park?: boolean
    image_park?: boolean
    active?: boolean
    create_date?: boolean
    update_date?: boolean
    bookings?: boolean | Parks$bookingsArgs<ExtArgs>
    _count?: boolean | ParksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parks"]>

  export type ParksSelectScalar = {
    id?: boolean
    name_park?: boolean
    image_park?: boolean
    active?: boolean
    create_date?: boolean
    update_date?: boolean
  }

  export type ParksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Parks$bookingsArgs<ExtArgs>
    _count?: boolean | ParksCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ParksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parks"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_park: string
      image_park: string | null
      active: boolean
      create_date: Date
      update_date: Date
    }, ExtArgs["result"]["parks"]>
    composites: {}
  }


  type ParksGetPayload<S extends boolean | null | undefined | ParksDefaultArgs> = $Result.GetResult<Prisma.$ParksPayload, S>

  type ParksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParksFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ParksCountAggregateInputType | true
    }

  export interface ParksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parks'], meta: { name: 'Parks' } }
    /**
     * Find zero or one Parks that matches the filter.
     * @param {ParksFindUniqueArgs} args - Arguments to find a Parks
     * @example
     * // Get one Parks
     * const parks = await prisma.parks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParksFindUniqueArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Parks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParksFindUniqueOrThrowArgs} args - Arguments to find a Parks
     * @example
     * // Get one Parks
     * const parks = await prisma.parks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Parks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksFindFirstArgs} args - Arguments to find a Parks
     * @example
     * // Get one Parks
     * const parks = await prisma.parks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParksFindFirstArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Parks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksFindFirstOrThrowArgs} args - Arguments to find a Parks
     * @example
     * // Get one Parks
     * const parks = await prisma.parks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Parks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parks
     * const parks = await prisma.parks.findMany()
     * 
     * // Get first 10 Parks
     * const parks = await prisma.parks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parksWithIdOnly = await prisma.parks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Parks.
     * @param {ParksCreateArgs} args - Arguments to create a Parks.
     * @example
     * // Create one Parks
     * const Parks = await prisma.parks.create({
     *   data: {
     *     // ... data to create a Parks
     *   }
     * })
     * 
    **/
    create<T extends ParksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParksCreateArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Parks.
     *     @param {ParksCreateManyArgs} args - Arguments to create many Parks.
     *     @example
     *     // Create many Parks
     *     const parks = await prisma.parks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parks.
     * @param {ParksDeleteArgs} args - Arguments to delete one Parks.
     * @example
     * // Delete one Parks
     * const Parks = await prisma.parks.delete({
     *   where: {
     *     // ... filter to delete one Parks
     *   }
     * })
     * 
    **/
    delete<T extends ParksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParksDeleteArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Parks.
     * @param {ParksUpdateArgs} args - Arguments to update one Parks.
     * @example
     * // Update one Parks
     * const parks = await prisma.parks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParksUpdateArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Parks.
     * @param {ParksDeleteManyArgs} args - Arguments to filter Parks to delete.
     * @example
     * // Delete a few Parks
     * const { count } = await prisma.parks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parks
     * const parks = await prisma.parks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parks.
     * @param {ParksUpsertArgs} args - Arguments to update or create a Parks.
     * @example
     * // Update or create a Parks
     * const parks = await prisma.parks.upsert({
     *   create: {
     *     // ... data to create a Parks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parks we want to update
     *   }
     * })
    **/
    upsert<T extends ParksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParksUpsertArgs<ExtArgs>>
    ): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksCountArgs} args - Arguments to filter Parks to count.
     * @example
     * // Count the number of Parks
     * const count = await prisma.parks.count({
     *   where: {
     *     // ... the filter for the Parks we want to count
     *   }
     * })
    **/
    count<T extends ParksCountArgs>(
      args?: Subset<T, ParksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParksAggregateArgs>(args: Subset<T, ParksAggregateArgs>): Prisma.PrismaPromise<GetParksAggregateType<T>>

    /**
     * Group by Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParksGroupByArgs['orderBy'] }
        : { orderBy?: ParksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parks model
   */
  readonly fields: ParksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookings<T extends Parks$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Parks$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Parks model
   */ 
  interface ParksFieldRefs {
    readonly id: FieldRef<"Parks", 'String'>
    readonly name_park: FieldRef<"Parks", 'String'>
    readonly image_park: FieldRef<"Parks", 'String'>
    readonly active: FieldRef<"Parks", 'Boolean'>
    readonly create_date: FieldRef<"Parks", 'DateTime'>
    readonly update_date: FieldRef<"Parks", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Parks findUnique
   */
  export type ParksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where: ParksWhereUniqueInput
  }


  /**
   * Parks findUniqueOrThrow
   */
  export type ParksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where: ParksWhereUniqueInput
  }


  /**
   * Parks findFirst
   */
  export type ParksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where?: ParksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParksOrderByWithRelationInput | ParksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parks.
     */
    cursor?: ParksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parks.
     */
    distinct?: ParksScalarFieldEnum | ParksScalarFieldEnum[]
  }


  /**
   * Parks findFirstOrThrow
   */
  export type ParksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where?: ParksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParksOrderByWithRelationInput | ParksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parks.
     */
    cursor?: ParksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parks.
     */
    distinct?: ParksScalarFieldEnum | ParksScalarFieldEnum[]
  }


  /**
   * Parks findMany
   */
  export type ParksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where?: ParksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParksOrderByWithRelationInput | ParksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parks.
     */
    cursor?: ParksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    distinct?: ParksScalarFieldEnum | ParksScalarFieldEnum[]
  }


  /**
   * Parks create
   */
  export type ParksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * The data needed to create a Parks.
     */
    data: XOR<ParksCreateInput, ParksUncheckedCreateInput>
  }


  /**
   * Parks createMany
   */
  export type ParksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parks.
     */
    data: ParksCreateManyInput | ParksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Parks update
   */
  export type ParksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * The data needed to update a Parks.
     */
    data: XOR<ParksUpdateInput, ParksUncheckedUpdateInput>
    /**
     * Choose, which Parks to update.
     */
    where: ParksWhereUniqueInput
  }


  /**
   * Parks updateMany
   */
  export type ParksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parks.
     */
    data: XOR<ParksUpdateManyMutationInput, ParksUncheckedUpdateManyInput>
    /**
     * Filter which Parks to update
     */
    where?: ParksWhereInput
  }


  /**
   * Parks upsert
   */
  export type ParksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * The filter to search for the Parks to update in case it exists.
     */
    where: ParksWhereUniqueInput
    /**
     * In case the Parks found by the `where` argument doesn't exist, create a new Parks with this data.
     */
    create: XOR<ParksCreateInput, ParksUncheckedCreateInput>
    /**
     * In case the Parks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParksUpdateInput, ParksUncheckedUpdateInput>
  }


  /**
   * Parks delete
   */
  export type ParksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
    /**
     * Filter which Parks to delete.
     */
    where: ParksWhereUniqueInput
  }


  /**
   * Parks deleteMany
   */
  export type ParksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parks to delete
     */
    where?: ParksWhereInput
  }


  /**
   * Parks.bookings
   */
  export type Parks$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }


  /**
   * Parks without action
   */
  export type ParksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parks
     */
    select?: ParksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParksInclude<ExtArgs> | null
  }



  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    detail: string | null
    status: string | null
    start_date: Date | null
    end_date: Date | null
    booking_by: string | null
    created_by: string | null
    parking_id: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    detail: string | null
    status: string | null
    start_date: Date | null
    end_date: Date | null
    booking_by: string | null
    created_by: string | null
    parking_id: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    detail: number
    status: number
    start_date: number
    end_date: number
    booking_by: number
    created_by: number
    parking_id: number
    create_date: number
    update_date: number
    _all: number
  }


  export type BookingsMinAggregateInputType = {
    id?: true
    detail?: true
    status?: true
    start_date?: true
    end_date?: true
    booking_by?: true
    created_by?: true
    parking_id?: true
    create_date?: true
    update_date?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    detail?: true
    status?: true
    start_date?: true
    end_date?: true
    booking_by?: true
    created_by?: true
    parking_id?: true
    create_date?: true
    update_date?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    detail?: true
    status?: true
    start_date?: true
    end_date?: true
    booking_by?: true
    created_by?: true
    parking_id?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    detail: string
    status: string
    start_date: Date
    end_date: Date
    booking_by: string
    created_by: string
    parking_id: string
    create_date: Date
    update_date: Date
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    booking_by?: boolean
    created_by?: boolean
    parking_id?: boolean
    create_date?: boolean
    update_date?: boolean
    user_created?: boolean | UsersDefaultArgs<ExtArgs>
    parkings?: boolean | ParksDefaultArgs<ExtArgs>
    payments?: boolean | Bookings$paymentsArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectScalar = {
    id?: boolean
    detail?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    booking_by?: boolean
    created_by?: boolean
    parking_id?: boolean
    create_date?: boolean
    update_date?: boolean
  }

  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_created?: boolean | UsersDefaultArgs<ExtArgs>
    parkings?: boolean | ParksDefaultArgs<ExtArgs>
    payments?: boolean | Bookings$paymentsArgs<ExtArgs>
  }


  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      user_created: Prisma.$UsersPayload<ExtArgs>
      parkings: Prisma.$ParksPayload<ExtArgs>
      payments: Prisma.$PaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      detail: string
      status: string
      start_date: Date
      end_date: Date
      booking_by: string
      created_by: string
      parking_id: string
      create_date: Date
      update_date: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }


  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bookings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
    **/
    create<T extends BookingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookings.
     *     @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const bookings = await prisma.bookings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
    **/
    delete<T extends BookingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
    **/
    upsert<T extends BookingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_created<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    parkings<T extends ParksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParksDefaultArgs<ExtArgs>>): Prisma__ParksClient<$Result.GetResult<Prisma.$ParksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    payments<T extends Bookings$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Bookings$paymentsArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bookings model
   */ 
  interface BookingsFieldRefs {
    readonly id: FieldRef<"Bookings", 'String'>
    readonly detail: FieldRef<"Bookings", 'String'>
    readonly status: FieldRef<"Bookings", 'String'>
    readonly start_date: FieldRef<"Bookings", 'DateTime'>
    readonly end_date: FieldRef<"Bookings", 'DateTime'>
    readonly booking_by: FieldRef<"Bookings", 'String'>
    readonly created_by: FieldRef<"Bookings", 'String'>
    readonly parking_id: FieldRef<"Bookings", 'String'>
    readonly create_date: FieldRef<"Bookings", 'DateTime'>
    readonly update_date: FieldRef<"Bookings", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }


  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }


  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }


  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }


  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }


  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }


  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }


  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
  }


  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }


  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }


  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
  }


  /**
   * Bookings.payments
   */
  export type Bookings$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
  }


  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingsInclude<ExtArgs> | null
  }



  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    count: number | null
    deposit: number | null
    remian: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    count: number | null
    deposit: number | null
    remian: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    status_payment: string | null
    count: number | null
    deposit: number | null
    remian: number | null
    booking_id: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    status_payment: string | null
    count: number | null
    deposit: number | null
    remian: number | null
    booking_id: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    status_payment: number
    count: number
    deposit: number
    remian: number
    booking_id: number
    create_date: number
    update_date: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    count?: true
    deposit?: true
    remian?: true
  }

  export type PaymentsSumAggregateInputType = {
    count?: true
    deposit?: true
    remian?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    status_payment?: true
    count?: true
    deposit?: true
    remian?: true
    booking_id?: true
    create_date?: true
    update_date?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    status_payment?: true
    count?: true
    deposit?: true
    remian?: true
    booking_id?: true
    create_date?: true
    update_date?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    status_payment?: true
    count?: true
    deposit?: true
    remian?: true
    booking_id?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    status_payment: string
    count: number
    deposit: number | null
    remian: number | null
    booking_id: string
    create_date: Date
    update_date: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status_payment?: boolean
    count?: boolean
    deposit?: boolean
    remian?: boolean
    booking_id?: boolean
    create_date?: boolean
    update_date?: boolean
    bookings?: boolean | BookingsDefaultArgs<ExtArgs>
    slipPayment?: boolean | Payments$slipPaymentArgs<ExtArgs>
    _count?: boolean | PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    status_payment?: boolean
    count?: boolean
    deposit?: boolean
    remian?: boolean
    booking_id?: boolean
    create_date?: boolean
    update_date?: boolean
  }

  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BookingsDefaultArgs<ExtArgs>
    slipPayment?: boolean | Payments$slipPaymentArgs<ExtArgs>
    _count?: boolean | PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>
      slipPayment: Prisma.$SlipPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status_payment: string
      count: number
      deposit: number | null
      remian: number | null
      booking_id: string
      create_date: Date
      update_date: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }


  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
    **/
    create<T extends PaymentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payments = await prisma.payments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
    **/
    delete<T extends PaymentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookings<T extends BookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingsDefaultArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    slipPayment<T extends Payments$slipPaymentArgs<ExtArgs> = {}>(args?: Subset<T, Payments$slipPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payments model
   */ 
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly status_payment: FieldRef<"Payments", 'String'>
    readonly count: FieldRef<"Payments", 'Int'>
    readonly deposit: FieldRef<"Payments", 'Int'>
    readonly remian: FieldRef<"Payments", 'Int'>
    readonly booking_id: FieldRef<"Payments", 'String'>
    readonly create_date: FieldRef<"Payments", 'DateTime'>
    readonly update_date: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }


  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
  }


  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }


  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
  }


  /**
   * Payments.slipPayment
   */
  export type Payments$slipPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    where?: SlipPaymentWhereInput
    orderBy?: SlipPaymentOrderByWithRelationInput | SlipPaymentOrderByWithRelationInput[]
    cursor?: SlipPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlipPaymentScalarFieldEnum | SlipPaymentScalarFieldEnum[]
  }


  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
  }



  /**
   * Model SlipPayment
   */

  export type AggregateSlipPayment = {
    _count: SlipPaymentCountAggregateOutputType | null
    _avg: SlipPaymentAvgAggregateOutputType | null
    _sum: SlipPaymentSumAggregateOutputType | null
    _min: SlipPaymentMinAggregateOutputType | null
    _max: SlipPaymentMaxAggregateOutputType | null
  }

  export type SlipPaymentAvgAggregateOutputType = {
    count: number | null
  }

  export type SlipPaymentSumAggregateOutputType = {
    count: number | null
  }

  export type SlipPaymentMinAggregateOutputType = {
    id: string | null
    count: number | null
    image: string | null
    detail: string | null
    payment_id: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type SlipPaymentMaxAggregateOutputType = {
    id: string | null
    count: number | null
    image: string | null
    detail: string | null
    payment_id: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type SlipPaymentCountAggregateOutputType = {
    id: number
    count: number
    image: number
    detail: number
    payment_id: number
    create_date: number
    update_date: number
    _all: number
  }


  export type SlipPaymentAvgAggregateInputType = {
    count?: true
  }

  export type SlipPaymentSumAggregateInputType = {
    count?: true
  }

  export type SlipPaymentMinAggregateInputType = {
    id?: true
    count?: true
    image?: true
    detail?: true
    payment_id?: true
    create_date?: true
    update_date?: true
  }

  export type SlipPaymentMaxAggregateInputType = {
    id?: true
    count?: true
    image?: true
    detail?: true
    payment_id?: true
    create_date?: true
    update_date?: true
  }

  export type SlipPaymentCountAggregateInputType = {
    id?: true
    count?: true
    image?: true
    detail?: true
    payment_id?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type SlipPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlipPayment to aggregate.
     */
    where?: SlipPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlipPayments to fetch.
     */
    orderBy?: SlipPaymentOrderByWithRelationInput | SlipPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlipPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlipPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlipPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlipPayments
    **/
    _count?: true | SlipPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlipPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlipPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlipPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlipPaymentMaxAggregateInputType
  }

  export type GetSlipPaymentAggregateType<T extends SlipPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateSlipPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlipPayment[P]>
      : GetScalarType<T[P], AggregateSlipPayment[P]>
  }




  export type SlipPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlipPaymentWhereInput
    orderBy?: SlipPaymentOrderByWithAggregationInput | SlipPaymentOrderByWithAggregationInput[]
    by: SlipPaymentScalarFieldEnum[] | SlipPaymentScalarFieldEnum
    having?: SlipPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlipPaymentCountAggregateInputType | true
    _avg?: SlipPaymentAvgAggregateInputType
    _sum?: SlipPaymentSumAggregateInputType
    _min?: SlipPaymentMinAggregateInputType
    _max?: SlipPaymentMaxAggregateInputType
  }

  export type SlipPaymentGroupByOutputType = {
    id: string
    count: number
    image: string
    detail: string | null
    payment_id: string
    create_date: Date
    update_date: Date
    _count: SlipPaymentCountAggregateOutputType | null
    _avg: SlipPaymentAvgAggregateOutputType | null
    _sum: SlipPaymentSumAggregateOutputType | null
    _min: SlipPaymentMinAggregateOutputType | null
    _max: SlipPaymentMaxAggregateOutputType | null
  }

  type GetSlipPaymentGroupByPayload<T extends SlipPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlipPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlipPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlipPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SlipPaymentGroupByOutputType[P]>
        }
      >
    >


  export type SlipPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    image?: boolean
    detail?: boolean
    payment_id?: boolean
    create_date?: boolean
    update_date?: boolean
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slipPayment"]>

  export type SlipPaymentSelectScalar = {
    id?: boolean
    count?: boolean
    image?: boolean
    detail?: boolean
    payment_id?: boolean
    create_date?: boolean
    update_date?: boolean
  }

  export type SlipPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentsDefaultArgs<ExtArgs>
  }


  export type $SlipPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlipPayment"
    objects: {
      payments: Prisma.$PaymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      count: number
      image: string
      detail: string | null
      payment_id: string
      create_date: Date
      update_date: Date
    }, ExtArgs["result"]["slipPayment"]>
    composites: {}
  }


  type SlipPaymentGetPayload<S extends boolean | null | undefined | SlipPaymentDefaultArgs> = $Result.GetResult<Prisma.$SlipPaymentPayload, S>

  type SlipPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SlipPaymentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SlipPaymentCountAggregateInputType | true
    }

  export interface SlipPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlipPayment'], meta: { name: 'SlipPayment' } }
    /**
     * Find zero or one SlipPayment that matches the filter.
     * @param {SlipPaymentFindUniqueArgs} args - Arguments to find a SlipPayment
     * @example
     * // Get one SlipPayment
     * const slipPayment = await prisma.slipPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SlipPaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SlipPaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SlipPayment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SlipPaymentFindUniqueOrThrowArgs} args - Arguments to find a SlipPayment
     * @example
     * // Get one SlipPayment
     * const slipPayment = await prisma.slipPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SlipPaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SlipPaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SlipPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentFindFirstArgs} args - Arguments to find a SlipPayment
     * @example
     * // Get one SlipPayment
     * const slipPayment = await prisma.slipPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SlipPaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SlipPaymentFindFirstArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SlipPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentFindFirstOrThrowArgs} args - Arguments to find a SlipPayment
     * @example
     * // Get one SlipPayment
     * const slipPayment = await prisma.slipPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SlipPaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SlipPaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SlipPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlipPayments
     * const slipPayments = await prisma.slipPayment.findMany()
     * 
     * // Get first 10 SlipPayments
     * const slipPayments = await prisma.slipPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slipPaymentWithIdOnly = await prisma.slipPayment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SlipPaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlipPaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SlipPayment.
     * @param {SlipPaymentCreateArgs} args - Arguments to create a SlipPayment.
     * @example
     * // Create one SlipPayment
     * const SlipPayment = await prisma.slipPayment.create({
     *   data: {
     *     // ... data to create a SlipPayment
     *   }
     * })
     * 
    **/
    create<T extends SlipPaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SlipPaymentCreateArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SlipPayments.
     *     @param {SlipPaymentCreateManyArgs} args - Arguments to create many SlipPayments.
     *     @example
     *     // Create many SlipPayments
     *     const slipPayment = await prisma.slipPayment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SlipPaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlipPaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SlipPayment.
     * @param {SlipPaymentDeleteArgs} args - Arguments to delete one SlipPayment.
     * @example
     * // Delete one SlipPayment
     * const SlipPayment = await prisma.slipPayment.delete({
     *   where: {
     *     // ... filter to delete one SlipPayment
     *   }
     * })
     * 
    **/
    delete<T extends SlipPaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SlipPaymentDeleteArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SlipPayment.
     * @param {SlipPaymentUpdateArgs} args - Arguments to update one SlipPayment.
     * @example
     * // Update one SlipPayment
     * const slipPayment = await prisma.slipPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SlipPaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SlipPaymentUpdateArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SlipPayments.
     * @param {SlipPaymentDeleteManyArgs} args - Arguments to filter SlipPayments to delete.
     * @example
     * // Delete a few SlipPayments
     * const { count } = await prisma.slipPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SlipPaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlipPaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlipPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlipPayments
     * const slipPayment = await prisma.slipPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SlipPaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SlipPaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SlipPayment.
     * @param {SlipPaymentUpsertArgs} args - Arguments to update or create a SlipPayment.
     * @example
     * // Update or create a SlipPayment
     * const slipPayment = await prisma.slipPayment.upsert({
     *   create: {
     *     // ... data to create a SlipPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlipPayment we want to update
     *   }
     * })
    **/
    upsert<T extends SlipPaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SlipPaymentUpsertArgs<ExtArgs>>
    ): Prisma__SlipPaymentClient<$Result.GetResult<Prisma.$SlipPaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SlipPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentCountArgs} args - Arguments to filter SlipPayments to count.
     * @example
     * // Count the number of SlipPayments
     * const count = await prisma.slipPayment.count({
     *   where: {
     *     // ... the filter for the SlipPayments we want to count
     *   }
     * })
    **/
    count<T extends SlipPaymentCountArgs>(
      args?: Subset<T, SlipPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlipPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlipPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlipPaymentAggregateArgs>(args: Subset<T, SlipPaymentAggregateArgs>): Prisma.PrismaPromise<GetSlipPaymentAggregateType<T>>

    /**
     * Group by SlipPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlipPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlipPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlipPaymentGroupByArgs['orderBy'] }
        : { orderBy?: SlipPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlipPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlipPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlipPayment model
   */
  readonly fields: SlipPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlipPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlipPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payments<T extends PaymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentsDefaultArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SlipPayment model
   */ 
  interface SlipPaymentFieldRefs {
    readonly id: FieldRef<"SlipPayment", 'String'>
    readonly count: FieldRef<"SlipPayment", 'Int'>
    readonly image: FieldRef<"SlipPayment", 'String'>
    readonly detail: FieldRef<"SlipPayment", 'String'>
    readonly payment_id: FieldRef<"SlipPayment", 'String'>
    readonly create_date: FieldRef<"SlipPayment", 'DateTime'>
    readonly update_date: FieldRef<"SlipPayment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SlipPayment findUnique
   */
  export type SlipPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SlipPayment to fetch.
     */
    where: SlipPaymentWhereUniqueInput
  }


  /**
   * SlipPayment findUniqueOrThrow
   */
  export type SlipPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SlipPayment to fetch.
     */
    where: SlipPaymentWhereUniqueInput
  }


  /**
   * SlipPayment findFirst
   */
  export type SlipPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SlipPayment to fetch.
     */
    where?: SlipPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlipPayments to fetch.
     */
    orderBy?: SlipPaymentOrderByWithRelationInput | SlipPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlipPayments.
     */
    cursor?: SlipPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlipPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlipPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlipPayments.
     */
    distinct?: SlipPaymentScalarFieldEnum | SlipPaymentScalarFieldEnum[]
  }


  /**
   * SlipPayment findFirstOrThrow
   */
  export type SlipPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SlipPayment to fetch.
     */
    where?: SlipPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlipPayments to fetch.
     */
    orderBy?: SlipPaymentOrderByWithRelationInput | SlipPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlipPayments.
     */
    cursor?: SlipPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlipPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlipPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlipPayments.
     */
    distinct?: SlipPaymentScalarFieldEnum | SlipPaymentScalarFieldEnum[]
  }


  /**
   * SlipPayment findMany
   */
  export type SlipPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SlipPayments to fetch.
     */
    where?: SlipPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlipPayments to fetch.
     */
    orderBy?: SlipPaymentOrderByWithRelationInput | SlipPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlipPayments.
     */
    cursor?: SlipPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlipPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlipPayments.
     */
    skip?: number
    distinct?: SlipPaymentScalarFieldEnum | SlipPaymentScalarFieldEnum[]
  }


  /**
   * SlipPayment create
   */
  export type SlipPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SlipPayment.
     */
    data: XOR<SlipPaymentCreateInput, SlipPaymentUncheckedCreateInput>
  }


  /**
   * SlipPayment createMany
   */
  export type SlipPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlipPayments.
     */
    data: SlipPaymentCreateManyInput | SlipPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SlipPayment update
   */
  export type SlipPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SlipPayment.
     */
    data: XOR<SlipPaymentUpdateInput, SlipPaymentUncheckedUpdateInput>
    /**
     * Choose, which SlipPayment to update.
     */
    where: SlipPaymentWhereUniqueInput
  }


  /**
   * SlipPayment updateMany
   */
  export type SlipPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlipPayments.
     */
    data: XOR<SlipPaymentUpdateManyMutationInput, SlipPaymentUncheckedUpdateManyInput>
    /**
     * Filter which SlipPayments to update
     */
    where?: SlipPaymentWhereInput
  }


  /**
   * SlipPayment upsert
   */
  export type SlipPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SlipPayment to update in case it exists.
     */
    where: SlipPaymentWhereUniqueInput
    /**
     * In case the SlipPayment found by the `where` argument doesn't exist, create a new SlipPayment with this data.
     */
    create: XOR<SlipPaymentCreateInput, SlipPaymentUncheckedCreateInput>
    /**
     * In case the SlipPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlipPaymentUpdateInput, SlipPaymentUncheckedUpdateInput>
  }


  /**
   * SlipPayment delete
   */
  export type SlipPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
    /**
     * Filter which SlipPayment to delete.
     */
    where: SlipPaymentWhereUniqueInput
  }


  /**
   * SlipPayment deleteMany
   */
  export type SlipPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlipPayments to delete
     */
    where?: SlipPaymentWhereInput
  }


  /**
   * SlipPayment without action
   */
  export type SlipPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlipPayment
     */
    select?: SlipPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlipPaymentInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    idCard: 'idCard',
    email: 'email',
    address: 'address',
    image_user: 'image_user',
    phone: 'phone',
    role: 'role',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ParksScalarFieldEnum: {
    id: 'id',
    name_park: 'name_park',
    image_park: 'image_park',
    active: 'active',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type ParksScalarFieldEnum = (typeof ParksScalarFieldEnum)[keyof typeof ParksScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    detail: 'detail',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date',
    booking_by: 'booking_by',
    created_by: 'created_by',
    parking_id: 'parking_id',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    status_payment: 'status_payment',
    count: 'count',
    deposit: 'deposit',
    remian: 'remian',
    booking_id: 'booking_id',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const SlipPaymentScalarFieldEnum: {
    id: 'id',
    count: 'count',
    image: 'image',
    detail: 'detail',
    payment_id: 'payment_id',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type SlipPaymentScalarFieldEnum = (typeof SlipPaymentScalarFieldEnum)[keyof typeof SlipPaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    firstname?: StringFilter<"Users"> | string
    lastname?: StringFilter<"Users"> | string
    idCard?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    address?: StringNullableFilter<"Users"> | string | null
    image_user?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    create_date?: DateTimeFilter<"Users"> | Date | string
    update_date?: DateTimeFilter<"Users"> | Date | string
    bookings?: BookingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    idCard?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    image_user?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    bookings?: BookingsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    idCard?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    firstname?: StringFilter<"Users"> | string
    lastname?: StringFilter<"Users"> | string
    address?: StringNullableFilter<"Users"> | string | null
    image_user?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    create_date?: DateTimeFilter<"Users"> | Date | string
    update_date?: DateTimeFilter<"Users"> | Date | string
    bookings?: BookingsListRelationFilter
  }, "id" | "username" | "idCard" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    idCard?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    image_user?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    firstname?: StringWithAggregatesFilter<"Users"> | string
    lastname?: StringWithAggregatesFilter<"Users"> | string
    idCard?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    address?: StringNullableWithAggregatesFilter<"Users"> | string | null
    image_user?: StringNullableWithAggregatesFilter<"Users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringWithAggregatesFilter<"Users"> | string
    create_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    update_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ParksWhereInput = {
    AND?: ParksWhereInput | ParksWhereInput[]
    OR?: ParksWhereInput[]
    NOT?: ParksWhereInput | ParksWhereInput[]
    id?: StringFilter<"Parks"> | string
    name_park?: StringFilter<"Parks"> | string
    image_park?: StringNullableFilter<"Parks"> | string | null
    active?: BoolFilter<"Parks"> | boolean
    create_date?: DateTimeFilter<"Parks"> | Date | string
    update_date?: DateTimeFilter<"Parks"> | Date | string
    bookings?: BookingsListRelationFilter
  }

  export type ParksOrderByWithRelationInput = {
    id?: SortOrder
    name_park?: SortOrder
    image_park?: SortOrderInput | SortOrder
    active?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    bookings?: BookingsOrderByRelationAggregateInput
  }

  export type ParksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParksWhereInput | ParksWhereInput[]
    OR?: ParksWhereInput[]
    NOT?: ParksWhereInput | ParksWhereInput[]
    name_park?: StringFilter<"Parks"> | string
    image_park?: StringNullableFilter<"Parks"> | string | null
    active?: BoolFilter<"Parks"> | boolean
    create_date?: DateTimeFilter<"Parks"> | Date | string
    update_date?: DateTimeFilter<"Parks"> | Date | string
    bookings?: BookingsListRelationFilter
  }, "id">

  export type ParksOrderByWithAggregationInput = {
    id?: SortOrder
    name_park?: SortOrder
    image_park?: SortOrderInput | SortOrder
    active?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: ParksCountOrderByAggregateInput
    _max?: ParksMaxOrderByAggregateInput
    _min?: ParksMinOrderByAggregateInput
  }

  export type ParksScalarWhereWithAggregatesInput = {
    AND?: ParksScalarWhereWithAggregatesInput | ParksScalarWhereWithAggregatesInput[]
    OR?: ParksScalarWhereWithAggregatesInput[]
    NOT?: ParksScalarWhereWithAggregatesInput | ParksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parks"> | string
    name_park?: StringWithAggregatesFilter<"Parks"> | string
    image_park?: StringNullableWithAggregatesFilter<"Parks"> | string | null
    active?: BoolWithAggregatesFilter<"Parks"> | boolean
    create_date?: DateTimeWithAggregatesFilter<"Parks"> | Date | string
    update_date?: DateTimeWithAggregatesFilter<"Parks"> | Date | string
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    id?: StringFilter<"Bookings"> | string
    detail?: StringFilter<"Bookings"> | string
    status?: StringFilter<"Bookings"> | string
    start_date?: DateTimeFilter<"Bookings"> | Date | string
    end_date?: DateTimeFilter<"Bookings"> | Date | string
    booking_by?: StringFilter<"Bookings"> | string
    created_by?: StringFilter<"Bookings"> | string
    parking_id?: StringFilter<"Bookings"> | string
    create_date?: DateTimeFilter<"Bookings"> | Date | string
    update_date?: DateTimeFilter<"Bookings"> | Date | string
    user_created?: XOR<UsersRelationFilter, UsersWhereInput>
    parkings?: XOR<ParksRelationFilter, ParksWhereInput>
    payments?: XOR<PaymentsNullableRelationFilter, PaymentsWhereInput> | null
  }

  export type BookingsOrderByWithRelationInput = {
    id?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    booking_by?: SortOrder
    created_by?: SortOrder
    parking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    user_created?: UsersOrderByWithRelationInput
    parkings?: ParksOrderByWithRelationInput
    payments?: PaymentsOrderByWithRelationInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    detail?: StringFilter<"Bookings"> | string
    status?: StringFilter<"Bookings"> | string
    start_date?: DateTimeFilter<"Bookings"> | Date | string
    end_date?: DateTimeFilter<"Bookings"> | Date | string
    booking_by?: StringFilter<"Bookings"> | string
    created_by?: StringFilter<"Bookings"> | string
    parking_id?: StringFilter<"Bookings"> | string
    create_date?: DateTimeFilter<"Bookings"> | Date | string
    update_date?: DateTimeFilter<"Bookings"> | Date | string
    user_created?: XOR<UsersRelationFilter, UsersWhereInput>
    parkings?: XOR<ParksRelationFilter, ParksWhereInput>
    payments?: XOR<PaymentsNullableRelationFilter, PaymentsWhereInput> | null
  }, "id">

  export type BookingsOrderByWithAggregationInput = {
    id?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    booking_by?: SortOrder
    created_by?: SortOrder
    parking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookings"> | string
    detail?: StringWithAggregatesFilter<"Bookings"> | string
    status?: StringWithAggregatesFilter<"Bookings"> | string
    start_date?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    booking_by?: StringWithAggregatesFilter<"Bookings"> | string
    created_by?: StringWithAggregatesFilter<"Bookings"> | string
    parking_id?: StringWithAggregatesFilter<"Bookings"> | string
    create_date?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    update_date?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    status_payment?: StringFilter<"Payments"> | string
    count?: IntFilter<"Payments"> | number
    deposit?: IntNullableFilter<"Payments"> | number | null
    remian?: IntNullableFilter<"Payments"> | number | null
    booking_id?: StringFilter<"Payments"> | string
    create_date?: DateTimeFilter<"Payments"> | Date | string
    update_date?: DateTimeFilter<"Payments"> | Date | string
    bookings?: XOR<BookingsRelationFilter, BookingsWhereInput>
    slipPayment?: SlipPaymentListRelationFilter
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    status_payment?: SortOrder
    count?: SortOrder
    deposit?: SortOrderInput | SortOrder
    remian?: SortOrderInput | SortOrder
    booking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    bookings?: BookingsOrderByWithRelationInput
    slipPayment?: SlipPaymentOrderByRelationAggregateInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    booking_id?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    status_payment?: StringFilter<"Payments"> | string
    count?: IntFilter<"Payments"> | number
    deposit?: IntNullableFilter<"Payments"> | number | null
    remian?: IntNullableFilter<"Payments"> | number | null
    create_date?: DateTimeFilter<"Payments"> | Date | string
    update_date?: DateTimeFilter<"Payments"> | Date | string
    bookings?: XOR<BookingsRelationFilter, BookingsWhereInput>
    slipPayment?: SlipPaymentListRelationFilter
  }, "id" | "booking_id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    status_payment?: SortOrder
    count?: SortOrder
    deposit?: SortOrderInput | SortOrder
    remian?: SortOrderInput | SortOrder
    booking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    status_payment?: StringWithAggregatesFilter<"Payments"> | string
    count?: IntWithAggregatesFilter<"Payments"> | number
    deposit?: IntNullableWithAggregatesFilter<"Payments"> | number | null
    remian?: IntNullableWithAggregatesFilter<"Payments"> | number | null
    booking_id?: StringWithAggregatesFilter<"Payments"> | string
    create_date?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    update_date?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type SlipPaymentWhereInput = {
    AND?: SlipPaymentWhereInput | SlipPaymentWhereInput[]
    OR?: SlipPaymentWhereInput[]
    NOT?: SlipPaymentWhereInput | SlipPaymentWhereInput[]
    id?: StringFilter<"SlipPayment"> | string
    count?: IntFilter<"SlipPayment"> | number
    image?: StringFilter<"SlipPayment"> | string
    detail?: StringNullableFilter<"SlipPayment"> | string | null
    payment_id?: StringFilter<"SlipPayment"> | string
    create_date?: DateTimeFilter<"SlipPayment"> | Date | string
    update_date?: DateTimeFilter<"SlipPayment"> | Date | string
    payments?: XOR<PaymentsRelationFilter, PaymentsWhereInput>
  }

  export type SlipPaymentOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
    image?: SortOrder
    detail?: SortOrderInput | SortOrder
    payment_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    payments?: PaymentsOrderByWithRelationInput
  }

  export type SlipPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlipPaymentWhereInput | SlipPaymentWhereInput[]
    OR?: SlipPaymentWhereInput[]
    NOT?: SlipPaymentWhereInput | SlipPaymentWhereInput[]
    count?: IntFilter<"SlipPayment"> | number
    image?: StringFilter<"SlipPayment"> | string
    detail?: StringNullableFilter<"SlipPayment"> | string | null
    payment_id?: StringFilter<"SlipPayment"> | string
    create_date?: DateTimeFilter<"SlipPayment"> | Date | string
    update_date?: DateTimeFilter<"SlipPayment"> | Date | string
    payments?: XOR<PaymentsRelationFilter, PaymentsWhereInput>
  }, "id">

  export type SlipPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    image?: SortOrder
    detail?: SortOrderInput | SortOrder
    payment_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: SlipPaymentCountOrderByAggregateInput
    _avg?: SlipPaymentAvgOrderByAggregateInput
    _max?: SlipPaymentMaxOrderByAggregateInput
    _min?: SlipPaymentMinOrderByAggregateInput
    _sum?: SlipPaymentSumOrderByAggregateInput
  }

  export type SlipPaymentScalarWhereWithAggregatesInput = {
    AND?: SlipPaymentScalarWhereWithAggregatesInput | SlipPaymentScalarWhereWithAggregatesInput[]
    OR?: SlipPaymentScalarWhereWithAggregatesInput[]
    NOT?: SlipPaymentScalarWhereWithAggregatesInput | SlipPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlipPayment"> | string
    count?: IntWithAggregatesFilter<"SlipPayment"> | number
    image?: StringWithAggregatesFilter<"SlipPayment"> | string
    detail?: StringNullableWithAggregatesFilter<"SlipPayment"> | string | null
    payment_id?: StringWithAggregatesFilter<"SlipPayment"> | string
    create_date?: DateTimeWithAggregatesFilter<"SlipPayment"> | Date | string
    update_date?: DateTimeWithAggregatesFilter<"SlipPayment"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    password: string
    firstname: string
    lastname: string
    idCard?: string | null
    email?: string | null
    address?: string | null
    image_user?: string | null
    phone?: string | null
    role?: string
    create_date?: Date | string
    update_date?: Date | string
    bookings?: BookingsCreateNestedManyWithoutUser_createdInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    firstname: string
    lastname: string
    idCard?: string | null
    email?: string | null
    address?: string | null
    image_user?: string | null
    phone?: string | null
    role?: string
    create_date?: Date | string
    update_date?: Date | string
    bookings?: BookingsUncheckedCreateNestedManyWithoutUser_createdInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    idCard?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image_user?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateManyWithoutUser_createdNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    idCard?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image_user?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUncheckedUpdateManyWithoutUser_createdNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    password: string
    firstname: string
    lastname: string
    idCard?: string | null
    email?: string | null
    address?: string | null
    image_user?: string | null
    phone?: string | null
    role?: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    idCard?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image_user?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    idCard?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image_user?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParksCreateInput = {
    id?: string
    name_park: string
    image_park?: string | null
    active?: boolean
    create_date?: Date | string
    update_date?: Date | string
    bookings?: BookingsCreateNestedManyWithoutParkingsInput
  }

  export type ParksUncheckedCreateInput = {
    id?: string
    name_park: string
    image_park?: string | null
    active?: boolean
    create_date?: Date | string
    update_date?: Date | string
    bookings?: BookingsUncheckedCreateNestedManyWithoutParkingsInput
  }

  export type ParksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_park?: StringFieldUpdateOperationsInput | string
    image_park?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateManyWithoutParkingsNestedInput
  }

  export type ParksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_park?: StringFieldUpdateOperationsInput | string
    image_park?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUncheckedUpdateManyWithoutParkingsNestedInput
  }

  export type ParksCreateManyInput = {
    id?: string
    name_park: string
    image_park?: string | null
    active?: boolean
    create_date?: Date | string
    update_date?: Date | string
  }

  export type ParksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_park?: StringFieldUpdateOperationsInput | string
    image_park?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_park?: StringFieldUpdateOperationsInput | string
    image_park?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    create_date?: Date | string
    update_date?: Date | string
    user_created: UsersCreateNestedOneWithoutBookingsInput
    parkings: ParksCreateNestedOneWithoutBookingsInput
    payments?: PaymentsCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    created_by: string
    parking_id: string
    create_date?: Date | string
    update_date?: Date | string
    payments?: PaymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_created?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    parkings?: ParksUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentsUpdateOneWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    parking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type BookingsCreateManyInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    created_by: string
    parking_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type BookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    parking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    create_date?: Date | string
    update_date?: Date | string
    bookings: BookingsCreateNestedOneWithoutPaymentsInput
    slipPayment?: SlipPaymentCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    booking_id: string
    create_date?: Date | string
    update_date?: Date | string
    slipPayment?: SlipPaymentUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateOneRequiredWithoutPaymentsNestedInput
    slipPayment?: SlipPaymentUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    booking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    slipPayment?: SlipPaymentUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsCreateManyInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    booking_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    booking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentCreateInput = {
    id?: string
    count: number
    image: string
    detail?: string | null
    create_date?: Date | string
    update_date?: Date | string
    payments: PaymentsCreateNestedOneWithoutSlipPaymentInput
  }

  export type SlipPaymentUncheckedCreateInput = {
    id?: string
    count: number
    image: string
    detail?: string | null
    payment_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type SlipPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUpdateOneRequiredWithoutSlipPaymentNestedInput
  }

  export type SlipPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    payment_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentCreateManyInput = {
    id?: string
    count: number
    image: string
    detail?: string | null
    payment_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type SlipPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    payment_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    idCard?: SortOrder
    email?: SortOrder
    address?: SortOrder
    image_user?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    idCard?: SortOrder
    email?: SortOrder
    address?: SortOrder
    image_user?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    idCard?: SortOrder
    email?: SortOrder
    address?: SortOrder
    image_user?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ParksCountOrderByAggregateInput = {
    id?: SortOrder
    name_park?: SortOrder
    image_park?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type ParksMaxOrderByAggregateInput = {
    id?: SortOrder
    name_park?: SortOrder
    image_park?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type ParksMinOrderByAggregateInput = {
    id?: SortOrder
    name_park?: SortOrder
    image_park?: SortOrder
    active?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ParksRelationFilter = {
    is?: ParksWhereInput
    isNot?: ParksWhereInput
  }

  export type PaymentsNullableRelationFilter = {
    is?: PaymentsWhereInput | null
    isNot?: PaymentsWhereInput | null
  }

  export type BookingsCountOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    booking_by?: SortOrder
    created_by?: SortOrder
    parking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    booking_by?: SortOrder
    created_by?: SortOrder
    parking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    booking_by?: SortOrder
    created_by?: SortOrder
    parking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BookingsRelationFilter = {
    is?: BookingsWhereInput
    isNot?: BookingsWhereInput
  }

  export type SlipPaymentListRelationFilter = {
    every?: SlipPaymentWhereInput
    some?: SlipPaymentWhereInput
    none?: SlipPaymentWhereInput
  }

  export type SlipPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    status_payment?: SortOrder
    count?: SortOrder
    deposit?: SortOrder
    remian?: SortOrder
    booking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    count?: SortOrder
    deposit?: SortOrder
    remian?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    status_payment?: SortOrder
    count?: SortOrder
    deposit?: SortOrder
    remian?: SortOrder
    booking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    status_payment?: SortOrder
    count?: SortOrder
    deposit?: SortOrder
    remian?: SortOrder
    booking_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    count?: SortOrder
    deposit?: SortOrder
    remian?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PaymentsRelationFilter = {
    is?: PaymentsWhereInput
    isNot?: PaymentsWhereInput
  }

  export type SlipPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    image?: SortOrder
    detail?: SortOrder
    payment_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type SlipPaymentAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type SlipPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    image?: SortOrder
    detail?: SortOrder
    payment_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type SlipPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    image?: SortOrder
    detail?: SortOrder
    payment_id?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type SlipPaymentSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type BookingsCreateNestedManyWithoutUser_createdInput = {
    create?: XOR<BookingsCreateWithoutUser_createdInput, BookingsUncheckedCreateWithoutUser_createdInput> | BookingsCreateWithoutUser_createdInput[] | BookingsUncheckedCreateWithoutUser_createdInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUser_createdInput | BookingsCreateOrConnectWithoutUser_createdInput[]
    createMany?: BookingsCreateManyUser_createdInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutUser_createdInput = {
    create?: XOR<BookingsCreateWithoutUser_createdInput, BookingsUncheckedCreateWithoutUser_createdInput> | BookingsCreateWithoutUser_createdInput[] | BookingsUncheckedCreateWithoutUser_createdInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUser_createdInput | BookingsCreateOrConnectWithoutUser_createdInput[]
    createMany?: BookingsCreateManyUser_createdInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingsUpdateManyWithoutUser_createdNestedInput = {
    create?: XOR<BookingsCreateWithoutUser_createdInput, BookingsUncheckedCreateWithoutUser_createdInput> | BookingsCreateWithoutUser_createdInput[] | BookingsUncheckedCreateWithoutUser_createdInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUser_createdInput | BookingsCreateOrConnectWithoutUser_createdInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUser_createdInput | BookingsUpsertWithWhereUniqueWithoutUser_createdInput[]
    createMany?: BookingsCreateManyUser_createdInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUser_createdInput | BookingsUpdateWithWhereUniqueWithoutUser_createdInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUser_createdInput | BookingsUpdateManyWithWhereWithoutUser_createdInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutUser_createdNestedInput = {
    create?: XOR<BookingsCreateWithoutUser_createdInput, BookingsUncheckedCreateWithoutUser_createdInput> | BookingsCreateWithoutUser_createdInput[] | BookingsUncheckedCreateWithoutUser_createdInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUser_createdInput | BookingsCreateOrConnectWithoutUser_createdInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUser_createdInput | BookingsUpsertWithWhereUniqueWithoutUser_createdInput[]
    createMany?: BookingsCreateManyUser_createdInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUser_createdInput | BookingsUpdateWithWhereUniqueWithoutUser_createdInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUser_createdInput | BookingsUpdateManyWithWhereWithoutUser_createdInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsCreateNestedManyWithoutParkingsInput = {
    create?: XOR<BookingsCreateWithoutParkingsInput, BookingsUncheckedCreateWithoutParkingsInput> | BookingsCreateWithoutParkingsInput[] | BookingsUncheckedCreateWithoutParkingsInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutParkingsInput | BookingsCreateOrConnectWithoutParkingsInput[]
    createMany?: BookingsCreateManyParkingsInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutParkingsInput = {
    create?: XOR<BookingsCreateWithoutParkingsInput, BookingsUncheckedCreateWithoutParkingsInput> | BookingsCreateWithoutParkingsInput[] | BookingsUncheckedCreateWithoutParkingsInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutParkingsInput | BookingsCreateOrConnectWithoutParkingsInput[]
    createMany?: BookingsCreateManyParkingsInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookingsUpdateManyWithoutParkingsNestedInput = {
    create?: XOR<BookingsCreateWithoutParkingsInput, BookingsUncheckedCreateWithoutParkingsInput> | BookingsCreateWithoutParkingsInput[] | BookingsUncheckedCreateWithoutParkingsInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutParkingsInput | BookingsCreateOrConnectWithoutParkingsInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutParkingsInput | BookingsUpsertWithWhereUniqueWithoutParkingsInput[]
    createMany?: BookingsCreateManyParkingsInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutParkingsInput | BookingsUpdateWithWhereUniqueWithoutParkingsInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutParkingsInput | BookingsUpdateManyWithWhereWithoutParkingsInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutParkingsNestedInput = {
    create?: XOR<BookingsCreateWithoutParkingsInput, BookingsUncheckedCreateWithoutParkingsInput> | BookingsCreateWithoutParkingsInput[] | BookingsUncheckedCreateWithoutParkingsInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutParkingsInput | BookingsCreateOrConnectWithoutParkingsInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutParkingsInput | BookingsUpsertWithWhereUniqueWithoutParkingsInput[]
    createMany?: BookingsCreateManyParkingsInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutParkingsInput | BookingsUpdateWithWhereUniqueWithoutParkingsInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutParkingsInput | BookingsUpdateManyWithWhereWithoutParkingsInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    connect?: UsersWhereUniqueInput
  }

  export type ParksCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParksCreateWithoutBookingsInput, ParksUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParksCreateOrConnectWithoutBookingsInput
    connect?: ParksWhereUniqueInput
  }

  export type PaymentsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput
    connect?: PaymentsWhereUniqueInput
  }

  export type PaymentsUncheckedCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput
    connect?: PaymentsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    upsert?: UsersUpsertWithoutBookingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookingsInput, UsersUpdateWithoutBookingsInput>, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type ParksUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParksCreateWithoutBookingsInput, ParksUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParksCreateOrConnectWithoutBookingsInput
    upsert?: ParksUpsertWithoutBookingsInput
    connect?: ParksWhereUniqueInput
    update?: XOR<XOR<ParksUpdateToOneWithWhereWithoutBookingsInput, ParksUpdateWithoutBookingsInput>, ParksUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput
    upsert?: PaymentsUpsertWithoutBookingsInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutBookingsInput, PaymentsUpdateWithoutBookingsInput>, PaymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentsUncheckedUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput
    upsert?: PaymentsUpsertWithoutBookingsInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutBookingsInput, PaymentsUpdateWithoutBookingsInput>, PaymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentsInput
    connect?: BookingsWhereUniqueInput
  }

  export type SlipPaymentCreateNestedManyWithoutPaymentsInput = {
    create?: XOR<SlipPaymentCreateWithoutPaymentsInput, SlipPaymentUncheckedCreateWithoutPaymentsInput> | SlipPaymentCreateWithoutPaymentsInput[] | SlipPaymentUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: SlipPaymentCreateOrConnectWithoutPaymentsInput | SlipPaymentCreateOrConnectWithoutPaymentsInput[]
    createMany?: SlipPaymentCreateManyPaymentsInputEnvelope
    connect?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
  }

  export type SlipPaymentUncheckedCreateNestedManyWithoutPaymentsInput = {
    create?: XOR<SlipPaymentCreateWithoutPaymentsInput, SlipPaymentUncheckedCreateWithoutPaymentsInput> | SlipPaymentCreateWithoutPaymentsInput[] | SlipPaymentUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: SlipPaymentCreateOrConnectWithoutPaymentsInput | SlipPaymentCreateOrConnectWithoutPaymentsInput[]
    createMany?: SlipPaymentCreateManyPaymentsInputEnvelope
    connect?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentsInput
    upsert?: BookingsUpsertWithoutPaymentsInput
    connect?: BookingsWhereUniqueInput
    update?: XOR<XOR<BookingsUpdateToOneWithWhereWithoutPaymentsInput, BookingsUpdateWithoutPaymentsInput>, BookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type SlipPaymentUpdateManyWithoutPaymentsNestedInput = {
    create?: XOR<SlipPaymentCreateWithoutPaymentsInput, SlipPaymentUncheckedCreateWithoutPaymentsInput> | SlipPaymentCreateWithoutPaymentsInput[] | SlipPaymentUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: SlipPaymentCreateOrConnectWithoutPaymentsInput | SlipPaymentCreateOrConnectWithoutPaymentsInput[]
    upsert?: SlipPaymentUpsertWithWhereUniqueWithoutPaymentsInput | SlipPaymentUpsertWithWhereUniqueWithoutPaymentsInput[]
    createMany?: SlipPaymentCreateManyPaymentsInputEnvelope
    set?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    disconnect?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    delete?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    connect?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    update?: SlipPaymentUpdateWithWhereUniqueWithoutPaymentsInput | SlipPaymentUpdateWithWhereUniqueWithoutPaymentsInput[]
    updateMany?: SlipPaymentUpdateManyWithWhereWithoutPaymentsInput | SlipPaymentUpdateManyWithWhereWithoutPaymentsInput[]
    deleteMany?: SlipPaymentScalarWhereInput | SlipPaymentScalarWhereInput[]
  }

  export type SlipPaymentUncheckedUpdateManyWithoutPaymentsNestedInput = {
    create?: XOR<SlipPaymentCreateWithoutPaymentsInput, SlipPaymentUncheckedCreateWithoutPaymentsInput> | SlipPaymentCreateWithoutPaymentsInput[] | SlipPaymentUncheckedCreateWithoutPaymentsInput[]
    connectOrCreate?: SlipPaymentCreateOrConnectWithoutPaymentsInput | SlipPaymentCreateOrConnectWithoutPaymentsInput[]
    upsert?: SlipPaymentUpsertWithWhereUniqueWithoutPaymentsInput | SlipPaymentUpsertWithWhereUniqueWithoutPaymentsInput[]
    createMany?: SlipPaymentCreateManyPaymentsInputEnvelope
    set?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    disconnect?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    delete?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    connect?: SlipPaymentWhereUniqueInput | SlipPaymentWhereUniqueInput[]
    update?: SlipPaymentUpdateWithWhereUniqueWithoutPaymentsInput | SlipPaymentUpdateWithWhereUniqueWithoutPaymentsInput[]
    updateMany?: SlipPaymentUpdateManyWithWhereWithoutPaymentsInput | SlipPaymentUpdateManyWithWhereWithoutPaymentsInput[]
    deleteMany?: SlipPaymentScalarWhereInput | SlipPaymentScalarWhereInput[]
  }

  export type PaymentsCreateNestedOneWithoutSlipPaymentInput = {
    create?: XOR<PaymentsCreateWithoutSlipPaymentInput, PaymentsUncheckedCreateWithoutSlipPaymentInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutSlipPaymentInput
    connect?: PaymentsWhereUniqueInput
  }

  export type PaymentsUpdateOneRequiredWithoutSlipPaymentNestedInput = {
    create?: XOR<PaymentsCreateWithoutSlipPaymentInput, PaymentsUncheckedCreateWithoutSlipPaymentInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutSlipPaymentInput
    upsert?: PaymentsUpsertWithoutSlipPaymentInput
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutSlipPaymentInput, PaymentsUpdateWithoutSlipPaymentInput>, PaymentsUncheckedUpdateWithoutSlipPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingsCreateWithoutUser_createdInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    create_date?: Date | string
    update_date?: Date | string
    parkings: ParksCreateNestedOneWithoutBookingsInput
    payments?: PaymentsCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutUser_createdInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    parking_id: string
    create_date?: Date | string
    update_date?: Date | string
    payments?: PaymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type BookingsCreateOrConnectWithoutUser_createdInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutUser_createdInput, BookingsUncheckedCreateWithoutUser_createdInput>
  }

  export type BookingsCreateManyUser_createdInputEnvelope = {
    data: BookingsCreateManyUser_createdInput | BookingsCreateManyUser_createdInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutUser_createdInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutUser_createdInput, BookingsUncheckedUpdateWithoutUser_createdInput>
    create: XOR<BookingsCreateWithoutUser_createdInput, BookingsUncheckedCreateWithoutUser_createdInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutUser_createdInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutUser_createdInput, BookingsUncheckedUpdateWithoutUser_createdInput>
  }

  export type BookingsUpdateManyWithWhereWithoutUser_createdInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutUser_createdInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    id?: StringFilter<"Bookings"> | string
    detail?: StringFilter<"Bookings"> | string
    status?: StringFilter<"Bookings"> | string
    start_date?: DateTimeFilter<"Bookings"> | Date | string
    end_date?: DateTimeFilter<"Bookings"> | Date | string
    booking_by?: StringFilter<"Bookings"> | string
    created_by?: StringFilter<"Bookings"> | string
    parking_id?: StringFilter<"Bookings"> | string
    create_date?: DateTimeFilter<"Bookings"> | Date | string
    update_date?: DateTimeFilter<"Bookings"> | Date | string
  }

  export type BookingsCreateWithoutParkingsInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    create_date?: Date | string
    update_date?: Date | string
    user_created: UsersCreateNestedOneWithoutBookingsInput
    payments?: PaymentsCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutParkingsInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    created_by: string
    create_date?: Date | string
    update_date?: Date | string
    payments?: PaymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type BookingsCreateOrConnectWithoutParkingsInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutParkingsInput, BookingsUncheckedCreateWithoutParkingsInput>
  }

  export type BookingsCreateManyParkingsInputEnvelope = {
    data: BookingsCreateManyParkingsInput | BookingsCreateManyParkingsInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutParkingsInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutParkingsInput, BookingsUncheckedUpdateWithoutParkingsInput>
    create: XOR<BookingsCreateWithoutParkingsInput, BookingsUncheckedCreateWithoutParkingsInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutParkingsInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutParkingsInput, BookingsUncheckedUpdateWithoutParkingsInput>
  }

  export type BookingsUpdateManyWithWhereWithoutParkingsInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutParkingsInput>
  }

  export type UsersCreateWithoutBookingsInput = {
    id?: string
    username: string
    password: string
    firstname: string
    lastname: string
    idCard?: string | null
    email?: string | null
    address?: string | null
    image_user?: string | null
    phone?: string | null
    role?: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type UsersUncheckedCreateWithoutBookingsInput = {
    id?: string
    username: string
    password: string
    firstname: string
    lastname: string
    idCard?: string | null
    email?: string | null
    address?: string | null
    image_user?: string | null
    phone?: string | null
    role?: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type UsersCreateOrConnectWithoutBookingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
  }

  export type ParksCreateWithoutBookingsInput = {
    id?: string
    name_park: string
    image_park?: string | null
    active?: boolean
    create_date?: Date | string
    update_date?: Date | string
  }

  export type ParksUncheckedCreateWithoutBookingsInput = {
    id?: string
    name_park: string
    image_park?: string | null
    active?: boolean
    create_date?: Date | string
    update_date?: Date | string
  }

  export type ParksCreateOrConnectWithoutBookingsInput = {
    where: ParksWhereUniqueInput
    create: XOR<ParksCreateWithoutBookingsInput, ParksUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentsCreateWithoutBookingsInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    create_date?: Date | string
    update_date?: Date | string
    slipPayment?: SlipPaymentCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutBookingsInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    create_date?: Date | string
    update_date?: Date | string
    slipPayment?: SlipPaymentUncheckedCreateNestedManyWithoutPaymentsInput
  }

  export type PaymentsCreateOrConnectWithoutBookingsInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
  }

  export type UsersUpsertWithoutBookingsInput = {
    update: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type UsersUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    idCard?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image_user?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    idCard?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image_user?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParksUpsertWithoutBookingsInput = {
    update: XOR<ParksUpdateWithoutBookingsInput, ParksUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParksCreateWithoutBookingsInput, ParksUncheckedCreateWithoutBookingsInput>
    where?: ParksWhereInput
  }

  export type ParksUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParksWhereInput
    data: XOR<ParksUpdateWithoutBookingsInput, ParksUncheckedUpdateWithoutBookingsInput>
  }

  export type ParksUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_park?: StringFieldUpdateOperationsInput | string
    image_park?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParksUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_park?: StringFieldUpdateOperationsInput | string
    image_park?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpsertWithoutBookingsInput = {
    update: XOR<PaymentsUpdateWithoutBookingsInput, PaymentsUncheckedUpdateWithoutBookingsInput>
    create: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutBookingsInput, PaymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentsUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    slipPayment?: SlipPaymentUpdateManyWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    slipPayment?: SlipPaymentUncheckedUpdateManyWithoutPaymentsNestedInput
  }

  export type BookingsCreateWithoutPaymentsInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    create_date?: Date | string
    update_date?: Date | string
    user_created: UsersCreateNestedOneWithoutBookingsInput
    parkings: ParksCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    created_by: string
    parking_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type BookingsCreateOrConnectWithoutPaymentsInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
  }

  export type SlipPaymentCreateWithoutPaymentsInput = {
    id?: string
    count: number
    image: string
    detail?: string | null
    create_date?: Date | string
    update_date?: Date | string
  }

  export type SlipPaymentUncheckedCreateWithoutPaymentsInput = {
    id?: string
    count: number
    image: string
    detail?: string | null
    create_date?: Date | string
    update_date?: Date | string
  }

  export type SlipPaymentCreateOrConnectWithoutPaymentsInput = {
    where: SlipPaymentWhereUniqueInput
    create: XOR<SlipPaymentCreateWithoutPaymentsInput, SlipPaymentUncheckedCreateWithoutPaymentsInput>
  }

  export type SlipPaymentCreateManyPaymentsInputEnvelope = {
    data: SlipPaymentCreateManyPaymentsInput | SlipPaymentCreateManyPaymentsInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithoutPaymentsInput = {
    update: XOR<BookingsUpdateWithoutPaymentsInput, BookingsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
    where?: BookingsWhereInput
  }

  export type BookingsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingsWhereInput
    data: XOR<BookingsUpdateWithoutPaymentsInput, BookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_created?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    parkings?: ParksUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    parking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentUpsertWithWhereUniqueWithoutPaymentsInput = {
    where: SlipPaymentWhereUniqueInput
    update: XOR<SlipPaymentUpdateWithoutPaymentsInput, SlipPaymentUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SlipPaymentCreateWithoutPaymentsInput, SlipPaymentUncheckedCreateWithoutPaymentsInput>
  }

  export type SlipPaymentUpdateWithWhereUniqueWithoutPaymentsInput = {
    where: SlipPaymentWhereUniqueInput
    data: XOR<SlipPaymentUpdateWithoutPaymentsInput, SlipPaymentUncheckedUpdateWithoutPaymentsInput>
  }

  export type SlipPaymentUpdateManyWithWhereWithoutPaymentsInput = {
    where: SlipPaymentScalarWhereInput
    data: XOR<SlipPaymentUpdateManyMutationInput, SlipPaymentUncheckedUpdateManyWithoutPaymentsInput>
  }

  export type SlipPaymentScalarWhereInput = {
    AND?: SlipPaymentScalarWhereInput | SlipPaymentScalarWhereInput[]
    OR?: SlipPaymentScalarWhereInput[]
    NOT?: SlipPaymentScalarWhereInput | SlipPaymentScalarWhereInput[]
    id?: StringFilter<"SlipPayment"> | string
    count?: IntFilter<"SlipPayment"> | number
    image?: StringFilter<"SlipPayment"> | string
    detail?: StringNullableFilter<"SlipPayment"> | string | null
    payment_id?: StringFilter<"SlipPayment"> | string
    create_date?: DateTimeFilter<"SlipPayment"> | Date | string
    update_date?: DateTimeFilter<"SlipPayment"> | Date | string
  }

  export type PaymentsCreateWithoutSlipPaymentInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    create_date?: Date | string
    update_date?: Date | string
    bookings: BookingsCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutSlipPaymentInput = {
    id?: string
    status_payment?: string
    count: number
    deposit?: number | null
    remian?: number | null
    booking_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutSlipPaymentInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutSlipPaymentInput, PaymentsUncheckedCreateWithoutSlipPaymentInput>
  }

  export type PaymentsUpsertWithoutSlipPaymentInput = {
    update: XOR<PaymentsUpdateWithoutSlipPaymentInput, PaymentsUncheckedUpdateWithoutSlipPaymentInput>
    create: XOR<PaymentsCreateWithoutSlipPaymentInput, PaymentsUncheckedCreateWithoutSlipPaymentInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutSlipPaymentInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutSlipPaymentInput, PaymentsUncheckedUpdateWithoutSlipPaymentInput>
  }

  export type PaymentsUpdateWithoutSlipPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutSlipPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_payment?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    deposit?: NullableIntFieldUpdateOperationsInput | number | null
    remian?: NullableIntFieldUpdateOperationsInput | number | null
    booking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateManyUser_createdInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    parking_id: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type BookingsUpdateWithoutUser_createdInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    parkings?: ParksUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentsUpdateOneWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutUser_createdInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    parking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutUser_createdInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    parking_id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateManyParkingsInput = {
    id?: string
    detail: string
    status?: string
    start_date: Date | string
    end_date: Date | string
    booking_by: string
    created_by: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type BookingsUpdateWithoutParkingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_created?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentsUpdateOneWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutParkingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutParkingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentCreateManyPaymentsInput = {
    id?: string
    count: number
    image: string
    detail?: string | null
    create_date?: Date | string
    update_date?: Date | string
  }

  export type SlipPaymentUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlipPaymentUncheckedUpdateManyWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParksCountOutputTypeDefaultArgs instead
     */
    export type ParksCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParksCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentsCountOutputTypeDefaultArgs instead
     */
    export type PaymentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParksDefaultArgs instead
     */
    export type ParksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingsDefaultArgs instead
     */
    export type BookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentsDefaultArgs instead
     */
    export type PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlipPaymentDefaultArgs instead
     */
    export type SlipPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlipPaymentDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}