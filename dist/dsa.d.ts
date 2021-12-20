import Web3 from 'web3';
import { TransactionConfig } from 'web3-core';
import { Accounts } from './accounts';
import { CastHelpers } from './cast-helpers';
import { Internal, Version } from './internal';
import { Spells } from './spells';
import { Transaction, TransactionCallbacks } from './transaction';
import { Instapool_v2 } from './resolvers/instapool_v2';
import { Erc20 } from './utils/erc20';
import { Erc721 } from './utils/erc721';
export declare type DSAConfig = {
    web3: Web3;
    mode: 'node';
    privateKey: string;
} | {
    web3: Web3;
    mode: 'simulation';
    publicKey: string;
} | {
    web3: Web3;
    mode?: 'browser';
};
export declare type ChainId = 1 | 137 | 42161 | 43114;
export interface Instance {
    id: number;
    address: string;
    version: Version;
    chainId: ChainId;
}
/**
 * @param _d.spells the spells instance
 * @param _d.origin (optional)
 * @param _d.to (optional)
 * @param _d.from (optional)
 * @param _d.value (optional)
 * @param _d.gasPrice (optional only for "browser" mode)
 * @param _d.gas (optional)
 * @param {number|string} _d.nonce (optional) txn nonce (mostly for node implementation)
 */
declare type CastParams = {
    spells: Spells;
    origin?: string;
} & TransactionCallbacks & Pick<TransactionConfig, 'from' | 'to' | 'value' | 'gas' | 'gasPrice' | 'nonce'>;
/**
 * @param {address} _d.authority (optional)
 * @param {address} _d.origin (optional)
 * @param {address} _d.from (optional)
 * @param {number} _d.version (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
declare type BuildParams = {
    authority?: string;
    origin?: string;
    version?: Instance['version'];
} & TransactionCallbacks & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'nonce'>;
export declare class DSA {
    readonly config: DSAConfig;
    get web3(): Web3;
    get mode(): "node" | "simulation" | "browser" | undefined;
    origin: string;
    /**
     * Sets the origin of interactions.
     *
     * @param origin The origin address for affiliation and on-chain analytics.
     */
    setOrigin(origin: string): void;
    instance: Instance;
    readonly maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    readonly maxVal: () => string;
    readonly erc20: Erc20;
    readonly erc721: Erc721;
    readonly internal: Internal;
    readonly castHelpers: CastHelpers;
    readonly transaction: Transaction;
    readonly instapool_v2: Instapool_v2;
    readonly accounts: Accounts;
    encodeSpells: (params: Spells | {
        spells: Spells;
    }, version?: 1 | 2 | undefined) => {
        targets: (string | void)[];
        spells: string[];
    };
    sendTransaction: (transactionConfig: TransactionConfig, transactionCallbacks?: TransactionCallbacks | undefined) => Promise<string>;
    count: () => Promise<any>;
    getAccounts: (authority: string) => Promise<{
        id: number;
        address: string;
        version: number;
    }[]>;
    getAuthById: (id: number) => Promise<any>;
    encodeCastABI: (params: Spells | ({
        spells: Spells;
        origin?: string | undefined;
    } & Pick<TransactionConfig, "to">)) => string;
    estimateCastGas: (params: {
        spells: Spells;
    } & Pick<TransactionConfig, "from" | "to" | "value">) => Promise<number>;
    /**
     * @param config A `web3` instance or a DSAConfig
     */
    constructor(config: Web3 | DSAConfig, chainId?: ChainId);
    /**
     * Sets the current DSA instance.
     */
    setInstance(id: number): Promise<Instance>;
    /**
     * Refreshes the chain Id and sets it on the instance
     */
    refreshChainId(): Promise<void>;
    getAccountIdDetails(instanceId: Instance['id']): Promise<{
        id: any;
        address: any;
        version: 1 | 2;
        chainId: ChainId;
    }>;
    /**
     * Sets the current DSA ID instance.
     *
     * @param id DSA ID
     */
    setAccount(id: number): Promise<Instance>;
    /**
     * Build a new DSA.
     */
    build(params: BuildParams): Promise<string>;
    /**
     * Build new DSA txObj
     */
    buildTxObj(params: BuildParams): Promise<TransactionConfig>;
    /**
     * Build new DSA transactionConfiguration.
     *
     * @param {address} _d.authority (optional)
     * @param {address} _d.origin (optional)
     * @param {number|string} _d.gasPrice (optional) not optional in "node"
     * @param {number|string} _d.gas (optional) not optional in "node"
     * @param {number|string} _d.nonce (optional) not optional in "node"
     */
    buildTransactionConfig(params: {
        authority?: string;
        origin?: string;
    } & Pick<TransactionConfig, 'from' | 'gasPrice' | 'gas' | 'nonce'>): Promise<TransactionConfig>;
    /**
     * Creates a Spells instance.
     *
     * Example usage:
     *
     * ```
     * dsa.Spell()
     *  .add(...)
     *  .add(...)
     *  .cast(...)
     * ```
     */
    Spell(): {
        cast: (params?: Pick<CastParams, "from" | "to" | "value" | "gas" | "gasPrice" | "nonce" | "origin" | "onReceipt" | "onConfirmation"> | undefined) => Promise<string | undefined>;
        estimateCastGas: (params?: Pick<(params: {
            spells: Spells;
        } & Pick<TransactionConfig, "from" | "to" | "value">) => Promise<number>, never> | undefined) => Promise<number | undefined>;
        encodeCastABI: (params?: Pick<(params: Spells | ({
            spells: Spells;
            origin?: string | undefined;
        } & Pick<TransactionConfig, "to">)) => string, never> | undefined) => Promise<string | undefined>;
        encodeSpells: (params?: Pick<(params: Spells | {
            spells: Spells;
        }, version?: 1 | 2) => {
            targets: (string | void)[];
            spells: string[];
        }, never> | undefined) => Promise<{
            targets: (string | void)[];
            spells: string[];
        } | undefined>;
        data: import("./spells").Spell[];
        add(spell: import("./spells").Spell): any;
    };
    cast(params: Spells | CastParams): Promise<string>;
    private getData;
}
export {};
