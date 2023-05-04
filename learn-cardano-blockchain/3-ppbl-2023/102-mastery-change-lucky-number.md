----------------------------------------------------------------------
STEP-1 Use The Wallet Address That Was Created In The 1022 module
----------------------------------------------------------------------
cd my-new-wallet

----------------------------------
STEP-2 Create transaction2 Directory
----------------------------------
mkdir transaction2
cd transaction2

----------------------------------
STEP-3 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

------------------------------------
STEP-4 Create UpdateNumber.json File
------------------------------------
vi UpdateNumber.json
click Insert 
copy-paste this: 
{ "constructor": 1, "fields": [{ "int": 5 }] }
Change 5 to another number
Ctrl+c
:wq

--------------------------------
STEP-5 Create NewDatum.json File
--------------------------------
vi NewDatum.json
click Insert
copy-paste this:
{
	"constructor": 0,
	"fields": [{ "int": 5 }, { "list": [] }]
}
Change 5 to another number
Ctrl+c
:wq

--------------------
STEP-6 Set Variables
--------------------
SENDER_ADDRESS=$(cat ../payment.addr)
SENDER_KEY="../payment.skey"
CONTRACT_ADDRESS=addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0

Note: If your PPBL2023 token in your Cardano Wallet (Nami / Eternl), send back to SENDER_ADDRESS
echo $SENDER_ADDRESS
echo $SENDER_KEY
echo $CONTRACT_ADDRESS

---------------------------------
STEP-7 Select UTxOs and Asset IDs
---------------------------------
Balance Check:
cardano-cli query utxo \
--address $SENDER_ADDRESS \
--$network

Result:
                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
1b1922e82f9aa72bf93156ac011416f8962e970a926b75eca4bbe47082b3210f     1        92062651 lovelace + TxOutDatumNone
356927e16a34e437a555d54a0e1f9a37dd84544f0d4d44a3a3cb490b92918319     0        1262830 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     0        10000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     1        15000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     2        25000000 lovelace + TxOutDatumNone
f0bceae3b955688e736072306b721cd2eb9a3d534d52bee1c6a47e06bc97ad75     1        19836186 lovelace + TxOutDatumNone

CONTRIBUTOR_TOKEN_TX_IN="356927e16a34e437a555d54a0e1f9a37dd84544f0d4d44a3a3cb490b92918319#0"
FEES_AND_COLLATERAL_TX_IN="1b1922e82f9aa72bf93156ac011416f8962e970a926b75eca4bbe47082b3210f#1"
CONTRIBUTOR_TOKEN_ASSET="05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f"

cardano-cli query utxo \
--$network \
--address $CONTRACT_ADDRESS

                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
8636d025a182a5c800fdcb6b272c05154ae6640b21a35407ac1141299da109ad     0        1305930 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3130305050424c323032335050424c323032335f4956414e4449544f + TxOutDatumInline ReferenceTxInsScriptsInlineDatumsInBabbageEra (ScriptDataConstructor 0 [ScriptDataNumber 5,ScriptDataList []])

CONTRACT_TX_IN="8636d025a182a5c800fdcb6b272c05154ae6640b21a35407ac1141299da109ad#0"
CONTRIBUTOR_REFERENCE_ASSET="05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3130305050424c323032335050424c323032335f4956414e4449544f"

echo $CONTRACT_TX_IN
echo $CONTRIBUTOR_REFERENCE_ASSET

--------------------------------
STEP-8 Create protocol.json file
--------------------------------
cardano-cli query protocol-parameters --$network --out-file protocol.json

------------------------------------------
STEP-9 Build the Transaction, Sign, Submit
------------------------------------------
cardano-cli transaction build \
--babbage-era \
--$network \
--tx-in $CONTRIBUTOR_TOKEN_TX_IN \
--tx-in $FEES_AND_COLLATERAL_TX_IN \
--tx-in-collateral $FEES_AND_COLLATERAL_TX_IN \
--tx-in $CONTRACT_TX_IN \
--spending-tx-in-reference e4155f5ef706a87611a99c16fc030ad8efa276cb2f59a1332bcee564736eb547#0 \
--spending-plutus-script-v2 \
--spending-reference-tx-in-inline-datum-present \
--spending-reference-tx-in-redeemer-file UpdateNumber.json \
--tx-out $CONTRACT_ADDRESS+"2000000 + 1 $CONTRIBUTOR_REFERENCE_ASSET" \
--tx-out-inline-datum-file NewDatum.json \
--tx-out $SENDER_ADDRESS+"2000000 + 1 $CONTRIBUTOR_TOKEN_ASSET" \
--change-address $SENDER_ADDRESS \
--protocol-params-file protocol.json \
--out-file contrib-updates-lucky-number.draft

cardano-cli transaction sign \
--signing-key-file $SENDER_KEY \
--$network \
--tx-body-file contrib-updates-lucky-number.draft \
--out-file contrib-updates-lucky-number.signed

cardano-cli transaction submit \
--tx-file contrib-updates-lucky-number.signed \
--$network


Result:
Estimated transaction fee: Lovelace 357024
Transaction successfully submitted.

cardano-cli query utxo \
--address $SENDER_ADDRESS \
--$network

                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
90375f06780d7d7054e099d5c20b9bcc60a291a6f5114bfb32618a8c0116c9e8     1        2000000 lovelace + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f + TxOutDatumNone
90375f06780d7d7054e099d5c20b9bcc60a291a6f5114bfb32618a8c0116c9e8     2        90274387 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     0        10000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     1        15000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     2        25000000 lovelace + TxOutDatumNone
f0bceae3b955688e736072306b721cd2eb9a3d534d52bee1c6a47e06bc97ad75     1        19836186 lovelace + TxOutDatumNone

-----------------
STEP-2 Build a TX
-----------------
cardano-cli transaction build \
--babbage-era \
--$network \
--tx-in 90375f06780d7d7054e099d5c20b9bcc60a291a6f5114bfb32618a8c0116c9e8#1 \
--tx-in 90375f06780d7d7054e099d5c20b9bcc60a291a6f5114bfb32618a8c0116c9e8#2 \
--tx-out addr_test1qpv9flkun5vnt9ylkyfz9vxug3phfpu650swc098hsg976zgeanlhnk8wgu8nc957efysy8rc7jxk5jfjhklnlwy2npq749k0y+"1500000 + 1 05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c323032335050424c323032335f4956414e4449544f" \
--change-address $SENDER_ADDRESS \
--out-file returnToken.raw

Result:
Estimated transaction fee: Lovelace 177029

-----------------
STEP-3 Sign a TX
-----------------
cardano-cli transaction sign \
--signing-key-file $SENDER_KEY \
--$network \
--tx-body-file returnToken.raw \
--out-file returnToken.signed

------------------
STEP-4 Submit a TX
------------------
cardano-cli transaction submit \
--tx-file returnToken.signed \
--$network