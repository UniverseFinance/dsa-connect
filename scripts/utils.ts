import * as fs from 'fs';
import inquirer from 'inquirer';
import fetch from 'node-fetch';
import URL from "url";
import Path from "path"

export interface Obj {
    [key: string]: string;
}

export const checkFile = (fileName: string) => {
    return new Promise((resolve, reject) => {
        fs.access(fileName, (err) => {
            if (err) return resolve(null);

            return reject(new Error("File does exist!"));
        })
    })
}

export const getAbiPath = (answers: Obj) => `src/abi/connectors/v${answers.version}/${answers.name}.ts`;
export const getAbiDir = (answers: Obj) => `src/abi/connectors/v${answers.version}`;
export const mainnetAddressV1Path = `src/addresses/mainnet/connectorsV1.ts`;
export const mainnetAddressV2Path = `src/addresses/mainnet/connectorsV2_M1.ts`;
export const polygonAddressV1Path = `src/addresses/polygon/connectorsV1.ts`;
export const polygonAddressV2Path = `src/addresses/polygon/connectorsV2_M1.ts`;
export const avalancheAddressV2Path = `src/addresses/avalanche/connectorsV2_M1.ts`;
export const arbitrumAddressV2Path = `src/addresses/arbitrum/connectorsV2_M1.ts`;
export const getAbiTemplate = (varName: string, abi: string) => `
import { AbiItem } from 'web3-utils'

export const ${varName}: AbiItem[] = ${abi}
`.trim();

export const getABI = async (abi_idx: number, answers: Obj): Promise<string> => {
    console.log('🔮 Fetching ABI')

    if (abi_idx === 0 && answers.chain === "Mainnet") {
        const res = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${answers.address}&apikey=${process.env.MAINNET_API_KEY_TOKEN}`);
        const { result } = await res.json();

        return result;
        
    } else if (abi_idx === 0 && answers.chain === "Polygon") {
        const res = await fetch(`https://api.polygonscan.com/api?module=contract&action=getabi&address=${answers.address}&apikey=${process.env.POLYGON_API_KEY_TOKEN}`);
        const { result } = await res.json();

        return result;

    } else if (abi_idx === 0 && answers.chain === "Arbitrum") {
        const res = await fetch(`https://api.arbiscan.io/api?module=contract&action=getabi&address=${answers.address}&apikey=${process.env.ARBITRUM_API_KEY_TOKEN}`);
        const { result } = await res.json();

        return result;

    } else if (abi_idx === 0 && answers.chain === "Avalanche") {
        const res = await fetch(`https://api.snowtrace.io/api?module=contract&action=getabi&address=${answers.address}&apikey=${process.env.AVALANCHE_API_KEY_TOKEN}`);
        const { result } = await res.json();

        return result;

    } else if (abi_idx === 1) {
        const data = await inquirer.prompt([
            {
                type: "input",
                name: "path",
                message: "Enter the JSON File Path:",
                validate: (value: string) => !!value || "File Path is required."
            }
        ]);

        return fs.readFileSync(Path.resolve(data.path), 'utf-8');

    } else {
        const data = await inquirer.prompt([
            {
                type: "input",
                name: "url",
                message: "Enter the URL:",
                validate: (value: string) => {
                    try {
                        new URL.URL(value)
                        return true;
                    } catch (e) {
                        return "Wrong URL Entered."
                    }
                }
            }
        ])

        const res = await fetch(data.url);
        const json = res.json();

        return json;
    }
}