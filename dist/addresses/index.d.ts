export declare const Addresses: {
    genesis: string;
    core: {
        1: {
            index: string;
            list: string;
            read: string;
            versions: {
                1: {
                    account: string;
                    connectors: string;
                    events: string;
                    instapool: string;
                    dydx_flash: string;
                };
                2: {
                    accountProxy: string;
                    accountDefault: string;
                    implementations: string;
                    account: string;
                    connectors: string;
                };
            };
        };
        137: {
            index: string;
            list: string;
            read: string;
            versions: {
                1: {
                    account: string;
                    connectors: string;
                    events: string;
                };
                2: {
                    accountProxy: string;
                    accountDefault: string;
                    implementations: string;
                    account: string;
                    connectors: string;
                };
            };
        };
        42161: {
            index: string;
            list: string;
            read: string;
            versions: {
                1: {
                    account: string;
                    connectors: string;
                    events: string;
                };
                2: {
                    accountProxy: string;
                    accountDefault: string;
                    implementations: string;
                    account: string;
                    connectors: string;
                };
            };
        };
        43114: {
            index: string;
            list: string;
            read: string;
            versions: {
                1: {
                    account: string;
                    connectors: string;
                    events: string;
                };
                2: {
                    accountProxy: string;
                    accountDefault: string;
                    implementations: string;
                    account: string;
                    connectors: string;
                };
            };
        };
    };
    connectors: {
        chains: {
            1: {
                versions: {
                    1: {
                        basic: string;
                        authority: string;
                        compound: string;
                        compound_old: string;
                        maker: string;
                        maker_old: string;
                        instapool: string;
                        oasis: string;
                        kyber: string;
                        curve: string;
                        curve_susd: string;
                        curve_sbtc: string;
                        curve_y: string;
                        oneInch: string;
                        dydx: string;
                        aave: string;
                        migrate: string;
                        compoundImport: string;
                        uniswap: string;
                        comp: string;
                        staking: string;
                        chi: string;
                        curve_claim: string;
                        curve_gauge: string;
                        gelato: string;
                        dydx_flash: string;
                        swerve: string;
                        curve_three: string;
                        instapool_v2: string;
                        compoundImport_v2: string;
                        math: string;
                        aave_v2: string;
                        aave_migrate: string;
                        fee: string;
                        refinance: string;
                        aave_v2_import: string;
                        aave_v1_import: string;
                        polygon_bridge: string;
                        aave_polygon_migrate: string;
                        aave_claim: string;
                        aave_stake: string;
                        dsa_migrate_v1_to_v2: string;
                    };
                    2: {
                        "1INCH-A": string;
                        "AAVE-V1-A": string;
                        "AAVE-V2-A": string;
                        "AUTHORITY-A": string;
                        "BASIC-A": string;
                        "COMP-A": string;
                        "COMPOUND-A": string;
                        "MAKERDAO-A": string;
                        "UNISWAP-A": string;
                        "POLYGON-BRIDGE-A": string;
                        "AAVE-CLAIM-A": string;
                        "AAVE-STAKE-A": string;
                        "AAVE-V1-IMPORT-A": string;
                        "AAVE-V2-IMPORT-A": string;
                        "COMPOUND-IMPORT-A": string;
                        "INSTAPOOL-A": string;
                        "COMPOUND-IMPORT-B": string;
                        "AAVE-V2-IMPORT-B": string;
                        "MAKERDAO-CLAIM-A": string;
                        "G-UNISWAP-A": string;
                        "STAKE-ERC20-A": string;
                        "INST-STAKING-A": string;
                        "1INCH-B": string;
                        "WETH-A": string;
                        "INST-A": string;
                        "REFINANCE-A": string;
                        "INST-LM-A": string;
                        "UNISWAP-V2-A": string;
                        "LIQUITY-A": string;
                        "REFLEXER-A": string;
                        "UNISWAP-V3-A": string;
                        "B-COMPOUND-A": string;
                        "B-MAKERDAO-A": string;
                        "B-LIQUITY-A": string;
                        "BASIC-B": string;
                        "BASIC-C": string;
                        "UNISWAP-V3-STAKE-A": string;
                        "YEARN-VAULT-A": string;
                        "INST-STAKING-B": string;
                        "GELATO-AAVE-A": string;
                        "POOLTOGETHER-A": string;
                        "INSTAPOOL-B": string;
                        "COMPOUND-IMPORT-C": string;
                        "AAVE-V2-IMPORT-C": string;
                        "INSTAPOOL-C": string;
                        "UNIVERSE-A": string;
                    };
                };
            };
            137: {
                versions: {
                    1: {
                        basic: string;
                        authority: string;
                    };
                    2: {
                        "1INCH-A": string;
                        "AAVE-V2-A": string;
                        "AUTHORITY-A": string;
                        "BASIC-A": string;
                        "AAVE-CLAIM-A": string;
                        "INSTAPOOL-A": string;
                        "PARASWAP-A": string;
                        "AAVE-V2-IMPORT-A": string;
                        "AAVE-V2-IMPORT-B": string;
                        "AAVE-CLAIM-B": string;
                        "GELATO-AAVE-A": string;
                        "POOLTOGETHER-A": string;
                        "INSTAPOOL-B": string;
                        "AAVE-V2-IMPORT-C": string;
                        "INTEROP-A": string;
                        "INTEROP-STAGING-A": string;
                        "INSTAPOOL-C": string;
                    };
                };
            };
            42161: {
                versions: {
                    2: {
                        "AUTHORITY-A": string;
                        "BASIC-A": string;
                        "BASIC-B": string;
                        "BASIC-C": string;
                        "UNISWAP-V3-A": string;
                        "1INCH-A": string;
                        "WETH-A": string;
                        "UNISWAP-SELL-BETA": string;
                        "INSTAPOOL-C": string;
                    };
                };
            };
            43114: {
                versions: {
                    2: {
                        "AUTHORITY-A": string;
                        "BASIC-A": string;
                        "WAVAX-A": string;
                        "AAVE-V2-A": string;
                        "AAVE-CLAIM-A": string;
                        "PARASWAP-A": string;
                        "BENQI-A": string;
                        "QI-A": string;
                        "INSTAPOOL-B": string;
                        "INTEROP-A": string;
                        "INTEROP-STAGING-A": string;
                        "INSTAPOOL-C": string;
                    };
                };
            };
        };
    };
};
