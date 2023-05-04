Aiken Installation:
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
select 1 to Proceed with installation (default)
rustc --version
cargo --version
curl -sSfL https://install.aiken-lang.org | bash
aikup
aiken -V

Follow Tutorial Hello, World!:
cd ~
mkdir ppbl2023
cd ppbl2023
mkdir learn-aiken
cd learn-aiken
aiken new aiken-lang/hello_world
cd hello_world
aiken check