
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
 * Model chatgroupmembers
 * 
 */
export type chatgroupmembers = $Result.DefaultSelection<Prisma.$chatgroupmembersPayload>
/**
 * Model chatgroups
 * 
 */
export type chatgroups = $Result.DefaultSelection<Prisma.$chatgroupsPayload>
/**
 * Model chatmessages
 * 
 */
export type chatmessages = $Result.DefaultSelection<Prisma.$chatmessagesPayload>
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
   * `prisma.chatgroupmembers`: Exposes CRUD operations for the **chatgroupmembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatgroupmembers
    * const chatgroupmembers = await prisma.chatgroupmembers.findMany()
    * ```
    */
  get chatgroupmembers(): Prisma.chatgroupmembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatgroups`: Exposes CRUD operations for the **chatgroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatgroups
    * const chatgroups = await prisma.chatgroups.findMany()
    * ```
    */
  get chatgroups(): Prisma.chatgroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatmessages`: Exposes CRUD operations for the **chatmessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatmessages
    * const chatmessages = await prisma.chatmessages.findMany()
    * ```
    */
  get chatmessages(): Prisma.chatmessagesDelegate<ExtArgs, ClientOptions>;

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
    chatgroupmembers: 'chatgroupmembers',
    chatgroups: 'chatgroups',
    chatmessages: 'chatmessages',
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
      modelProps: "articles" | "chatgroupmembers" | "chatgroups" | "chatmessages" | "foods" | "orders" | "table_template" | "users"
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
      chatgroupmembers: {
        payload: Prisma.$chatgroupmembersPayload<ExtArgs>
        fields: Prisma.chatgroupmembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatgroupmembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatgroupmembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>
          }
          findFirst: {
            args: Prisma.chatgroupmembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatgroupmembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>
          }
          findMany: {
            args: Prisma.chatgroupmembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>[]
          }
          create: {
            args: Prisma.chatgroupmembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>
          }
          createMany: {
            args: Prisma.chatgroupmembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatgroupmembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>
          }
          update: {
            args: Prisma.chatgroupmembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>
          }
          deleteMany: {
            args: Prisma.chatgroupmembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatgroupmembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatgroupmembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupmembersPayload>
          }
          aggregate: {
            args: Prisma.ChatgroupmembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatgroupmembers>
          }
          groupBy: {
            args: Prisma.chatgroupmembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatgroupmembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatgroupmembersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatgroupmembersCountAggregateOutputType> | number
          }
        }
      }
      chatgroups: {
        payload: Prisma.$chatgroupsPayload<ExtArgs>
        fields: Prisma.chatgroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatgroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatgroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>
          }
          findFirst: {
            args: Prisma.chatgroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatgroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>
          }
          findMany: {
            args: Prisma.chatgroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>[]
          }
          create: {
            args: Prisma.chatgroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>
          }
          createMany: {
            args: Prisma.chatgroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatgroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>
          }
          update: {
            args: Prisma.chatgroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>
          }
          deleteMany: {
            args: Prisma.chatgroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatgroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatgroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatgroupsPayload>
          }
          aggregate: {
            args: Prisma.ChatgroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatgroups>
          }
          groupBy: {
            args: Prisma.chatgroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatgroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatgroupsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatgroupsCountAggregateOutputType> | number
          }
        }
      }
      chatmessages: {
        payload: Prisma.$chatmessagesPayload<ExtArgs>
        fields: Prisma.chatmessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatmessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatmessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>
          }
          findFirst: {
            args: Prisma.chatmessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatmessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>
          }
          findMany: {
            args: Prisma.chatmessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>[]
          }
          create: {
            args: Prisma.chatmessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>
          }
          createMany: {
            args: Prisma.chatmessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatmessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>
          }
          update: {
            args: Prisma.chatmessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>
          }
          deleteMany: {
            args: Prisma.chatmessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatmessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatmessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagesPayload>
          }
          aggregate: {
            args: Prisma.ChatmessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatmessages>
          }
          groupBy: {
            args: Prisma.chatmessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatmessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatmessagesCountArgs<ExtArgs>
            result: $Utils.Optional<ChatmessagesCountAggregateOutputType> | number
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
    chatgroupmembers?: chatgroupmembersOmit
    chatgroups?: chatgroupsOmit
    chatmessages?: chatmessagesOmit
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
   * Count Type ChatgroupsCountOutputType
   */

  export type ChatgroupsCountOutputType = {
    chatgroupmembers: number
    chatmessages: number
  }

  export type ChatgroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatgroupmembers?: boolean | ChatgroupsCountOutputTypeCountChatgroupmembersArgs
    chatmessages?: boolean | ChatgroupsCountOutputTypeCountChatmessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatgroupsCountOutputType without action
   */
  export type ChatgroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatgroupsCountOutputType
     */
    select?: ChatgroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatgroupsCountOutputType without action
   */
  export type ChatgroupsCountOutputTypeCountChatgroupmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatgroupmembersWhereInput
  }

  /**
   * ChatgroupsCountOutputType without action
   */
  export type ChatgroupsCountOutputTypeCountChatmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatmessagesWhereInput
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
    chatgroupmembers: number
    chatgroups: number
    chatmessages: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UsersCountOutputTypeCountArticlesArgs
    chatgroupmembers?: boolean | UsersCountOutputTypeCountChatgroupmembersArgs
    chatgroups?: boolean | UsersCountOutputTypeCountChatgroupsArgs
    chatmessages?: boolean | UsersCountOutputTypeCountChatmessagesArgs
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
  export type UsersCountOutputTypeCountChatgroupmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatgroupmembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatgroupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatmessagesWhereInput
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
   * Model chatgroupmembers
   */

  export type AggregateChatgroupmembers = {
    _count: ChatgroupmembersCountAggregateOutputType | null
    _avg: ChatgroupmembersAvgAggregateOutputType | null
    _sum: ChatgroupmembersSumAggregateOutputType | null
    _min: ChatgroupmembersMinAggregateOutputType | null
    _max: ChatgroupmembersMaxAggregateOutputType | null
  }

  export type ChatgroupmembersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatgroupmembersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatgroupmembersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatgroupmembersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatgroupmembersCountAggregateOutputType = {
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


  export type ChatgroupmembersAvgAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatgroupmembersSumAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatgroupmembersMinAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatgroupmembersMaxAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatgroupmembersCountAggregateInputType = {
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

  export type ChatgroupmembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatgroupmembers to aggregate.
     */
    where?: chatgroupmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroupmembers to fetch.
     */
    orderBy?: chatgroupmembersOrderByWithRelationInput | chatgroupmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatgroupmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatgroupmembers
    **/
    _count?: true | ChatgroupmembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatgroupmembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatgroupmembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatgroupmembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatgroupmembersMaxAggregateInputType
  }

  export type GetChatgroupmembersAggregateType<T extends ChatgroupmembersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatgroupmembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatgroupmembers[P]>
      : GetScalarType<T[P], AggregateChatgroupmembers[P]>
  }




  export type chatgroupmembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatgroupmembersWhereInput
    orderBy?: chatgroupmembersOrderByWithAggregationInput | chatgroupmembersOrderByWithAggregationInput[]
    by: ChatgroupmembersScalarFieldEnum[] | ChatgroupmembersScalarFieldEnum
    having?: chatgroupmembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatgroupmembersCountAggregateInputType | true
    _avg?: ChatgroupmembersAvgAggregateInputType
    _sum?: ChatgroupmembersSumAggregateInputType
    _min?: ChatgroupmembersMinAggregateInputType
    _max?: ChatgroupmembersMaxAggregateInputType
  }

  export type ChatgroupmembersGroupByOutputType = {
    id: number
    userId: number | null
    chatGroupId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatgroupmembersCountAggregateOutputType | null
    _avg: ChatgroupmembersAvgAggregateOutputType | null
    _sum: ChatgroupmembersSumAggregateOutputType | null
    _min: ChatgroupmembersMinAggregateOutputType | null
    _max: ChatgroupmembersMaxAggregateOutputType | null
  }

  type GetChatgroupmembersGroupByPayload<T extends chatgroupmembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatgroupmembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatgroupmembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatgroupmembersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatgroupmembersGroupByOutputType[P]>
        }
      >
    >


  export type chatgroupmembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | chatgroupmembers$usersArgs<ExtArgs>
    chatgroups?: boolean | chatgroupmembers$chatgroupsArgs<ExtArgs>
  }, ExtArgs["result"]["chatgroupmembers"]>



  export type chatgroupmembersSelectScalar = {
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chatgroupmembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatGroupId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatgroupmembers"]>
  export type chatgroupmembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | chatgroupmembers$usersArgs<ExtArgs>
    chatgroups?: boolean | chatgroupmembers$chatgroupsArgs<ExtArgs>
  }

  export type $chatgroupmembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatgroupmembers"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      chatgroups: Prisma.$chatgroupsPayload<ExtArgs> | null
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
    }, ExtArgs["result"]["chatgroupmembers"]>
    composites: {}
  }

  type chatgroupmembersGetPayload<S extends boolean | null | undefined | chatgroupmembersDefaultArgs> = $Result.GetResult<Prisma.$chatgroupmembersPayload, S>

  type chatgroupmembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatgroupmembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatgroupmembersCountAggregateInputType | true
    }

  export interface chatgroupmembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatgroupmembers'], meta: { name: 'chatgroupmembers' } }
    /**
     * Find zero or one Chatgroupmembers that matches the filter.
     * @param {chatgroupmembersFindUniqueArgs} args - Arguments to find a Chatgroupmembers
     * @example
     * // Get one Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatgroupmembersFindUniqueArgs>(args: SelectSubset<T, chatgroupmembersFindUniqueArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatgroupmembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatgroupmembersFindUniqueOrThrowArgs} args - Arguments to find a Chatgroupmembers
     * @example
     * // Get one Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatgroupmembersFindUniqueOrThrowArgs>(args: SelectSubset<T, chatgroupmembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatgroupmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupmembersFindFirstArgs} args - Arguments to find a Chatgroupmembers
     * @example
     * // Get one Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatgroupmembersFindFirstArgs>(args?: SelectSubset<T, chatgroupmembersFindFirstArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatgroupmembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupmembersFindFirstOrThrowArgs} args - Arguments to find a Chatgroupmembers
     * @example
     * // Get one Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatgroupmembersFindFirstOrThrowArgs>(args?: SelectSubset<T, chatgroupmembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatgroupmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupmembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.findMany()
     * 
     * // Get first 10 Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatgroupmembersWithIdOnly = await prisma.chatgroupmembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatgroupmembersFindManyArgs>(args?: SelectSubset<T, chatgroupmembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatgroupmembers.
     * @param {chatgroupmembersCreateArgs} args - Arguments to create a Chatgroupmembers.
     * @example
     * // Create one Chatgroupmembers
     * const Chatgroupmembers = await prisma.chatgroupmembers.create({
     *   data: {
     *     // ... data to create a Chatgroupmembers
     *   }
     * })
     * 
     */
    create<T extends chatgroupmembersCreateArgs>(args: SelectSubset<T, chatgroupmembersCreateArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatgroupmembers.
     * @param {chatgroupmembersCreateManyArgs} args - Arguments to create many Chatgroupmembers.
     * @example
     * // Create many Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatgroupmembersCreateManyArgs>(args?: SelectSubset<T, chatgroupmembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatgroupmembers.
     * @param {chatgroupmembersDeleteArgs} args - Arguments to delete one Chatgroupmembers.
     * @example
     * // Delete one Chatgroupmembers
     * const Chatgroupmembers = await prisma.chatgroupmembers.delete({
     *   where: {
     *     // ... filter to delete one Chatgroupmembers
     *   }
     * })
     * 
     */
    delete<T extends chatgroupmembersDeleteArgs>(args: SelectSubset<T, chatgroupmembersDeleteArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatgroupmembers.
     * @param {chatgroupmembersUpdateArgs} args - Arguments to update one Chatgroupmembers.
     * @example
     * // Update one Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatgroupmembersUpdateArgs>(args: SelectSubset<T, chatgroupmembersUpdateArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatgroupmembers.
     * @param {chatgroupmembersDeleteManyArgs} args - Arguments to filter Chatgroupmembers to delete.
     * @example
     * // Delete a few Chatgroupmembers
     * const { count } = await prisma.chatgroupmembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatgroupmembersDeleteManyArgs>(args?: SelectSubset<T, chatgroupmembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatgroupmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupmembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatgroupmembersUpdateManyArgs>(args: SelectSubset<T, chatgroupmembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatgroupmembers.
     * @param {chatgroupmembersUpsertArgs} args - Arguments to update or create a Chatgroupmembers.
     * @example
     * // Update or create a Chatgroupmembers
     * const chatgroupmembers = await prisma.chatgroupmembers.upsert({
     *   create: {
     *     // ... data to create a Chatgroupmembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatgroupmembers we want to update
     *   }
     * })
     */
    upsert<T extends chatgroupmembersUpsertArgs>(args: SelectSubset<T, chatgroupmembersUpsertArgs<ExtArgs>>): Prisma__chatgroupmembersClient<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatgroupmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupmembersCountArgs} args - Arguments to filter Chatgroupmembers to count.
     * @example
     * // Count the number of Chatgroupmembers
     * const count = await prisma.chatgroupmembers.count({
     *   where: {
     *     // ... the filter for the Chatgroupmembers we want to count
     *   }
     * })
    **/
    count<T extends chatgroupmembersCountArgs>(
      args?: Subset<T, chatgroupmembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatgroupmembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatgroupmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatgroupmembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatgroupmembersAggregateArgs>(args: Subset<T, ChatgroupmembersAggregateArgs>): Prisma.PrismaPromise<GetChatgroupmembersAggregateType<T>>

    /**
     * Group by Chatgroupmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupmembersGroupByArgs} args - Group by arguments.
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
      T extends chatgroupmembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatgroupmembersGroupByArgs['orderBy'] }
        : { orderBy?: chatgroupmembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatgroupmembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatgroupmembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatgroupmembers model
   */
  readonly fields: chatgroupmembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatgroupmembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatgroupmembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends chatgroupmembers$usersArgs<ExtArgs> = {}>(args?: Subset<T, chatgroupmembers$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatgroups<T extends chatgroupmembers$chatgroupsArgs<ExtArgs> = {}>(args?: Subset<T, chatgroupmembers$chatgroupsArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chatgroupmembers model
   */
  interface chatgroupmembersFieldRefs {
    readonly id: FieldRef<"chatgroupmembers", 'Int'>
    readonly userId: FieldRef<"chatgroupmembers", 'Int'>
    readonly chatGroupId: FieldRef<"chatgroupmembers", 'Int'>
    readonly deletedBy: FieldRef<"chatgroupmembers", 'Int'>
    readonly isDeleted: FieldRef<"chatgroupmembers", 'Boolean'>
    readonly deletedAt: FieldRef<"chatgroupmembers", 'DateTime'>
    readonly createdAt: FieldRef<"chatgroupmembers", 'DateTime'>
    readonly updatedAt: FieldRef<"chatgroupmembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatgroupmembers findUnique
   */
  export type chatgroupmembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * Filter, which chatgroupmembers to fetch.
     */
    where: chatgroupmembersWhereUniqueInput
  }

  /**
   * chatgroupmembers findUniqueOrThrow
   */
  export type chatgroupmembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * Filter, which chatgroupmembers to fetch.
     */
    where: chatgroupmembersWhereUniqueInput
  }

  /**
   * chatgroupmembers findFirst
   */
  export type chatgroupmembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * Filter, which chatgroupmembers to fetch.
     */
    where?: chatgroupmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroupmembers to fetch.
     */
    orderBy?: chatgroupmembersOrderByWithRelationInput | chatgroupmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatgroupmembers.
     */
    cursor?: chatgroupmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatgroupmembers.
     */
    distinct?: ChatgroupmembersScalarFieldEnum | ChatgroupmembersScalarFieldEnum[]
  }

  /**
   * chatgroupmembers findFirstOrThrow
   */
  export type chatgroupmembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * Filter, which chatgroupmembers to fetch.
     */
    where?: chatgroupmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroupmembers to fetch.
     */
    orderBy?: chatgroupmembersOrderByWithRelationInput | chatgroupmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatgroupmembers.
     */
    cursor?: chatgroupmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatgroupmembers.
     */
    distinct?: ChatgroupmembersScalarFieldEnum | ChatgroupmembersScalarFieldEnum[]
  }

  /**
   * chatgroupmembers findMany
   */
  export type chatgroupmembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * Filter, which chatgroupmembers to fetch.
     */
    where?: chatgroupmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroupmembers to fetch.
     */
    orderBy?: chatgroupmembersOrderByWithRelationInput | chatgroupmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatgroupmembers.
     */
    cursor?: chatgroupmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatgroupmembers.
     */
    distinct?: ChatgroupmembersScalarFieldEnum | ChatgroupmembersScalarFieldEnum[]
  }

  /**
   * chatgroupmembers create
   */
  export type chatgroupmembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * The data needed to create a chatgroupmembers.
     */
    data?: XOR<chatgroupmembersCreateInput, chatgroupmembersUncheckedCreateInput>
  }

  /**
   * chatgroupmembers createMany
   */
  export type chatgroupmembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatgroupmembers.
     */
    data: chatgroupmembersCreateManyInput | chatgroupmembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatgroupmembers update
   */
  export type chatgroupmembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * The data needed to update a chatgroupmembers.
     */
    data: XOR<chatgroupmembersUpdateInput, chatgroupmembersUncheckedUpdateInput>
    /**
     * Choose, which chatgroupmembers to update.
     */
    where: chatgroupmembersWhereUniqueInput
  }

  /**
   * chatgroupmembers updateMany
   */
  export type chatgroupmembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatgroupmembers.
     */
    data: XOR<chatgroupmembersUpdateManyMutationInput, chatgroupmembersUncheckedUpdateManyInput>
    /**
     * Filter which chatgroupmembers to update
     */
    where?: chatgroupmembersWhereInput
    /**
     * Limit how many chatgroupmembers to update.
     */
    limit?: number
  }

  /**
   * chatgroupmembers upsert
   */
  export type chatgroupmembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * The filter to search for the chatgroupmembers to update in case it exists.
     */
    where: chatgroupmembersWhereUniqueInput
    /**
     * In case the chatgroupmembers found by the `where` argument doesn't exist, create a new chatgroupmembers with this data.
     */
    create: XOR<chatgroupmembersCreateInput, chatgroupmembersUncheckedCreateInput>
    /**
     * In case the chatgroupmembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatgroupmembersUpdateInput, chatgroupmembersUncheckedUpdateInput>
  }

  /**
   * chatgroupmembers delete
   */
  export type chatgroupmembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    /**
     * Filter which chatgroupmembers to delete.
     */
    where: chatgroupmembersWhereUniqueInput
  }

  /**
   * chatgroupmembers deleteMany
   */
  export type chatgroupmembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatgroupmembers to delete
     */
    where?: chatgroupmembersWhereInput
    /**
     * Limit how many chatgroupmembers to delete.
     */
    limit?: number
  }

  /**
   * chatgroupmembers.users
   */
  export type chatgroupmembers$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * chatgroupmembers.chatgroups
   */
  export type chatgroupmembers$chatgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    where?: chatgroupsWhereInput
  }

  /**
   * chatgroupmembers without action
   */
  export type chatgroupmembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
  }


  /**
   * Model chatgroups
   */

  export type AggregateChatgroups = {
    _count: ChatgroupsCountAggregateOutputType | null
    _avg: ChatgroupsAvgAggregateOutputType | null
    _sum: ChatgroupsSumAggregateOutputType | null
    _min: ChatgroupsMinAggregateOutputType | null
    _max: ChatgroupsMaxAggregateOutputType | null
  }

  export type ChatgroupsAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatgroupsSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatgroupsMinAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatgroupsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatgroupsCountAggregateOutputType = {
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


  export type ChatgroupsAvgAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatgroupsSumAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatgroupsMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatgroupsMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatgroupsCountAggregateInputType = {
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

  export type ChatgroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatgroups to aggregate.
     */
    where?: chatgroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroups to fetch.
     */
    orderBy?: chatgroupsOrderByWithRelationInput | chatgroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatgroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatgroups
    **/
    _count?: true | ChatgroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatgroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatgroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatgroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatgroupsMaxAggregateInputType
  }

  export type GetChatgroupsAggregateType<T extends ChatgroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateChatgroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatgroups[P]>
      : GetScalarType<T[P], AggregateChatgroups[P]>
  }




  export type chatgroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatgroupsWhereInput
    orderBy?: chatgroupsOrderByWithAggregationInput | chatgroupsOrderByWithAggregationInput[]
    by: ChatgroupsScalarFieldEnum[] | ChatgroupsScalarFieldEnum
    having?: chatgroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatgroupsCountAggregateInputType | true
    _avg?: ChatgroupsAvgAggregateInputType
    _sum?: ChatgroupsSumAggregateInputType
    _min?: ChatgroupsMinAggregateInputType
    _max?: ChatgroupsMaxAggregateInputType
  }

  export type ChatgroupsGroupByOutputType = {
    id: number
    name: string | null
    ownerId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatgroupsCountAggregateOutputType | null
    _avg: ChatgroupsAvgAggregateOutputType | null
    _sum: ChatgroupsSumAggregateOutputType | null
    _min: ChatgroupsMinAggregateOutputType | null
    _max: ChatgroupsMaxAggregateOutputType | null
  }

  type GetChatgroupsGroupByPayload<T extends chatgroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatgroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatgroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatgroupsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatgroupsGroupByOutputType[P]>
        }
      >
    >


  export type chatgroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatgroupmembers?: boolean | chatgroups$chatgroupmembersArgs<ExtArgs>
    users?: boolean | chatgroups$usersArgs<ExtArgs>
    chatmessages?: boolean | chatgroups$chatmessagesArgs<ExtArgs>
    _count?: boolean | ChatgroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatgroups"]>



  export type chatgroupsSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chatgroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatgroups"]>
  export type chatgroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatgroupmembers?: boolean | chatgroups$chatgroupmembersArgs<ExtArgs>
    users?: boolean | chatgroups$usersArgs<ExtArgs>
    chatmessages?: boolean | chatgroups$chatmessagesArgs<ExtArgs>
    _count?: boolean | ChatgroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $chatgroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatgroups"
    objects: {
      chatgroupmembers: Prisma.$chatgroupmembersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      chatmessages: Prisma.$chatmessagesPayload<ExtArgs>[]
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
    }, ExtArgs["result"]["chatgroups"]>
    composites: {}
  }

  type chatgroupsGetPayload<S extends boolean | null | undefined | chatgroupsDefaultArgs> = $Result.GetResult<Prisma.$chatgroupsPayload, S>

  type chatgroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatgroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatgroupsCountAggregateInputType | true
    }

  export interface chatgroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatgroups'], meta: { name: 'chatgroups' } }
    /**
     * Find zero or one Chatgroups that matches the filter.
     * @param {chatgroupsFindUniqueArgs} args - Arguments to find a Chatgroups
     * @example
     * // Get one Chatgroups
     * const chatgroups = await prisma.chatgroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatgroupsFindUniqueArgs>(args: SelectSubset<T, chatgroupsFindUniqueArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatgroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatgroupsFindUniqueOrThrowArgs} args - Arguments to find a Chatgroups
     * @example
     * // Get one Chatgroups
     * const chatgroups = await prisma.chatgroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatgroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, chatgroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupsFindFirstArgs} args - Arguments to find a Chatgroups
     * @example
     * // Get one Chatgroups
     * const chatgroups = await prisma.chatgroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatgroupsFindFirstArgs>(args?: SelectSubset<T, chatgroupsFindFirstArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatgroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupsFindFirstOrThrowArgs} args - Arguments to find a Chatgroups
     * @example
     * // Get one Chatgroups
     * const chatgroups = await prisma.chatgroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatgroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, chatgroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatgroups
     * const chatgroups = await prisma.chatgroups.findMany()
     * 
     * // Get first 10 Chatgroups
     * const chatgroups = await prisma.chatgroups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatgroupsWithIdOnly = await prisma.chatgroups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatgroupsFindManyArgs>(args?: SelectSubset<T, chatgroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatgroups.
     * @param {chatgroupsCreateArgs} args - Arguments to create a Chatgroups.
     * @example
     * // Create one Chatgroups
     * const Chatgroups = await prisma.chatgroups.create({
     *   data: {
     *     // ... data to create a Chatgroups
     *   }
     * })
     * 
     */
    create<T extends chatgroupsCreateArgs>(args: SelectSubset<T, chatgroupsCreateArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatgroups.
     * @param {chatgroupsCreateManyArgs} args - Arguments to create many Chatgroups.
     * @example
     * // Create many Chatgroups
     * const chatgroups = await prisma.chatgroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatgroupsCreateManyArgs>(args?: SelectSubset<T, chatgroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatgroups.
     * @param {chatgroupsDeleteArgs} args - Arguments to delete one Chatgroups.
     * @example
     * // Delete one Chatgroups
     * const Chatgroups = await prisma.chatgroups.delete({
     *   where: {
     *     // ... filter to delete one Chatgroups
     *   }
     * })
     * 
     */
    delete<T extends chatgroupsDeleteArgs>(args: SelectSubset<T, chatgroupsDeleteArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatgroups.
     * @param {chatgroupsUpdateArgs} args - Arguments to update one Chatgroups.
     * @example
     * // Update one Chatgroups
     * const chatgroups = await prisma.chatgroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatgroupsUpdateArgs>(args: SelectSubset<T, chatgroupsUpdateArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatgroups.
     * @param {chatgroupsDeleteManyArgs} args - Arguments to filter Chatgroups to delete.
     * @example
     * // Delete a few Chatgroups
     * const { count } = await prisma.chatgroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatgroupsDeleteManyArgs>(args?: SelectSubset<T, chatgroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatgroups
     * const chatgroups = await prisma.chatgroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatgroupsUpdateManyArgs>(args: SelectSubset<T, chatgroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatgroups.
     * @param {chatgroupsUpsertArgs} args - Arguments to update or create a Chatgroups.
     * @example
     * // Update or create a Chatgroups
     * const chatgroups = await prisma.chatgroups.upsert({
     *   create: {
     *     // ... data to create a Chatgroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatgroups we want to update
     *   }
     * })
     */
    upsert<T extends chatgroupsUpsertArgs>(args: SelectSubset<T, chatgroupsUpsertArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupsCountArgs} args - Arguments to filter Chatgroups to count.
     * @example
     * // Count the number of Chatgroups
     * const count = await prisma.chatgroups.count({
     *   where: {
     *     // ... the filter for the Chatgroups we want to count
     *   }
     * })
    **/
    count<T extends chatgroupsCountArgs>(
      args?: Subset<T, chatgroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatgroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatgroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatgroupsAggregateArgs>(args: Subset<T, ChatgroupsAggregateArgs>): Prisma.PrismaPromise<GetChatgroupsAggregateType<T>>

    /**
     * Group by Chatgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatgroupsGroupByArgs} args - Group by arguments.
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
      T extends chatgroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatgroupsGroupByArgs['orderBy'] }
        : { orderBy?: chatgroupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatgroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatgroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatgroups model
   */
  readonly fields: chatgroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatgroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatgroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatgroupmembers<T extends chatgroups$chatgroupmembersArgs<ExtArgs> = {}>(args?: Subset<T, chatgroups$chatgroupmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends chatgroups$usersArgs<ExtArgs> = {}>(args?: Subset<T, chatgroups$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatmessages<T extends chatgroups$chatmessagesArgs<ExtArgs> = {}>(args?: Subset<T, chatgroups$chatmessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chatgroups model
   */
  interface chatgroupsFieldRefs {
    readonly id: FieldRef<"chatgroups", 'Int'>
    readonly name: FieldRef<"chatgroups", 'String'>
    readonly ownerId: FieldRef<"chatgroups", 'Int'>
    readonly deletedBy: FieldRef<"chatgroups", 'Int'>
    readonly isDeleted: FieldRef<"chatgroups", 'Boolean'>
    readonly deletedAt: FieldRef<"chatgroups", 'DateTime'>
    readonly createdAt: FieldRef<"chatgroups", 'DateTime'>
    readonly updatedAt: FieldRef<"chatgroups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatgroups findUnique
   */
  export type chatgroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatgroups to fetch.
     */
    where: chatgroupsWhereUniqueInput
  }

  /**
   * chatgroups findUniqueOrThrow
   */
  export type chatgroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatgroups to fetch.
     */
    where: chatgroupsWhereUniqueInput
  }

  /**
   * chatgroups findFirst
   */
  export type chatgroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatgroups to fetch.
     */
    where?: chatgroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroups to fetch.
     */
    orderBy?: chatgroupsOrderByWithRelationInput | chatgroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatgroups.
     */
    cursor?: chatgroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatgroups.
     */
    distinct?: ChatgroupsScalarFieldEnum | ChatgroupsScalarFieldEnum[]
  }

  /**
   * chatgroups findFirstOrThrow
   */
  export type chatgroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatgroups to fetch.
     */
    where?: chatgroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroups to fetch.
     */
    orderBy?: chatgroupsOrderByWithRelationInput | chatgroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatgroups.
     */
    cursor?: chatgroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatgroups.
     */
    distinct?: ChatgroupsScalarFieldEnum | ChatgroupsScalarFieldEnum[]
  }

  /**
   * chatgroups findMany
   */
  export type chatgroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * Filter, which chatgroups to fetch.
     */
    where?: chatgroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatgroups to fetch.
     */
    orderBy?: chatgroupsOrderByWithRelationInput | chatgroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatgroups.
     */
    cursor?: chatgroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatgroups.
     */
    distinct?: ChatgroupsScalarFieldEnum | ChatgroupsScalarFieldEnum[]
  }

  /**
   * chatgroups create
   */
  export type chatgroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a chatgroups.
     */
    data?: XOR<chatgroupsCreateInput, chatgroupsUncheckedCreateInput>
  }

  /**
   * chatgroups createMany
   */
  export type chatgroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatgroups.
     */
    data: chatgroupsCreateManyInput | chatgroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatgroups update
   */
  export type chatgroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a chatgroups.
     */
    data: XOR<chatgroupsUpdateInput, chatgroupsUncheckedUpdateInput>
    /**
     * Choose, which chatgroups to update.
     */
    where: chatgroupsWhereUniqueInput
  }

  /**
   * chatgroups updateMany
   */
  export type chatgroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatgroups.
     */
    data: XOR<chatgroupsUpdateManyMutationInput, chatgroupsUncheckedUpdateManyInput>
    /**
     * Filter which chatgroups to update
     */
    where?: chatgroupsWhereInput
    /**
     * Limit how many chatgroups to update.
     */
    limit?: number
  }

  /**
   * chatgroups upsert
   */
  export type chatgroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the chatgroups to update in case it exists.
     */
    where: chatgroupsWhereUniqueInput
    /**
     * In case the chatgroups found by the `where` argument doesn't exist, create a new chatgroups with this data.
     */
    create: XOR<chatgroupsCreateInput, chatgroupsUncheckedCreateInput>
    /**
     * In case the chatgroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatgroupsUpdateInput, chatgroupsUncheckedUpdateInput>
  }

  /**
   * chatgroups delete
   */
  export type chatgroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    /**
     * Filter which chatgroups to delete.
     */
    where: chatgroupsWhereUniqueInput
  }

  /**
   * chatgroups deleteMany
   */
  export type chatgroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatgroups to delete
     */
    where?: chatgroupsWhereInput
    /**
     * Limit how many chatgroups to delete.
     */
    limit?: number
  }

  /**
   * chatgroups.chatgroupmembers
   */
  export type chatgroups$chatgroupmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    where?: chatgroupmembersWhereInput
    orderBy?: chatgroupmembersOrderByWithRelationInput | chatgroupmembersOrderByWithRelationInput[]
    cursor?: chatgroupmembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatgroupmembersScalarFieldEnum | ChatgroupmembersScalarFieldEnum[]
  }

  /**
   * chatgroups.users
   */
  export type chatgroups$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * chatgroups.chatmessages
   */
  export type chatgroups$chatmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    where?: chatmessagesWhereInput
    orderBy?: chatmessagesOrderByWithRelationInput | chatmessagesOrderByWithRelationInput[]
    cursor?: chatmessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatmessagesScalarFieldEnum | ChatmessagesScalarFieldEnum[]
  }

  /**
   * chatgroups without action
   */
  export type chatgroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
  }


  /**
   * Model chatmessages
   */

  export type AggregateChatmessages = {
    _count: ChatmessagesCountAggregateOutputType | null
    _avg: ChatmessagesAvgAggregateOutputType | null
    _sum: ChatmessagesSumAggregateOutputType | null
    _min: ChatmessagesMinAggregateOutputType | null
    _max: ChatmessagesMaxAggregateOutputType | null
  }

  export type ChatmessagesAvgAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatmessagesSumAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatmessagesMinAggregateOutputType = {
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

  export type ChatmessagesMaxAggregateOutputType = {
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

  export type ChatmessagesCountAggregateOutputType = {
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


  export type ChatmessagesAvgAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatmessagesSumAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatmessagesMinAggregateInputType = {
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

  export type ChatmessagesMaxAggregateInputType = {
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

  export type ChatmessagesCountAggregateInputType = {
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

  export type ChatmessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatmessages to aggregate.
     */
    where?: chatmessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessagesOrderByWithRelationInput | chatmessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatmessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatmessages
    **/
    _count?: true | ChatmessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatmessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatmessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatmessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatmessagesMaxAggregateInputType
  }

  export type GetChatmessagesAggregateType<T extends ChatmessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateChatmessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatmessages[P]>
      : GetScalarType<T[P], AggregateChatmessages[P]>
  }




  export type chatmessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatmessagesWhereInput
    orderBy?: chatmessagesOrderByWithAggregationInput | chatmessagesOrderByWithAggregationInput[]
    by: ChatmessagesScalarFieldEnum[] | ChatmessagesScalarFieldEnum
    having?: chatmessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatmessagesCountAggregateInputType | true
    _avg?: ChatmessagesAvgAggregateInputType
    _sum?: ChatmessagesSumAggregateInputType
    _min?: ChatmessagesMinAggregateInputType
    _max?: ChatmessagesMaxAggregateInputType
  }

  export type ChatmessagesGroupByOutputType = {
    id: number
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatmessagesCountAggregateOutputType | null
    _avg: ChatmessagesAvgAggregateOutputType | null
    _sum: ChatmessagesSumAggregateOutputType | null
    _min: ChatmessagesMinAggregateOutputType | null
    _max: ChatmessagesMaxAggregateOutputType | null
  }

  type GetChatmessagesGroupByPayload<T extends chatmessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatmessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatmessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatmessagesGroupByOutputType[P]>
            : GetScalarType<T[P], ChatmessagesGroupByOutputType[P]>
        }
      >
    >


  export type chatmessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatgroups?: boolean | chatmessages$chatgroupsArgs<ExtArgs>
    users?: boolean | chatmessages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["chatmessages"]>



  export type chatmessagesSelectScalar = {
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

  export type chatmessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatGroupId" | "userIdSender" | "messageText" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatmessages"]>
  export type chatmessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatgroups?: boolean | chatmessages$chatgroupsArgs<ExtArgs>
    users?: boolean | chatmessages$usersArgs<ExtArgs>
  }

  export type $chatmessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatmessages"
    objects: {
      chatgroups: Prisma.$chatgroupsPayload<ExtArgs> | null
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
    }, ExtArgs["result"]["chatmessages"]>
    composites: {}
  }

  type chatmessagesGetPayload<S extends boolean | null | undefined | chatmessagesDefaultArgs> = $Result.GetResult<Prisma.$chatmessagesPayload, S>

  type chatmessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatmessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatmessagesCountAggregateInputType | true
    }

  export interface chatmessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatmessages'], meta: { name: 'chatmessages' } }
    /**
     * Find zero or one Chatmessages that matches the filter.
     * @param {chatmessagesFindUniqueArgs} args - Arguments to find a Chatmessages
     * @example
     * // Get one Chatmessages
     * const chatmessages = await prisma.chatmessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatmessagesFindUniqueArgs>(args: SelectSubset<T, chatmessagesFindUniqueArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatmessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatmessagesFindUniqueOrThrowArgs} args - Arguments to find a Chatmessages
     * @example
     * // Get one Chatmessages
     * const chatmessages = await prisma.chatmessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatmessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, chatmessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatmessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessagesFindFirstArgs} args - Arguments to find a Chatmessages
     * @example
     * // Get one Chatmessages
     * const chatmessages = await prisma.chatmessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatmessagesFindFirstArgs>(args?: SelectSubset<T, chatmessagesFindFirstArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatmessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessagesFindFirstOrThrowArgs} args - Arguments to find a Chatmessages
     * @example
     * // Get one Chatmessages
     * const chatmessages = await prisma.chatmessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatmessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, chatmessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatmessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatmessages
     * const chatmessages = await prisma.chatmessages.findMany()
     * 
     * // Get first 10 Chatmessages
     * const chatmessages = await prisma.chatmessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatmessagesWithIdOnly = await prisma.chatmessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatmessagesFindManyArgs>(args?: SelectSubset<T, chatmessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatmessages.
     * @param {chatmessagesCreateArgs} args - Arguments to create a Chatmessages.
     * @example
     * // Create one Chatmessages
     * const Chatmessages = await prisma.chatmessages.create({
     *   data: {
     *     // ... data to create a Chatmessages
     *   }
     * })
     * 
     */
    create<T extends chatmessagesCreateArgs>(args: SelectSubset<T, chatmessagesCreateArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatmessages.
     * @param {chatmessagesCreateManyArgs} args - Arguments to create many Chatmessages.
     * @example
     * // Create many Chatmessages
     * const chatmessages = await prisma.chatmessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatmessagesCreateManyArgs>(args?: SelectSubset<T, chatmessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatmessages.
     * @param {chatmessagesDeleteArgs} args - Arguments to delete one Chatmessages.
     * @example
     * // Delete one Chatmessages
     * const Chatmessages = await prisma.chatmessages.delete({
     *   where: {
     *     // ... filter to delete one Chatmessages
     *   }
     * })
     * 
     */
    delete<T extends chatmessagesDeleteArgs>(args: SelectSubset<T, chatmessagesDeleteArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatmessages.
     * @param {chatmessagesUpdateArgs} args - Arguments to update one Chatmessages.
     * @example
     * // Update one Chatmessages
     * const chatmessages = await prisma.chatmessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatmessagesUpdateArgs>(args: SelectSubset<T, chatmessagesUpdateArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatmessages.
     * @param {chatmessagesDeleteManyArgs} args - Arguments to filter Chatmessages to delete.
     * @example
     * // Delete a few Chatmessages
     * const { count } = await prisma.chatmessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatmessagesDeleteManyArgs>(args?: SelectSubset<T, chatmessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatmessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatmessages
     * const chatmessages = await prisma.chatmessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatmessagesUpdateManyArgs>(args: SelectSubset<T, chatmessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatmessages.
     * @param {chatmessagesUpsertArgs} args - Arguments to update or create a Chatmessages.
     * @example
     * // Update or create a Chatmessages
     * const chatmessages = await prisma.chatmessages.upsert({
     *   create: {
     *     // ... data to create a Chatmessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatmessages we want to update
     *   }
     * })
     */
    upsert<T extends chatmessagesUpsertArgs>(args: SelectSubset<T, chatmessagesUpsertArgs<ExtArgs>>): Prisma__chatmessagesClient<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatmessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessagesCountArgs} args - Arguments to filter Chatmessages to count.
     * @example
     * // Count the number of Chatmessages
     * const count = await prisma.chatmessages.count({
     *   where: {
     *     // ... the filter for the Chatmessages we want to count
     *   }
     * })
    **/
    count<T extends chatmessagesCountArgs>(
      args?: Subset<T, chatmessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatmessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatmessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatmessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatmessagesAggregateArgs>(args: Subset<T, ChatmessagesAggregateArgs>): Prisma.PrismaPromise<GetChatmessagesAggregateType<T>>

    /**
     * Group by Chatmessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessagesGroupByArgs} args - Group by arguments.
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
      T extends chatmessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatmessagesGroupByArgs['orderBy'] }
        : { orderBy?: chatmessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatmessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatmessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatmessages model
   */
  readonly fields: chatmessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatmessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatmessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatgroups<T extends chatmessages$chatgroupsArgs<ExtArgs> = {}>(args?: Subset<T, chatmessages$chatgroupsArgs<ExtArgs>>): Prisma__chatgroupsClient<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends chatmessages$usersArgs<ExtArgs> = {}>(args?: Subset<T, chatmessages$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chatmessages model
   */
  interface chatmessagesFieldRefs {
    readonly id: FieldRef<"chatmessages", 'Int'>
    readonly chatGroupId: FieldRef<"chatmessages", 'Int'>
    readonly userIdSender: FieldRef<"chatmessages", 'Int'>
    readonly messageText: FieldRef<"chatmessages", 'String'>
    readonly deletedBy: FieldRef<"chatmessages", 'Int'>
    readonly isDeleted: FieldRef<"chatmessages", 'Boolean'>
    readonly deletedAt: FieldRef<"chatmessages", 'DateTime'>
    readonly createdAt: FieldRef<"chatmessages", 'DateTime'>
    readonly updatedAt: FieldRef<"chatmessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatmessages findUnique
   */
  export type chatmessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatmessages to fetch.
     */
    where: chatmessagesWhereUniqueInput
  }

  /**
   * chatmessages findUniqueOrThrow
   */
  export type chatmessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatmessages to fetch.
     */
    where: chatmessagesWhereUniqueInput
  }

  /**
   * chatmessages findFirst
   */
  export type chatmessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatmessages to fetch.
     */
    where?: chatmessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessagesOrderByWithRelationInput | chatmessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatmessages.
     */
    cursor?: chatmessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatmessages.
     */
    distinct?: ChatmessagesScalarFieldEnum | ChatmessagesScalarFieldEnum[]
  }

  /**
   * chatmessages findFirstOrThrow
   */
  export type chatmessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatmessages to fetch.
     */
    where?: chatmessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessagesOrderByWithRelationInput | chatmessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatmessages.
     */
    cursor?: chatmessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatmessages.
     */
    distinct?: ChatmessagesScalarFieldEnum | ChatmessagesScalarFieldEnum[]
  }

  /**
   * chatmessages findMany
   */
  export type chatmessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * Filter, which chatmessages to fetch.
     */
    where?: chatmessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessagesOrderByWithRelationInput | chatmessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatmessages.
     */
    cursor?: chatmessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatmessages.
     */
    distinct?: ChatmessagesScalarFieldEnum | ChatmessagesScalarFieldEnum[]
  }

  /**
   * chatmessages create
   */
  export type chatmessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a chatmessages.
     */
    data?: XOR<chatmessagesCreateInput, chatmessagesUncheckedCreateInput>
  }

  /**
   * chatmessages createMany
   */
  export type chatmessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatmessages.
     */
    data: chatmessagesCreateManyInput | chatmessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatmessages update
   */
  export type chatmessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a chatmessages.
     */
    data: XOR<chatmessagesUpdateInput, chatmessagesUncheckedUpdateInput>
    /**
     * Choose, which chatmessages to update.
     */
    where: chatmessagesWhereUniqueInput
  }

  /**
   * chatmessages updateMany
   */
  export type chatmessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatmessages.
     */
    data: XOR<chatmessagesUpdateManyMutationInput, chatmessagesUncheckedUpdateManyInput>
    /**
     * Filter which chatmessages to update
     */
    where?: chatmessagesWhereInput
    /**
     * Limit how many chatmessages to update.
     */
    limit?: number
  }

  /**
   * chatmessages upsert
   */
  export type chatmessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the chatmessages to update in case it exists.
     */
    where: chatmessagesWhereUniqueInput
    /**
     * In case the chatmessages found by the `where` argument doesn't exist, create a new chatmessages with this data.
     */
    create: XOR<chatmessagesCreateInput, chatmessagesUncheckedCreateInput>
    /**
     * In case the chatmessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatmessagesUpdateInput, chatmessagesUncheckedUpdateInput>
  }

  /**
   * chatmessages delete
   */
  export type chatmessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    /**
     * Filter which chatmessages to delete.
     */
    where: chatmessagesWhereUniqueInput
  }

  /**
   * chatmessages deleteMany
   */
  export type chatmessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatmessages to delete
     */
    where?: chatmessagesWhereInput
    /**
     * Limit how many chatmessages to delete.
     */
    limit?: number
  }

  /**
   * chatmessages.chatgroups
   */
  export type chatmessages$chatgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    where?: chatgroupsWhereInput
  }

  /**
   * chatmessages.users
   */
  export type chatmessages$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * chatmessages without action
   */
  export type chatmessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
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
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    avatar: number
    age: number
    totpSecret: number
    googleId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
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
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
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
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | users$articlesArgs<ExtArgs>
    chatgroupmembers?: boolean | users$chatgroupmembersArgs<ExtArgs>
    chatgroups?: boolean | users$chatgroupsArgs<ExtArgs>
    chatmessages?: boolean | users$chatmessagesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "avatar" | "age" | "totpSecret" | "googleId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | users$articlesArgs<ExtArgs>
    chatgroupmembers?: boolean | users$chatgroupmembersArgs<ExtArgs>
    chatgroups?: boolean | users$chatgroupsArgs<ExtArgs>
    chatmessages?: boolean | users$chatmessagesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      articles: Prisma.$articlesPayload<ExtArgs>[]
      chatgroupmembers: Prisma.$chatgroupmembersPayload<ExtArgs>[]
      chatgroups: Prisma.$chatgroupsPayload<ExtArgs>[]
      chatmessages: Prisma.$chatmessagesPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string | null
      avatar: string | null
      age: number | null
      totpSecret: string | null
      googleId: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
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
    chatgroupmembers<T extends users$chatgroupmembersArgs<ExtArgs> = {}>(args?: Subset<T, users$chatgroupmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatgroupmembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatgroups<T extends users$chatgroupsArgs<ExtArgs> = {}>(args?: Subset<T, users$chatgroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatgroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatmessages<T extends users$chatmessagesArgs<ExtArgs> = {}>(args?: Subset<T, users$chatmessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly age: FieldRef<"users", 'Int'>
    readonly totpSecret: FieldRef<"users", 'String'>
    readonly googleId: FieldRef<"users", 'String'>
    readonly deletedBy: FieldRef<"users", 'Int'>
    readonly isDeleted: FieldRef<"users", 'Boolean'>
    readonly deletedAt: FieldRef<"users", 'DateTime'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
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
   * users.chatgroupmembers
   */
  export type users$chatgroupmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroupmembers
     */
    select?: chatgroupmembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroupmembers
     */
    omit?: chatgroupmembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupmembersInclude<ExtArgs> | null
    where?: chatgroupmembersWhereInput
    orderBy?: chatgroupmembersOrderByWithRelationInput | chatgroupmembersOrderByWithRelationInput[]
    cursor?: chatgroupmembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatgroupmembersScalarFieldEnum | ChatgroupmembersScalarFieldEnum[]
  }

  /**
   * users.chatgroups
   */
  export type users$chatgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatgroups
     */
    select?: chatgroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatgroups
     */
    omit?: chatgroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatgroupsInclude<ExtArgs> | null
    where?: chatgroupsWhereInput
    orderBy?: chatgroupsOrderByWithRelationInput | chatgroupsOrderByWithRelationInput[]
    cursor?: chatgroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatgroupsScalarFieldEnum | ChatgroupsScalarFieldEnum[]
  }

  /**
   * users.chatmessages
   */
  export type users$chatmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessages
     */
    select?: chatmessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessages
     */
    omit?: chatmessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessagesInclude<ExtArgs> | null
    where?: chatmessagesWhereInput
    orderBy?: chatmessagesOrderByWithRelationInput | chatmessagesOrderByWithRelationInput[]
    cursor?: chatmessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatmessagesScalarFieldEnum | ChatmessagesScalarFieldEnum[]
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


  export const ChatgroupmembersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatGroupId: 'chatGroupId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatgroupmembersScalarFieldEnum = (typeof ChatgroupmembersScalarFieldEnum)[keyof typeof ChatgroupmembersScalarFieldEnum]


  export const ChatgroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatgroupsScalarFieldEnum = (typeof ChatgroupsScalarFieldEnum)[keyof typeof ChatgroupsScalarFieldEnum]


  export const ChatmessagesScalarFieldEnum: {
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

  export type ChatmessagesScalarFieldEnum = (typeof ChatmessagesScalarFieldEnum)[keyof typeof ChatmessagesScalarFieldEnum]


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
    age: 'age',
    totpSecret: 'totpSecret',
    googleId: 'googleId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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


  export const chatgroupsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type chatgroupsOrderByRelevanceFieldEnum = (typeof chatgroupsOrderByRelevanceFieldEnum)[keyof typeof chatgroupsOrderByRelevanceFieldEnum]


  export const chatmessagesOrderByRelevanceFieldEnum: {
    messageText: 'messageText'
  };

  export type chatmessagesOrderByRelevanceFieldEnum = (typeof chatmessagesOrderByRelevanceFieldEnum)[keyof typeof chatmessagesOrderByRelevanceFieldEnum]


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
    googleId: 'googleId'
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

  export type chatgroupmembersWhereInput = {
    AND?: chatgroupmembersWhereInput | chatgroupmembersWhereInput[]
    OR?: chatgroupmembersWhereInput[]
    NOT?: chatgroupmembersWhereInput | chatgroupmembersWhereInput[]
    id?: IntFilter<"chatgroupmembers"> | number
    userId?: IntNullableFilter<"chatgroupmembers"> | number | null
    chatGroupId?: IntNullableFilter<"chatgroupmembers"> | number | null
    deletedBy?: IntFilter<"chatgroupmembers"> | number
    isDeleted?: BoolFilter<"chatgroupmembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatgroupmembers"> | Date | string | null
    createdAt?: DateTimeFilter<"chatgroupmembers"> | Date | string
    updatedAt?: DateTimeFilter<"chatgroupmembers"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatgroups?: XOR<ChatgroupsNullableScalarRelationFilter, chatgroupsWhereInput> | null
  }

  export type chatgroupmembersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: usersOrderByWithRelationInput
    chatgroups?: chatgroupsOrderByWithRelationInput
  }

  export type chatgroupmembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatgroupmembersWhereInput | chatgroupmembersWhereInput[]
    OR?: chatgroupmembersWhereInput[]
    NOT?: chatgroupmembersWhereInput | chatgroupmembersWhereInput[]
    userId?: IntNullableFilter<"chatgroupmembers"> | number | null
    chatGroupId?: IntNullableFilter<"chatgroupmembers"> | number | null
    deletedBy?: IntFilter<"chatgroupmembers"> | number
    isDeleted?: BoolFilter<"chatgroupmembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatgroupmembers"> | Date | string | null
    createdAt?: DateTimeFilter<"chatgroupmembers"> | Date | string
    updatedAt?: DateTimeFilter<"chatgroupmembers"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatgroups?: XOR<ChatgroupsNullableScalarRelationFilter, chatgroupsWhereInput> | null
  }, "id">

  export type chatgroupmembersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatgroupmembersCountOrderByAggregateInput
    _avg?: chatgroupmembersAvgOrderByAggregateInput
    _max?: chatgroupmembersMaxOrderByAggregateInput
    _min?: chatgroupmembersMinOrderByAggregateInput
    _sum?: chatgroupmembersSumOrderByAggregateInput
  }

  export type chatgroupmembersScalarWhereWithAggregatesInput = {
    AND?: chatgroupmembersScalarWhereWithAggregatesInput | chatgroupmembersScalarWhereWithAggregatesInput[]
    OR?: chatgroupmembersScalarWhereWithAggregatesInput[]
    NOT?: chatgroupmembersScalarWhereWithAggregatesInput | chatgroupmembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatgroupmembers"> | number
    userId?: IntNullableWithAggregatesFilter<"chatgroupmembers"> | number | null
    chatGroupId?: IntNullableWithAggregatesFilter<"chatgroupmembers"> | number | null
    deletedBy?: IntWithAggregatesFilter<"chatgroupmembers"> | number
    isDeleted?: BoolWithAggregatesFilter<"chatgroupmembers"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"chatgroupmembers"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatgroupmembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chatgroupmembers"> | Date | string
  }

  export type chatgroupsWhereInput = {
    AND?: chatgroupsWhereInput | chatgroupsWhereInput[]
    OR?: chatgroupsWhereInput[]
    NOT?: chatgroupsWhereInput | chatgroupsWhereInput[]
    id?: IntFilter<"chatgroups"> | number
    name?: StringNullableFilter<"chatgroups"> | string | null
    ownerId?: IntNullableFilter<"chatgroups"> | number | null
    deletedBy?: IntFilter<"chatgroups"> | number
    isDeleted?: BoolFilter<"chatgroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatgroups"> | Date | string | null
    createdAt?: DateTimeFilter<"chatgroups"> | Date | string
    updatedAt?: DateTimeFilter<"chatgroups"> | Date | string
    chatgroupmembers?: ChatgroupmembersListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatmessages?: ChatmessagesListRelationFilter
  }

  export type chatgroupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatgroupmembers?: chatgroupmembersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    chatmessages?: chatmessagesOrderByRelationAggregateInput
    _relevance?: chatgroupsOrderByRelevanceInput
  }

  export type chatgroupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatgroupsWhereInput | chatgroupsWhereInput[]
    OR?: chatgroupsWhereInput[]
    NOT?: chatgroupsWhereInput | chatgroupsWhereInput[]
    name?: StringNullableFilter<"chatgroups"> | string | null
    ownerId?: IntNullableFilter<"chatgroups"> | number | null
    deletedBy?: IntFilter<"chatgroups"> | number
    isDeleted?: BoolFilter<"chatgroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatgroups"> | Date | string | null
    createdAt?: DateTimeFilter<"chatgroups"> | Date | string
    updatedAt?: DateTimeFilter<"chatgroups"> | Date | string
    chatgroupmembers?: ChatgroupmembersListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    chatmessages?: ChatmessagesListRelationFilter
  }, "id">

  export type chatgroupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatgroupsCountOrderByAggregateInput
    _avg?: chatgroupsAvgOrderByAggregateInput
    _max?: chatgroupsMaxOrderByAggregateInput
    _min?: chatgroupsMinOrderByAggregateInput
    _sum?: chatgroupsSumOrderByAggregateInput
  }

  export type chatgroupsScalarWhereWithAggregatesInput = {
    AND?: chatgroupsScalarWhereWithAggregatesInput | chatgroupsScalarWhereWithAggregatesInput[]
    OR?: chatgroupsScalarWhereWithAggregatesInput[]
    NOT?: chatgroupsScalarWhereWithAggregatesInput | chatgroupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatgroups"> | number
    name?: StringNullableWithAggregatesFilter<"chatgroups"> | string | null
    ownerId?: IntNullableWithAggregatesFilter<"chatgroups"> | number | null
    deletedBy?: IntWithAggregatesFilter<"chatgroups"> | number
    isDeleted?: BoolWithAggregatesFilter<"chatgroups"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"chatgroups"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatgroups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chatgroups"> | Date | string
  }

  export type chatmessagesWhereInput = {
    AND?: chatmessagesWhereInput | chatmessagesWhereInput[]
    OR?: chatmessagesWhereInput[]
    NOT?: chatmessagesWhereInput | chatmessagesWhereInput[]
    id?: IntFilter<"chatmessages"> | number
    chatGroupId?: IntNullableFilter<"chatmessages"> | number | null
    userIdSender?: IntNullableFilter<"chatmessages"> | number | null
    messageText?: StringNullableFilter<"chatmessages"> | string | null
    deletedBy?: IntFilter<"chatmessages"> | number
    isDeleted?: BoolFilter<"chatmessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatmessages"> | Date | string | null
    createdAt?: DateTimeFilter<"chatmessages"> | Date | string
    updatedAt?: DateTimeFilter<"chatmessages"> | Date | string
    chatgroups?: XOR<ChatgroupsNullableScalarRelationFilter, chatgroupsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type chatmessagesOrderByWithRelationInput = {
    id?: SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    userIdSender?: SortOrderInput | SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatgroups?: chatgroupsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: chatmessagesOrderByRelevanceInput
  }

  export type chatmessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatmessagesWhereInput | chatmessagesWhereInput[]
    OR?: chatmessagesWhereInput[]
    NOT?: chatmessagesWhereInput | chatmessagesWhereInput[]
    chatGroupId?: IntNullableFilter<"chatmessages"> | number | null
    userIdSender?: IntNullableFilter<"chatmessages"> | number | null
    messageText?: StringNullableFilter<"chatmessages"> | string | null
    deletedBy?: IntFilter<"chatmessages"> | number
    isDeleted?: BoolFilter<"chatmessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatmessages"> | Date | string | null
    createdAt?: DateTimeFilter<"chatmessages"> | Date | string
    updatedAt?: DateTimeFilter<"chatmessages"> | Date | string
    chatgroups?: XOR<ChatgroupsNullableScalarRelationFilter, chatgroupsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type chatmessagesOrderByWithAggregationInput = {
    id?: SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    userIdSender?: SortOrderInput | SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatmessagesCountOrderByAggregateInput
    _avg?: chatmessagesAvgOrderByAggregateInput
    _max?: chatmessagesMaxOrderByAggregateInput
    _min?: chatmessagesMinOrderByAggregateInput
    _sum?: chatmessagesSumOrderByAggregateInput
  }

  export type chatmessagesScalarWhereWithAggregatesInput = {
    AND?: chatmessagesScalarWhereWithAggregatesInput | chatmessagesScalarWhereWithAggregatesInput[]
    OR?: chatmessagesScalarWhereWithAggregatesInput[]
    NOT?: chatmessagesScalarWhereWithAggregatesInput | chatmessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatmessages"> | number
    chatGroupId?: IntNullableWithAggregatesFilter<"chatmessages"> | number | null
    userIdSender?: IntNullableWithAggregatesFilter<"chatmessages"> | number | null
    messageText?: StringNullableWithAggregatesFilter<"chatmessages"> | string | null
    deletedBy?: IntWithAggregatesFilter<"chatmessages"> | number
    isDeleted?: BoolWithAggregatesFilter<"chatmessages"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"chatmessages"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatmessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chatmessages"> | Date | string
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
    age?: IntNullableFilter<"users"> | number | null
    totpSecret?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    deletedBy?: IntFilter<"users"> | number
    isDeleted?: BoolFilter<"users"> | boolean
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    articles?: ArticlesListRelationFilter
    chatgroupmembers?: ChatgroupmembersListRelationFilter
    chatgroups?: ChatgroupsListRelationFilter
    chatmessages?: ChatmessagesListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: articlesOrderByRelationAggregateInput
    chatgroupmembers?: chatgroupmembersOrderByRelationAggregateInput
    chatgroups?: chatgroupsOrderByRelationAggregateInput
    chatmessages?: chatmessagesOrderByRelationAggregateInput
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
    age?: IntNullableFilter<"users"> | number | null
    totpSecret?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    deletedBy?: IntFilter<"users"> | number
    isDeleted?: BoolFilter<"users"> | boolean
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    articles?: ArticlesListRelationFilter
    chatgroupmembers?: ChatgroupmembersListRelationFilter
    chatgroups?: ChatgroupsListRelationFilter
    chatmessages?: ChatmessagesListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    totpSecret?: StringNullableWithAggregatesFilter<"users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"users"> | string | null
    deletedBy?: IntWithAggregatesFilter<"users"> | number
    isDeleted?: BoolWithAggregatesFilter<"users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
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

  export type chatgroupmembersCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutChatgroupmembersInput
    chatgroups?: chatgroupsCreateNestedOneWithoutChatgroupmembersInput
  }

  export type chatgroupmembersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupmembersUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutChatgroupmembersNestedInput
    chatgroups?: chatgroupsUpdateOneWithoutChatgroupmembersNestedInput
  }

  export type chatgroupmembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupmembersCreateManyInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupmembersUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupmembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupsCreateInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutChatgroupsInput
    users?: usersCreateNestedOneWithoutChatgroupsInput
    chatmessages?: chatmessagesCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsUncheckedCreateInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutChatgroupsInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutChatgroupsNestedInput
    users?: usersUpdateOneWithoutChatgroupsNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutChatgroupsNestedInput
  }

  export type chatgroupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutChatgroupsNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutChatgroupsNestedInput
  }

  export type chatgroupsCreateManyInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessagesCreateInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroups?: chatgroupsCreateNestedOneWithoutChatmessagesInput
    users?: usersCreateNestedOneWithoutChatmessagesInput
  }

  export type chatmessagesUncheckedCreateInput = {
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

  export type chatmessagesUpdateInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroups?: chatgroupsUpdateOneWithoutChatmessagesNestedInput
    users?: usersUpdateOneWithoutChatmessagesNestedInput
  }

  export type chatmessagesUncheckedUpdateInput = {
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

  export type chatmessagesCreateManyInput = {
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

  export type chatmessagesUpdateManyMutationInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessagesUncheckedUpdateManyInput = {
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
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsUncheckedCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ChatgroupsNullableScalarRelationFilter = {
    is?: chatgroupsWhereInput | null
    isNot?: chatgroupsWhereInput | null
  }

  export type chatgroupmembersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatgroupmembersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatgroupmembersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatgroupmembersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatgroupmembersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatgroupmembersListRelationFilter = {
    every?: chatgroupmembersWhereInput
    some?: chatgroupmembersWhereInput
    none?: chatgroupmembersWhereInput
  }

  export type ChatmessagesListRelationFilter = {
    every?: chatmessagesWhereInput
    some?: chatmessagesWhereInput
    none?: chatmessagesWhereInput
  }

  export type chatgroupmembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatmessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatgroupsOrderByRelevanceInput = {
    fields: chatgroupsOrderByRelevanceFieldEnum | chatgroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chatgroupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatgroupsAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatgroupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatgroupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatgroupsSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatmessagesOrderByRelevanceInput = {
    fields: chatmessagesOrderByRelevanceFieldEnum | chatmessagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chatmessagesCountOrderByAggregateInput = {
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

  export type chatmessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type chatmessagesMaxOrderByAggregateInput = {
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

  export type chatmessagesMinOrderByAggregateInput = {
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

  export type chatmessagesSumOrderByAggregateInput = {
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

  export type ChatgroupsListRelationFilter = {
    every?: chatgroupsWhereInput
    some?: chatgroupsWhereInput
    none?: chatgroupsWhereInput
  }

  export type articlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatgroupsOrderByRelationAggregateInput = {
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
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type usersCreateNestedOneWithoutChatgroupmembersInput = {
    create?: XOR<usersCreateWithoutChatgroupmembersInput, usersUncheckedCreateWithoutChatgroupmembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatgroupmembersInput
    connect?: usersWhereUniqueInput
  }

  export type chatgroupsCreateNestedOneWithoutChatgroupmembersInput = {
    create?: XOR<chatgroupsCreateWithoutChatgroupmembersInput, chatgroupsUncheckedCreateWithoutChatgroupmembersInput>
    connectOrCreate?: chatgroupsCreateOrConnectWithoutChatgroupmembersInput
    connect?: chatgroupsWhereUniqueInput
  }

  export type usersUpdateOneWithoutChatgroupmembersNestedInput = {
    create?: XOR<usersCreateWithoutChatgroupmembersInput, usersUncheckedCreateWithoutChatgroupmembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatgroupmembersInput
    upsert?: usersUpsertWithoutChatgroupmembersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatgroupmembersInput, usersUpdateWithoutChatgroupmembersInput>, usersUncheckedUpdateWithoutChatgroupmembersInput>
  }

  export type chatgroupsUpdateOneWithoutChatgroupmembersNestedInput = {
    create?: XOR<chatgroupsCreateWithoutChatgroupmembersInput, chatgroupsUncheckedCreateWithoutChatgroupmembersInput>
    connectOrCreate?: chatgroupsCreateOrConnectWithoutChatgroupmembersInput
    upsert?: chatgroupsUpsertWithoutChatgroupmembersInput
    disconnect?: chatgroupsWhereInput | boolean
    delete?: chatgroupsWhereInput | boolean
    connect?: chatgroupsWhereUniqueInput
    update?: XOR<XOR<chatgroupsUpdateToOneWithWhereWithoutChatgroupmembersInput, chatgroupsUpdateWithoutChatgroupmembersInput>, chatgroupsUncheckedUpdateWithoutChatgroupmembersInput>
  }

  export type chatgroupmembersCreateNestedManyWithoutChatgroupsInput = {
    create?: XOR<chatgroupmembersCreateWithoutChatgroupsInput, chatgroupmembersUncheckedCreateWithoutChatgroupsInput> | chatgroupmembersCreateWithoutChatgroupsInput[] | chatgroupmembersUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutChatgroupsInput | chatgroupmembersCreateOrConnectWithoutChatgroupsInput[]
    createMany?: chatgroupmembersCreateManyChatgroupsInputEnvelope
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutChatgroupsInput = {
    create?: XOR<usersCreateWithoutChatgroupsInput, usersUncheckedCreateWithoutChatgroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatgroupsInput
    connect?: usersWhereUniqueInput
  }

  export type chatmessagesCreateNestedManyWithoutChatgroupsInput = {
    create?: XOR<chatmessagesCreateWithoutChatgroupsInput, chatmessagesUncheckedCreateWithoutChatgroupsInput> | chatmessagesCreateWithoutChatgroupsInput[] | chatmessagesUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutChatgroupsInput | chatmessagesCreateOrConnectWithoutChatgroupsInput[]
    createMany?: chatmessagesCreateManyChatgroupsInputEnvelope
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
  }

  export type chatgroupmembersUncheckedCreateNestedManyWithoutChatgroupsInput = {
    create?: XOR<chatgroupmembersCreateWithoutChatgroupsInput, chatgroupmembersUncheckedCreateWithoutChatgroupsInput> | chatgroupmembersCreateWithoutChatgroupsInput[] | chatgroupmembersUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutChatgroupsInput | chatgroupmembersCreateOrConnectWithoutChatgroupsInput[]
    createMany?: chatgroupmembersCreateManyChatgroupsInputEnvelope
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
  }

  export type chatmessagesUncheckedCreateNestedManyWithoutChatgroupsInput = {
    create?: XOR<chatmessagesCreateWithoutChatgroupsInput, chatmessagesUncheckedCreateWithoutChatgroupsInput> | chatmessagesCreateWithoutChatgroupsInput[] | chatmessagesUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutChatgroupsInput | chatmessagesCreateOrConnectWithoutChatgroupsInput[]
    createMany?: chatmessagesCreateManyChatgroupsInputEnvelope
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
  }

  export type chatgroupmembersUpdateManyWithoutChatgroupsNestedInput = {
    create?: XOR<chatgroupmembersCreateWithoutChatgroupsInput, chatgroupmembersUncheckedCreateWithoutChatgroupsInput> | chatgroupmembersCreateWithoutChatgroupsInput[] | chatgroupmembersUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutChatgroupsInput | chatgroupmembersCreateOrConnectWithoutChatgroupsInput[]
    upsert?: chatgroupmembersUpsertWithWhereUniqueWithoutChatgroupsInput | chatgroupmembersUpsertWithWhereUniqueWithoutChatgroupsInput[]
    createMany?: chatgroupmembersCreateManyChatgroupsInputEnvelope
    set?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    disconnect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    delete?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    update?: chatgroupmembersUpdateWithWhereUniqueWithoutChatgroupsInput | chatgroupmembersUpdateWithWhereUniqueWithoutChatgroupsInput[]
    updateMany?: chatgroupmembersUpdateManyWithWhereWithoutChatgroupsInput | chatgroupmembersUpdateManyWithWhereWithoutChatgroupsInput[]
    deleteMany?: chatgroupmembersScalarWhereInput | chatgroupmembersScalarWhereInput[]
  }

  export type usersUpdateOneWithoutChatgroupsNestedInput = {
    create?: XOR<usersCreateWithoutChatgroupsInput, usersUncheckedCreateWithoutChatgroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatgroupsInput
    upsert?: usersUpsertWithoutChatgroupsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatgroupsInput, usersUpdateWithoutChatgroupsInput>, usersUncheckedUpdateWithoutChatgroupsInput>
  }

  export type chatmessagesUpdateManyWithoutChatgroupsNestedInput = {
    create?: XOR<chatmessagesCreateWithoutChatgroupsInput, chatmessagesUncheckedCreateWithoutChatgroupsInput> | chatmessagesCreateWithoutChatgroupsInput[] | chatmessagesUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutChatgroupsInput | chatmessagesCreateOrConnectWithoutChatgroupsInput[]
    upsert?: chatmessagesUpsertWithWhereUniqueWithoutChatgroupsInput | chatmessagesUpsertWithWhereUniqueWithoutChatgroupsInput[]
    createMany?: chatmessagesCreateManyChatgroupsInputEnvelope
    set?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    disconnect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    delete?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    update?: chatmessagesUpdateWithWhereUniqueWithoutChatgroupsInput | chatmessagesUpdateWithWhereUniqueWithoutChatgroupsInput[]
    updateMany?: chatmessagesUpdateManyWithWhereWithoutChatgroupsInput | chatmessagesUpdateManyWithWhereWithoutChatgroupsInput[]
    deleteMany?: chatmessagesScalarWhereInput | chatmessagesScalarWhereInput[]
  }

  export type chatgroupmembersUncheckedUpdateManyWithoutChatgroupsNestedInput = {
    create?: XOR<chatgroupmembersCreateWithoutChatgroupsInput, chatgroupmembersUncheckedCreateWithoutChatgroupsInput> | chatgroupmembersCreateWithoutChatgroupsInput[] | chatgroupmembersUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutChatgroupsInput | chatgroupmembersCreateOrConnectWithoutChatgroupsInput[]
    upsert?: chatgroupmembersUpsertWithWhereUniqueWithoutChatgroupsInput | chatgroupmembersUpsertWithWhereUniqueWithoutChatgroupsInput[]
    createMany?: chatgroupmembersCreateManyChatgroupsInputEnvelope
    set?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    disconnect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    delete?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    update?: chatgroupmembersUpdateWithWhereUniqueWithoutChatgroupsInput | chatgroupmembersUpdateWithWhereUniqueWithoutChatgroupsInput[]
    updateMany?: chatgroupmembersUpdateManyWithWhereWithoutChatgroupsInput | chatgroupmembersUpdateManyWithWhereWithoutChatgroupsInput[]
    deleteMany?: chatgroupmembersScalarWhereInput | chatgroupmembersScalarWhereInput[]
  }

  export type chatmessagesUncheckedUpdateManyWithoutChatgroupsNestedInput = {
    create?: XOR<chatmessagesCreateWithoutChatgroupsInput, chatmessagesUncheckedCreateWithoutChatgroupsInput> | chatmessagesCreateWithoutChatgroupsInput[] | chatmessagesUncheckedCreateWithoutChatgroupsInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutChatgroupsInput | chatmessagesCreateOrConnectWithoutChatgroupsInput[]
    upsert?: chatmessagesUpsertWithWhereUniqueWithoutChatgroupsInput | chatmessagesUpsertWithWhereUniqueWithoutChatgroupsInput[]
    createMany?: chatmessagesCreateManyChatgroupsInputEnvelope
    set?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    disconnect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    delete?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    update?: chatmessagesUpdateWithWhereUniqueWithoutChatgroupsInput | chatmessagesUpdateWithWhereUniqueWithoutChatgroupsInput[]
    updateMany?: chatmessagesUpdateManyWithWhereWithoutChatgroupsInput | chatmessagesUpdateManyWithWhereWithoutChatgroupsInput[]
    deleteMany?: chatmessagesScalarWhereInput | chatmessagesScalarWhereInput[]
  }

  export type chatgroupsCreateNestedOneWithoutChatmessagesInput = {
    create?: XOR<chatgroupsCreateWithoutChatmessagesInput, chatgroupsUncheckedCreateWithoutChatmessagesInput>
    connectOrCreate?: chatgroupsCreateOrConnectWithoutChatmessagesInput
    connect?: chatgroupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutChatmessagesInput = {
    create?: XOR<usersCreateWithoutChatmessagesInput, usersUncheckedCreateWithoutChatmessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatmessagesInput
    connect?: usersWhereUniqueInput
  }

  export type chatgroupsUpdateOneWithoutChatmessagesNestedInput = {
    create?: XOR<chatgroupsCreateWithoutChatmessagesInput, chatgroupsUncheckedCreateWithoutChatmessagesInput>
    connectOrCreate?: chatgroupsCreateOrConnectWithoutChatmessagesInput
    upsert?: chatgroupsUpsertWithoutChatmessagesInput
    disconnect?: chatgroupsWhereInput | boolean
    delete?: chatgroupsWhereInput | boolean
    connect?: chatgroupsWhereUniqueInput
    update?: XOR<XOR<chatgroupsUpdateToOneWithWhereWithoutChatmessagesInput, chatgroupsUpdateWithoutChatmessagesInput>, chatgroupsUncheckedUpdateWithoutChatmessagesInput>
  }

  export type usersUpdateOneWithoutChatmessagesNestedInput = {
    create?: XOR<usersCreateWithoutChatmessagesInput, usersUncheckedCreateWithoutChatmessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatmessagesInput
    upsert?: usersUpsertWithoutChatmessagesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatmessagesInput, usersUpdateWithoutChatmessagesInput>, usersUncheckedUpdateWithoutChatmessagesInput>
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

  export type chatgroupmembersCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatgroupmembersCreateWithoutUsersInput, chatgroupmembersUncheckedCreateWithoutUsersInput> | chatgroupmembersCreateWithoutUsersInput[] | chatgroupmembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutUsersInput | chatgroupmembersCreateOrConnectWithoutUsersInput[]
    createMany?: chatgroupmembersCreateManyUsersInputEnvelope
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
  }

  export type chatgroupsCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatgroupsCreateWithoutUsersInput, chatgroupsUncheckedCreateWithoutUsersInput> | chatgroupsCreateWithoutUsersInput[] | chatgroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupsCreateOrConnectWithoutUsersInput | chatgroupsCreateOrConnectWithoutUsersInput[]
    createMany?: chatgroupsCreateManyUsersInputEnvelope
    connect?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
  }

  export type chatmessagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatmessagesCreateWithoutUsersInput, chatmessagesUncheckedCreateWithoutUsersInput> | chatmessagesCreateWithoutUsersInput[] | chatmessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutUsersInput | chatmessagesCreateOrConnectWithoutUsersInput[]
    createMany?: chatmessagesCreateManyUsersInputEnvelope
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
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

  export type chatgroupmembersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatgroupmembersCreateWithoutUsersInput, chatgroupmembersUncheckedCreateWithoutUsersInput> | chatgroupmembersCreateWithoutUsersInput[] | chatgroupmembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutUsersInput | chatgroupmembersCreateOrConnectWithoutUsersInput[]
    createMany?: chatgroupmembersCreateManyUsersInputEnvelope
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
  }

  export type chatgroupsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatgroupsCreateWithoutUsersInput, chatgroupsUncheckedCreateWithoutUsersInput> | chatgroupsCreateWithoutUsersInput[] | chatgroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupsCreateOrConnectWithoutUsersInput | chatgroupsCreateOrConnectWithoutUsersInput[]
    createMany?: chatgroupsCreateManyUsersInputEnvelope
    connect?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
  }

  export type chatmessagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatmessagesCreateWithoutUsersInput, chatmessagesUncheckedCreateWithoutUsersInput> | chatmessagesCreateWithoutUsersInput[] | chatmessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutUsersInput | chatmessagesCreateOrConnectWithoutUsersInput[]
    createMany?: chatmessagesCreateManyUsersInputEnvelope
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
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

  export type chatgroupmembersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatgroupmembersCreateWithoutUsersInput, chatgroupmembersUncheckedCreateWithoutUsersInput> | chatgroupmembersCreateWithoutUsersInput[] | chatgroupmembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutUsersInput | chatgroupmembersCreateOrConnectWithoutUsersInput[]
    upsert?: chatgroupmembersUpsertWithWhereUniqueWithoutUsersInput | chatgroupmembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatgroupmembersCreateManyUsersInputEnvelope
    set?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    disconnect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    delete?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    update?: chatgroupmembersUpdateWithWhereUniqueWithoutUsersInput | chatgroupmembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatgroupmembersUpdateManyWithWhereWithoutUsersInput | chatgroupmembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatgroupmembersScalarWhereInput | chatgroupmembersScalarWhereInput[]
  }

  export type chatgroupsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatgroupsCreateWithoutUsersInput, chatgroupsUncheckedCreateWithoutUsersInput> | chatgroupsCreateWithoutUsersInput[] | chatgroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupsCreateOrConnectWithoutUsersInput | chatgroupsCreateOrConnectWithoutUsersInput[]
    upsert?: chatgroupsUpsertWithWhereUniqueWithoutUsersInput | chatgroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatgroupsCreateManyUsersInputEnvelope
    set?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    disconnect?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    delete?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    connect?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    update?: chatgroupsUpdateWithWhereUniqueWithoutUsersInput | chatgroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatgroupsUpdateManyWithWhereWithoutUsersInput | chatgroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatgroupsScalarWhereInput | chatgroupsScalarWhereInput[]
  }

  export type chatmessagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatmessagesCreateWithoutUsersInput, chatmessagesUncheckedCreateWithoutUsersInput> | chatmessagesCreateWithoutUsersInput[] | chatmessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutUsersInput | chatmessagesCreateOrConnectWithoutUsersInput[]
    upsert?: chatmessagesUpsertWithWhereUniqueWithoutUsersInput | chatmessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatmessagesCreateManyUsersInputEnvelope
    set?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    disconnect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    delete?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    update?: chatmessagesUpdateWithWhereUniqueWithoutUsersInput | chatmessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatmessagesUpdateManyWithWhereWithoutUsersInput | chatmessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatmessagesScalarWhereInput | chatmessagesScalarWhereInput[]
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

  export type chatgroupmembersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatgroupmembersCreateWithoutUsersInput, chatgroupmembersUncheckedCreateWithoutUsersInput> | chatgroupmembersCreateWithoutUsersInput[] | chatgroupmembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupmembersCreateOrConnectWithoutUsersInput | chatgroupmembersCreateOrConnectWithoutUsersInput[]
    upsert?: chatgroupmembersUpsertWithWhereUniqueWithoutUsersInput | chatgroupmembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatgroupmembersCreateManyUsersInputEnvelope
    set?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    disconnect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    delete?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    connect?: chatgroupmembersWhereUniqueInput | chatgroupmembersWhereUniqueInput[]
    update?: chatgroupmembersUpdateWithWhereUniqueWithoutUsersInput | chatgroupmembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatgroupmembersUpdateManyWithWhereWithoutUsersInput | chatgroupmembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatgroupmembersScalarWhereInput | chatgroupmembersScalarWhereInput[]
  }

  export type chatgroupsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatgroupsCreateWithoutUsersInput, chatgroupsUncheckedCreateWithoutUsersInput> | chatgroupsCreateWithoutUsersInput[] | chatgroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatgroupsCreateOrConnectWithoutUsersInput | chatgroupsCreateOrConnectWithoutUsersInput[]
    upsert?: chatgroupsUpsertWithWhereUniqueWithoutUsersInput | chatgroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatgroupsCreateManyUsersInputEnvelope
    set?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    disconnect?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    delete?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    connect?: chatgroupsWhereUniqueInput | chatgroupsWhereUniqueInput[]
    update?: chatgroupsUpdateWithWhereUniqueWithoutUsersInput | chatgroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatgroupsUpdateManyWithWhereWithoutUsersInput | chatgroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatgroupsScalarWhereInput | chatgroupsScalarWhereInput[]
  }

  export type chatmessagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatmessagesCreateWithoutUsersInput, chatmessagesUncheckedCreateWithoutUsersInput> | chatmessagesCreateWithoutUsersInput[] | chatmessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatmessagesCreateOrConnectWithoutUsersInput | chatmessagesCreateOrConnectWithoutUsersInput[]
    upsert?: chatmessagesUpsertWithWhereUniqueWithoutUsersInput | chatmessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatmessagesCreateManyUsersInputEnvelope
    set?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    disconnect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    delete?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    connect?: chatmessagesWhereUniqueInput | chatmessagesWhereUniqueInput[]
    update?: chatmessagesUpdateWithWhereUniqueWithoutUsersInput | chatmessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatmessagesUpdateManyWithWhereWithoutUsersInput | chatmessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatmessagesScalarWhereInput | chatmessagesScalarWhereInput[]
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
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutArticlesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsUncheckedCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutUsersInput
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
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutChatgroupmembersInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatgroupmembersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsUncheckedCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatgroupmembersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatgroupmembersInput, usersUncheckedCreateWithoutChatgroupmembersInput>
  }

  export type chatgroupsCreateWithoutChatgroupmembersInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutChatgroupsInput
    chatmessages?: chatmessagesCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsUncheckedCreateWithoutChatgroupmembersInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsCreateOrConnectWithoutChatgroupmembersInput = {
    where: chatgroupsWhereUniqueInput
    create: XOR<chatgroupsCreateWithoutChatgroupmembersInput, chatgroupsUncheckedCreateWithoutChatgroupmembersInput>
  }

  export type usersUpsertWithoutChatgroupmembersInput = {
    update: XOR<usersUpdateWithoutChatgroupmembersInput, usersUncheckedUpdateWithoutChatgroupmembersInput>
    create: XOR<usersCreateWithoutChatgroupmembersInput, usersUncheckedCreateWithoutChatgroupmembersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatgroupmembersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatgroupmembersInput, usersUncheckedUpdateWithoutChatgroupmembersInput>
  }

  export type usersUpdateWithoutChatgroupmembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatgroupmembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatgroupsUpsertWithoutChatgroupmembersInput = {
    update: XOR<chatgroupsUpdateWithoutChatgroupmembersInput, chatgroupsUncheckedUpdateWithoutChatgroupmembersInput>
    create: XOR<chatgroupsCreateWithoutChatgroupmembersInput, chatgroupsUncheckedCreateWithoutChatgroupmembersInput>
    where?: chatgroupsWhereInput
  }

  export type chatgroupsUpdateToOneWithWhereWithoutChatgroupmembersInput = {
    where?: chatgroupsWhereInput
    data: XOR<chatgroupsUpdateWithoutChatgroupmembersInput, chatgroupsUncheckedUpdateWithoutChatgroupmembersInput>
  }

  export type chatgroupsUpdateWithoutChatgroupmembersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutChatgroupsNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutChatgroupsNestedInput
  }

  export type chatgroupsUncheckedUpdateWithoutChatgroupmembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutChatgroupsNestedInput
  }

  export type chatgroupmembersCreateWithoutChatgroupsInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutChatgroupmembersInput
  }

  export type chatgroupmembersUncheckedCreateWithoutChatgroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupmembersCreateOrConnectWithoutChatgroupsInput = {
    where: chatgroupmembersWhereUniqueInput
    create: XOR<chatgroupmembersCreateWithoutChatgroupsInput, chatgroupmembersUncheckedCreateWithoutChatgroupsInput>
  }

  export type chatgroupmembersCreateManyChatgroupsInputEnvelope = {
    data: chatgroupmembersCreateManyChatgroupsInput | chatgroupmembersCreateManyChatgroupsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutChatgroupsInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatgroupsInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatgroupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatgroupsInput, usersUncheckedCreateWithoutChatgroupsInput>
  }

  export type chatmessagesCreateWithoutChatgroupsInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutChatmessagesInput
  }

  export type chatmessagesUncheckedCreateWithoutChatgroupsInput = {
    id?: number
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatmessagesCreateOrConnectWithoutChatgroupsInput = {
    where: chatmessagesWhereUniqueInput
    create: XOR<chatmessagesCreateWithoutChatgroupsInput, chatmessagesUncheckedCreateWithoutChatgroupsInput>
  }

  export type chatmessagesCreateManyChatgroupsInputEnvelope = {
    data: chatmessagesCreateManyChatgroupsInput | chatmessagesCreateManyChatgroupsInput[]
    skipDuplicates?: boolean
  }

  export type chatgroupmembersUpsertWithWhereUniqueWithoutChatgroupsInput = {
    where: chatgroupmembersWhereUniqueInput
    update: XOR<chatgroupmembersUpdateWithoutChatgroupsInput, chatgroupmembersUncheckedUpdateWithoutChatgroupsInput>
    create: XOR<chatgroupmembersCreateWithoutChatgroupsInput, chatgroupmembersUncheckedCreateWithoutChatgroupsInput>
  }

  export type chatgroupmembersUpdateWithWhereUniqueWithoutChatgroupsInput = {
    where: chatgroupmembersWhereUniqueInput
    data: XOR<chatgroupmembersUpdateWithoutChatgroupsInput, chatgroupmembersUncheckedUpdateWithoutChatgroupsInput>
  }

  export type chatgroupmembersUpdateManyWithWhereWithoutChatgroupsInput = {
    where: chatgroupmembersScalarWhereInput
    data: XOR<chatgroupmembersUpdateManyMutationInput, chatgroupmembersUncheckedUpdateManyWithoutChatgroupsInput>
  }

  export type chatgroupmembersScalarWhereInput = {
    AND?: chatgroupmembersScalarWhereInput | chatgroupmembersScalarWhereInput[]
    OR?: chatgroupmembersScalarWhereInput[]
    NOT?: chatgroupmembersScalarWhereInput | chatgroupmembersScalarWhereInput[]
    id?: IntFilter<"chatgroupmembers"> | number
    userId?: IntNullableFilter<"chatgroupmembers"> | number | null
    chatGroupId?: IntNullableFilter<"chatgroupmembers"> | number | null
    deletedBy?: IntFilter<"chatgroupmembers"> | number
    isDeleted?: BoolFilter<"chatgroupmembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatgroupmembers"> | Date | string | null
    createdAt?: DateTimeFilter<"chatgroupmembers"> | Date | string
    updatedAt?: DateTimeFilter<"chatgroupmembers"> | Date | string
  }

  export type usersUpsertWithoutChatgroupsInput = {
    update: XOR<usersUpdateWithoutChatgroupsInput, usersUncheckedUpdateWithoutChatgroupsInput>
    create: XOR<usersCreateWithoutChatgroupsInput, usersUncheckedCreateWithoutChatgroupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatgroupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatgroupsInput, usersUncheckedUpdateWithoutChatgroupsInput>
  }

  export type usersUpdateWithoutChatgroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatgroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatmessagesUpsertWithWhereUniqueWithoutChatgroupsInput = {
    where: chatmessagesWhereUniqueInput
    update: XOR<chatmessagesUpdateWithoutChatgroupsInput, chatmessagesUncheckedUpdateWithoutChatgroupsInput>
    create: XOR<chatmessagesCreateWithoutChatgroupsInput, chatmessagesUncheckedCreateWithoutChatgroupsInput>
  }

  export type chatmessagesUpdateWithWhereUniqueWithoutChatgroupsInput = {
    where: chatmessagesWhereUniqueInput
    data: XOR<chatmessagesUpdateWithoutChatgroupsInput, chatmessagesUncheckedUpdateWithoutChatgroupsInput>
  }

  export type chatmessagesUpdateManyWithWhereWithoutChatgroupsInput = {
    where: chatmessagesScalarWhereInput
    data: XOR<chatmessagesUpdateManyMutationInput, chatmessagesUncheckedUpdateManyWithoutChatgroupsInput>
  }

  export type chatmessagesScalarWhereInput = {
    AND?: chatmessagesScalarWhereInput | chatmessagesScalarWhereInput[]
    OR?: chatmessagesScalarWhereInput[]
    NOT?: chatmessagesScalarWhereInput | chatmessagesScalarWhereInput[]
    id?: IntFilter<"chatmessages"> | number
    chatGroupId?: IntNullableFilter<"chatmessages"> | number | null
    userIdSender?: IntNullableFilter<"chatmessages"> | number | null
    messageText?: StringNullableFilter<"chatmessages"> | string | null
    deletedBy?: IntFilter<"chatmessages"> | number
    isDeleted?: BoolFilter<"chatmessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatmessages"> | Date | string | null
    createdAt?: DateTimeFilter<"chatmessages"> | Date | string
    updatedAt?: DateTimeFilter<"chatmessages"> | Date | string
  }

  export type chatgroupsCreateWithoutChatmessagesInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutChatgroupsInput
    users?: usersCreateNestedOneWithoutChatgroupsInput
  }

  export type chatgroupsUncheckedCreateWithoutChatmessagesInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsCreateOrConnectWithoutChatmessagesInput = {
    where: chatgroupsWhereUniqueInput
    create: XOR<chatgroupsCreateWithoutChatmessagesInput, chatgroupsUncheckedCreateWithoutChatmessagesInput>
  }

  export type usersCreateWithoutChatmessagesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatmessagesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatmessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatmessagesInput, usersUncheckedCreateWithoutChatmessagesInput>
  }

  export type chatgroupsUpsertWithoutChatmessagesInput = {
    update: XOR<chatgroupsUpdateWithoutChatmessagesInput, chatgroupsUncheckedUpdateWithoutChatmessagesInput>
    create: XOR<chatgroupsCreateWithoutChatmessagesInput, chatgroupsUncheckedCreateWithoutChatmessagesInput>
    where?: chatgroupsWhereInput
  }

  export type chatgroupsUpdateToOneWithWhereWithoutChatmessagesInput = {
    where?: chatgroupsWhereInput
    data: XOR<chatgroupsUpdateWithoutChatmessagesInput, chatgroupsUncheckedUpdateWithoutChatmessagesInput>
  }

  export type chatgroupsUpdateWithoutChatmessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutChatgroupsNestedInput
    users?: usersUpdateOneWithoutChatgroupsNestedInput
  }

  export type chatgroupsUncheckedUpdateWithoutChatmessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutChatgroupsNestedInput
  }

  export type usersUpsertWithoutChatmessagesInput = {
    update: XOR<usersUpdateWithoutChatmessagesInput, usersUncheckedUpdateWithoutChatmessagesInput>
    create: XOR<usersCreateWithoutChatmessagesInput, usersUncheckedCreateWithoutChatmessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatmessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatmessagesInput, usersUncheckedUpdateWithoutChatmessagesInput>
  }

  export type usersUpdateWithoutChatmessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatmessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUncheckedUpdateManyWithoutUsersNestedInput
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
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutUsersInput
    chatgroups?: chatgroupsUncheckedCreateNestedManyWithoutUsersInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutUsersInput
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
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: articlesUncheckedUpdateManyWithoutUsersNestedInput
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutUsersNestedInput
    chatgroups?: chatgroupsUncheckedUpdateManyWithoutUsersNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutUsersNestedInput
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

  export type chatgroupmembersCreateWithoutUsersInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroups?: chatgroupsCreateNestedOneWithoutChatgroupmembersInput
  }

  export type chatgroupmembersUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupmembersCreateOrConnectWithoutUsersInput = {
    where: chatgroupmembersWhereUniqueInput
    create: XOR<chatgroupmembersCreateWithoutUsersInput, chatgroupmembersUncheckedCreateWithoutUsersInput>
  }

  export type chatgroupmembersCreateManyUsersInputEnvelope = {
    data: chatgroupmembersCreateManyUsersInput | chatgroupmembersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chatgroupsCreateWithoutUsersInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersCreateNestedManyWithoutChatgroupsInput
    chatmessages?: chatmessagesCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroupmembers?: chatgroupmembersUncheckedCreateNestedManyWithoutChatgroupsInput
    chatmessages?: chatmessagesUncheckedCreateNestedManyWithoutChatgroupsInput
  }

  export type chatgroupsCreateOrConnectWithoutUsersInput = {
    where: chatgroupsWhereUniqueInput
    create: XOR<chatgroupsCreateWithoutUsersInput, chatgroupsUncheckedCreateWithoutUsersInput>
  }

  export type chatgroupsCreateManyUsersInputEnvelope = {
    data: chatgroupsCreateManyUsersInput | chatgroupsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chatmessagesCreateWithoutUsersInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatgroups?: chatgroupsCreateNestedOneWithoutChatmessagesInput
  }

  export type chatmessagesUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatmessagesCreateOrConnectWithoutUsersInput = {
    where: chatmessagesWhereUniqueInput
    create: XOR<chatmessagesCreateWithoutUsersInput, chatmessagesUncheckedCreateWithoutUsersInput>
  }

  export type chatmessagesCreateManyUsersInputEnvelope = {
    data: chatmessagesCreateManyUsersInput | chatmessagesCreateManyUsersInput[]
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

  export type chatgroupmembersUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatgroupmembersWhereUniqueInput
    update: XOR<chatgroupmembersUpdateWithoutUsersInput, chatgroupmembersUncheckedUpdateWithoutUsersInput>
    create: XOR<chatgroupmembersCreateWithoutUsersInput, chatgroupmembersUncheckedCreateWithoutUsersInput>
  }

  export type chatgroupmembersUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatgroupmembersWhereUniqueInput
    data: XOR<chatgroupmembersUpdateWithoutUsersInput, chatgroupmembersUncheckedUpdateWithoutUsersInput>
  }

  export type chatgroupmembersUpdateManyWithWhereWithoutUsersInput = {
    where: chatgroupmembersScalarWhereInput
    data: XOR<chatgroupmembersUpdateManyMutationInput, chatgroupmembersUncheckedUpdateManyWithoutUsersInput>
  }

  export type chatgroupsUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatgroupsWhereUniqueInput
    update: XOR<chatgroupsUpdateWithoutUsersInput, chatgroupsUncheckedUpdateWithoutUsersInput>
    create: XOR<chatgroupsCreateWithoutUsersInput, chatgroupsUncheckedCreateWithoutUsersInput>
  }

  export type chatgroupsUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatgroupsWhereUniqueInput
    data: XOR<chatgroupsUpdateWithoutUsersInput, chatgroupsUncheckedUpdateWithoutUsersInput>
  }

  export type chatgroupsUpdateManyWithWhereWithoutUsersInput = {
    where: chatgroupsScalarWhereInput
    data: XOR<chatgroupsUpdateManyMutationInput, chatgroupsUncheckedUpdateManyWithoutUsersInput>
  }

  export type chatgroupsScalarWhereInput = {
    AND?: chatgroupsScalarWhereInput | chatgroupsScalarWhereInput[]
    OR?: chatgroupsScalarWhereInput[]
    NOT?: chatgroupsScalarWhereInput | chatgroupsScalarWhereInput[]
    id?: IntFilter<"chatgroups"> | number
    name?: StringNullableFilter<"chatgroups"> | string | null
    ownerId?: IntNullableFilter<"chatgroups"> | number | null
    deletedBy?: IntFilter<"chatgroups"> | number
    isDeleted?: BoolFilter<"chatgroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"chatgroups"> | Date | string | null
    createdAt?: DateTimeFilter<"chatgroups"> | Date | string
    updatedAt?: DateTimeFilter<"chatgroups"> | Date | string
  }

  export type chatmessagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatmessagesWhereUniqueInput
    update: XOR<chatmessagesUpdateWithoutUsersInput, chatmessagesUncheckedUpdateWithoutUsersInput>
    create: XOR<chatmessagesCreateWithoutUsersInput, chatmessagesUncheckedCreateWithoutUsersInput>
  }

  export type chatmessagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatmessagesWhereUniqueInput
    data: XOR<chatmessagesUpdateWithoutUsersInput, chatmessagesUncheckedUpdateWithoutUsersInput>
  }

  export type chatmessagesUpdateManyWithWhereWithoutUsersInput = {
    where: chatmessagesScalarWhereInput
    data: XOR<chatmessagesUpdateManyMutationInput, chatmessagesUncheckedUpdateManyWithoutUsersInput>
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

  export type chatgroupmembersCreateManyChatgroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatmessagesCreateManyChatgroupsInput = {
    id?: number
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupmembersUpdateWithoutChatgroupsInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutChatgroupmembersNestedInput
  }

  export type chatgroupmembersUncheckedUpdateWithoutChatgroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupmembersUncheckedUpdateManyWithoutChatgroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessagesUpdateWithoutChatgroupsInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutChatmessagesNestedInput
  }

  export type chatmessagesUncheckedUpdateWithoutChatgroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessagesUncheckedUpdateManyWithoutChatgroupsInput = {
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

  export type chatgroupmembersCreateManyUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatgroupsCreateManyUsersInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatmessagesCreateManyUsersInput = {
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

  export type chatgroupmembersUpdateWithoutUsersInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroups?: chatgroupsUpdateOneWithoutChatgroupmembersNestedInput
  }

  export type chatgroupmembersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupmembersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatgroupsUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUpdateManyWithoutChatgroupsNestedInput
    chatmessages?: chatmessagesUpdateManyWithoutChatgroupsNestedInput
  }

  export type chatgroupsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroupmembers?: chatgroupmembersUncheckedUpdateManyWithoutChatgroupsNestedInput
    chatmessages?: chatmessagesUncheckedUpdateManyWithoutChatgroupsNestedInput
  }

  export type chatgroupsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessagesUpdateWithoutUsersInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatgroups?: chatgroupsUpdateOneWithoutChatmessagesNestedInput
  }

  export type chatmessagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessagesUncheckedUpdateManyWithoutUsersInput = {
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