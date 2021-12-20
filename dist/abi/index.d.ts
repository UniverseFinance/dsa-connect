import * as basics from './basics';
export declare const Abi: {
    basics: typeof basics;
    connectors: {
        versions: {
            1: typeof import("./connectors/v1");
            2: {
                "UNIVERSE-A": import("web3-utils").AbiItem[];
                "INSTAPOOL-C": import("web3-utils").AbiItem[];
                "UNISWAP-SELL-BETA": import("web3-utils").AbiItem[];
                "AAVE-V2-IMPORT-C": import("web3-utils").AbiItem[];
                "COMPOUND-IMPORT-C": import("web3-utils").AbiItem[];
                "QI-A": import("web3-utils").AbiItem[];
                "BENQI-A": import("web3-utils").AbiItem[];
                "INSTAPOOL-B": import("web3-utils").AbiItem[];
                "POOLTOGETHER-A": import("web3-utils").AbiItem[];
                "GELATO-AAVE-A": import("web3-utils").AbiItem[];
                "INST-STAKING-B": import("web3-utils").AbiItem[];
                "YEARN-VAULT-A": import("web3-utils").AbiItem[];
                "UNISWAP-V3-STAKE-A": import("web3-utils").AbiItem[];
                "BASIC-C": import("web3-utils").AbiItem[];
                "BASIC-B": import("web3-utils").AbiItem[];
                "B-LIQUITY-A": import("web3-utils").AbiItem[];
                "B-MAKERDAO-A": import("web3-utils").AbiItem[];
                "B-COMPOUND-A": import("web3-utils").AbiItem[];
                "UNISWAP-V3-A": import("web3-utils").AbiItem[];
                "REFLEXER-A": import("web3-utils").AbiItem[];
                "LIQUITY-A": import("web3-utils").AbiItem[];
                "UNISWAP-V2-A": import("web3-utils").AbiItem[];
                "INST-LM-A": import("web3-utils").AbiItem[];
                "REFINANCE-A": import("web3-utils").AbiItem[];
                "INST-A": import("web3-utils").AbiItem[];
                "WETH-A": import("web3-utils").AbiItem[];
                "1INCH-B": import("web3-utils").AbiItem[];
                "INST-STAKING-A": import("web3-utils").AbiItem[];
                "STAKE-ERC20-A": import("web3-utils").AbiItem[];
                "G-UNISWAP-A": import("web3-utils").AbiItem[];
                "INSTAPOOL-A": import("web3-utils").AbiItem[];
                "COMPOUND-IMPORT-A": import("web3-utils").AbiItem[];
                "AAVE-V2-IMPORT-A": import("web3-utils").AbiItem[];
                "AAVE-V1-IMPORT-A": import("web3-utils").AbiItem[];
                "1INCH-A": import("web3-utils").AbiItem[];
                "AAVE-CLAIM-A": import("web3-utils").AbiItem[];
                "AAVE-CLAIM-B": import("web3-utils").AbiItem[];
                "AAVE-V1-A": import("web3-utils").AbiItem[];
                "AAVE-V2-A": import("web3-utils").AbiItem[];
                "AUTHORITY-A": import("web3-utils").AbiItem[];
                "BASIC-A": import("web3-utils").AbiItem[];
                "COMP-A": import("web3-utils").AbiItem[];
                "COMPOUND-A": import("web3-utils").AbiItem[];
                "MAKERDAO-A": import("web3-utils").AbiItem[];
                "UNISWAP-A": import("web3-utils").AbiItem[];
                "POLYGON-BRIDGE-A": import("web3-utils").AbiItem[];
                "AAVE-STAKE-A": import("web3-utils").AbiItem[];
                "PARASWAP-A": import("web3-utils").AbiItem[];
                "COMPOUND-IMPORT-B": import("web3-utils").AbiItem[];
                "AAVE-V2-IMPORT-B": import("web3-utils").AbiItem[];
                "MAKERDAO-CLAIM-A": import("web3-utils").AbiItem[];
                "INTEROP-A": import("web3-utils").AbiItem[];
                "INTEROP-STAGING-A": import("web3-utils").AbiItem[];
            };
        };
    };
    core: {
        index: import("web3-utils").AbiItem[];
        list: import("web3-utils").AbiItem[];
        read: import("web3-utils").AbiItem[];
        versions: {
            1: {
                account: import("web3-utils").AbiItem[];
                connectors: typeof import("./core/v1/connector");
                events: typeof import("./core/v1/events");
            };
            2: {
                accountProxy: typeof import("./core/v2/accountProxy");
                accountDefault: typeof import("./core/v2/accountDefault");
                implementations: typeof import("./core/v2/implementations");
                account: import("web3-utils").AbiItem[];
                connectors: typeof import("./core/v2/connectorsM1");
            };
        };
    };
    read: import("web3-utils").AbiItem[];
};
