export default { 
  
  address: "0x8B71C2a1C5309Ab2446a7Dfcc463e6B9bf9FA513",
  
  abi: [
    {
      "inputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "cap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isMinter",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"cap\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"cap()\":{\"details\":\"Returns the cap on the token's total supply.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"mint(address,uint256)\":{\"details\":\"See {ERC20-_mint}.     * Requirements:     * - the caller must have the {MinterRole}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/marcos/Downloads/DEX/contracts/Gold.sol\":\"Gold\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/marcos/Downloads/DEX/contracts/Gold.sol\":{\"keccak256\":\"0xf16614bdb0f3c84665bb0fa68b6b414cb6e947e05cae3fbd4f91cb413f0a8611\",\"urls\":[\"bzz-raw://418d94881d2c0585d319290c8cff6bda5f8fb352bb2b09830b27ad29301d98c0\",\"dweb:/ipfs/QmQB8C92JgTDQxi3hvwBgQWtibnkduHrBwyEzszGH69o8a\"]},\"openzeppelin-solidity/contracts/GSN/Context.sol\":{\"keccak256\":\"0x90a3995645af7562d84b9d69363ffa5ae7217714ab61e951bf7bc450f40e4061\",\"urls\":[\"bzz-raw://216ef9d6b614db4eb46970b4e84903f2534a45572dd30a79f0041f1a5830f436\",\"dweb:/ipfs/QmNPrJ4MWKUAWzKXpUqeyKRUfosaoANZAqXgvepdrCwZAG\"]},\"openzeppelin-solidity/contracts/access/Roles.sol\":{\"keccak256\":\"0xb002c378d7b82a101bd659c341518953ca0919d342c0a400196982c0e7e7bcdb\",\"urls\":[\"bzz-raw://00a788c4631466c220b385bdd100c571d24b2deccd657615cfbcef6cadf669a4\",\"dweb:/ipfs/QmTEwDbjJNxmMNCDMqtuou3dyM8Wtp8Q9NFvn7SAVM7Jf3\"]},\"openzeppelin-solidity/contracts/access/roles/MinterRole.sol\":{\"keccak256\":\"0xbe8eef6f2cb4e427f5c5d8a76865ccd06e55a4f1d6671ba312d45bfa705aedbf\",\"urls\":[\"bzz-raw://badf338a5e22c8658c01fe2ce89b487d9dbf6d2d9d5eb49df7415383e2498765\",\"dweb:/ipfs/QmP5aMkvFwMJyuQjKE8ADh5tkWYqonb4KjgkAjgYEVVFAv\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzz-raw://31113152e1ddb78fe7a4197f247591ca894e93f916867beb708d8e747b6cc74f\",\"dweb:/ipfs/QmbZaJyXdpsYGykVhHH9qpVGQg9DGCxE2QufbCUy3daTgq\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0x6fb9d7889769d7cc161225f9ef7a90e468ba9788b253816f8d8b6894d3472c24\",\"urls\":[\"bzz-raw://cf4c00fc3c37cc5acf0c82ec6fd97bab67d72c2567fdc0ebf023d9c09b30a08e\",\"dweb:/ipfs/Qmb7TChG6DsEDX7LooJ4vmxot19f7VXX8S1zUGPeJTWbwZ\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb15af804e2bc97db51e4e103f13de9fe13f87e6b835d7a88c897966c0e58506e\",\"urls\":[\"bzz-raw://1e8cff8437557fc915a3bed968fcd8f2df9809599e665ef69c2c9ce628548055\",\"dweb:/ipfs/QmP5spYP8vs2jvLF8zNrXUbqB79hMsoEvMHiLcBxerWKcm\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol\":{\"keccak256\":\"0x3e16a2b94ce6f97bb34ac27b84fab51fdceaadca0358766874dddff316491268\",\"urls\":[\"bzz-raw://a2736ffca3c121a5734e3032b3b1711f224a37a874dd8e5ea14431afbaae327a\",\"dweb:/ipfs/QmRwTS5zu9JeHGad1HUVrSddpFM8R23e6Xas4cTZTMxHty\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\":{\"keccak256\":\"0x4a3a810b7ebe742e897e1fd428b3eeed2196d3acea58eaf9c566ed10d545d2ed\",\"urls\":[\"bzz-raw://28d03f328e19e4099d5013de0649afaeaabac1a614e130767ab1cb4aca9775b6\",\"dweb:/ipfs/Qmb9iW7yNuYehB2NfhRMs9TakqbLVQhBhmGMkaDZ5g1Eb4\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\":{\"keccak256\":\"0xa2b957cf89692c504962afb7506999155f83385373f808243246cd5879de5940\",\"urls\":[\"bzz-raw://c44ae0ad1bce141c33b962f8b4e9228bdf8df36c8ac363b4f0bf9498b8bfc32a\",\"dweb:/ipfs/QmcSBRdFwVvy2wFZrBwo5cvqNP4UHh9Eyzf8jnxBgnPqfe\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\",\"urls\":[\"bzz-raw://59fd025151435da35faa8093a5c7a17de02de9d08ad27275c5cdf05050820d91\",\"dweb:/ipfs/QmQMvwEcPhoRXzbXyrdoeRtvLoifUW9Qh7Luho7bmUPRkc\"]}},\"version\":1}",
  "bytecode": "0x60806040526402540be4006040518060400160405280600481526020017f476f6c64000000000000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f417500000000000000000000000000000000000000000000000000000000000081525060028260009080519060200190620000909291906200044b565b508160019080519060200190620000a99291906200044b565b5080600260006101000a81548160ff021916908360ff160217905550505050620000e8620000dc6200021e60201b60201c565b6200022660201b60201c565b600081116200015f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f45524332304361707065643a206361702069732030000000000000000000000081525060200191505060405180910390fd5b80600781905550506000620001796200021e60201b60201c565b905080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350620004fa565b600033905090565b620002418160066200028760201b62001abd1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6200029982826200036b60201b60201c565b156200030d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620003f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806200232e6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200048e57805160ff1916838001178555620004bf565b82800160010185558215620004bf579182015b82811115620004be578251825591602001919060010190620004a1565b5b509050620004ce9190620004d2565b5090565b620004f791905b80821115620004f3576000816000905550600101620004d9565b5090565b90565b611e24806200050a6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638da5cb5b116100ad578063a457c2d711610071578063a457c2d71461056b578063a9059cbb146105d1578063aa271e1a14610637578063dd62ed3e14610693578063f2fde38b1461070b5761012c565b80638da5cb5b1461042e5780638f32d59b1461047857806395d89b411461049a578063983b2d561461051d57806398650275146105615761012c565b8063355274ea116100f4578063355274ea146102e2578063395093511461030057806340c10f191461036657806370a08231146103cc578063715018a6146104245761012c565b806306fdde0314610131578063095ea7b3146101b457806318160ddd1461021a57806323b872dd14610238578063313ce567146102be575b600080fd5b61013961074f565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610200600480360360408110156101ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107f1565b604051808215151515815260200191505060405180910390f35b61022261080f565b6040518082815260200191505060405180910390f35b6102a46004803603606081101561024e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610819565b604051808215151515815260200191505060405180910390f35b6102c66108f2565b604051808260ff1660ff16815260200191505060405180910390f35b6102ea610909565b6040518082815260200191505060405180910390f35b61034c6004803603604081101561031657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610913565b604051808215151515815260200191505060405180910390f35b6103b26004803603604081101561037c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109c6565b604051808215151515815260200191505060405180910390f35b61040e600480360360208110156103e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a41565b6040518082815260200191505060405180910390f35b61042c610a8a565b005b610436610bc5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610480610bef565b604051808215151515815260200191505060405180910390f35b6104a2610c4e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104e25780820151818401526020810190506104c7565b50505050905090810190601f16801561050f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61055f6004803603602081101561053357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf0565b005b610569610d61565b005b6105b76004803603604081101561058157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d73565b604051808215151515815260200191505060405180910390f35b61061d600480360360408110156105e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e40565b604051808215151515815260200191505060405180910390f35b6106796004803603602081101561064d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e5e565b604051808215151515815260200191505060405180910390f35b6106f5600480360360408110156106a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e7b565b6040518082815260200191505060405180910390f35b61074d6004803603602081101561072157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f02565b005b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e75780601f106107bc576101008083540402835291602001916107e7565b820191906000526020600020905b8154815290600101906020018083116107ca57829003601f168201915b5050505050905090565b60006108056107fe610f88565b8484610f90565b6001905092915050565b6000600554905090565b6000610826848484611187565b6108e784610832610f88565b6108e285604051806060016040528060288152602001611d3860289139600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610898610f88565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114419092919063ffffffff16565b610f90565b600190509392505050565b6000600260009054906101000a900460ff16905090565b6000600754905090565b60006109bc610920610f88565b846109b78560046000610931610f88565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150190919063ffffffff16565b610f90565b6001905092915050565b60006109d86109d3610f88565b610e5e565b610a2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611ce76030913960400191505060405180910390fd5b610a378383611589565b6001905092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a92610bef565b610b04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c32610f88565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b606060018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ce65780601f10610cbb57610100808354040283529160200191610ce6565b820191906000526020600020905b815481529060010190602001808311610cc957829003601f168201915b5050505050905090565b610d00610cfb610f88565b610e5e565b610d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611ce76030913960400191505060405180910390fd5b610d5e81611628565b50565b610d71610d6c610f88565b611682565b565b6000610e36610d80610f88565b84610e3185604051806060016040528060258152602001611dcb6025913960046000610daa610f88565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114419092919063ffffffff16565b610f90565b6001905092915050565b6000610e54610e4d610f88565b8484611187565b6001905092915050565b6000610e748260066116dc90919063ffffffff16565b9050919050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610f0a610bef565b610f7c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610f85816117ba565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611016576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611da76024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611c9f6022913960400191505060405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561120d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611d826025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611293576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611c566023913960400191505060405180910390fd5b6112ff81604051806060016040528060268152602001611cc160269139600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114419092919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061139481600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008383111582906114ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114b3578082015181840152602081019050611498565b50505050905090810190601f1680156114e05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008082840190508381101561157f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6007546115a68261159861080f565b61150190919063ffffffff16565b111561161a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f45524332304361707065643a206361702065786365656465640000000000000081525060200191505060405180910390fd5b6116248282611900565b5050565b61163c816006611abd90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b611696816006611b9890919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611763576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d606022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611840576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611c796026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6119b88160055461150190919063ffffffff16565b600581905550611a1081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611ac782826116dc565b15611b3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b611ba282826116dc565b611bf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611d176021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a72315820eda1c8138bf2d9c429217b84ba668823ace13a5f5006da7c2333df6bc0be2ace64736f6c63430005100032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c80638da5cb5b116100ad578063a457c2d711610071578063a457c2d71461056b578063a9059cbb146105d1578063aa271e1a14610637578063dd62ed3e14610693578063f2fde38b1461070b5761012c565b80638da5cb5b1461042e5780638f32d59b1461047857806395d89b411461049a578063983b2d561461051d57806398650275146105615761012c565b8063355274ea116100f4578063355274ea146102e2578063395093511461030057806340c10f191461036657806370a08231146103cc578063715018a6146104245761012c565b806306fdde0314610131578063095ea7b3146101b457806318160ddd1461021a57806323b872dd14610238578063313ce567146102be575b600080fd5b61013961074f565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610200600480360360408110156101ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107f1565b604051808215151515815260200191505060405180910390f35b61022261080f565b6040518082815260200191505060405180910390f35b6102a46004803603606081101561024e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610819565b604051808215151515815260200191505060405180910390f35b6102c66108f2565b604051808260ff1660ff16815260200191505060405180910390f35b6102ea610909565b6040518082815260200191505060405180910390f35b61034c6004803603604081101561031657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610913565b604051808215151515815260200191505060405180910390f35b6103b26004803603604081101561037c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109c6565b604051808215151515815260200191505060405180910390f35b61040e600480360360208110156103e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a41565b6040518082815260200191505060405180910390f35b61042c610a8a565b005b610436610bc5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610480610bef565b604051808215151515815260200191505060405180910390f35b6104a2610c4e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104e25780820151818401526020810190506104c7565b50505050905090810190601f16801561050f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61055f6004803603602081101561053357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf0565b005b610569610d61565b005b6105b76004803603604081101561058157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d73565b604051808215151515815260200191505060405180910390f35b61061d600480360360408110156105e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e40565b604051808215151515815260200191505060405180910390f35b6106796004803603602081101561064d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e5e565b604051808215151515815260200191505060405180910390f35b6106f5600480360360408110156106a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e7b565b6040518082815260200191505060405180910390f35b61074d6004803603602081101561072157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f02565b005b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e75780601f106107bc576101008083540402835291602001916107e7565b820191906000526020600020905b8154815290600101906020018083116107ca57829003601f168201915b5050505050905090565b60006108056107fe610f88565b8484610f90565b6001905092915050565b6000600554905090565b6000610826848484611187565b6108e784610832610f88565b6108e285604051806060016040528060288152602001611d3860289139600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610898610f88565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114419092919063ffffffff16565b610f90565b600190509392505050565b6000600260009054906101000a900460ff16905090565b6000600754905090565b60006109bc610920610f88565b846109b78560046000610931610f88565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150190919063ffffffff16565b610f90565b6001905092915050565b60006109d86109d3610f88565b610e5e565b610a2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611ce76030913960400191505060405180910390fd5b610a378383611589565b6001905092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a92610bef565b610b04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c32610f88565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b606060018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ce65780601f10610cbb57610100808354040283529160200191610ce6565b820191906000526020600020905b815481529060010190602001808311610cc957829003601f168201915b5050505050905090565b610d00610cfb610f88565b610e5e565b610d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611ce76030913960400191505060405180910390fd5b610d5e81611628565b50565b610d71610d6c610f88565b611682565b565b6000610e36610d80610f88565b84610e3185604051806060016040528060258152602001611dcb6025913960046000610daa610f88565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114419092919063ffffffff16565b610f90565b6001905092915050565b6000610e54610e4d610f88565b8484611187565b6001905092915050565b6000610e748260066116dc90919063ffffffff16565b9050919050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610f0a610bef565b610f7c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610f85816117ba565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611016576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611da76024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611c9f6022913960400191505060405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561120d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611d826025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611293576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611c566023913960400191505060405180910390fd5b6112ff81604051806060016040528060268152602001611cc160269139600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114419092919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061139481600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008383111582906114ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114b3578082015181840152602081019050611498565b50505050905090810190601f1680156114e05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008082840190508381101561157f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6007546115a68261159861080f565b61150190919063ffffffff16565b111561161a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f45524332304361707065643a206361702065786365656465640000000000000081525060200191505060405180910390fd5b6116248282611900565b5050565b61163c816006611abd90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b611696816006611b9890919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611763576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d606022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611840576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611c796026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6119b88160055461150190919063ffffffff16565b600581905550611a1081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611ac782826116dc565b15611b3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b611ba282826116dc565b611bf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611d176021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a72315820eda1c8138bf2d9c429217b84ba668823ace13a5f5006da7c2333df6bc0be2ace64736f6c63430005100032",
  "sourceMap": "233:161:0:-;;;348:11;416:163:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;332:1:0;512:4:10;504:5;:12;;;;;;;;;;;;:::i;:::-;;536:6;526:7;:16;;;;;;;;;;;;:::i;:::-;;564:8;552:9;;:20;;;;;;;;;;;;;;;;;;416:163;;;318:24:5;329:12;:10;;;:12;;:::i;:::-;318:10;;;:24;;:::i;:::-;404:1:9;398:3;:7;390:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;448:3;441:4;:10;;;;347:111;698:17:7;718:12;:10;;;:12;;:::i;:::-;698:32;;749:9;740:6;;:18;;;;;;;;;;;;;;;;;;806:9;773:43;;802:1;773:43;;;;;;;;;;;;664:159;233:161:0;;788:96:3;833:15;867:10;860:17;;788:96;:::o;786:119:5:-;842:21;855:7;842:8;:12;;;;;;:21;;;;:::i;:::-;890:7;878:20;;;;;;;;;;;;786:119;:::o;260:175:4:-;337:18;341:4;347:7;337:3;;;:18;;:::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;779:200::-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;233:161:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "233:161:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;233:161:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;644:81:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2500:149:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2500:149:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1559:89;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3107:300;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3107:300:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1472:81:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;537:73:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3802:207:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3802:207:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;502:140:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;502:140:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1706:108:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1706:108:8;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1684:137:7;;;:::i;:::-;;899:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1250:92;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;838:85:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;838:85:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;607:90:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;607:90:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;703:77;;;:::i;:::-;;4496:258:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4496:258:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2017:155;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2017:155:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;494:107:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;494:107:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2230:132:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2230:132:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1970:107:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1970:107:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;644:81:10;681:13;713:5;706:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81;:::o;2500:149:8:-;2566:4;2582:39;2591:12;:10;:12::i;:::-;2605:7;2614:6;2582:8;:39::i;:::-;2638:4;2631:11;;2500:149;;;;:::o;1559:89::-;1603:7;1629:12;;1622:19;;1559:89;:::o;3107:300::-;3196:4;3212:36;3222:6;3230:9;3241:6;3212:9;:36::i;:::-;3258:121;3267:6;3275:12;:10;:12::i;:::-;3289:89;3327:6;3289:89;;;;;;;;;;;;;;;;;:11;:19;3301:6;3289:19;;;;;;;;;;;;;;;:33;3309:12;:10;:12::i;:::-;3289:33;;;;;;;;;;;;;;;;:37;;:89;;;;;:::i;:::-;3258:8;:121::i;:::-;3396:4;3389:11;;3107:300;;;;;:::o;1472:81:10:-;1513:5;1537:9;;;;;;;;;;;1530:16;;1472:81;:::o;537:73:9:-;573:7;599:4;;592:11;;537:73;:::o;3802:207:8:-;3882:4;3898:83;3907:12;:10;:12::i;:::-;3921:7;3930:50;3969:10;3930:11;:25;3942:12;:10;:12::i;:::-;3930:25;;;;;;;;;;;;;;;:34;3956:7;3930:34;;;;;;;;;;;;;;;;:38;;:50;;;;:::i;:::-;3898:8;:83::i;:::-;3998:4;3991:11;;3802:207;;;;:::o;502:140:11:-;576:4;395:22:5;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;592:22:11;598:7;607:6;592:5;:22::i;:::-;631:4;624:11;;502:140;;;;:::o;1706:108:8:-;1763:7;1789:9;:18;1799:7;1789:18;;;;;;;;;;;;;;;;1782:25;;1706:108;;;:::o;1684:137:7:-;1103:9;:7;:9::i;:::-;1095:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1782:1;1745:40;;1766:6;;;;;;;;;;;1745:40;;;;;;;;;;;;1812:1;1795:6;;:19;;;;;;;;;;;;;;;;;;1684:137::o;899:77::-;937:7;963:6;;;;;;;;;;;956:13;;899:77;:::o;1250:92::-;1290:4;1329:6;;;;;;;;;;;1313:22;;:12;:10;:12::i;:::-;:22;;;1306:29;;1250:92;:::o;838:85:10:-;877:13;909:7;902:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:85;:::o;607:90:5:-;395:22;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;671:19;682:7;671:10;:19::i;:::-;607:90;:::o;703:77::-;746:27;760:12;:10;:12::i;:::-;746:13;:27::i;:::-;703:77::o;4496:258:8:-;4581:4;4597:129;4606:12;:10;:12::i;:::-;4620:7;4629:96;4668:15;4629:96;;;;;;;;;;;;;;;;;:11;:25;4641:12;:10;:12::i;:::-;4629:25;;;;;;;;;;;;;;;:34;4655:7;4629:34;;;;;;;;;;;;;;;;:38;;:96;;;;;:::i;:::-;4597:8;:129::i;:::-;4743:4;4736:11;;4496:258;;;;:::o;2017:155::-;2086:4;2102:42;2112:12;:10;:12::i;:::-;2126:9;2137:6;2102:9;:42::i;:::-;2161:4;2154:11;;2017:155;;;;:::o;494:107:5:-;550:4;573:21;586:7;573:8;:12;;:21;;;;:::i;:::-;566:28;;494:107;;;:::o;2230:132:8:-;2302:7;2328:11;:18;2340:5;2328:18;;;;;;;;;;;;;;;:27;2347:7;2328:27;;;;;;;;;;;;;;;;2321:34;;2230:132;;;;:::o;1970:107:7:-;1103:9;:7;:9::i;:::-;1095:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2042:28;2061:8;2042:18;:28::i;:::-;1970:107;:::o;788:96:3:-;833:15;867:10;860:17;;788:96;:::o;7350:332:8:-;7460:1;7443:19;;:5;:19;;;;7435:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7540:1;7521:21;;:7;:21;;;;7513:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7622:6;7592:11;:18;7604:5;7592:18;;;;;;;;;;;;;;;:27;7611:7;7592:27;;;;;;;;;;;;;;;:36;;;;7659:7;7643:32;;7652:5;7643:32;;;7668:6;7643:32;;;;;;;;;;;;;;;;;;7350:332;;;:::o;5228:464::-;5343:1;5325:20;;:6;:20;;;;5317:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5426:1;5405:23;;:9;:23;;;;5397:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5499;5521:6;5499:71;;;;;;;;;;;;;;;;;:9;:17;5509:6;5499:17;;;;;;;;;;;;;;;;:21;;:71;;;;;:::i;:::-;5479:9;:17;5489:6;5479:17;;;;;;;;;;;;;;;:91;;;;5603:32;5628:6;5603:9;:20;5613:9;5603:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;5580:9;:20;5590:9;5580:20;;;;;;;;;;;;;;;:55;;;;5667:9;5650:35;;5659:6;5650:35;;;5678:6;5650:35;;;;;;;;;;;;;;;;;;5228:464;;;:::o;1732:187:6:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;774:180:9:-;876:4;;848:24;866:5;848:13;:11;:13::i;:::-;:17;;:24;;;;:::i;:::-;:32;;840:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;920:27;932:7;941:5;920:11;:27::i;:::-;774:180;;:::o;786:119:5:-;842:21;855:7;842:8;:12;;:21;;;;:::i;:::-;890:7;878:20;;;;;;;;;;;;786:119;:::o;911:127::-;970:24;986:7;970:8;:15;;:24;;;;:::i;:::-;1023:7;1009:22;;;;;;;;;;;;911:127;:::o;779:200:4:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;2178:225:7:-;2271:1;2251:22;;:8;:22;;;;2243:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:8;2331:38;;2352:6;;;;;;;;;;;2331:38;;;;;;;;;;;;2388:8;2379:6;;:17;;;;;;;;;;;;;;;;;;2178:225;:::o;5962:302:8:-;6056:1;6037:21;;:7;:21;;;;6029:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6120:24;6137:6;6120:12;;:16;;:24;;;;:::i;:::-;6105:12;:39;;;;6175:30;6198:6;6175:9;:18;6185:7;6175:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;6154:9;:18;6164:7;6154:18;;;;;;;;;;;;;;;:51;;;;6241:7;6220:37;;6237:1;6220:37;;;6250:6;6220:37;;;;;;;;;;;;;;;;;;5962:302;;:::o;260:175:4:-;337:18;341:4;347:7;337:3;:18::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;510:180::-;589:18;593:4;599:7;589:3;:18::i;:::-;581:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;678:5;655:4;:11;;:20;667:7;655:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;510:180;;:::o",
  "source": "pragma solidity ^0.5.2;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol\"; \nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\ncontract Gold is ERC20Detailed, ERC20Capped, Ownable {\n\nconstructor() \nERC20Detailed(\"Gold\", \"Au\", 2) \nERC20Capped(10000000000)\nMinterRole()\npayable public {}\n\n}\n",
  "sourcePath": "/home/marcos/Downloads/DEX/contracts/Gold.sol",
  "ast": {
    "absolutePath": "/home/marcos/Downloads/DEX/contracts/Gold.sol",
    "exportedSymbols": {
      "Gold": [
        25
      ]
    },
    "id": 26,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 26,
        "sourceUnit": 1127,
        "src": "25:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 26,
        "sourceUnit": 1069,
        "src": "97:69:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 26,
        "sourceUnit": 605,
        "src": "168:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1126,
              "src": "250:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$1126",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "250:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "ERC20Capped",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1068,
              "src": "265:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Capped_$1068",
                "typeString": "contract ERC20Capped"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "265:11:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 604,
              "src": "278:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$604",
                "typeString": "contract Ownable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "278:7:0"
          }
        ],
        "contractDependencies": [
          111,
          299,
          604,
          1009,
          1068,
          1126,
          1154,
          1223
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25,
        "linearizedBaseContracts": [
          25,
          604,
          1068,
          1154,
          299,
          1009,
          1126,
          1223,
          111
        ],
        "name": "Gold",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 23,
              "nodeType": "Block",
              "src": "389:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 24,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "476f6c64",
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "318:6:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_6f0d47b12e2c2f7083eb5622541f9c3930e56fc3e46e89e132673f05a079baff",
                      "typeString": "literal_string \"Gold\""
                    },
                    "value": "Gold"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4175",
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "326:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_badc7862e1cf12ac202e0dc16b30340c3f2cd138a429e0f171e40aeb2a5e0b01",
                      "typeString": "literal_string \"Au\""
                    },
                    "value": "Au"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "32",
                    "id": 15,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "332:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_2_by_1",
                      "typeString": "int_const 2"
                    },
                    "value": "2"
                  }
                ],
                "id": 16,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 12,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1126,
                  "src": "304:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$1126_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "304:30:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "3130303030303030303030",
                    "id": 18,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "348:11:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_10000000000_by_1",
                      "typeString": "int_const 10000000000"
                    },
                    "value": "10000000000"
                  }
                ],
                "id": 19,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 17,
                  "name": "ERC20Capped",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1068,
                  "src": "336:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Capped_$1068_$",
                    "typeString": "type(contract ERC20Capped)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "336:24:0"
              },
              {
                "arguments": [],
                "id": 21,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20,
                  "name": "MinterRole",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 299,
                  "src": "361:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_MinterRole_$299_$",
                    "typeString": "type(contract MinterRole)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "361:12:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "300:2:0"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "389:0:0"
            },
            "scope": 25,
            "src": "289:102:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 26,
        "src": "233:161:0"
      }
    ],
    "src": "0:395:0"
  },
  "legacyAST": {
    "absolutePath": "/home/marcos/Downloads/DEX/contracts/Gold.sol",
    "exportedSymbols": {
      "Gold": [
        25
      ]
    },
    "id": 26,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 26,
        "sourceUnit": 1127,
        "src": "25:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 26,
        "sourceUnit": 1069,
        "src": "97:69:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 26,
        "sourceUnit": 605,
        "src": "168:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1126,
              "src": "250:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$1126",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "250:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "ERC20Capped",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1068,
              "src": "265:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Capped_$1068",
                "typeString": "contract ERC20Capped"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "265:11:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 604,
              "src": "278:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$604",
                "typeString": "contract Ownable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "278:7:0"
          }
        ],
        "contractDependencies": [
          111,
          299,
          604,
          1009,
          1068,
          1126,
          1154,
          1223
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25,
        "linearizedBaseContracts": [
          25,
          604,
          1068,
          1154,
          299,
          1009,
          1126,
          1223,
          111
        ],
        "name": "Gold",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 23,
              "nodeType": "Block",
              "src": "389:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 24,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "476f6c64",
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "318:6:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_6f0d47b12e2c2f7083eb5622541f9c3930e56fc3e46e89e132673f05a079baff",
                      "typeString": "literal_string \"Gold\""
                    },
                    "value": "Gold"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4175",
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "326:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_badc7862e1cf12ac202e0dc16b30340c3f2cd138a429e0f171e40aeb2a5e0b01",
                      "typeString": "literal_string \"Au\""
                    },
                    "value": "Au"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "32",
                    "id": 15,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "332:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_2_by_1",
                      "typeString": "int_const 2"
                    },
                    "value": "2"
                  }
                ],
                "id": 16,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 12,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1126,
                  "src": "304:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$1126_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "304:30:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "3130303030303030303030",
                    "id": 18,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "348:11:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_10000000000_by_1",
                      "typeString": "int_const 10000000000"
                    },
                    "value": "10000000000"
                  }
                ],
                "id": 19,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 17,
                  "name": "ERC20Capped",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1068,
                  "src": "336:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Capped_$1068_$",
                    "typeString": "type(contract ERC20Capped)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "336:24:0"
              },
              {
                "arguments": [],
                "id": 21,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20,
                  "name": "MinterRole",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 299,
                  "src": "361:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_MinterRole_$299_$",
                    "typeString": "type(contract MinterRole)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "361:12:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "300:2:0"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "389:0:0"
            },
            "scope": 25,
            "src": "289:102:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 26,
        "src": "233:161:0"
      }
    ],
    "src": "0:395:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        },
        "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "MinterAdded",
          "type": "event",
          "signature": "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"
        },
        "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "MinterRemoved",
          "type": "event",
          "signature": "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        }
      },
      "links": {},
      "address": "0x8B71C2a1C5309Ab2446a7Dfcc463e6B9bf9FA513",
      "transactionHash": "0x10702b5e87e466922e23204bdc0f46f3ff5f718ebc661bd28e9ef49978d173ab"
    }
  },
  "schemaVersion": "3.0.22",
  "updatedAt": "2023-08-19T16:50:24.096Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "cap()": {
        "details": "Returns the cap on the token's total supply."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "isOwner()": {
        "details": "Returns true if the caller is the current owner."
      },
      "mint(address,uint256)": {
        "details": "See {ERC20-_mint}.     * Requirements:     * - the caller must have the {MinterRole}."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}
