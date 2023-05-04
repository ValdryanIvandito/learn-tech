====================================================
PART-1 Tx #1: How to build a split UTxO Transaction:
====================================================
----------------------------------------------------------------------
STEP-1 Use The Wallet Address That Was Created In The 1022 module
----------------------------------------------------------------------
cd my-new-wallet/transaction

----------------------------------
STEP-2 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

--------------------------------------
STEP-3 Send PPBL Token To payment.addr
--------------------------------------
Open cardano wallet and then send your PPBL2023 token wallet to payment.addr

-------------------------
STEP-3 Initiate Variables
-------------------------
senderAddress=$(cat ../payment.addr)
echo $senderAddress

Check senderAddress balance:
cardano-cli query utxo \
--address $senderAddress \
--$network

Result :
                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
4b355eeae203434d9565a35bda355ea2a5dd79003e673fad744cdb44f3d081b2     0        1262830 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f + TxOutDatumNone
f705c65d2a83ebb3a64c2aceb6365e302e0e1c00664a4dece247e5408f44ab64     1        79831815 lovelace + TxOutDatumNone

txHash="f705c65d2a83ebb3a64c2aceb6365e302e0e1c00664a4dece247e5408f44ab64"
echo $txHash

txIx="1"
echo $txIx

sendAmountLovelace1="10000000"
sendAmountLovelace2="15000000"
sendAmountLovelace3="25000000"
echo $sendAmountLovelace1
echo $sendAmountLovelace2
echo $sendAmountLovelace3

senderKey="../payment.skey"
echo $senderKey

-----------------
STEP-4 Build a TX
-----------------
cardano-cli transaction build \
--babbage-era \
--$network \
--tx-in $txHash#$txIx \
--tx-out $senderAddress+$sendAmountLovelace1 \
--tx-out $senderAddress+$sendAmountLovelace2 \
--tx-out $senderAddress+$sendAmountLovelace3 \
--change-address $senderAddress \
--out-file split-utxo.raw

Result:
Estimated transaction fee: Lovelace 174081

----------------
STEP-5 Sign a TX
----------------
cardano-cli transaction sign \
--signing-key-file $senderKey \
--$network \
--tx-body-file split-utxo.raw \
--out-file split-utxo.signed

------------------
STEP-6 Submit a TX
------------------
cardano-cli transaction submit \
--tx-file split-utxo.signed \
--$network


==================================================================
PART-2 Tx #2: How to send a Cardano Native Asset in a transaction:
==================================================================
-------------------------
STEP-1 Initiate Variables
-------------------------
recipientAddress=addr_test1qpv9flkun5vnt9ylkyfz9vxug3phfpu650swc098hsg976zgeanlhnk8wgu8nc957efysy8rc7jxk5jfjhklnlwy2npq749k0y
echo $recipientAddress

Check senderAddress balance:
cardano-cli query utxo \
--address $senderAddress \
--$network

Result :
                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
4b355eeae203434d9565a35bda355ea2a5dd79003e673fad744cdb44f3d081b2     0        1262830 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     0        10000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     1        15000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     2        25000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     3        29657734 lovelace + TxOutDatumNone

txHashLovelace="dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a"
echo $txHashLovelace

txIxLovelace="3"
echo $txIxLovelace

txHashToken="4b355eeae203434d9565a35bda355ea2a5dd79003e673fad744cdb44f3d081b2"
echo $txHashToken

txIxToken="0"
echo $txIxToken

tokenAssetId="05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f"
echo $tokenAssetId


-----------------
STEP-2 Build a TX
-----------------
cardano-cli transaction build \
--babbage-era \
--$network \
--tx-in $txHashToken#$txIxToken \
--tx-in $txHashLovelace#$txIxLovelace \
--tx-out $recipientAddress+"1500000 + 1 $tokenAssetId" \
--change-address $senderAddress \
--out-file send-contrib-token.raw

Result:
Estimated transaction fee: Lovelace 177029

-----------------
STEP-3 Sign a TX
-----------------
cardano-cli transaction sign \
--signing-key-file $senderKey \
--$network \
--tx-body-file send-contrib-token.raw \
--out-file send-contrib-token.signed

------------------
STEP-4 Submit a TX
------------------
cardano-cli transaction submit \
--tx-file send-contrib-token.signed \
--$network

------------------------------------------------
STEP-5 Check Balance and Transaction-ID (txHash)
------------------------------------------------
cardano-cli query utxo \
--address $senderAddress \
--$network

                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
be34f17626326b539eed7dad7ee4e021a874db7e585c4b90a822b58d26917b60     1        29243535 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     0        10000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     1        15000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     2        25000000 lovelace + TxOutDatumNone

Check Transaction-Id (TxHash) at https://preprod.cardanoscan.io