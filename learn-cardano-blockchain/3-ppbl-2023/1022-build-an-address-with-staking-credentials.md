------------------------------
STEP-1 Create Wallet Directory
------------------------------
mkdir my-new-wallet
cd my-new-wallet

----------------------------------
STEP-2 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

notes: 
- testnet-magic 1 is preprod cardano testnet
- The cardano-cli query tip command is used in the Cardano blockchain ecosystem to retrieve information about the    current state of the blockchain.

----------------------------------
STEP-3 cardano-cli address key-gen
----------------------------------
cardano-cli address key-gen \
--verification-key-file payment.vkey \
--signing-key-file payment.skey

----------------------------------------
STEP-4 cardano-cli stake-address key-gen
----------------------------------------
cardano-cli stake-address key-gen \
--verification-key-file stake.vkey \
--signing-key-file stake.skey

----------------------------------------
STEP-5 cardano-cli stake-address key-gen
----------------------------------------
cardano-cli address build \
--payment-verification-key-file payment.vkey \
--stake-verification-key-file stake.vkey \
--out-file payment.addr \
--$network

paymentAddress=$(cat payment.addr)
echo $paymentAddress

--------------------------------------
STEP-5 Send 100 tADA to paymentAddress 
--------------------------------------
Open Cardano wallet (Nami or Eternl)
Send 100 tADA to paymentAddress
Check Transaction-Id (TxHash) at https://preprod.cardanoscan.io

-----------------------------------
STEP-6 Check paymentAddress Balance
-----------------------------------
cardano-cli query utxo \
--address $paymentAddress \
--$network

Result :
                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
afd4085d259a5a5e1ac9d39ce1bf55a8675396d6b7a80e2299b3f1b8a1833ac6     0        100000000 lovelace + TxOutDatumNone