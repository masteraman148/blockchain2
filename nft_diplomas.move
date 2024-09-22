module 0x0d7e060efcfd49a0d5647803fd2cd4eef70a0a14b3f53c24d19c2b122a42513a::nft_diplomas {

    use aptos_std::signer;
    use aptos_std::vector;

    struct Diploma has copy, drop {
        id: u64,
        owner: address,
        name: vector<u8>,
    }

    public entry fun mint_diploma(account: &signer, id: u64, name: vector<u8>) {
        let owner = signer::address_of(account);
        let _diploma = Diploma { id, owner, name };
        // You can add logic here to store the diploma in a resource
    }
}
