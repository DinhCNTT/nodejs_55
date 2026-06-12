
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model articles
 * 
 */
export type articles = $Result.DefaultSelection<Prisma.$articlesPayload>
/**
 * Model chatGroupMembers
 * 
 */
export type chatGroupMembers = $Result.DefaultSelection<Prisma.$chatGroupMembersPayload>
/**
 * Model chatGroups
 * 
 */
export type chatGroups = $Result.DefaultSelection<Prisma.$chatGroupsPayload>
/**
 * Model chatMessages
 * 
 */
export type chatMessages = $Result.DefaultSelection<Prisma.$chatMessagesPayload>
/**
 * Model foods
 * 
 */
export type foods = $Result.DefaultSelection<Prisma.$foodsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model table_template
 * 
 */
export type table_template = $Result.DefaultSelection<Prisma.$table_templatePayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Articles
 * const articles = await prisma.articles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Articles
   * const articles = await prisma.articles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.articles`: Exposes CRUD operations for the **articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.articlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroupMembers`: Exposes CRUD operations for the **chatGroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroupMembers
    * const chatGroupMembers = await prisma.chatGroupMembers.findMany()
    * ```
    */
  get chatGroupMembers(): Prisma.chatGroupMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroups`: Exposes CRUD operations for the **chatGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroups.findMany()
    * ```
    */
  get chatGroups(): Prisma.chatGroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessages`: Exposes CRUD operations for the **chatMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessages.findMany()
    * ```
    */
  get chatMessages(): Prisma.chatMessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foods`: Exposes CRUD operations for the **foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.foods.findMany()
    * ```
    */
  get foods(): Prisma.foodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table_template`: Exposes CRUD operations for the **table_template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Table_templates
    * const table_templates = await prisma.table_template.findMany()
    * ```
    */
  get table_template(): Prisma.table_templateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    articles: 'articles',
    chatGroupMembers: 'chatGroupMembers',
    chatGroups: 'chatGroups',
    chatMessages: 'chatMessages',
    foods: 'foods',
    orders: 'orders',
    table_template: 'table_template',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "articles" | "chatGroupMembers" | "chatGroups" | "chatMessages" | "foods" | "orders" | "table_template" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      articles: {
        payload: Prisma.$articlesPayload<ExtArgs>
        fields: Prisma.articlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findFirst: {
            args: Prisma.articlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findMany: {
            args: Prisma.articlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          create: {
            args: Prisma.articlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          createMany: {
            args: Prisma.articlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.articlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          update: {
            args: Prisma.articlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          deleteMany: {
            args: Prisma.articlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.articlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.articlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.articlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      chatGroupMembers: {
        payload: Prisma.$chatGroupMembersPayload<ExtArgs>
        fields: Prisma.chatGroupMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatGroupMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatGroupMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>
          }
          findFirst: {
            args: Prisma.chatGroupMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatGroupMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>
          }
          findMany: {
            args: Prisma.chatGroupMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>[]
          }
          create: {
            args: Prisma.chatGroupMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>
          }
          createMany: {
            args: Prisma.chatGroupMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatGroupMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>
          }
          update: {
            args: Prisma.chatGroupMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>
          }
          deleteMany: {
            args: Prisma.chatGroupMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatGroupMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatGroupMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupMembersPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroupMembers>
          }
          groupBy: {
            args: Prisma.chatGroupMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatGroupMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupMembersCountAggregateOutputType> | number
          }
        }
      }
      chatGroups: {
        payload: Prisma.$chatGroupsPayload<ExtArgs>
        fields: Prisma.chatGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatGroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatGroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>
          }
          findFirst: {
            args: Prisma.chatGroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatGroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>
          }
          findMany: {
            args: Prisma.chatGroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>[]
          }
          create: {
            args: Prisma.chatGroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>
          }
          createMany: {
            args: Prisma.chatGroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatGroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>
          }
          update: {
            args: Prisma.chatGroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>
          }
          deleteMany: {
            args: Prisma.chatGroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatGroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatGroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupsPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroups>
          }
          groupBy: {
            args: Prisma.chatGroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatGroupsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupsCountAggregateOutputType> | number
          }
        }
      }
      chatMessages: {
        payload: Prisma.$chatMessagesPayload<ExtArgs>
        fields: Prisma.chatMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>
          }
          findFirst: {
            args: Prisma.chatMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>
          }
          findMany: {
            args: Prisma.chatMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>[]
          }
          create: {
            args: Prisma.chatMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>
          }
          createMany: {
            args: Prisma.chatMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>
          }
          update: {
            args: Prisma.chatMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>
          }
          deleteMany: {
            args: Prisma.chatMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagesPayload>
          }
          aggregate: {
            args: Prisma.ChatMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessages>
          }
          groupBy: {
            args: Prisma.chatMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesCountAggregateOutputType> | number
          }
        }
      }
      foods: {
        payload: Prisma.$foodsPayload<ExtArgs>
        fields: Prisma.foodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          findFirst: {
            args: Prisma.foodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          findMany: {
            args: Prisma.foodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>[]
          }
          create: {
            args: Prisma.foodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          createMany: {
            args: Prisma.foodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.foodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          update: {
            args: Prisma.foodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          deleteMany: {
            args: Prisma.foodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.foodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodsPayload>
          }
          aggregate: {
            args: Prisma.FoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoods>
          }
          groupBy: {
            args: Prisma.foodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.foodsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      table_template: {
        payload: Prisma.$table_templatePayload<ExtArgs>
        fields: Prisma.table_templateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.table_templateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.table_templateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>
          }
          findFirst: {
            args: Prisma.table_templateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.table_templateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>
          }
          findMany: {
            args: Prisma.table_templateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>[]
          }
          create: {
            args: Prisma.table_templateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>
          }
          createMany: {
            args: Prisma.table_templateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.table_templateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>
          }
          update: {
            args: Prisma.table_templateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>
          }
          deleteMany: {
            args: Prisma.table_templateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.table_templateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.table_templateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_templatePayload>
          }
          aggregate: {
            args: Prisma.Table_templateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable_template>
          }
          groupBy: {
            args: Prisma.table_templateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Table_templateGroupByOutputType>[]
          }
          count: {
            args: Prisma.table_templateCountArgs<ExtArgs>
            result: $Utils.Optional<Table_templateCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    articles?: articlesOmit
    chatGroupMembers?: chatGroupMembersOmit
    chatGroups?: chatGroupsOmit
    chatMessages?: chatMessagesOmit
    foods?: foodsOmit
    orders?: ordersOmit
    table_template?: table_templateOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ChatGroupsCountOutputType
   */

  export type ChatGroupsCountOutputType = {
    ChatGroupMembers: number
    chatMessages: number
  }

  export type ChatGroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | ChatGroupsCountOutputTypeCountChatGroupMembersArgs
    chatMessages?: boolean | ChatGroupsCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupsCountOutputType
     */
    select?: ChatGroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeCountChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupMembersWhereInput
  }

  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessagesWhereInput
  }


  /**
   * Count Type FoodsCountOutputType
   */

  export type FoodsCountOutputType = {
    orders: number
  }

  export type FoodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FoodsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodsCountOutputType
     */
    select?: FoodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    articles: number
    chatGroupMembers: number
    chatGroups: number
    chatMessages: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UsersCountOutputTypeCountArticlesArgs
    chatGroupMembers?: boolean | UsersCountOutputTypeCountChatGroupMembersArgs
    chatGroups?: boolean | UsersCountOutputTypeCountChatGroupsArgs
    chatMessages?: boolean | UsersCountOutputTypeCountChatMessagesArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
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
  export type UsersCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    views: number
    userId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    id?: true
    views?: true
    userId?: true
    deletedBy?: true
  }

  export type ArticlesSumAggregateInputType = {
    id?: true
    views?: true
    userId?: true
    deletedBy?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to aggregate.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type articlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithAggregationInput | articlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: articlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: number
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number
    userId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends articlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type articlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | articles$usersArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>



  export type articlesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type articlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "views" | "userId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["articles"]>
  export type articlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | articles$usersArgs<ExtArgs>
  }

  export type $articlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: string | null
      imageUrl: string | null
      views: number
      userId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type articlesGetPayload<S extends boolean | null | undefined | articlesDefaultArgs> = $Result.GetResult<Prisma.$articlesPayload, S>

  type articlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface articlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articles'], meta: { name: 'articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {articlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articlesFindUniqueArgs>(args: SelectSubset<T, articlesFindUniqueArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articlesFindUniqueOrThrowArgs>(args: SelectSubset<T, articlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articlesFindFirstArgs>(args?: SelectSubset<T, articlesFindFirstArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articlesFindFirstOrThrowArgs>(args?: SelectSubset<T, articlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articlesFindManyArgs>(args?: SelectSubset<T, articlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {articlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends articlesCreateArgs>(args: SelectSubset<T, articlesCreateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articlesCreateManyArgs>(args?: SelectSubset<T, articlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {articlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends articlesDeleteArgs>(args: SelectSubset<T, articlesDeleteArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {articlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articlesUpdateArgs>(args: SelectSubset<T, articlesUpdateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articlesDeleteManyArgs>(args?: SelectSubset<T, articlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articlesUpdateManyArgs>(args: SelectSubset<T, articlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {articlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends articlesUpsertArgs>(args: SelectSubset<T, articlesUpsertArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articlesCountArgs>(
      args?: Subset<T, articlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesGroupByArgs} args - Group by arguments.
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
      T extends articlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articlesGroupByArgs['orderBy'] }
        : { orderBy?: articlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articles model
   */
  readonly fields: articlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends articles$usersArgs<ExtArgs> = {}>(args?: Subset<T, articles$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the articles model
   */
  interface articlesFieldRefs {
    readonly id: FieldRef<"articles", 'Int'>
    readonly title: FieldRef<"articles", 'String'>
    readonly content: FieldRef<"articles", 'String'>
    readonly imageUrl: FieldRef<"articles", 'String'>
    readonly views: FieldRef<"articles", 'Int'>
    readonly userId: FieldRef<"articles", 'Int'>
    readonly deletedBy: FieldRef<"articles", 'Int'>
    readonly isDeleted: FieldRef<"articles", 'Boolean'>
    readonly deletedAt: FieldRef<"articles", 'DateTime'>
    readonly createdAt: FieldRef<"articles", 'DateTime'>
    readonly updatedAt: FieldRef<"articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * articles findUnique
   */
  export type articlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findUniqueOrThrow
   */
  export type articlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findFirst
   */
  export type articlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findFirstOrThrow
   */
  export type articlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findMany
   */
  export type articlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles create
   */
  export type articlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to create a articles.
     */
    data?: XOR<articlesCreateInput, articlesUncheckedCreateInput>
  }

  /**
   * articles createMany
   */
  export type articlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articlesCreateManyInput | articlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articles update
   */
  export type articlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to update a articles.
     */
    data: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
    /**
     * Choose, which articles to update.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles updateMany
   */
  export type articlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * articles upsert
   */
  export type articlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The filter to search for the articles to update in case it exists.
     */
    where: articlesWhereUniqueInput
    /**
     * In case the articles found by the `where` argument doesn't exist, create a new articles with this data.
     */
    create: XOR<articlesCreateInput, articlesUncheckedCreateInput>
    /**
     * In case the articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
  }

  /**
   * articles delete
   */
  export type articlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter which articles to delete.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles deleteMany
   */
  export type articlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * articles.users
   */
  export type articles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * articles without action
   */
  export type articlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
  }


  /**
   * Model chatGroupMembers
   */

  export type AggregateChatGroupMembers = {
    _count: ChatGroupMembersCountAggregateOutputType | null
    _avg: ChatGroupMembersAvgAggregateOutputType | null
    _sum: ChatGroupMembersSumAggregateOutputType | null
    _min: ChatGroupMembersMinAggregateOutputType | null
    _max: ChatGroupMembersMaxAggregateOutputType | null
  }

  export type ChatGroupMembersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatGroupMembersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatGroupMembersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMembersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMembersCountAggregateOutputType = {
    id: number
    userId: number
    chatGroupId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupMembersAvgAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatGroupMembersSumAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatGroupMembersMinAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMembersMaxAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMembersCountAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatGroupMembers to aggregate.
     */
    where?: chatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupMembers to fetch.
     */
    orderBy?: chatGroupMembersOrderByWithRelationInput | chatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatGroupMembers
    **/
    _count?: true | ChatGroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMembersMaxAggregateInputType
  }

  export type GetChatGroupMembersAggregateType<T extends ChatGroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroupMembers[P]>
      : GetScalarType<T[P], AggregateChatGroupMembers[P]>
  }




  export type chatGroupMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupMembersWhereInput
    orderBy?: chatGroupMembersOrderByWithAggregationInput | chatGroupMembersOrderByWithAggregationInput[]
    by: ChatGroupMembersScalarFieldEnum[] | ChatGroupMembersScalarFieldEnum
    having?: chatGroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupMembersCountAggregateInputType | true
    _avg?: ChatGroupMembersAvgAggregateInputType
    _sum?: ChatGroupMembersSumAggregateInputType
    _min?: ChatGroupMembersMinAggregateInputType
    _max?: ChatGroupMembersMaxAggregateInputType
  }

  export type ChatGroupMembersGroupByOutputType = {
    id: number
    userId: number | null
    chatGroupId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupMembersCountAggregateOutputType | null
    _avg: ChatGroupMembersAvgAggregateOutputType | null
    _sum: ChatGroupMembersSumAggregateOutputType | null
    _min: ChatGroupMembersMinAggregateOutputType | null
    _max: ChatGroupMembersMaxAggregateOutputType | null
  }

  type GetChatGroupMembersGroupByPayload<T extends chatGroupMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type chatGroupMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | chatGroupMembers$UsersArgs<ExtArgs>
    chatGroups?: boolean | chatGroupMembers$chatGroupsArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupMembers"]>



  export type chatGroupMembersSelectScalar = {
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chatGroupMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatGroupId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroupMembers"]>
  export type chatGroupMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | chatGroupMembers$UsersArgs<ExtArgs>
    chatGroups?: boolean | chatGroupMembers$chatGroupsArgs<ExtArgs>
  }

  export type $chatGroupMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatGroupMembers"
    objects: {
      Users: Prisma.$usersPayload<ExtArgs> | null
      chatGroups: Prisma.$chatGroupsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      chatGroupId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroupMembers"]>
    composites: {}
  }

  type chatGroupMembersGetPayload<S extends boolean | null | undefined | chatGroupMembersDefaultArgs> = $Result.GetResult<Prisma.$chatGroupMembersPayload, S>

  type chatGroupMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatGroupMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupMembersCountAggregateInputType | true
    }

  export interface chatGroupMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatGroupMembers'], meta: { name: 'chatGroupMembers' } }
    /**
     * Find zero or one ChatGroupMembers that matches the filter.
     * @param {chatGroupMembersFindUniqueArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatGroupMembersFindUniqueArgs>(args: SelectSubset<T, chatGroupMembersFindUniqueArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroupMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatGroupMembersFindUniqueOrThrowArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatGroupMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, chatGroupMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupMembersFindFirstArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatGroupMembersFindFirstArgs>(args?: SelectSubset<T, chatGroupMembersFindFirstArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupMembersFindFirstOrThrowArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatGroupMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, chatGroupMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findMany()
     * 
     * // Get first 10 ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupMembersWithIdOnly = await prisma.chatGroupMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatGroupMembersFindManyArgs>(args?: SelectSubset<T, chatGroupMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroupMembers.
     * @param {chatGroupMembersCreateArgs} args - Arguments to create a ChatGroupMembers.
     * @example
     * // Create one ChatGroupMembers
     * const ChatGroupMembers = await prisma.chatGroupMembers.create({
     *   data: {
     *     // ... data to create a ChatGroupMembers
     *   }
     * })
     * 
     */
    create<T extends chatGroupMembersCreateArgs>(args: SelectSubset<T, chatGroupMembersCreateArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroupMembers.
     * @param {chatGroupMembersCreateManyArgs} args - Arguments to create many ChatGroupMembers.
     * @example
     * // Create many ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatGroupMembersCreateManyArgs>(args?: SelectSubset<T, chatGroupMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroupMembers.
     * @param {chatGroupMembersDeleteArgs} args - Arguments to delete one ChatGroupMembers.
     * @example
     * // Delete one ChatGroupMembers
     * const ChatGroupMembers = await prisma.chatGroupMembers.delete({
     *   where: {
     *     // ... filter to delete one ChatGroupMembers
     *   }
     * })
     * 
     */
    delete<T extends chatGroupMembersDeleteArgs>(args: SelectSubset<T, chatGroupMembersDeleteArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroupMembers.
     * @param {chatGroupMembersUpdateArgs} args - Arguments to update one ChatGroupMembers.
     * @example
     * // Update one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatGroupMembersUpdateArgs>(args: SelectSubset<T, chatGroupMembersUpdateArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroupMembers.
     * @param {chatGroupMembersDeleteManyArgs} args - Arguments to filter ChatGroupMembers to delete.
     * @example
     * // Delete a few ChatGroupMembers
     * const { count } = await prisma.chatGroupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatGroupMembersDeleteManyArgs>(args?: SelectSubset<T, chatGroupMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatGroupMembersUpdateManyArgs>(args: SelectSubset<T, chatGroupMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroupMembers.
     * @param {chatGroupMembersUpsertArgs} args - Arguments to update or create a ChatGroupMembers.
     * @example
     * // Update or create a ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.upsert({
     *   create: {
     *     // ... data to create a ChatGroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroupMembers we want to update
     *   }
     * })
     */
    upsert<T extends chatGroupMembersUpsertArgs>(args: SelectSubset<T, chatGroupMembersUpsertArgs<ExtArgs>>): Prisma__chatGroupMembersClient<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupMembersCountArgs} args - Arguments to filter ChatGroupMembers to count.
     * @example
     * // Count the number of ChatGroupMembers
     * const count = await prisma.chatGroupMembers.count({
     *   where: {
     *     // ... the filter for the ChatGroupMembers we want to count
     *   }
     * })
    **/
    count<T extends chatGroupMembersCountArgs>(
      args?: Subset<T, chatGroupMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupMembersAggregateArgs>(args: Subset<T, ChatGroupMembersAggregateArgs>): Prisma.PrismaPromise<GetChatGroupMembersAggregateType<T>>

    /**
     * Group by ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupMembersGroupByArgs} args - Group by arguments.
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
      T extends chatGroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatGroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatGroupMembers model
   */
  readonly fields: chatGroupMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatGroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatGroupMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends chatGroupMembers$UsersArgs<ExtArgs> = {}>(args?: Subset<T, chatGroupMembers$UsersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatGroups<T extends chatGroupMembers$chatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, chatGroupMembers$chatGroupsArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chatGroupMembers model
   */
  interface chatGroupMembersFieldRefs {
    readonly id: FieldRef<"chatGroupMembers", 'Int'>
    readonly userId: FieldRef<"chatGroupMembers", 'Int'>
    readonly chatGroupId: FieldRef<"chatGroupMembers", 'Int'>
    readonly deletedBy: FieldRef<"chatGroupMembers", 'Int'>
    readonly isDeleted: FieldRef<"chatGroupMembers", 'Boolean'>
    readonly deletedAt: FieldRef<"chatGroupMembers", 'DateTime'>
    readonly createdAt: FieldRef<"chatGroupMembers", 'DateTime'>
    readonly updatedAt: FieldRef<"chatGroupMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatGroupMembers findUnique
   */
  export type chatGroupMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupMembers to fetch.
     */
    where: chatGroupMembersWhereUniqueInput
  }

  /**
   * chatGroupMembers findUniqueOrThrow
   */
  export type chatGroupMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupMembers to fetch.
     */
    where: chatGroupMembersWhereUniqueInput
  }

  /**
   * chatGroupMembers findFirst
   */
  export type chatGroupMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupMembers to fetch.
     */
    where?: chatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupMembers to fetch.
     */
    orderBy?: chatGroupMembersOrderByWithRelationInput | chatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatGroupMembers.
     */
    cursor?: chatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * chatGroupMembers findFirstOrThrow
   */
  export type chatGroupMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupMembers to fetch.
     */
    where?: chatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupMembers to fetch.
     */
    orderBy?: chatGroupMembersOrderByWithRelationInput | chatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatGroupMembers.
     */
    cursor?: chatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * chatGroupMembers findMany
   */
  export type chatGroupMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupMembers to fetch.
     */
    where?: chatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupMembers to fetch.
     */
    orderBy?: chatGroupMembersOrderByWithRelationInput | chatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatGroupMembers.
     */
    cursor?: chatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * chatGroupMembers create
   */
  export type chatGroupMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a chatGroupMembers.
     */
    data?: XOR<chatGroupMembersCreateInput, chatGroupMembersUncheckedCreateInput>
  }

  /**
   * chatGroupMembers createMany
   */
  export type chatGroupMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatGroupMembers.
     */
    data: chatGroupMembersCreateManyInput | chatGroupMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatGroupMembers update
   */
  export type chatGroupMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a chatGroupMembers.
     */
    data: XOR<chatGroupMembersUpdateInput, chatGroupMembersUncheckedUpdateInput>
    /**
     * Choose, which chatGroupMembers to update.
     */
    where: chatGroupMembersWhereUniqueInput
  }

  /**
   * chatGroupMembers updateMany
   */
  export type chatGroupMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatGroupMembers.
     */
    data: XOR<chatGroupMembersUpdateManyMutationInput, chatGroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which chatGroupMembers to update
     */
    where?: chatGroupMembersWhereInput
    /**
     * Limit how many chatGroupMembers to update.
     */
    limit?: number
  }

  /**
   * chatGroupMembers upsert
   */
  export type chatGroupMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the chatGroupMembers to update in case it exists.
     */
    where: chatGroupMembersWhereUniqueInput
    /**
     * In case the chatGroupMembers found by the `where` argument doesn't exist, create a new chatGroupMembers with this data.
     */
    create: XOR<chatGroupMembersCreateInput, chatGroupMembersUncheckedCreateInput>
    /**
     * In case the chatGroupMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatGroupMembersUpdateInput, chatGroupMembersUncheckedUpdateInput>
  }

  /**
   * chatGroupMembers delete
   */
  export type chatGroupMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter which chatGroupMembers to delete.
     */
    where: chatGroupMembersWhereUniqueInput
  }

  /**
   * chatGroupMembers deleteMany
   */
  export type chatGroupMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatGroupMembers to delete
     */
    where?: chatGroupMembersWhereInput
    /**
     * Limit how many chatGroupMembers to delete.
     */
    limit?: number
  }

  /**
   * chatGroupMembers.Users
   */
  export type chatGroupMembers$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * chatGroupMembers.chatGroups
   */
  export type chatGroupMembers$chatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    where?: chatGroupsWhereInput
  }

  /**
   * chatGroupMembers without action
   */
  export type chatGroupMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
  }


  /**
   * Model chatGroups
   */

  export type AggregateChatGroups = {
    _count: ChatGroupsCountAggregateOutputType | null
    _avg: ChatGroupsAvgAggregateOutputType | null
    _sum: ChatGroupsSumAggregateOutputType | null
    _min: ChatGroupsMinAggregateOutputType | null
    _max: ChatGroupsMaxAggregateOutputType | null
  }

  export type ChatGroupsAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatGroupsSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatGroupsMinAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupsCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupsAvgAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatGroupsSumAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatGroupsMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupsMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupsCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatGroups to aggregate.
     */
    where?: chatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroups to fetch.
     */
    orderBy?: chatGroupsOrderByWithRelationInput | chatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatGroups
    **/
    _count?: true | ChatGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupsMaxAggregateInputType
  }

  export type GetChatGroupsAggregateType<T extends ChatGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroups[P]>
      : GetScalarType<T[P], AggregateChatGroups[P]>
  }




  export type chatGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupsWhereInput
    orderBy?: chatGroupsOrderByWithAggregationInput | chatGroupsOrderByWithAggregationInput[]
    by: ChatGroupsScalarFieldEnum[] | ChatGroupsScalarFieldEnum
    having?: chatGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupsCountAggregateInputType | true
    _avg?: ChatGroupsAvgAggregateInputType
    _sum?: ChatGroupsSumAggregateInputType
    _min?: ChatGroupsMinAggregateInputType
    _max?: ChatGroupsMaxAggregateInputType
  }

  export type ChatGroupsGroupByOutputType = {
    id: number
    name: string | null
    ownerId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupsCountAggregateOutputType | null
    _avg: ChatGroupsAvgAggregateOutputType | null
    _sum: ChatGroupsSumAggregateOutputType | null
    _min: ChatGroupsMinAggregateOutputType | null
    _max: ChatGroupsMaxAggregateOutputType | null
  }

  type GetChatGroupsGroupByPayload<T extends chatGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupsGroupByOutputType[P]>
        }
      >
    >


  export type chatGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatGroupMembers?: boolean | chatGroups$ChatGroupMembersArgs<ExtArgs>
    users?: boolean | chatGroups$usersArgs<ExtArgs>
    chatMessages?: boolean | chatGroups$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroups"]>



  export type chatGroupsSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chatGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroups"]>
  export type chatGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | chatGroups$ChatGroupMembersArgs<ExtArgs>
    users?: boolean | chatGroups$usersArgs<ExtArgs>
    chatMessages?: boolean | chatGroups$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $chatGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatGroups"
    objects: {
      ChatGroupMembers: Prisma.$chatGroupMembersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      chatMessages: Prisma.$chatMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      ownerId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroups"]>
    composites: {}
  }

  type chatGroupsGetPayload<S extends boolean | null | undefined | chatGroupsDefaultArgs> = $Result.GetResult<Prisma.$chatGroupsPayload, S>

  type chatGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupsCountAggregateInputType | true
    }

  export interface chatGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatGroups'], meta: { name: 'chatGroups' } }
    /**
     * Find zero or one ChatGroups that matches the filter.
     * @param {chatGroupsFindUniqueArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatGroupsFindUniqueArgs>(args: SelectSubset<T, chatGroupsFindUniqueArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatGroupsFindUniqueOrThrowArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatGroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, chatGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupsFindFirstArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatGroupsFindFirstArgs>(args?: SelectSubset<T, chatGroupsFindFirstArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupsFindFirstOrThrowArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatGroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, chatGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroups.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupsWithIdOnly = await prisma.chatGroups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatGroupsFindManyArgs>(args?: SelectSubset<T, chatGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroups.
     * @param {chatGroupsCreateArgs} args - Arguments to create a ChatGroups.
     * @example
     * // Create one ChatGroups
     * const ChatGroups = await prisma.chatGroups.create({
     *   data: {
     *     // ... data to create a ChatGroups
     *   }
     * })
     * 
     */
    create<T extends chatGroupsCreateArgs>(args: SelectSubset<T, chatGroupsCreateArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {chatGroupsCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroups = await prisma.chatGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatGroupsCreateManyArgs>(args?: SelectSubset<T, chatGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroups.
     * @param {chatGroupsDeleteArgs} args - Arguments to delete one ChatGroups.
     * @example
     * // Delete one ChatGroups
     * const ChatGroups = await prisma.chatGroups.delete({
     *   where: {
     *     // ... filter to delete one ChatGroups
     *   }
     * })
     * 
     */
    delete<T extends chatGroupsDeleteArgs>(args: SelectSubset<T, chatGroupsDeleteArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroups.
     * @param {chatGroupsUpdateArgs} args - Arguments to update one ChatGroups.
     * @example
     * // Update one ChatGroups
     * const chatGroups = await prisma.chatGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatGroupsUpdateArgs>(args: SelectSubset<T, chatGroupsUpdateArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {chatGroupsDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatGroupsDeleteManyArgs>(args?: SelectSubset<T, chatGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroups = await prisma.chatGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatGroupsUpdateManyArgs>(args: SelectSubset<T, chatGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroups.
     * @param {chatGroupsUpsertArgs} args - Arguments to update or create a ChatGroups.
     * @example
     * // Update or create a ChatGroups
     * const chatGroups = await prisma.chatGroups.upsert({
     *   create: {
     *     // ... data to create a ChatGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroups we want to update
     *   }
     * })
     */
    upsert<T extends chatGroupsUpsertArgs>(args: SelectSubset<T, chatGroupsUpsertArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupsCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroups.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends chatGroupsCountArgs>(
      args?: Subset<T, chatGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupsAggregateArgs>(args: Subset<T, ChatGroupsAggregateArgs>): Prisma.PrismaPromise<GetChatGroupsAggregateType<T>>

    /**
     * Group by ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupsGroupByArgs} args - Group by arguments.
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
      T extends chatGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupsGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatGroups model
   */
  readonly fields: chatGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatGroupMembers<T extends chatGroups$ChatGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, chatGroups$ChatGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends chatGroups$usersArgs<ExtArgs> = {}>(args?: Subset<T, chatGroups$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends chatGroups$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, chatGroups$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chatGroups model
   */
  interface chatGroupsFieldRefs {
    readonly id: FieldRef<"chatGroups", 'Int'>
    readonly name: FieldRef<"chatGroups", 'String'>
    readonly ownerId: FieldRef<"chatGroups", 'Int'>
    readonly deletedBy: FieldRef<"chatGroups", 'Int'>
    readonly isDeleted: FieldRef<"chatGroups", 'Boolean'>
    readonly deletedAt: FieldRef<"chatGroups", 'DateTime'>
    readonly createdAt: FieldRef<"chatGroups", 'DateTime'>
    readonly updatedAt: FieldRef<"chatGroups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatGroups findUnique
   */
  export type chatGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatGroups to fetch.
     */
    where: chatGroupsWhereUniqueInput
  }

  /**
   * chatGroups findUniqueOrThrow
   */
  export type chatGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatGroups to fetch.
     */
    where: chatGroupsWhereUniqueInput
  }

  /**
   * chatGroups findFirst
   */
  export type chatGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatGroups to fetch.
     */
    where?: chatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroups to fetch.
     */
    orderBy?: chatGroupsOrderByWithRelationInput | chatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatGroups.
     */
    cursor?: chatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * chatGroups findFirstOrThrow
   */
  export type chatGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatGroups to fetch.
     */
    where?: chatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroups to fetch.
     */
    orderBy?: chatGroupsOrderByWithRelationInput | chatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatGroups.
     */
    cursor?: chatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * chatGroups findMany
   */
  export type chatGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatGroups to fetch.
     */
    where?: chatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroups to fetch.
     */
    orderBy?: chatGroupsOrderByWithRelationInput | chatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatGroups.
     */
    cursor?: chatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * chatGroups create
   */
  export type chatGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a chatGroups.
     */
    data?: XOR<chatGroupsCreateInput, chatGroupsUncheckedCreateInput>
  }

  /**
   * chatGroups createMany
   */
  export type chatGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatGroups.
     */
    data: chatGroupsCreateManyInput | chatGroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatGroups update
   */
  export type chatGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a chatGroups.
     */
    data: XOR<chatGroupsUpdateInput, chatGroupsUncheckedUpdateInput>
    /**
     * Choose, which chatGroups to update.
     */
    where: chatGroupsWhereUniqueInput
  }

  /**
   * chatGroups updateMany
   */
  export type chatGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatGroups.
     */
    data: XOR<chatGroupsUpdateManyMutationInput, chatGroupsUncheckedUpdateManyInput>
    /**
     * Filter which chatGroups to update
     */
    where?: chatGroupsWhereInput
    /**
     * Limit how many chatGroups to update.
     */
    limit?: number
  }

  /**
   * chatGroups upsert
   */
  export type chatGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the chatGroups to update in case it exists.
     */
    where: chatGroupsWhereUniqueInput
    /**
     * In case the chatGroups found by the `where` argument doesn't exist, create a new chatGroups with this data.
     */
    create: XOR<chatGroupsCreateInput, chatGroupsUncheckedCreateInput>
    /**
     * In case the chatGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatGroupsUpdateInput, chatGroupsUncheckedUpdateInput>
  }

  /**
   * chatGroups delete
   */
  export type chatGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    /**
     * Filter which chatGroups to delete.
     */
    where: chatGroupsWhereUniqueInput
  }

  /**
   * chatGroups deleteMany
   */
  export type chatGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatGroups to delete
     */
    where?: chatGroupsWhereInput
    /**
     * Limit how many chatGroups to delete.
     */
    limit?: number
  }

  /**
   * chatGroups.ChatGroupMembers
   */
  export type chatGroups$ChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    where?: chatGroupMembersWhereInput
    orderBy?: chatGroupMembersOrderByWithRelationInput | chatGroupMembersOrderByWithRelationInput[]
    cursor?: chatGroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * chatGroups.users
   */
  export type chatGroups$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * chatGroups.chatMessages
   */
  export type chatGroups$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    where?: chatMessagesWhereInput
    orderBy?: chatMessagesOrderByWithRelationInput | chatMessagesOrderByWithRelationInput[]
    cursor?: chatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * chatGroups without action
   */
  export type chatGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
  }


  /**
   * Model chatMessages
   */

  export type AggregateChatMessages = {
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  export type ChatMessagesAvgAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatMessagesSumAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatMessagesMinAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesMaxAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesCountAggregateOutputType = {
    id: number
    chatGroupId: number
    userIdSender: number
    messageText: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessagesAvgAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatMessagesSumAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatMessagesMinAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesMaxAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesCountAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatMessages to aggregate.
     */
    where?: chatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessagesOrderByWithRelationInput | chatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatMessages
    **/
    _count?: true | ChatMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type GetChatMessagesAggregateType<T extends ChatMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessages[P]>
      : GetScalarType<T[P], AggregateChatMessages[P]>
  }




  export type chatMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessagesWhereInput
    orderBy?: chatMessagesOrderByWithAggregationInput | chatMessagesOrderByWithAggregationInput[]
    by: ChatMessagesScalarFieldEnum[] | ChatMessagesScalarFieldEnum
    having?: chatMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessagesCountAggregateInputType | true
    _avg?: ChatMessagesAvgAggregateInputType
    _sum?: ChatMessagesSumAggregateInputType
    _min?: ChatMessagesMinAggregateInputType
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type ChatMessagesGroupByOutputType = {
    id: number
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  type GetChatMessagesGroupByPayload<T extends chatMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
        }
      >
    >


  export type chatMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatGroups?: boolean | chatMessages$chatGroupsArgs<ExtArgs>
    users?: boolean | chatMessages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>



  export type chatMessagesSelectScalar = {
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chatMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatGroupId" | "userIdSender" | "messageText" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessages"]>
  export type chatMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatGroups?: boolean | chatMessages$chatGroupsArgs<ExtArgs>
    users?: boolean | chatMessages$usersArgs<ExtArgs>
  }

  export type $chatMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatMessages"
    objects: {
      chatGroups: Prisma.$chatGroupsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatGroupId: number | null
      userIdSender: number | null
      messageText: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessages"]>
    composites: {}
  }

  type chatMessagesGetPayload<S extends boolean | null | undefined | chatMessagesDefaultArgs> = $Result.GetResult<Prisma.$chatMessagesPayload, S>

  type chatMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessagesCountAggregateInputType | true
    }

  export interface chatMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatMessages'], meta: { name: 'chatMessages' } }
    /**
     * Find zero or one ChatMessages that matches the filter.
     * @param {chatMessagesFindUniqueArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatMessagesFindUniqueArgs>(args: SelectSubset<T, chatMessagesFindUniqueArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatMessagesFindUniqueOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, chatMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessagesFindFirstArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatMessagesFindFirstArgs>(args?: SelectSubset<T, chatMessagesFindFirstArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessagesFindFirstOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, chatMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessagesWithIdOnly = await prisma.chatMessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatMessagesFindManyArgs>(args?: SelectSubset<T, chatMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessages.
     * @param {chatMessagesCreateArgs} args - Arguments to create a ChatMessages.
     * @example
     * // Create one ChatMessages
     * const ChatMessages = await prisma.chatMessages.create({
     *   data: {
     *     // ... data to create a ChatMessages
     *   }
     * })
     * 
     */
    create<T extends chatMessagesCreateArgs>(args: SelectSubset<T, chatMessagesCreateArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {chatMessagesCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessages = await prisma.chatMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatMessagesCreateManyArgs>(args?: SelectSubset<T, chatMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessages.
     * @param {chatMessagesDeleteArgs} args - Arguments to delete one ChatMessages.
     * @example
     * // Delete one ChatMessages
     * const ChatMessages = await prisma.chatMessages.delete({
     *   where: {
     *     // ... filter to delete one ChatMessages
     *   }
     * })
     * 
     */
    delete<T extends chatMessagesDeleteArgs>(args: SelectSubset<T, chatMessagesDeleteArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessages.
     * @param {chatMessagesUpdateArgs} args - Arguments to update one ChatMessages.
     * @example
     * // Update one ChatMessages
     * const chatMessages = await prisma.chatMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatMessagesUpdateArgs>(args: SelectSubset<T, chatMessagesUpdateArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {chatMessagesDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatMessagesDeleteManyArgs>(args?: SelectSubset<T, chatMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessages = await prisma.chatMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatMessagesUpdateManyArgs>(args: SelectSubset<T, chatMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessages.
     * @param {chatMessagesUpsertArgs} args - Arguments to update or create a ChatMessages.
     * @example
     * // Update or create a ChatMessages
     * const chatMessages = await prisma.chatMessages.upsert({
     *   create: {
     *     // ... data to create a ChatMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessages we want to update
     *   }
     * })
     */
    upsert<T extends chatMessagesUpsertArgs>(args: SelectSubset<T, chatMessagesUpsertArgs<ExtArgs>>): Prisma__chatMessagesClient<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessagesCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessages.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends chatMessagesCountArgs>(
      args?: Subset<T, chatMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessagesAggregateArgs>(args: Subset<T, ChatMessagesAggregateArgs>): Prisma.PrismaPromise<GetChatMessagesAggregateType<T>>

    /**
     * Group by ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessagesGroupByArgs} args - Group by arguments.
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
      T extends chatMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatMessagesGroupByArgs['orderBy'] }
        : { orderBy?: chatMessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatMessages model
   */
  readonly fields: chatMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatGroups<T extends chatMessages$chatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, chatMessages$chatGroupsArgs<ExtArgs>>): Prisma__chatGroupsClient<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends chatMessages$usersArgs<ExtArgs> = {}>(args?: Subset<T, chatMessages$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chatMessages model
   */
  interface chatMessagesFieldRefs {
    readonly id: FieldRef<"chatMessages", 'Int'>
    readonly chatGroupId: FieldRef<"chatMessages", 'Int'>
    readonly userIdSender: FieldRef<"chatMessages", 'Int'>
    readonly messageText: FieldRef<"chatMessages", 'String'>
    readonly deletedBy: FieldRef<"chatMessages", 'Int'>
    readonly isDeleted: FieldRef<"chatMessages", 'Boolean'>
    readonly deletedAt: FieldRef<"chatMessages", 'DateTime'>
    readonly createdAt: FieldRef<"chatMessages", 'DateTime'>
    readonly updatedAt: FieldRef<"chatMessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatMessages findUnique
   */
  export type chatMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where: chatMessagesWhereUniqueInput
  }

  /**
   * chatMessages findUniqueOrThrow
   */
  export type chatMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where: chatMessagesWhereUniqueInput
  }

  /**
   * chatMessages findFirst
   */
  export type chatMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where?: chatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessagesOrderByWithRelationInput | chatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatMessages.
     */
    cursor?: chatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * chatMessages findFirstOrThrow
   */
  export type chatMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where?: chatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessagesOrderByWithRelationInput | chatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatMessages.
     */
    cursor?: chatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * chatMessages findMany
   */
  export type chatMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where?: chatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessagesOrderByWithRelationInput | chatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatMessages.
     */
    cursor?: chatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * chatMessages create
   */
  export type chatMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a chatMessages.
     */
    data?: XOR<chatMessagesCreateInput, chatMessagesUncheckedCreateInput>
  }

  /**
   * chatMessages createMany
   */
  export type chatMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatMessages.
     */
    data: chatMessagesCreateManyInput | chatMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatMessages update
   */
  export type chatMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a chatMessages.
     */
    data: XOR<chatMessagesUpdateInput, chatMessagesUncheckedUpdateInput>
    /**
     * Choose, which chatMessages to update.
     */
    where: chatMessagesWhereUniqueInput
  }

  /**
   * chatMessages updateMany
   */
  export type chatMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatMessages.
     */
    data: XOR<chatMessagesUpdateManyMutationInput, chatMessagesUncheckedUpdateManyInput>
    /**
     * Filter which chatMessages to update
     */
    where?: chatMessagesWhereInput
    /**
     * Limit how many chatMessages to update.
     */
    limit?: number
  }

  /**
   * chatMessages upsert
   */
  export type chatMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the chatMessages to update in case it exists.
     */
    where: chatMessagesWhereUniqueInput
    /**
     * In case the chatMessages found by the `where` argument doesn't exist, create a new chatMessages with this data.
     */
    create: XOR<chatMessagesCreateInput, chatMessagesUncheckedCreateInput>
    /**
     * In case the chatMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatMessagesUpdateInput, chatMessagesUncheckedUpdateInput>
  }

  /**
   * chatMessages delete
   */
  export type chatMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    /**
     * Filter which chatMessages to delete.
     */
    where: chatMessagesWhereUniqueInput
  }

  /**
   * chatMessages deleteMany
   */
  export type chatMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatMessages to delete
     */
    where?: chatMessagesWhereInput
    /**
     * Limit how many chatMessages to delete.
     */
    limit?: number
  }

  /**
   * chatMessages.chatGroups
   */
  export type chatMessages$chatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    where?: chatGroupsWhereInput
  }

  /**
   * chatMessages.users
   */
  export type chatMessages$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * chatMessages without action
   */
  export type chatMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
  }


  /**
   * Model foods
   */

  export type AggregateFoods = {
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  export type FoodsAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type FoodsSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type FoodsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodsAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type FoodsSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type FoodsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to aggregate.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned foods
    **/
    _count?: true | FoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodsMaxAggregateInputType
  }

  export type GetFoodsAggregateType<T extends FoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoods[P]>
      : GetScalarType<T[P], AggregateFoods[P]>
  }




  export type foodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodsWhereInput
    orderBy?: foodsOrderByWithAggregationInput | foodsOrderByWithAggregationInput[]
    by: FoodsScalarFieldEnum[] | FoodsScalarFieldEnum
    having?: foodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodsCountAggregateInputType | true
    _avg?: FoodsAvgAggregateInputType
    _sum?: FoodsSumAggregateInputType
    _min?: FoodsMinAggregateInputType
    _max?: FoodsMaxAggregateInputType
  }

  export type FoodsGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  type GetFoodsGroupByPayload<T extends foodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodsGroupByOutputType[P]>
        }
      >
    >


  export type foodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | foods$ordersArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foods"]>



  export type foodsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type foodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["foods"]>
  export type foodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | foods$ordersArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $foodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "foods"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foods"]>
    composites: {}
  }

  type foodsGetPayload<S extends boolean | null | undefined | foodsDefaultArgs> = $Result.GetResult<Prisma.$foodsPayload, S>

  type foodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodsCountAggregateInputType | true
    }

  export interface foodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['foods'], meta: { name: 'foods' } }
    /**
     * Find zero or one Foods that matches the filter.
     * @param {foodsFindUniqueArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foodsFindUniqueArgs>(args: SelectSubset<T, foodsFindUniqueArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foodsFindUniqueOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foodsFindUniqueOrThrowArgs>(args: SelectSubset<T, foodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsFindFirstArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foodsFindFirstArgs>(args?: SelectSubset<T, foodsFindFirstArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsFindFirstOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foodsFindFirstOrThrowArgs>(args?: SelectSubset<T, foodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.foods.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.foods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodsWithIdOnly = await prisma.foods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends foodsFindManyArgs>(args?: SelectSubset<T, foodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foods.
     * @param {foodsCreateArgs} args - Arguments to create a Foods.
     * @example
     * // Create one Foods
     * const Foods = await prisma.foods.create({
     *   data: {
     *     // ... data to create a Foods
     *   }
     * })
     * 
     */
    create<T extends foodsCreateArgs>(args: SelectSubset<T, foodsCreateArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {foodsCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const foods = await prisma.foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foodsCreateManyArgs>(args?: SelectSubset<T, foodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foods.
     * @param {foodsDeleteArgs} args - Arguments to delete one Foods.
     * @example
     * // Delete one Foods
     * const Foods = await prisma.foods.delete({
     *   where: {
     *     // ... filter to delete one Foods
     *   }
     * })
     * 
     */
    delete<T extends foodsDeleteArgs>(args: SelectSubset<T, foodsDeleteArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foods.
     * @param {foodsUpdateArgs} args - Arguments to update one Foods.
     * @example
     * // Update one Foods
     * const foods = await prisma.foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foodsUpdateArgs>(args: SelectSubset<T, foodsUpdateArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {foodsDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foodsDeleteManyArgs>(args?: SelectSubset<T, foodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const foods = await prisma.foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foodsUpdateManyArgs>(args: SelectSubset<T, foodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foods.
     * @param {foodsUpsertArgs} args - Arguments to update or create a Foods.
     * @example
     * // Update or create a Foods
     * const foods = await prisma.foods.upsert({
     *   create: {
     *     // ... data to create a Foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foods we want to update
     *   }
     * })
     */
    upsert<T extends foodsUpsertArgs>(args: SelectSubset<T, foodsUpsertArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.foods.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends foodsCountArgs>(
      args?: Subset<T, foodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodsAggregateArgs>(args: Subset<T, FoodsAggregateArgs>): Prisma.PrismaPromise<GetFoodsAggregateType<T>>

    /**
     * Group by Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodsGroupByArgs} args - Group by arguments.
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
      T extends foodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foodsGroupByArgs['orderBy'] }
        : { orderBy?: foodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, foodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the foods model
   */
  readonly fields: foodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends foods$ordersArgs<ExtArgs> = {}>(args?: Subset<T, foods$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the foods model
   */
  interface foodsFieldRefs {
    readonly id: FieldRef<"foods", 'Int'>
    readonly name: FieldRef<"foods", 'String'>
    readonly description: FieldRef<"foods", 'String'>
    readonly deletedBy: FieldRef<"foods", 'Int'>
    readonly isDeleted: FieldRef<"foods", 'Boolean'>
    readonly deletedAt: FieldRef<"foods", 'DateTime'>
    readonly createdAt: FieldRef<"foods", 'DateTime'>
    readonly updatedAt: FieldRef<"foods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * foods findUnique
   */
  export type foodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods findUniqueOrThrow
   */
  export type foodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods findFirst
   */
  export type foodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * foods findFirstOrThrow
   */
  export type foodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * foods findMany
   */
  export type foodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodsOrderByWithRelationInput | foodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing foods.
     */
    cursor?: foodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * foods create
   */
  export type foodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * The data needed to create a foods.
     */
    data?: XOR<foodsCreateInput, foodsUncheckedCreateInput>
  }

  /**
   * foods createMany
   */
  export type foodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many foods.
     */
    data: foodsCreateManyInput | foodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * foods update
   */
  export type foodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * The data needed to update a foods.
     */
    data: XOR<foodsUpdateInput, foodsUncheckedUpdateInput>
    /**
     * Choose, which foods to update.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods updateMany
   */
  export type foodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update foods.
     */
    data: XOR<foodsUpdateManyMutationInput, foodsUncheckedUpdateManyInput>
    /**
     * Filter which foods to update
     */
    where?: foodsWhereInput
    /**
     * Limit how many foods to update.
     */
    limit?: number
  }

  /**
   * foods upsert
   */
  export type foodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * The filter to search for the foods to update in case it exists.
     */
    where: foodsWhereUniqueInput
    /**
     * In case the foods found by the `where` argument doesn't exist, create a new foods with this data.
     */
    create: XOR<foodsCreateInput, foodsUncheckedCreateInput>
    /**
     * In case the foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foodsUpdateInput, foodsUncheckedUpdateInput>
  }

  /**
   * foods delete
   */
  export type foodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    /**
     * Filter which foods to delete.
     */
    where: foodsWhereUniqueInput
  }

  /**
   * foods deleteMany
   */
  export type foodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to delete
     */
    where?: foodsWhereInput
    /**
     * Limit how many foods to delete.
     */
    limit?: number
  }

  /**
   * foods.orders
   */
  export type foods$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * foods without action
   */
  export type foodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userId: number
    foodId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    userId: number | null
    foodId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | orders$usersArgs<ExtArgs>
    foods?: boolean | orders$foodsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    userId?: boolean
    foodId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | orders$usersArgs<ExtArgs>
    foods?: boolean | orders$foodsArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      foods: Prisma.$foodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      foodId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    foods<T extends orders$foodsArgs<ExtArgs> = {}>(args?: Subset<T, orders$foodsArgs<ExtArgs>>): Prisma__foodsClient<$Result.GetResult<Prisma.$foodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly userId: FieldRef<"orders", 'Int'>
    readonly foodId: FieldRef<"orders", 'Int'>
    readonly deletedBy: FieldRef<"orders", 'Int'>
    readonly isDeleted: FieldRef<"orders", 'Boolean'>
    readonly deletedAt: FieldRef<"orders", 'DateTime'>
    readonly createdAt: FieldRef<"orders", 'DateTime'>
    readonly updatedAt: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders.foods
   */
  export type orders$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foods
     */
    select?: foodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foods
     */
    omit?: foodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodsInclude<ExtArgs> | null
    where?: foodsWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model table_template
   */

  export type AggregateTable_template = {
    _count: Table_templateCountAggregateOutputType | null
    _avg: Table_templateAvgAggregateOutputType | null
    _sum: Table_templateSumAggregateOutputType | null
    _min: Table_templateMinAggregateOutputType | null
    _max: Table_templateMaxAggregateOutputType | null
  }

  export type Table_templateAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type Table_templateSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type Table_templateMinAggregateOutputType = {
    id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Table_templateMaxAggregateOutputType = {
    id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Table_templateCountAggregateOutputType = {
    id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Table_templateAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type Table_templateSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type Table_templateMinAggregateInputType = {
    id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Table_templateMaxAggregateInputType = {
    id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Table_templateCountAggregateInputType = {
    id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Table_templateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table_template to aggregate.
     */
    where?: table_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_templates to fetch.
     */
    orderBy?: table_templateOrderByWithRelationInput | table_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: table_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned table_templates
    **/
    _count?: true | Table_templateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Table_templateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Table_templateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Table_templateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Table_templateMaxAggregateInputType
  }

  export type GetTable_templateAggregateType<T extends Table_templateAggregateArgs> = {
        [P in keyof T & keyof AggregateTable_template]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable_template[P]>
      : GetScalarType<T[P], AggregateTable_template[P]>
  }




  export type table_templateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: table_templateWhereInput
    orderBy?: table_templateOrderByWithAggregationInput | table_templateOrderByWithAggregationInput[]
    by: Table_templateScalarFieldEnum[] | Table_templateScalarFieldEnum
    having?: table_templateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Table_templateCountAggregateInputType | true
    _avg?: Table_templateAvgAggregateInputType
    _sum?: Table_templateSumAggregateInputType
    _min?: Table_templateMinAggregateInputType
    _max?: Table_templateMaxAggregateInputType
  }

  export type Table_templateGroupByOutputType = {
    id: number
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Table_templateCountAggregateOutputType | null
    _avg: Table_templateAvgAggregateOutputType | null
    _sum: Table_templateSumAggregateOutputType | null
    _min: Table_templateMinAggregateOutputType | null
    _max: Table_templateMaxAggregateOutputType | null
  }

  type GetTable_templateGroupByPayload<T extends table_templateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Table_templateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Table_templateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Table_templateGroupByOutputType[P]>
            : GetScalarType<T[P], Table_templateGroupByOutputType[P]>
        }
      >
    >


  export type table_templateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["table_template"]>



  export type table_templateSelectScalar = {
    id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type table_templateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["table_template"]>

  export type $table_templatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "table_template"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["table_template"]>
    composites: {}
  }

  type table_templateGetPayload<S extends boolean | null | undefined | table_templateDefaultArgs> = $Result.GetResult<Prisma.$table_templatePayload, S>

  type table_templateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<table_templateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Table_templateCountAggregateInputType | true
    }

  export interface table_templateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['table_template'], meta: { name: 'table_template' } }
    /**
     * Find zero or one Table_template that matches the filter.
     * @param {table_templateFindUniqueArgs} args - Arguments to find a Table_template
     * @example
     * // Get one Table_template
     * const table_template = await prisma.table_template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends table_templateFindUniqueArgs>(args: SelectSubset<T, table_templateFindUniqueArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table_template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {table_templateFindUniqueOrThrowArgs} args - Arguments to find a Table_template
     * @example
     * // Get one Table_template
     * const table_template = await prisma.table_template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends table_templateFindUniqueOrThrowArgs>(args: SelectSubset<T, table_templateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_templateFindFirstArgs} args - Arguments to find a Table_template
     * @example
     * // Get one Table_template
     * const table_template = await prisma.table_template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends table_templateFindFirstArgs>(args?: SelectSubset<T, table_templateFindFirstArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_templateFindFirstOrThrowArgs} args - Arguments to find a Table_template
     * @example
     * // Get one Table_template
     * const table_template = await prisma.table_template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends table_templateFindFirstOrThrowArgs>(args?: SelectSubset<T, table_templateFindFirstOrThrowArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Table_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_templateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Table_templates
     * const table_templates = await prisma.table_template.findMany()
     * 
     * // Get first 10 Table_templates
     * const table_templates = await prisma.table_template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const table_templateWithIdOnly = await prisma.table_template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends table_templateFindManyArgs>(args?: SelectSubset<T, table_templateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table_template.
     * @param {table_templateCreateArgs} args - Arguments to create a Table_template.
     * @example
     * // Create one Table_template
     * const Table_template = await prisma.table_template.create({
     *   data: {
     *     // ... data to create a Table_template
     *   }
     * })
     * 
     */
    create<T extends table_templateCreateArgs>(args: SelectSubset<T, table_templateCreateArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Table_templates.
     * @param {table_templateCreateManyArgs} args - Arguments to create many Table_templates.
     * @example
     * // Create many Table_templates
     * const table_template = await prisma.table_template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends table_templateCreateManyArgs>(args?: SelectSubset<T, table_templateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Table_template.
     * @param {table_templateDeleteArgs} args - Arguments to delete one Table_template.
     * @example
     * // Delete one Table_template
     * const Table_template = await prisma.table_template.delete({
     *   where: {
     *     // ... filter to delete one Table_template
     *   }
     * })
     * 
     */
    delete<T extends table_templateDeleteArgs>(args: SelectSubset<T, table_templateDeleteArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table_template.
     * @param {table_templateUpdateArgs} args - Arguments to update one Table_template.
     * @example
     * // Update one Table_template
     * const table_template = await prisma.table_template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends table_templateUpdateArgs>(args: SelectSubset<T, table_templateUpdateArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Table_templates.
     * @param {table_templateDeleteManyArgs} args - Arguments to filter Table_templates to delete.
     * @example
     * // Delete a few Table_templates
     * const { count } = await prisma.table_template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends table_templateDeleteManyArgs>(args?: SelectSubset<T, table_templateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_templateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Table_templates
     * const table_template = await prisma.table_template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends table_templateUpdateManyArgs>(args: SelectSubset<T, table_templateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table_template.
     * @param {table_templateUpsertArgs} args - Arguments to update or create a Table_template.
     * @example
     * // Update or create a Table_template
     * const table_template = await prisma.table_template.upsert({
     *   create: {
     *     // ... data to create a Table_template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table_template we want to update
     *   }
     * })
     */
    upsert<T extends table_templateUpsertArgs>(args: SelectSubset<T, table_templateUpsertArgs<ExtArgs>>): Prisma__table_templateClient<$Result.GetResult<Prisma.$table_templatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Table_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_templateCountArgs} args - Arguments to filter Table_templates to count.
     * @example
     * // Count the number of Table_templates
     * const count = await prisma.table_template.count({
     *   where: {
     *     // ... the filter for the Table_templates we want to count
     *   }
     * })
    **/
    count<T extends table_templateCountArgs>(
      args?: Subset<T, table_templateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Table_templateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_templateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Table_templateAggregateArgs>(args: Subset<T, Table_templateAggregateArgs>): Prisma.PrismaPromise<GetTable_templateAggregateType<T>>

    /**
     * Group by Table_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_templateGroupByArgs} args - Group by arguments.
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
      T extends table_templateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: table_templateGroupByArgs['orderBy'] }
        : { orderBy?: table_templateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, table_templateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTable_templateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the table_template model
   */
  readonly fields: table_templateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for table_template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__table_templateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the table_template model
   */
  interface table_templateFieldRefs {
    readonly id: FieldRef<"table_template", 'Int'>
    readonly deletedBy: FieldRef<"table_template", 'Int'>
    readonly isDeleted: FieldRef<"table_template", 'Boolean'>
    readonly deletedAt: FieldRef<"table_template", 'DateTime'>
    readonly createdAt: FieldRef<"table_template", 'DateTime'>
    readonly updatedAt: FieldRef<"table_template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * table_template findUnique
   */
  export type table_templateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * Filter, which table_template to fetch.
     */
    where: table_templateWhereUniqueInput
  }

  /**
   * table_template findUniqueOrThrow
   */
  export type table_templateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * Filter, which table_template to fetch.
     */
    where: table_templateWhereUniqueInput
  }

  /**
   * table_template findFirst
   */
  export type table_templateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * Filter, which table_template to fetch.
     */
    where?: table_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_templates to fetch.
     */
    orderBy?: table_templateOrderByWithRelationInput | table_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for table_templates.
     */
    cursor?: table_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of table_templates.
     */
    distinct?: Table_templateScalarFieldEnum | Table_templateScalarFieldEnum[]
  }

  /**
   * table_template findFirstOrThrow
   */
  export type table_templateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * Filter, which table_template to fetch.
     */
    where?: table_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_templates to fetch.
     */
    orderBy?: table_templateOrderByWithRelationInput | table_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for table_templates.
     */
    cursor?: table_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of table_templates.
     */
    distinct?: Table_templateScalarFieldEnum | Table_templateScalarFieldEnum[]
  }

  /**
   * table_template findMany
   */
  export type table_templateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * Filter, which table_templates to fetch.
     */
    where?: table_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_templates to fetch.
     */
    orderBy?: table_templateOrderByWithRelationInput | table_templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing table_templates.
     */
    cursor?: table_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of table_templates.
     */
    distinct?: Table_templateScalarFieldEnum | Table_templateScalarFieldEnum[]
  }

  /**
   * table_template create
   */
  export type table_templateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * The data needed to create a table_template.
     */
    data?: XOR<table_templateCreateInput, table_templateUncheckedCreateInput>
  }

  /**
   * table_template createMany
   */
  export type table_templateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many table_templates.
     */
    data: table_templateCreateManyInput | table_templateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * table_template update
   */
  export type table_templateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * The data needed to update a table_template.
     */
    data: XOR<table_templateUpdateInput, table_templateUncheckedUpdateInput>
    /**
     * Choose, which table_template to update.
     */
    where: table_templateWhereUniqueInput
  }

  /**
   * table_template updateMany
   */
  export type table_templateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update table_templates.
     */
    data: XOR<table_templateUpdateManyMutationInput, table_templateUncheckedUpdateManyInput>
    /**
     * Filter which table_templates to update
     */
    where?: table_templateWhereInput
    /**
     * Limit how many table_templates to update.
     */
    limit?: number
  }

  /**
   * table_template upsert
   */
  export type table_templateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * The filter to search for the table_template to update in case it exists.
     */
    where: table_templateWhereUniqueInput
    /**
     * In case the table_template found by the `where` argument doesn't exist, create a new table_template with this data.
     */
    create: XOR<table_templateCreateInput, table_templateUncheckedCreateInput>
    /**
     * In case the table_template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<table_templateUpdateInput, table_templateUncheckedUpdateInput>
  }

  /**
   * table_template delete
   */
  export type table_templateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
    /**
     * Filter which table_template to delete.
     */
    where: table_templateWhereUniqueInput
  }

  /**
   * table_template deleteMany
   */
  export type table_templateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table_templates to delete
     */
    where?: table_templateWhereInput
    /**
     * Limit how many table_templates to delete.
     */
    limit?: number
  }

  /**
   * table_template without action
   */
  export type table_templateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_template
     */
    select?: table_templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_template
     */
    omit?: table_templateOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
    deletedBy: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
    deletedBy: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    isEmailVerified: boolean | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    codeChangePass: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    isEmailVerified: boolean | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    codeChangePass: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    avatar: number
    isEmailVerified: number
    age: number
    totpSecret: number
    googleId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    password: number
    codeChangePass: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
    deletedBy?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
    deletedBy?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    isEmailVerified?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    codeChangePass?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    isEmailVerified?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    codeChangePass?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    isEmailVerified?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    codeChangePass?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    fullName: string | null
    avatar: string | null
    isEmailVerified: boolean
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    password: string | null
    codeChangePass: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
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


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    isEmailVerified?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    codeChangePass?: boolean
    articles?: boolean | users$articlesArgs<ExtArgs>
    chatGroupMembers?: boolean | users$chatGroupMembersArgs<ExtArgs>
    chatGroups?: boolean | users$chatGroupsArgs<ExtArgs>
    chatMessages?: boolean | users$chatMessagesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    isEmailVerified?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    codeChangePass?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "avatar" | "isEmailVerified" | "age" | "totpSecret" | "googleId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt" | "password" | "codeChangePass", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | users$articlesArgs<ExtArgs>
    chatGroupMembers?: boolean | users$chatGroupMembersArgs<ExtArgs>
    chatGroups?: boolean | users$chatGroupsArgs<ExtArgs>
    chatMessages?: boolean | users$chatMessagesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      articles: Prisma.$articlesPayload<ExtArgs>[]
      chatGroupMembers: Prisma.$chatGroupMembersPayload<ExtArgs>[]
      chatGroups: Prisma.$chatGroupsPayload<ExtArgs>[]
      chatMessages: Prisma.$chatMessagesPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string | null
      avatar: string | null
      isEmailVerified: boolean
      age: number | null
      totpSecret: string | null
      googleId: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      password: string | null
      codeChangePass: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
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
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
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
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
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
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends users$articlesArgs<ExtArgs> = {}>(args?: Subset<T, users$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatGroupMembers<T extends users$chatGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, users$chatGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatGroups<T extends users$chatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, users$chatGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends users$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, users$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly fullName: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly isEmailVerified: FieldRef<"users", 'Boolean'>
    readonly age: FieldRef<"users", 'Int'>
    readonly totpSecret: FieldRef<"users", 'String'>
    readonly googleId: FieldRef<"users", 'String'>
    readonly deletedBy: FieldRef<"users", 'Int'>
    readonly isDeleted: FieldRef<"users", 'Boolean'>
    readonly deletedAt: FieldRef<"users", 'DateTime'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly codeChangePass: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.articles
   */
  export type users$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    cursor?: articlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * users.chatGroupMembers
   */
  export type users$chatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupMembers
     */
    select?: chatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupMembers
     */
    omit?: chatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupMembersInclude<ExtArgs> | null
    where?: chatGroupMembersWhereInput
    orderBy?: chatGroupMembersOrderByWithRelationInput | chatGroupMembersOrderByWithRelationInput[]
    cursor?: chatGroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * users.chatGroups
   */
  export type users$chatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroups
     */
    select?: chatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroups
     */
    omit?: chatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupsInclude<ExtArgs> | null
    where?: chatGroupsWhereInput
    orderBy?: chatGroupsOrderByWithRelationInput | chatGroupsOrderByWithRelationInput[]
    cursor?: chatGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * users.chatMessages
   */
  export type users$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessages
     */
    select?: chatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessages
     */
    omit?: chatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessagesInclude<ExtArgs> | null
    where?: chatMessagesWhereInput
    orderBy?: chatMessagesOrderByWithRelationInput | chatMessagesOrderByWithRelationInput[]
    cursor?: chatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    views: 'views',
    userId: 'userId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const ChatGroupMembersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatGroupId: 'chatGroupId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupMembersScalarFieldEnum = (typeof ChatGroupMembersScalarFieldEnum)[keyof typeof ChatGroupMembersScalarFieldEnum]


  export const ChatGroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupsScalarFieldEnum = (typeof ChatGroupsScalarFieldEnum)[keyof typeof ChatGroupsScalarFieldEnum]


  export const ChatMessagesScalarFieldEnum: {
    id: 'id',
    chatGroupId: 'chatGroupId',
    userIdSender: 'userIdSender',
    messageText: 'messageText',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessagesScalarFieldEnum = (typeof ChatMessagesScalarFieldEnum)[keyof typeof ChatMessagesScalarFieldEnum]


  export const FoodsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodsScalarFieldEnum = (typeof FoodsScalarFieldEnum)[keyof typeof FoodsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodId: 'foodId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Table_templateScalarFieldEnum: {
    id: 'id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Table_templateScalarFieldEnum = (typeof Table_templateScalarFieldEnum)[keyof typeof Table_templateScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    avatar: 'avatar',
    isEmailVerified: 'isEmailVerified',
    age: 'age',
    totpSecret: 'totpSecret',
    googleId: 'googleId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    password: 'password',
    codeChangePass: 'codeChangePass'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const articlesOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl'
  };

  export type articlesOrderByRelevanceFieldEnum = (typeof articlesOrderByRelevanceFieldEnum)[keyof typeof articlesOrderByRelevanceFieldEnum]


  export const chatGroupsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type chatGroupsOrderByRelevanceFieldEnum = (typeof chatGroupsOrderByRelevanceFieldEnum)[keyof typeof chatGroupsOrderByRelevanceFieldEnum]


  export const chatMessagesOrderByRelevanceFieldEnum: {
    messageText: 'messageText'
  };

  export type chatMessagesOrderByRelevanceFieldEnum = (typeof chatMessagesOrderByRelevanceFieldEnum)[keyof typeof chatMessagesOrderByRelevanceFieldEnum]


  export const foodsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type foodsOrderByRelevanceFieldEnum = (typeof foodsOrderByRelevanceFieldEnum)[keyof typeof foodsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    fullName: 'fullName',
    avatar: 'avatar',
    totpSecret: 'totpSecret',
    googleId: 'googleId',
    password: 'password',
    codeChangePass: 'codeChangePass'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type articlesWhereInput = {
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    id?: IntFilter<"articles"> | number
    title?: StringNullableFilter<"articles"> | string | null
    content?: StringNullableFilter<"articles"> | string | null
    imageUrl?: StringNullableFilter<"articles"> | string | null
    views?: IntFilter<"articles"> | number
    userId?: IntNullableFilter<"articles"> | number | null
    deletedBy?: IntFilter<"articles"> | number
    isDeleted?: BoolFilter<"articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"articles"> | Date | string | null
    createdAt?: DateTimeFilter<"articles"> | Date | string
    updatedAt?: DateTimeFilter<"articles"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type articlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: articlesOrderByRelevanceInput
  }

  export type articlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    title?: StringNullableFilter<"articles"> | string | null
    content?: StringNullableFilter<"articles"> | string | null
    imageUrl?: StringNullableFilter<"articles"> | string | null
    views?: IntFilter<"articles"> | number
    userId?: IntNullableFilter<"articles"> | number | null
    deletedBy?: IntFilter<"articles"> | number
    isDeleted?: BoolFilter<"articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"articles"> | Date | string | null
    createdAt?: DateTimeFilter<"articles"> | Date | string
    updatedAt?: DateTimeFilter<"articles"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type articlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: articlesCountOrderByAggregateInput
    _avg?: articlesAvgOrderByAggregateInput
    _max?: articlesMaxOrderByAggregateInput
    _min?: articlesMinOrderByAggregateInput
    _sum?: articlesSumOrderByAggregateInput
  }

  export type articlesScalarWhereWithAggregatesInput = {
    AND?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    OR?: articlesScalarWhereWithAggregatesInput[]
    NOT?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"articles"> | number
    title?: StringNullableWithAggregatesFilter<"articles"> | string | null
    content?: StringNullableWithAggregatesFilter<"articles"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"articles"> | string | null
    views?: IntWithAggregatesFilter<"articles"> | number
    userId?: IntNullableWithAggregatesFilter<"articles"> | number | null
    deletedBy?: IntWithAggregatesFilter<"articles"> | number
    isDeleted?: BoolWithAggregatesFilter<"articles"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"articles"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"articles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"articles"> | Date | string
  }

  export type chatGroupMembersWhereInput = {
    AND?: chatGroupMembersWhereInput | chatGroupMembersWhereInput[]
    OR?: chatGroupMembersWhereInput[]
    NOT?: chatGroupMembersWhereInput | chatGroupMembersWhereInput[]
    id?: IntFilter<"chatGroupMembers"> | number
    userId?: IntNullableFilter<"chatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"chatGroupMembers"> | number | null
    deletedBy?: IntFilter<"chatGroupMembers"> | number
    isDeleted?: BoolFilter<"chatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"chatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"chatGroupMembers"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, chatGroupsWhereInput> | null
  }

  export type chatGroupMembersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: usersOrderByWithRelationInput
    chatGroups?: chatGroupsOrderByWithRelationInput
  }

  export type chatGroupMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatGroupMembersWhereInput | chatGroupMembersWhereInput[]
    OR?: chatGroupMembersWhereInput[]
    NOT?: chatGroupMembersWhereInput | chatGroupMembersWhereInput[]
    userId?: IntNullableFilter<"chatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"chatGroupMembers"> | number | null
    deletedBy?: IntFilter<"chatGroupMembers"> | number
    isDeleted?: BoolFilter<"chatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"chatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"chatGroupMembers"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, chatGroupsWhereInput> | null
  }, "id">

  export type chatGroupMembersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatGroupMembersCountOrderByAggregateInput
    _avg?: chatGroupMembersAvgOrderByAggregateInput
    _max?: chatGroupMembersMaxOrderByAggregateInput
    _min?: chatGroupMembersMinOrderByAggregateInput
    _sum?: chatGroupMembersSumOrderByAggregateInput
  }

  export type chatGroupMembersScalarWhereWithAggregatesInput = {
    AND?: chatGroupMembersScalarWhereWithAggregatesInput | chatGroupMembersScalarWhereWithAggregatesInput[]
    OR?: chatGroupMembersScalarWhereWithAggregatesInput[]
    NOT?: chatGroupMembersScalarWhereWithAggregatesInput | chatGroupMembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatGroupMembers"> | number
    userId?: IntNullableWithAggregatesFilter<"chatGroupMembers"> | number | null
    chatGroupId?: IntNullableWithAggregatesFilter<"chatGroupMembers"> | number | null
    deletedBy?: IntWithAggregatesFilter<"chatGroupMembers"> | number
    isDeleted?: BoolWithAggregatesFilter<"chatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"chatGroupMembers"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatGroupMembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chatGroupMembers"> | Date | string
  }

  export type chatGroupsWhereInput = {
    AND?: chatGroupsWhereInput | chatGroupsWhereInput[]
    OR?: chatGroupsWhereInput[]
    NOT?: chatGroupsWhereInput | chatGroupsWhereInput[]
    id?: IntFilter<"chatGroups"> | number
    name?: StringNullableFilter<"chatGroups"> | string | null
    ownerId?: IntNullableFilter<"chatGroups"> | number | null
    deletedBy?: IntFilter<"chatGroups"> | number
    isDeleted?: BoolFilter<"chatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"chatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"chatGroups"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatMessages?: ChatMessagesListRelationFilter
  }

  export type chatGroupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatGroupMembers?: chatGroupMembersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    chatMessages?: chatMessagesOrderByRelationAggregateInput
    _relevance?: chatGroupsOrderByRelevanceInput
  }

  export type chatGroupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatGroupsWhereInput | chatGroupsWhereInput[]
    OR?: chatGroupsWhereInput[]
    NOT?: chatGroupsWhereInput | chatGroupsWhereInput[]
    name?: StringNullableFilter<"chatGroups"> | string | null
    ownerId?: IntNullableFilter<"chatGroups"> | number | null
    deletedBy?: IntFilter<"chatGroups"> | number
    isDeleted?: BoolFilter<"chatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"chatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"chatGroups"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatMessages?: ChatMessagesListRelationFilter
  }, "id">

  export type chatGroupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatGroupsCountOrderByAggregateInput
    _avg?: chatGroupsAvgOrderByAggregateInput
    _max?: chatGroupsMaxOrderByAggregateInput
    _min?: chatGroupsMinOrderByAggregateInput
    _sum?: chatGroupsSumOrderByAggregateInput
  }

  export type chatGroupsScalarWhereWithAggregatesInput = {
    AND?: chatGroupsScalarWhereWithAggregatesInput | chatGroupsScalarWhereWithAggregatesInput[]
    OR?: chatGroupsScalarWhereWithAggregatesInput[]
    NOT?: chatGroupsScalarWhereWithAggregatesInput | chatGroupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatGroups"> | number
    name?: StringNullableWithAggregatesFilter<"chatGroups"> | string | null
    ownerId?: IntNullableWithAggregatesFilter<"chatGroups"> | number | null
    deletedBy?: IntWithAggregatesFilter<"chatGroups"> | number
    isDeleted?: BoolWithAggregatesFilter<"chatGroups"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"chatGroups"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatGroups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chatGroups"> | Date | string
  }

  export type chatMessagesWhereInput = {
    AND?: chatMessagesWhereInput | chatMessagesWhereInput[]
    OR?: chatMessagesWhereInput[]
    NOT?: chatMessagesWhereInput | chatMessagesWhereInput[]
    id?: IntFilter<"chatMessages"> | number
    chatGroupId?: IntNullableFilter<"chatMessages"> | number | null
    userIdSender?: IntNullableFilter<"chatMessages"> | number | null
    messageText?: StringNullableFilter<"chatMessages"> | string | null
    deletedBy?: IntFilter<"chatMessages"> | number
    isDeleted?: BoolFilter<"chatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"chatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"chatMessages"> | Date | string
    chatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, chatGroupsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type chatMessagesOrderByWithRelationInput = {
    id?: SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    userIdSender?: SortOrderInput | SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatGroups?: chatGroupsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: chatMessagesOrderByRelevanceInput
  }

  export type chatMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatMessagesWhereInput | chatMessagesWhereInput[]
    OR?: chatMessagesWhereInput[]
    NOT?: chatMessagesWhereInput | chatMessagesWhereInput[]
    chatGroupId?: IntNullableFilter<"chatMessages"> | number | null
    userIdSender?: IntNullableFilter<"chatMessages"> | number | null
    messageText?: StringNullableFilter<"chatMessages"> | string | null
    deletedBy?: IntFilter<"chatMessages"> | number
    isDeleted?: BoolFilter<"chatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"chatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"chatMessages"> | Date | string
    chatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, chatGroupsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type chatMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    userIdSender?: SortOrderInput | SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatMessagesCountOrderByAggregateInput
    _avg?: chatMessagesAvgOrderByAggregateInput
    _max?: chatMessagesMaxOrderByAggregateInput
    _min?: chatMessagesMinOrderByAggregateInput
    _sum?: chatMessagesSumOrderByAggregateInput
  }

  export type chatMessagesScalarWhereWithAggregatesInput = {
    AND?: chatMessagesScalarWhereWithAggregatesInput | chatMessagesScalarWhereWithAggregatesInput[]
    OR?: chatMessagesScalarWhereWithAggregatesInput[]
    NOT?: chatMessagesScalarWhereWithAggregatesInput | chatMessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatMessages"> | number
    chatGroupId?: IntNullableWithAggregatesFilter<"chatMessages"> | number | null
    userIdSender?: IntNullableWithAggregatesFilter<"chatMessages"> | number | null
    messageText?: StringNullableWithAggregatesFilter<"chatMessages"> | string | null
    deletedBy?: IntWithAggregatesFilter<"chatMessages"> | number
    isDeleted?: BoolWithAggregatesFilter<"chatMessages"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"chatMessages"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatMessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chatMessages"> | Date | string
  }

  export type foodsWhereInput = {
    AND?: foodsWhereInput | foodsWhereInput[]
    OR?: foodsWhereInput[]
    NOT?: foodsWhereInput | foodsWhereInput[]
    id?: IntFilter<"foods"> | number
    name?: StringNullableFilter<"foods"> | string | null
    description?: StringNullableFilter<"foods"> | string | null
    deletedBy?: IntFilter<"foods"> | number
    isDeleted?: BoolFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"foods"> | Date | string | null
    createdAt?: DateTimeFilter<"foods"> | Date | string
    updatedAt?: DateTimeFilter<"foods"> | Date | string
    orders?: OrdersListRelationFilter
  }

  export type foodsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: foodsOrderByRelevanceInput
  }

  export type foodsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: foodsWhereInput | foodsWhereInput[]
    OR?: foodsWhereInput[]
    NOT?: foodsWhereInput | foodsWhereInput[]
    name?: StringNullableFilter<"foods"> | string | null
    description?: StringNullableFilter<"foods"> | string | null
    deletedBy?: IntFilter<"foods"> | number
    isDeleted?: BoolFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"foods"> | Date | string | null
    createdAt?: DateTimeFilter<"foods"> | Date | string
    updatedAt?: DateTimeFilter<"foods"> | Date | string
    orders?: OrdersListRelationFilter
  }, "id">

  export type foodsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: foodsCountOrderByAggregateInput
    _avg?: foodsAvgOrderByAggregateInput
    _max?: foodsMaxOrderByAggregateInput
    _min?: foodsMinOrderByAggregateInput
    _sum?: foodsSumOrderByAggregateInput
  }

  export type foodsScalarWhereWithAggregatesInput = {
    AND?: foodsScalarWhereWithAggregatesInput | foodsScalarWhereWithAggregatesInput[]
    OR?: foodsScalarWhereWithAggregatesInput[]
    NOT?: foodsScalarWhereWithAggregatesInput | foodsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"foods"> | number
    name?: StringNullableWithAggregatesFilter<"foods"> | string | null
    description?: StringNullableWithAggregatesFilter<"foods"> | string | null
    deletedBy?: IntWithAggregatesFilter<"foods"> | number
    isDeleted?: BoolWithAggregatesFilter<"foods"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"foods"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"foods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"foods"> | Date | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    userId?: IntNullableFilter<"orders"> | number | null
    foodId?: IntNullableFilter<"orders"> | number | null
    deletedBy?: IntFilter<"orders"> | number
    isDeleted?: BoolFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    foods?: XOR<FoodsNullableScalarRelationFilter, foodsWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: usersOrderByWithRelationInput
    foods?: foodsOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    userId?: IntNullableFilter<"orders"> | number | null
    foodId?: IntNullableFilter<"orders"> | number | null
    deletedBy?: IntFilter<"orders"> | number
    isDeleted?: BoolFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    foods?: XOR<FoodsNullableScalarRelationFilter, foodsWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    userId?: IntNullableWithAggregatesFilter<"orders"> | number | null
    foodId?: IntNullableWithAggregatesFilter<"orders"> | number | null
    deletedBy?: IntWithAggregatesFilter<"orders"> | number
    isDeleted?: BoolWithAggregatesFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type table_templateWhereInput = {
    AND?: table_templateWhereInput | table_templateWhereInput[]
    OR?: table_templateWhereInput[]
    NOT?: table_templateWhereInput | table_templateWhereInput[]
    id?: IntFilter<"table_template"> | number
    deletedBy?: IntFilter<"table_template"> | number
    isDeleted?: BoolFilter<"table_template"> | boolean
    deletedAt?: DateTimeNullableFilter<"table_template"> | Date | string | null
    createdAt?: DateTimeFilter<"table_template"> | Date | string
    updatedAt?: DateTimeFilter<"table_template"> | Date | string
  }

  export type table_templateOrderByWithRelationInput = {
    id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type table_templateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: table_templateWhereInput | table_templateWhereInput[]
    OR?: table_templateWhereInput[]
    NOT?: table_templateWhereInput | table_templateWhereInput[]
    deletedBy?: IntFilter<"table_template"> | number
    isDeleted?: BoolFilter<"table_template"> | boolean
    deletedAt?: DateTimeNullableFilter<"table_template"> | Date | string | null
    createdAt?: DateTimeFilter<"table_template"> | Date | string
    updatedAt?: DateTimeFilter<"table_template"> | Date | string
  }, "id">

  export type table_templateOrderByWithAggregationInput = {
    id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: table_templateCountOrderByAggregateInput
    _avg?: table_templateAvgOrderByAggregateInput
    _max?: table_templateMaxOrderByAggregateInput
    _min?: table_templateMinOrderByAggregateInput
    _sum?: table_templateSumOrderByAggregateInput
  }

  export type table_templateScalarWhereWithAggregatesInput = {
    AND?: table_templateScalarWhereWithAggregatesInput | table_templateScalarWhereWithAggregatesInput[]
    OR?: table_templateScalarWhereWithAggregatesInput[]
    NOT?: table_templateScalarWhereWithAggregatesInput | table_templateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"table_template"> | number
    deletedBy?: IntWithAggregatesFilter<"table_template"> | number
    isDeleted?: BoolWithAggregatesFilter<"table_template"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"table_template"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"table_template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"table_template"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    fullName?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    isEmailVerified?: BoolFilter<"users"> | boolean
    age?: IntNullableFilter<"users"> | number | null
    totpSecret?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    deletedBy?: IntFilter<"users"> | number
    isDeleted?: BoolFilter<"users"> | boolean
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    password?: StringNullableFilter<"users"> | string | null
    codeChangePass?: StringNullableFilter<"users"> | string | null
    articles?: ArticlesListRelationFilter
    chatGroupMembers?: ChatGroupMembersListRelationFilter
    chatGroups?: ChatGroupsListRelationFilter
    chatMessages?: ChatMessagesListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrderInput | SortOrder
    codeChangePass?: SortOrderInput | SortOrder
    articles?: articlesOrderByRelationAggregateInput
    chatGroupMembers?: chatGroupMembersOrderByRelationAggregateInput
    chatGroups?: chatGroupsOrderByRelationAggregateInput
    chatMessages?: chatMessagesOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    fullName?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    isEmailVerified?: BoolFilter<"users"> | boolean
    age?: IntNullableFilter<"users"> | number | null
    totpSecret?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    deletedBy?: IntFilter<"users"> | number
    isDeleted?: BoolFilter<"users"> | boolean
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    password?: StringNullableFilter<"users"> | string | null
    codeChangePass?: StringNullableFilter<"users"> | string | null
    articles?: ArticlesListRelationFilter
    chatGroupMembers?: ChatGroupMembersListRelationFilter
    chatGroups?: ChatGroupsListRelationFilter
    chatMessages?: ChatMessagesListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrderInput | SortOrder
    codeChangePass?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    fullName?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"users"> | boolean
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    totpSecret?: StringNullableWithAggregatesFilter<"users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"users"> | string | null
    deletedBy?: IntWithAggregatesFilter<"users"> | number
    isDeleted?: BoolWithAggregatesFilter<"users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    codeChangePass?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type articlesCreateInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutArticlesInput
  }

  export type articlesUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articlesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesCreateManyInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articlesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupMembersCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: usersCreateNestedOneWithoutChatGroupMembersInput
    chatGroups?: chatGroupsCreateNestedOneWithoutChatGroupMembersInput
  }

  export type chatGroupMembersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupMembersUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateOneWithoutChatGroupMembersNestedInput
    chatGroups?: chatGroupsUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type chatGroupMembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupMembersCreateManyInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupMembersUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupMembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupsCreateInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: chatGroupMembersCreateNestedManyWithoutChatGroupsInput
    users?: usersCreateNestedOneWithoutChatGroupsInput
    chatMessages?: chatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsUncheckedCreateInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: chatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    users?: usersUpdateOneWithoutChatGroupsNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type chatGroupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type chatGroupsCreateManyInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesCreateInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatGroups?: chatGroupsCreateNestedOneWithoutChatMessagesInput
    users?: usersCreateNestedOneWithoutChatMessagesInput
  }

  export type chatMessagesUncheckedCreateInput = {
    id?: number
    chatGroupId?: number | null
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatMessagesUpdateInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroups?: chatGroupsUpdateOneWithoutChatMessagesNestedInput
    users?: usersUpdateOneWithoutChatMessagesNestedInput
  }

  export type chatMessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesCreateManyInput = {
    id?: number
    chatGroupId?: number | null
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatMessagesUpdateManyMutationInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type foodsCreateInput = {
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersCreateNestedManyWithoutFoodsInput
  }

  export type foodsUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type foodsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutFoodsNestedInput
  }

  export type foodsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type foodsCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type foodsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type foodsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutOrdersInput
    foods?: foodsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutOrdersNestedInput
    foods?: foodsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type table_templateCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type table_templateUncheckedCreateInput = {
    id?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type table_templateUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type table_templateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type table_templateCreateManyInput = {
    id?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type table_templateUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type table_templateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsUncheckedCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type articlesOrderByRelevanceInput = {
    fields: articlesOrderByRelevanceFieldEnum | articlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type articlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type articlesAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type articlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type articlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type articlesSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ChatGroupsNullableScalarRelationFilter = {
    is?: chatGroupsWhereInput | null
    isNot?: chatGroupsWhereInput | null
  }

  export type chatGroupMembersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatGroupMembersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatGroupMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatGroupMembersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatGroupMembersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupMembersListRelationFilter = {
    every?: chatGroupMembersWhereInput
    some?: chatGroupMembersWhereInput
    none?: chatGroupMembersWhereInput
  }

  export type ChatMessagesListRelationFilter = {
    every?: chatMessagesWhereInput
    some?: chatMessagesWhereInput
    none?: chatMessagesWhereInput
  }

  export type chatGroupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatGroupsOrderByRelevanceInput = {
    fields: chatGroupsOrderByRelevanceFieldEnum | chatGroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chatGroupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatGroupsAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatGroupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatGroupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatGroupsSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatMessagesOrderByRelevanceInput = {
    fields: chatMessagesOrderByRelevanceFieldEnum | chatMessagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chatMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatMessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatMessagesSumOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type foodsOrderByRelevanceInput = {
    fields: foodsOrderByRelevanceFieldEnum | foodsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type foodsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type foodsAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type foodsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type foodsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type foodsSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FoodsNullableScalarRelationFilter = {
    is?: foodsWhereInput | null
    isNot?: foodsWhereInput | null
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
  }

  export type table_templateCountOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type table_templateAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type table_templateMaxOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type table_templateMinOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type table_templateSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ArticlesListRelationFilter = {
    every?: articlesWhereInput
    some?: articlesWhereInput
    none?: articlesWhereInput
  }

  export type ChatGroupsListRelationFilter = {
    every?: chatGroupsWhereInput
    some?: chatGroupsWhereInput
    none?: chatGroupsWhereInput
  }

  export type articlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatGroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    isEmailVerified?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    codeChangePass?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    deletedBy?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    isEmailVerified?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    codeChangePass?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    isEmailVerified?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    codeChangePass?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    deletedBy?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutArticlesInput = {
    create?: XOR<usersCreateWithoutArticlesInput, usersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: usersCreateOrConnectWithoutArticlesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<usersCreateWithoutArticlesInput, usersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: usersCreateOrConnectWithoutArticlesInput
    upsert?: usersUpsertWithoutArticlesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutArticlesInput, usersUpdateWithoutArticlesInput>, usersUncheckedUpdateWithoutArticlesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutChatGroupMembersInput = {
    create?: XOR<usersCreateWithoutChatGroupMembersInput, usersUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatGroupMembersInput
    connect?: usersWhereUniqueInput
  }

  export type chatGroupsCreateNestedOneWithoutChatGroupMembersInput = {
    create?: XOR<chatGroupsCreateWithoutChatGroupMembersInput, chatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: chatGroupsCreateOrConnectWithoutChatGroupMembersInput
    connect?: chatGroupsWhereUniqueInput
  }

  export type usersUpdateOneWithoutChatGroupMembersNestedInput = {
    create?: XOR<usersCreateWithoutChatGroupMembersInput, usersUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatGroupMembersInput
    upsert?: usersUpsertWithoutChatGroupMembersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatGroupMembersInput, usersUpdateWithoutChatGroupMembersInput>, usersUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type chatGroupsUpdateOneWithoutChatGroupMembersNestedInput = {
    create?: XOR<chatGroupsCreateWithoutChatGroupMembersInput, chatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: chatGroupsCreateOrConnectWithoutChatGroupMembersInput
    upsert?: chatGroupsUpsertWithoutChatGroupMembersInput
    disconnect?: chatGroupsWhereInput | boolean
    delete?: chatGroupsWhereInput | boolean
    connect?: chatGroupsWhereUniqueInput
    update?: XOR<XOR<chatGroupsUpdateToOneWithWhereWithoutChatGroupMembersInput, chatGroupsUpdateWithoutChatGroupMembersInput>, chatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type chatGroupMembersCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<chatGroupMembersCreateWithoutChatGroupsInput, chatGroupMembersUncheckedCreateWithoutChatGroupsInput> | chatGroupMembersCreateWithoutChatGroupsInput[] | chatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutChatGroupsInput | chatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    createMany?: chatGroupMembersCreateManyChatGroupsInputEnvelope
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutChatGroupsInput = {
    create?: XOR<usersCreateWithoutChatGroupsInput, usersUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatGroupsInput
    connect?: usersWhereUniqueInput
  }

  export type chatMessagesCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<chatMessagesCreateWithoutChatGroupsInput, chatMessagesUncheckedCreateWithoutChatGroupsInput> | chatMessagesCreateWithoutChatGroupsInput[] | chatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutChatGroupsInput | chatMessagesCreateOrConnectWithoutChatGroupsInput[]
    createMany?: chatMessagesCreateManyChatGroupsInputEnvelope
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
  }

  export type chatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<chatGroupMembersCreateWithoutChatGroupsInput, chatGroupMembersUncheckedCreateWithoutChatGroupsInput> | chatGroupMembersCreateWithoutChatGroupsInput[] | chatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutChatGroupsInput | chatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    createMany?: chatGroupMembersCreateManyChatGroupsInputEnvelope
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
  }

  export type chatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<chatMessagesCreateWithoutChatGroupsInput, chatMessagesUncheckedCreateWithoutChatGroupsInput> | chatMessagesCreateWithoutChatGroupsInput[] | chatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutChatGroupsInput | chatMessagesCreateOrConnectWithoutChatGroupsInput[]
    createMany?: chatMessagesCreateManyChatGroupsInputEnvelope
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
  }

  export type chatGroupMembersUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<chatGroupMembersCreateWithoutChatGroupsInput, chatGroupMembersUncheckedCreateWithoutChatGroupsInput> | chatGroupMembersCreateWithoutChatGroupsInput[] | chatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutChatGroupsInput | chatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    upsert?: chatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput | chatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: chatGroupMembersCreateManyChatGroupsInputEnvelope
    set?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    disconnect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    delete?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    update?: chatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput | chatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: chatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput | chatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: chatGroupMembersScalarWhereInput | chatGroupMembersScalarWhereInput[]
  }

  export type usersUpdateOneWithoutChatGroupsNestedInput = {
    create?: XOR<usersCreateWithoutChatGroupsInput, usersUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatGroupsInput
    upsert?: usersUpsertWithoutChatGroupsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatGroupsInput, usersUpdateWithoutChatGroupsInput>, usersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type chatMessagesUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<chatMessagesCreateWithoutChatGroupsInput, chatMessagesUncheckedCreateWithoutChatGroupsInput> | chatMessagesCreateWithoutChatGroupsInput[] | chatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutChatGroupsInput | chatMessagesCreateOrConnectWithoutChatGroupsInput[]
    upsert?: chatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput | chatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: chatMessagesCreateManyChatGroupsInputEnvelope
    set?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    disconnect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    delete?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    update?: chatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput | chatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: chatMessagesUpdateManyWithWhereWithoutChatGroupsInput | chatMessagesUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: chatMessagesScalarWhereInput | chatMessagesScalarWhereInput[]
  }

  export type chatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<chatGroupMembersCreateWithoutChatGroupsInput, chatGroupMembersUncheckedCreateWithoutChatGroupsInput> | chatGroupMembersCreateWithoutChatGroupsInput[] | chatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutChatGroupsInput | chatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    upsert?: chatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput | chatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: chatGroupMembersCreateManyChatGroupsInputEnvelope
    set?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    disconnect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    delete?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    update?: chatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput | chatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: chatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput | chatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: chatGroupMembersScalarWhereInput | chatGroupMembersScalarWhereInput[]
  }

  export type chatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<chatMessagesCreateWithoutChatGroupsInput, chatMessagesUncheckedCreateWithoutChatGroupsInput> | chatMessagesCreateWithoutChatGroupsInput[] | chatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutChatGroupsInput | chatMessagesCreateOrConnectWithoutChatGroupsInput[]
    upsert?: chatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput | chatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: chatMessagesCreateManyChatGroupsInputEnvelope
    set?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    disconnect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    delete?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    update?: chatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput | chatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: chatMessagesUpdateManyWithWhereWithoutChatGroupsInput | chatMessagesUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: chatMessagesScalarWhereInput | chatMessagesScalarWhereInput[]
  }

  export type chatGroupsCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<chatGroupsCreateWithoutChatMessagesInput, chatGroupsUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: chatGroupsCreateOrConnectWithoutChatMessagesInput
    connect?: chatGroupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<usersCreateWithoutChatMessagesInput, usersUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type chatGroupsUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<chatGroupsCreateWithoutChatMessagesInput, chatGroupsUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: chatGroupsCreateOrConnectWithoutChatMessagesInput
    upsert?: chatGroupsUpsertWithoutChatMessagesInput
    disconnect?: chatGroupsWhereInput | boolean
    delete?: chatGroupsWhereInput | boolean
    connect?: chatGroupsWhereUniqueInput
    update?: XOR<XOR<chatGroupsUpdateToOneWithWhereWithoutChatMessagesInput, chatGroupsUpdateWithoutChatMessagesInput>, chatGroupsUncheckedUpdateWithoutChatMessagesInput>
  }

  export type usersUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<usersCreateWithoutChatMessagesInput, usersUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatMessagesInput
    upsert?: usersUpsertWithoutChatMessagesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatMessagesInput, usersUpdateWithoutChatMessagesInput>, usersUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ordersCreateNestedManyWithoutFoodsInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutFoodsInput | ordersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutFoodsInput | ordersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutFoodsInput | ordersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput> | ordersCreateWithoutFoodsInput[] | ordersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodsInput | ordersCreateOrConnectWithoutFoodsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutFoodsInput | ordersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: ordersCreateManyFoodsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutFoodsInput | ordersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutFoodsInput | ordersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type foodsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: foodsCreateOrConnectWithoutOrdersInput
    connect?: foodsWhereUniqueInput
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type foodsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: foodsCreateOrConnectWithoutOrdersInput
    upsert?: foodsUpsertWithoutOrdersInput
    disconnect?: foodsWhereInput | boolean
    delete?: foodsWhereInput | boolean
    connect?: foodsWhereUniqueInput
    update?: XOR<XOR<foodsUpdateToOneWithWhereWithoutOrdersInput, foodsUpdateWithoutOrdersInput>, foodsUncheckedUpdateWithoutOrdersInput>
  }

  export type articlesCreateNestedManyWithoutUsersInput = {
    create?: XOR<articlesCreateWithoutUsersInput, articlesUncheckedCreateWithoutUsersInput> | articlesCreateWithoutUsersInput[] | articlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutUsersInput | articlesCreateOrConnectWithoutUsersInput[]
    createMany?: articlesCreateManyUsersInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type chatGroupMembersCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatGroupMembersCreateWithoutUsersInput, chatGroupMembersUncheckedCreateWithoutUsersInput> | chatGroupMembersCreateWithoutUsersInput[] | chatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutUsersInput | chatGroupMembersCreateOrConnectWithoutUsersInput[]
    createMany?: chatGroupMembersCreateManyUsersInputEnvelope
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
  }

  export type chatGroupsCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatGroupsCreateWithoutUsersInput, chatGroupsUncheckedCreateWithoutUsersInput> | chatGroupsCreateWithoutUsersInput[] | chatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupsCreateOrConnectWithoutUsersInput | chatGroupsCreateOrConnectWithoutUsersInput[]
    createMany?: chatGroupsCreateManyUsersInputEnvelope
    connect?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
  }

  export type chatMessagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatMessagesCreateWithoutUsersInput, chatMessagesUncheckedCreateWithoutUsersInput> | chatMessagesCreateWithoutUsersInput[] | chatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutUsersInput | chatMessagesCreateOrConnectWithoutUsersInput[]
    createMany?: chatMessagesCreateManyUsersInputEnvelope
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type articlesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<articlesCreateWithoutUsersInput, articlesUncheckedCreateWithoutUsersInput> | articlesCreateWithoutUsersInput[] | articlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutUsersInput | articlesCreateOrConnectWithoutUsersInput[]
    createMany?: articlesCreateManyUsersInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type chatGroupMembersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatGroupMembersCreateWithoutUsersInput, chatGroupMembersUncheckedCreateWithoutUsersInput> | chatGroupMembersCreateWithoutUsersInput[] | chatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutUsersInput | chatGroupMembersCreateOrConnectWithoutUsersInput[]
    createMany?: chatGroupMembersCreateManyUsersInputEnvelope
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
  }

  export type chatGroupsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatGroupsCreateWithoutUsersInput, chatGroupsUncheckedCreateWithoutUsersInput> | chatGroupsCreateWithoutUsersInput[] | chatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupsCreateOrConnectWithoutUsersInput | chatGroupsCreateOrConnectWithoutUsersInput[]
    createMany?: chatGroupsCreateManyUsersInputEnvelope
    connect?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
  }

  export type chatMessagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatMessagesCreateWithoutUsersInput, chatMessagesUncheckedCreateWithoutUsersInput> | chatMessagesCreateWithoutUsersInput[] | chatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutUsersInput | chatMessagesCreateOrConnectWithoutUsersInput[]
    createMany?: chatMessagesCreateManyUsersInputEnvelope
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type articlesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<articlesCreateWithoutUsersInput, articlesUncheckedCreateWithoutUsersInput> | articlesCreateWithoutUsersInput[] | articlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutUsersInput | articlesCreateOrConnectWithoutUsersInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutUsersInput | articlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: articlesCreateManyUsersInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutUsersInput | articlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutUsersInput | articlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type chatGroupMembersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatGroupMembersCreateWithoutUsersInput, chatGroupMembersUncheckedCreateWithoutUsersInput> | chatGroupMembersCreateWithoutUsersInput[] | chatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutUsersInput | chatGroupMembersCreateOrConnectWithoutUsersInput[]
    upsert?: chatGroupMembersUpsertWithWhereUniqueWithoutUsersInput | chatGroupMembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatGroupMembersCreateManyUsersInputEnvelope
    set?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    disconnect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    delete?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    update?: chatGroupMembersUpdateWithWhereUniqueWithoutUsersInput | chatGroupMembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatGroupMembersUpdateManyWithWhereWithoutUsersInput | chatGroupMembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatGroupMembersScalarWhereInput | chatGroupMembersScalarWhereInput[]
  }

  export type chatGroupsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatGroupsCreateWithoutUsersInput, chatGroupsUncheckedCreateWithoutUsersInput> | chatGroupsCreateWithoutUsersInput[] | chatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupsCreateOrConnectWithoutUsersInput | chatGroupsCreateOrConnectWithoutUsersInput[]
    upsert?: chatGroupsUpsertWithWhereUniqueWithoutUsersInput | chatGroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatGroupsCreateManyUsersInputEnvelope
    set?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    disconnect?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    delete?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    connect?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    update?: chatGroupsUpdateWithWhereUniqueWithoutUsersInput | chatGroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatGroupsUpdateManyWithWhereWithoutUsersInput | chatGroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatGroupsScalarWhereInput | chatGroupsScalarWhereInput[]
  }

  export type chatMessagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatMessagesCreateWithoutUsersInput, chatMessagesUncheckedCreateWithoutUsersInput> | chatMessagesCreateWithoutUsersInput[] | chatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutUsersInput | chatMessagesCreateOrConnectWithoutUsersInput[]
    upsert?: chatMessagesUpsertWithWhereUniqueWithoutUsersInput | chatMessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatMessagesCreateManyUsersInputEnvelope
    set?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    disconnect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    delete?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    update?: chatMessagesUpdateWithWhereUniqueWithoutUsersInput | chatMessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatMessagesUpdateManyWithWhereWithoutUsersInput | chatMessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatMessagesScalarWhereInput | chatMessagesScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type articlesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<articlesCreateWithoutUsersInput, articlesUncheckedCreateWithoutUsersInput> | articlesCreateWithoutUsersInput[] | articlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutUsersInput | articlesCreateOrConnectWithoutUsersInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutUsersInput | articlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: articlesCreateManyUsersInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutUsersInput | articlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutUsersInput | articlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type chatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatGroupMembersCreateWithoutUsersInput, chatGroupMembersUncheckedCreateWithoutUsersInput> | chatGroupMembersCreateWithoutUsersInput[] | chatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupMembersCreateOrConnectWithoutUsersInput | chatGroupMembersCreateOrConnectWithoutUsersInput[]
    upsert?: chatGroupMembersUpsertWithWhereUniqueWithoutUsersInput | chatGroupMembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatGroupMembersCreateManyUsersInputEnvelope
    set?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    disconnect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    delete?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    connect?: chatGroupMembersWhereUniqueInput | chatGroupMembersWhereUniqueInput[]
    update?: chatGroupMembersUpdateWithWhereUniqueWithoutUsersInput | chatGroupMembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatGroupMembersUpdateManyWithWhereWithoutUsersInput | chatGroupMembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatGroupMembersScalarWhereInput | chatGroupMembersScalarWhereInput[]
  }

  export type chatGroupsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatGroupsCreateWithoutUsersInput, chatGroupsUncheckedCreateWithoutUsersInput> | chatGroupsCreateWithoutUsersInput[] | chatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatGroupsCreateOrConnectWithoutUsersInput | chatGroupsCreateOrConnectWithoutUsersInput[]
    upsert?: chatGroupsUpsertWithWhereUniqueWithoutUsersInput | chatGroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatGroupsCreateManyUsersInputEnvelope
    set?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    disconnect?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    delete?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    connect?: chatGroupsWhereUniqueInput | chatGroupsWhereUniqueInput[]
    update?: chatGroupsUpdateWithWhereUniqueWithoutUsersInput | chatGroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatGroupsUpdateManyWithWhereWithoutUsersInput | chatGroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatGroupsScalarWhereInput | chatGroupsScalarWhereInput[]
  }

  export type chatMessagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatMessagesCreateWithoutUsersInput, chatMessagesUncheckedCreateWithoutUsersInput> | chatMessagesCreateWithoutUsersInput[] | chatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatMessagesCreateOrConnectWithoutUsersInput | chatMessagesCreateOrConnectWithoutUsersInput[]
    upsert?: chatMessagesUpsertWithWhereUniqueWithoutUsersInput | chatMessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatMessagesCreateManyUsersInputEnvelope
    set?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    disconnect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    delete?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    connect?: chatMessagesWhereUniqueInput | chatMessagesWhereUniqueInput[]
    update?: chatMessagesUpdateWithWhereUniqueWithoutUsersInput | chatMessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatMessagesUpdateManyWithWhereWithoutUsersInput | chatMessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatMessagesScalarWhereInput | chatMessagesScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usersCreateWithoutArticlesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    chatGroupMembers?: chatGroupMembersCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutArticlesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    chatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsUncheckedCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutArticlesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutArticlesInput, usersUncheckedCreateWithoutArticlesInput>
  }

  export type usersUpsertWithoutArticlesInput = {
    update: XOR<usersUpdateWithoutArticlesInput, usersUncheckedUpdateWithoutArticlesInput>
    create: XOR<usersCreateWithoutArticlesInput, usersUncheckedCreateWithoutArticlesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutArticlesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutArticlesInput, usersUncheckedUpdateWithoutArticlesInput>
  }

  export type usersUpdateWithoutArticlesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    chatGroupMembers?: chatGroupMembersUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    chatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutChatGroupMembersInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatGroupMembersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsUncheckedCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatGroupMembersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatGroupMembersInput, usersUncheckedCreateWithoutChatGroupMembersInput>
  }

  export type chatGroupsCreateWithoutChatGroupMembersInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutChatGroupsInput
    chatMessages?: chatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsUncheckedCreateWithoutChatGroupMembersInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsCreateOrConnectWithoutChatGroupMembersInput = {
    where: chatGroupsWhereUniqueInput
    create: XOR<chatGroupsCreateWithoutChatGroupMembersInput, chatGroupsUncheckedCreateWithoutChatGroupMembersInput>
  }

  export type usersUpsertWithoutChatGroupMembersInput = {
    update: XOR<usersUpdateWithoutChatGroupMembersInput, usersUncheckedUpdateWithoutChatGroupMembersInput>
    create: XOR<usersCreateWithoutChatGroupMembersInput, usersUncheckedCreateWithoutChatGroupMembersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatGroupMembersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatGroupMembersInput, usersUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type usersUpdateWithoutChatGroupMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatGroupsUpsertWithoutChatGroupMembersInput = {
    update: XOR<chatGroupsUpdateWithoutChatGroupMembersInput, chatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
    create: XOR<chatGroupsCreateWithoutChatGroupMembersInput, chatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    where?: chatGroupsWhereInput
  }

  export type chatGroupsUpdateToOneWithWhereWithoutChatGroupMembersInput = {
    where?: chatGroupsWhereInput
    data: XOR<chatGroupsUpdateWithoutChatGroupMembersInput, chatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type chatGroupsUpdateWithoutChatGroupMembersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutChatGroupsNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type chatGroupsUncheckedUpdateWithoutChatGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type chatGroupMembersCreateWithoutChatGroupsInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: usersCreateNestedOneWithoutChatGroupMembersInput
  }

  export type chatGroupMembersUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupMembersCreateOrConnectWithoutChatGroupsInput = {
    where: chatGroupMembersWhereUniqueInput
    create: XOR<chatGroupMembersCreateWithoutChatGroupsInput, chatGroupMembersUncheckedCreateWithoutChatGroupsInput>
  }

  export type chatGroupMembersCreateManyChatGroupsInputEnvelope = {
    data: chatGroupMembersCreateManyChatGroupsInput | chatGroupMembersCreateManyChatGroupsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutChatGroupsInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatGroupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatGroupsInput, usersUncheckedCreateWithoutChatGroupsInput>
  }

  export type chatMessagesCreateWithoutChatGroupsInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutChatMessagesInput
  }

  export type chatMessagesUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatMessagesCreateOrConnectWithoutChatGroupsInput = {
    where: chatMessagesWhereUniqueInput
    create: XOR<chatMessagesCreateWithoutChatGroupsInput, chatMessagesUncheckedCreateWithoutChatGroupsInput>
  }

  export type chatMessagesCreateManyChatGroupsInputEnvelope = {
    data: chatMessagesCreateManyChatGroupsInput | chatMessagesCreateManyChatGroupsInput[]
    skipDuplicates?: boolean
  }

  export type chatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput = {
    where: chatGroupMembersWhereUniqueInput
    update: XOR<chatGroupMembersUpdateWithoutChatGroupsInput, chatGroupMembersUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<chatGroupMembersCreateWithoutChatGroupsInput, chatGroupMembersUncheckedCreateWithoutChatGroupsInput>
  }

  export type chatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput = {
    where: chatGroupMembersWhereUniqueInput
    data: XOR<chatGroupMembersUpdateWithoutChatGroupsInput, chatGroupMembersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type chatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput = {
    where: chatGroupMembersScalarWhereInput
    data: XOR<chatGroupMembersUpdateManyMutationInput, chatGroupMembersUncheckedUpdateManyWithoutChatGroupsInput>
  }

  export type chatGroupMembersScalarWhereInput = {
    AND?: chatGroupMembersScalarWhereInput | chatGroupMembersScalarWhereInput[]
    OR?: chatGroupMembersScalarWhereInput[]
    NOT?: chatGroupMembersScalarWhereInput | chatGroupMembersScalarWhereInput[]
    id?: IntFilter<"chatGroupMembers"> | number
    userId?: IntNullableFilter<"chatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"chatGroupMembers"> | number | null
    deletedBy?: IntFilter<"chatGroupMembers"> | number
    isDeleted?: BoolFilter<"chatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"chatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"chatGroupMembers"> | Date | string
  }

  export type usersUpsertWithoutChatGroupsInput = {
    update: XOR<usersUpdateWithoutChatGroupsInput, usersUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<usersCreateWithoutChatGroupsInput, usersUncheckedCreateWithoutChatGroupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatGroupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatGroupsInput, usersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type usersUpdateWithoutChatGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput = {
    where: chatMessagesWhereUniqueInput
    update: XOR<chatMessagesUpdateWithoutChatGroupsInput, chatMessagesUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<chatMessagesCreateWithoutChatGroupsInput, chatMessagesUncheckedCreateWithoutChatGroupsInput>
  }

  export type chatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput = {
    where: chatMessagesWhereUniqueInput
    data: XOR<chatMessagesUpdateWithoutChatGroupsInput, chatMessagesUncheckedUpdateWithoutChatGroupsInput>
  }

  export type chatMessagesUpdateManyWithWhereWithoutChatGroupsInput = {
    where: chatMessagesScalarWhereInput
    data: XOR<chatMessagesUpdateManyMutationInput, chatMessagesUncheckedUpdateManyWithoutChatGroupsInput>
  }

  export type chatMessagesScalarWhereInput = {
    AND?: chatMessagesScalarWhereInput | chatMessagesScalarWhereInput[]
    OR?: chatMessagesScalarWhereInput[]
    NOT?: chatMessagesScalarWhereInput | chatMessagesScalarWhereInput[]
    id?: IntFilter<"chatMessages"> | number
    chatGroupId?: IntNullableFilter<"chatMessages"> | number | null
    userIdSender?: IntNullableFilter<"chatMessages"> | number | null
    messageText?: StringNullableFilter<"chatMessages"> | string | null
    deletedBy?: IntFilter<"chatMessages"> | number
    isDeleted?: BoolFilter<"chatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"chatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"chatMessages"> | Date | string
  }

  export type chatGroupsCreateWithoutChatMessagesInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: chatGroupMembersCreateNestedManyWithoutChatGroupsInput
    users?: usersCreateNestedOneWithoutChatGroupsInput
  }

  export type chatGroupsUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsCreateOrConnectWithoutChatMessagesInput = {
    where: chatGroupsWhereUniqueInput
    create: XOR<chatGroupsCreateWithoutChatMessagesInput, chatGroupsUncheckedCreateWithoutChatMessagesInput>
  }

  export type usersCreateWithoutChatMessagesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatMessagesInput, usersUncheckedCreateWithoutChatMessagesInput>
  }

  export type chatGroupsUpsertWithoutChatMessagesInput = {
    update: XOR<chatGroupsUpdateWithoutChatMessagesInput, chatGroupsUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<chatGroupsCreateWithoutChatMessagesInput, chatGroupsUncheckedCreateWithoutChatMessagesInput>
    where?: chatGroupsWhereInput
  }

  export type chatGroupsUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: chatGroupsWhereInput
    data: XOR<chatGroupsUpdateWithoutChatMessagesInput, chatGroupsUncheckedUpdateWithoutChatMessagesInput>
  }

  export type chatGroupsUpdateWithoutChatMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: chatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    users?: usersUpdateOneWithoutChatGroupsNestedInput
  }

  export type chatGroupsUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type usersUpsertWithoutChatMessagesInput = {
    update: XOR<usersUpdateWithoutChatMessagesInput, usersUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<usersCreateWithoutChatMessagesInput, usersUncheckedCreateWithoutChatMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatMessagesInput, usersUncheckedUpdateWithoutChatMessagesInput>
  }

  export type usersUpdateWithoutChatMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersCreateWithoutFoodsInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFoodsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutFoodsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput>
  }

  export type ordersCreateManyFoodsInputEnvelope = {
    data: ordersCreateManyFoodsInput | ordersCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutFoodsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutFoodsInput, ordersUncheckedUpdateWithoutFoodsInput>
    create: XOR<ordersCreateWithoutFoodsInput, ordersUncheckedCreateWithoutFoodsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutFoodsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutFoodsInput, ordersUncheckedUpdateWithoutFoodsInput>
  }

  export type ordersUpdateManyWithWhereWithoutFoodsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutFoodsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    userId?: IntNullableFilter<"orders"> | number | null
    foodId?: IntNullableFilter<"orders"> | number | null
    deletedBy?: IntFilter<"orders"> | number
    isDeleted?: BoolFilter<"orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"orders"> | Date | string | null
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
  }

  export type usersCreateWithoutOrdersInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    isEmailVerified?: boolean
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    codeChangePass?: string | null
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    chatGroups?: chatGroupsUncheckedCreateNestedManyWithoutUsersInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type foodsCreateWithoutOrdersInput = {
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type foodsUncheckedCreateWithoutOrdersInput = {
    id?: number
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type foodsCreateOrConnectWithoutOrdersInput = {
    where: foodsWhereUniqueInput
    create: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    chatGroups?: chatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type foodsUpsertWithoutOrdersInput = {
    update: XOR<foodsUpdateWithoutOrdersInput, foodsUncheckedUpdateWithoutOrdersInput>
    create: XOR<foodsCreateWithoutOrdersInput, foodsUncheckedCreateWithoutOrdersInput>
    where?: foodsWhereInput
  }

  export type foodsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: foodsWhereInput
    data: XOR<foodsUpdateWithoutOrdersInput, foodsUncheckedUpdateWithoutOrdersInput>
  }

  export type foodsUpdateWithoutOrdersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type foodsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesCreateWithoutUsersInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articlesUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articlesCreateOrConnectWithoutUsersInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutUsersInput, articlesUncheckedCreateWithoutUsersInput>
  }

  export type articlesCreateManyUsersInputEnvelope = {
    data: articlesCreateManyUsersInput | articlesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chatGroupMembersCreateWithoutUsersInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatGroups?: chatGroupsCreateNestedOneWithoutChatGroupMembersInput
  }

  export type chatGroupMembersUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupMembersCreateOrConnectWithoutUsersInput = {
    where: chatGroupMembersWhereUniqueInput
    create: XOR<chatGroupMembersCreateWithoutUsersInput, chatGroupMembersUncheckedCreateWithoutUsersInput>
  }

  export type chatGroupMembersCreateManyUsersInputEnvelope = {
    data: chatGroupMembersCreateManyUsersInput | chatGroupMembersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chatGroupsCreateWithoutUsersInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: chatGroupMembersCreateNestedManyWithoutChatGroupsInput
    chatMessages?: chatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: chatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
    chatMessages?: chatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type chatGroupsCreateOrConnectWithoutUsersInput = {
    where: chatGroupsWhereUniqueInput
    create: XOR<chatGroupsCreateWithoutUsersInput, chatGroupsUncheckedCreateWithoutUsersInput>
  }

  export type chatGroupsCreateManyUsersInputEnvelope = {
    data: chatGroupsCreateManyUsersInput | chatGroupsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chatMessagesCreateWithoutUsersInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatGroups?: chatGroupsCreateNestedOneWithoutChatMessagesInput
  }

  export type chatMessagesUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatMessagesCreateOrConnectWithoutUsersInput = {
    where: chatMessagesWhereUniqueInput
    create: XOR<chatMessagesCreateWithoutUsersInput, chatMessagesUncheckedCreateWithoutUsersInput>
  }

  export type chatMessagesCreateManyUsersInputEnvelope = {
    data: chatMessagesCreateManyUsersInput | chatMessagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: foodsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type articlesUpsertWithWhereUniqueWithoutUsersInput = {
    where: articlesWhereUniqueInput
    update: XOR<articlesUpdateWithoutUsersInput, articlesUncheckedUpdateWithoutUsersInput>
    create: XOR<articlesCreateWithoutUsersInput, articlesUncheckedCreateWithoutUsersInput>
  }

  export type articlesUpdateWithWhereUniqueWithoutUsersInput = {
    where: articlesWhereUniqueInput
    data: XOR<articlesUpdateWithoutUsersInput, articlesUncheckedUpdateWithoutUsersInput>
  }

  export type articlesUpdateManyWithWhereWithoutUsersInput = {
    where: articlesScalarWhereInput
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyWithoutUsersInput>
  }

  export type articlesScalarWhereInput = {
    AND?: articlesScalarWhereInput | articlesScalarWhereInput[]
    OR?: articlesScalarWhereInput[]
    NOT?: articlesScalarWhereInput | articlesScalarWhereInput[]
    id?: IntFilter<"articles"> | number
    title?: StringNullableFilter<"articles"> | string | null
    content?: StringNullableFilter<"articles"> | string | null
    imageUrl?: StringNullableFilter<"articles"> | string | null
    views?: IntFilter<"articles"> | number
    userId?: IntNullableFilter<"articles"> | number | null
    deletedBy?: IntFilter<"articles"> | number
    isDeleted?: BoolFilter<"articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"articles"> | Date | string | null
    createdAt?: DateTimeFilter<"articles"> | Date | string
    updatedAt?: DateTimeFilter<"articles"> | Date | string
  }

  export type chatGroupMembersUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatGroupMembersWhereUniqueInput
    update: XOR<chatGroupMembersUpdateWithoutUsersInput, chatGroupMembersUncheckedUpdateWithoutUsersInput>
    create: XOR<chatGroupMembersCreateWithoutUsersInput, chatGroupMembersUncheckedCreateWithoutUsersInput>
  }

  export type chatGroupMembersUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatGroupMembersWhereUniqueInput
    data: XOR<chatGroupMembersUpdateWithoutUsersInput, chatGroupMembersUncheckedUpdateWithoutUsersInput>
  }

  export type chatGroupMembersUpdateManyWithWhereWithoutUsersInput = {
    where: chatGroupMembersScalarWhereInput
    data: XOR<chatGroupMembersUpdateManyMutationInput, chatGroupMembersUncheckedUpdateManyWithoutUsersInput>
  }

  export type chatGroupsUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatGroupsWhereUniqueInput
    update: XOR<chatGroupsUpdateWithoutUsersInput, chatGroupsUncheckedUpdateWithoutUsersInput>
    create: XOR<chatGroupsCreateWithoutUsersInput, chatGroupsUncheckedCreateWithoutUsersInput>
  }

  export type chatGroupsUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatGroupsWhereUniqueInput
    data: XOR<chatGroupsUpdateWithoutUsersInput, chatGroupsUncheckedUpdateWithoutUsersInput>
  }

  export type chatGroupsUpdateManyWithWhereWithoutUsersInput = {
    where: chatGroupsScalarWhereInput
    data: XOR<chatGroupsUpdateManyMutationInput, chatGroupsUncheckedUpdateManyWithoutUsersInput>
  }

  export type chatGroupsScalarWhereInput = {
    AND?: chatGroupsScalarWhereInput | chatGroupsScalarWhereInput[]
    OR?: chatGroupsScalarWhereInput[]
    NOT?: chatGroupsScalarWhereInput | chatGroupsScalarWhereInput[]
    id?: IntFilter<"chatGroups"> | number
    name?: StringNullableFilter<"chatGroups"> | string | null
    ownerId?: IntNullableFilter<"chatGroups"> | number | null
    deletedBy?: IntFilter<"chatGroups"> | number
    isDeleted?: BoolFilter<"chatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"chatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"chatGroups"> | Date | string
  }

  export type chatMessagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatMessagesWhereUniqueInput
    update: XOR<chatMessagesUpdateWithoutUsersInput, chatMessagesUncheckedUpdateWithoutUsersInput>
    create: XOR<chatMessagesCreateWithoutUsersInput, chatMessagesUncheckedCreateWithoutUsersInput>
  }

  export type chatMessagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatMessagesWhereUniqueInput
    data: XOR<chatMessagesUpdateWithoutUsersInput, chatMessagesUncheckedUpdateWithoutUsersInput>
  }

  export type chatMessagesUpdateManyWithWhereWithoutUsersInput = {
    where: chatMessagesScalarWhereInput
    data: XOR<chatMessagesUpdateManyMutationInput, chatMessagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type chatGroupMembersCreateManyChatGroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatMessagesCreateManyChatGroupsInput = {
    id?: number
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupMembersUpdateWithoutChatGroupsInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type chatGroupMembersUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupMembersUncheckedUpdateManyWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesUpdateWithoutChatGroupsInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutChatMessagesNestedInput
  }

  export type chatMessagesUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesUncheckedUpdateManyWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyFoodsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateWithoutFoodsInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesCreateManyUsersInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupMembersCreateManyUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatGroupsCreateManyUsersInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatMessagesCreateManyUsersInput = {
    id?: number
    chatGroupId?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articlesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupMembersUpdateWithoutUsersInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroups?: chatGroupsUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type chatGroupMembersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupMembersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupsUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: chatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    chatMessages?: chatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type chatGroupsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: chatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
    chatMessages?: chatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type chatGroupsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesUpdateWithoutUsersInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroups?: chatGroupsUpdateOneWithoutChatMessagesNestedInput
  }

  export type chatMessagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpdateWithoutUsersInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: foodsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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