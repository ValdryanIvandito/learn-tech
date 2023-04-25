----------------------------------------------------------------------
STEP-1 Use The Wallet Address That Was Created In The 1022-1023 module
----------------------------------------------------------------------
cd my-new-wallet/transaction

-----------------------------------
STEP-2 Create Transaction Directory
-----------------------------------
mkdir transaction
cd transaction

----------------------------------
STEP-2 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

-------------------------
STEP-3 Initiate Variables
-------------------------
recipientAddress=addr_test1qp7hqsclprzhj3xzecm4x4ywk734w5g8ghhccnlfjp7g2pykluym9643satn7dq2gtgsmd50rh2qpesdzep4rdkqgt8srg4ldg
echo $recipientAddress

senderAddress=$(cat payment.addr)
echo $senderAddress

Check senderAddress balance:
cardano-cli query utxo \
--address $senderAddress \
--$network

Result :
                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
afd4085d259a5a5e1ac9d39ce1bf55a8675396d6b7a80e2299b3f1b8a1833ac6     0        100000000 lovelace + TxOutDatumNone

txHash="afd4085d259a5a5e1ac9d39ce1bf55a8675396d6b7a80e2299b3f1b8a1833ac6"
echo $txHash

txIx="0"
echo $txIx

sendAmountLovelace="20000000"
echo $sendAmountLovelace

senderKey="../payment.skey"
echo $senderKey

-----------------
STEP-4 Build a TX
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
STEP-5 Sign a TX
----------------
cardano-cli transaction sign \
--signing-key-file $senderKey \
--$network \
--tx-body-file simple-tx.raw \
--out-file simple-tx.signed

------------------
STEP-6 Submit a TX
------------------
cardano-cli transaction submit \
--tx-file simple-tx.signed \
--$network

------------------------------------------------
STEP-7 Check Balance and Transaction-ID (txHash)
------------------------------------------------
cardano-cli query utxo \
--address $senderAddress \
--$network

                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
1fff953597ac36aba87d2116d07cec35f4fb3a4e4da79f75bc848b1c74e08497     1        79831815 lovelace + TxOutDatumNone

Check Transaction-Id (TxHash) at https://preprod.cardanoscan.io