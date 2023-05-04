----------------------------------------------------------------------
STEP-1 Use The Wallet Address That Was Created In The 1022 module
----------------------------------------------------------------------
cd my-new-wallet

----------------------------------
STEP-2 Create lock-token Directory
----------------------------------
mkdir lock-token
cd lock-token

----------------------------------
STEP-3 Initiate Blockchain Network
----------------------------------
network="testnet-magic 1"
cardano-cli query tip \
--$network

--------------------
STEP-4 Set Variables
--------------------
senderAddress=$(cat ../payment.addr)

Balance Check:
cardano-cli query utxo \
--address $senderAddress \
--$network

                           TxHash                                 TxIx        Amount  
--------------------------------------------------------------------------------------
c0f30afab831940273b406ea9ffcdcc5c1f56a6d6a183148e073c4ba4348bf1a     0        100000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     0        10000000 lovelace + TxOutDatumNone 
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     1        15000000 lovelace + TxOutDatumNone
dc4ffb166a5875c0a819c47f53dc8556c67a8ee7be6ea3ce3656313696ea0b5a     2        25000000 lovelace + TxOutDatumNone
f0bceae3b955688e736072306b721cd2eb9a3d534d52bee1c6a47e06bc97ad75     1        19836186 lovelace + TxOutDatumNone

senderKey="../payment.skey"

utxoIn="c0f30afab831940273b406ea9ffcdcc5c1f56a6d6a183148e073c4ba4348bf1a#0"
lockAmountLovelace="7770000"

echo $senderAddress
echo $senderKey
echo $utxoIn
echo $lockAmountLovelace

------------------------------------------------------------------------
STEP-5 For Reference - Set AlwaysSucceedsAddresses And ScriptDataNumber:
------------------------------------------------------------------------
Note: Select one of AlwaysSucceedsAddresses
ALWAYS_SUCCEEDS_ADDRESS_PLUTUSTX="addr_test1wqag3rt979nep9g2wtdwu8mr4gz6m4kjdpp5zp705km8wys6t2kla"
ALWAYS_SUCCEEDS_ADDRESS_AIKEN="addr_test1wzd7s978pzla9qdwjshnme9wvlwfrrajzwcztpay7uynx9qalqts7"
ALWAYS_SUCCEEDS_ADDRESS_PLU_TS="addr_test1wr5vjne65nh3zfp9ndf6xnk02uxkzlsdtczsu7pxw8gatuqzdca8z"

ScriptDataNumber="777"

echo $ALWAYS_SUCCEEDS_ADDRESS_PLUTUSTX
echo $ALWAYS_SUCCEEDS_ADDRESS_AIKEN
echo $ALWAYS_SUCCEEDS_ADDRESS_PLU_TS
echo $ScriptDataNumber

-----------------------------------------
STEP-6 Build, Sign and Submit Transaction
-----------------------------------------
cardano-cli transaction build \
--babbage-era \
--$network \
--tx-in $utxoIn \
--tx-out $ALWAYS_SUCCEEDS_ADDRESS_AIKEN+$lockAmountLovelace \
--tx-out-inline-datum-value $ScriptDataNumber \
--change-address $senderAddress \
--out-file lock-always-succeeds.raw

cardano-cli transaction sign \
--signing-key-file $senderKey \
--$network \
--tx-body-file lock-always-succeeds.raw \
--out-file lock-always-succeeds.signed

cardano-cli transaction submit \
--tx-file lock-always-succeeds.signed \
--$network

-----------------------------
STEP-6 Check Contract Address
-----------------------------
Note: Check contract address ($ALWAYS_SUCCEEDS_ADDRESS_AIKEN) and look at ScriptDataNumber which has value 777 and 7770000 lovelace

cardano-cli query utxo \
--address $ALWAYS_SUCCEEDS_ADDRESS_AIKEN \
--$network

Result:
                           TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
1b1922e82f9aa72bf93156ac011416f8962e970a926b75eca4bbe47082b3210f     0        7770000 lovelace + TxOutDatumInline ReferenceTxInsScriptsInlineDatumsInBabbageEra (ScriptDataNumber 777)