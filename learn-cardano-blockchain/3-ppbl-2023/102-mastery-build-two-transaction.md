====================================================
PART-1 Tx #1: How to build a split UTxO Transaction:
====================================================
----------------------------------------------------------------------
STEP-1 Use The Wallet Address That Was Created In The 1022-1023 module
----------------------------------------------------------------------
cd my-new-wallet/transaction

----------------------------------
STEP-2 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

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
1fff953597ac36aba87d2116d07cec35f4fb3a4e4da79f75bc848b1c74e08497     1        79831815 lovelace + TxOutDatumNone
37c70ae0cb1ee92665da34e7ab0ee6bef7ebec5c4cc7153fa5128d4b2d020d62     0        1245590 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f + TxOutDatumNone

txHash="1fff953597ac36aba87d2116d07cec35f4fb3a4e4da79f75bc848b1c74e08497"
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
recipientAddress=addr_test1qp7hqsclprzhj3xzecm4x4ywk734w5g8ghhccnlfjp7g2pykluym9643satn7dq2gtgsmd50rh2qpesdzep4rdkqgt8srg4ldg
echo $recipientAddress

Check senderAddress balance:
cardano-cli query utxo \
--address $senderAddress \
--$network

Result :
                           TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
5bf792ba9b24050c7b72eff259b2174cfba1994bf285616127523795d6bec7af     1        29226295 lovelace + TxOutDatumNone
63479ccaadd1685ee5a9a2bf829374a9e801c147349631c39732e339bac1519f     0        1245590 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f + TxOutDatumNone
bce4e838398353b7f72029a7f4765d3f32a2118d45dc68a20a13b7bd8ec352f1     0        10000000 lovelace + TxOutDatumNone
bce4e838398353b7f72029a7f4765d3f32a2118d45dc68a20a13b7bd8ec352f1     1        15000000 lovelace + TxOutDatumNone
bce4e838398353b7f72029a7f4765d3f32a2118d45dc68a20a13b7bd8ec352f1     2        25000000 lovelace + TxOutDatumNone


txHashLovelace="bce4e838398353b7f72029a7f4765d3f32a2118d45dc68a20a13b7bd8ec352f1"
echo $txHashLovelace

txIxLovelace="2"
echo $txIxLovelace

txHashToken="63479ccaadd1685ee5a9a2bf829374a9e801c147349631c39732e339bac1519f"
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
5bf792ba9b24050c7b72eff259b2174cfba1994bf285616127523795d6bec7af     1        29226295 lovelace + TxOutDatumNone
bce4e838398353b7f72029a7f4765d3f32a2118d45dc68a20a13b7bd8ec352f1     0        10000000 lovelace + TxOutDatumNone
bce4e838398353b7f72029a7f4765d3f32a2118d45dc68a20a13b7bd8ec352f1     1        15000000 lovelace + TxOutDatumNone
f3d119f28d22095d6cb87d202a5ec7a53d87b34c391657819ac81adc9b10202b     1        24568561 lovelace + TxOutDatumNone

Check Transaction-Id (TxHash) at https://preprod.cardanoscan.io