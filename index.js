
async function connectwallet() {
    accounts = await window.ethereum.request({ method: "eth_requestAccounts" }).catch((err) => {
        console.log(err.code);
    })

    console.log(accounts);
}

async function checkbalance() {
    let balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [
            "0x33a4b0217ddfaba14f56023635dc7f49a191d0d6",
            'latest'
        ]
    }).catch((err) => {
        console.log(err.code);

    })
    console.log(parseInt(balance));

}

async function sendtransaction() {
    let params = [{
        "from": "0xA324868638573394c5FB243fDcB1344a159014a6",
        "to": "0xB45AA2e895B1Fa27e0d08c4F2472AFcD99ECC3a6",
        "gas": Number(2100).toString(16),
        "gasPrice": Number(2500000).toString(16),
        "value": Number(1000000000000000000).toString(16)
    }]
    let result = await window.ethereum.request({ method: "eth_sendTransaction", params }).catch((err) => {
        console.log(err);
    })
}

async function tokentransfer() {
    let subaddress = "0xEAAA48AeDC752C1A90C9ba3bE86FE9e8ffEb27af"
    let subcontract = new ethers.contract(subaddress, provider.getSinger())
    const amount = ethers.utils.pars
}




