----------------------------------------------------------------------
STEP-1 Use The Wallet Address That Was Created In The 1022 module
----------------------------------------------------------------------
cd my-new-wallet

-----------------------------------
STEP-2 Create Transaction Directory
-----------------------------------
mkdir transaction
cd transaction

----------------------------------
STEP-3 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

-------------------------
STEP-4 Initiate Variables
-------------------------
recipientAddress=addr_test1qpv9flkun5vnt9ylkyfz9vxug3phfpu650swc098hsg976zgeanlhnk8wgu8nc957efysy8rc7jxk5jfjhklnlwy2npq749k0y
echo $recipientAddress

senderAddress=$(cat ../payment.addr)
echo $senderAddress

Check senderAddress balance:
cardano-cli query utxo \
--address $senderAddress \
--$network

Result :
                           TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
d885c9eefd29865dc638c0cde1908051885fdd467d8feffb0bc8f23f9a2ff0d1     0        100000000 lovelace + TxOutDatumNone

txHash="d885c9eefd29865dc638c0cde1908051885fdd467d8feffb0bc8f23f9a2ff0d1"
echo $txHash

txIx="0"
echo $txIx

sendAmountLovelace="20000000"
echo $sendAmountLovelace

senderKey="../payment.skey"
echo $senderKey

-----------------
STEP-5 Build a TX
-----------------
cardano-cli transaction build \
--babbage-era \
--$network \
--tx-in $txHash#$txIx \
--tx-out $recipientAddress+$sendAmountLovelace \
--change-address $senderAddress \
--out-file simple-tx.raw

Result:
Estimated transaction fee: Lovelace 168185

----------------
STEP-6 Sign a TX
----------------
cardano-cli transaction sign \
--signing-key-file $senderKey \
--$network \
--tx-body-file simple-tx.raw \
--out-file simple-tx.signed

------------------
STEP-7 Submit a TX
------------------
cardano-cli transaction submit \
--tx-file simple-tx.signed \
--$network

------------------------------------------------
STEP-8 Check Balance and Transaction-ID (txHash)
------------------------------------------------
cardano-cli query utxo \
--address $senderAddress \
--$network

                           TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
f705c65d2a83ebb3a64c2aceb6365e302e0e1c00664a4dece247e5408f44ab64     1        79831815 lovelace + TxOutDatumNone

Check Transaction-Id (TxHash) at https://preprod.cardanoscan.io