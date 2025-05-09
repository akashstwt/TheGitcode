module AutomatedFunctionsConsumer {

    use supra::oracle::{Oracle, OracleRequest, OracleResponse};
    use supra::time;
    use std::address;
    use std::signer;
    use std::string;
    use std::vector;

    struct State has key {
        owner: address,
        oracle_address: address,
        request_cbor: vector<u8>,
        latest_request_id: u64,
        latest_response: vector<u8>,
        latest_error: vector<u8>,
        subscription_id: u64,
        fulfill_gas_limit: u64,
        update_interval: u64,
        last_upkeep_timestamp: u64,
        upkeep_counter: u64,
        response_counter: u64,
    }

    public fun emit_event_response_fulfilled(
        request_id: u64,
        response: vector<u8>,
        error: vector<u8>
    ) {
    }

    public entry fun initialize(
        creator: &signer,
        oracle_address: address,
        subscription_id: u64,
        fulfill_gas_limit: u64,
        update_interval: u64
    ) acquires State {
        let owner = signer::address_of(creator);
        let state = State {
            owner,
            oracle_address,
            request_cbor: vector::empty<u8>(),
            latest_request_id: 0,
            latest_response: vector::empty<u8>(),
            latest_error: vector::empty<u8>(),
            subscription_id,
            fulfill_gas_limit,
            update_interval,
            last_upkeep_timestamp: time::now_seconds(),
            upkeep_counter: 0,
            response_counter: 0,
        };
        move_to(creator, state);
    }

    public entry fun update_oracle_address(
        caller: &signer,
        new_oracle_address: address
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(caller));
        assert!(state.owner == signer::address_of(caller), 1);
        state.oracle_address = new_oracle_address;
    }

    public fun generate_request_cbor(
        source_code: string::String,
        secrets: vector<u8>,
        args: vector<string::String>
    ): vector<u8> {
        let request = OracleRequest {
            source_code,
            secrets,
            args,
            subscription_id: 0,
            gas_limit: 0,
        };
        Oracle::encode_request(request)
    }

    public entry fun set_request(
        caller: &signer,
        subscription_id: u64,
        fulfill_gas_limit: u64,
        update_interval: u64,
        new_request_cbor: vector<u8>
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(caller));
        assert!(state.owner == signer::address_of(caller), 2);
        state.subscription_id = subscription_id;
        state.fulfill_gas_limit = fulfill_gas_limit;
        state.update_interval = update_interval;
        state.request_cbor = new_request_cbor;
    }

    public fun check_upkeep(state: &State): bool {
        time::now_seconds() - state.last_upkeep_timestamp > state.update_interval
    }

    public entry fun perform_upkeep(
        caller: &signer
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(caller));
        assert!(state.owner == signer::address_of(caller), 3);
        assert!(check_upkeep(state), 4);

        state.last_upkeep_timestamp = time::now_seconds();
        state.upkeep_counter = state.upkeep_counter + 1;

        let request_id = Oracle::send_request(
            &state.oracle_address,
            state.request_cbor,
            state.subscription_id,
            state.fulfill_gas_limit
        );

        state.latest_request_id = request_id;
    }

    public entry fun fulfill_request(
        oracle: &signer,
        request_id: u64,
        response: vector<u8>,
        error: vector<u8>
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(oracle));
        assert!(signer::address_of(oracle) == state.oracle_address, 5);

        state.latest_response = response;
        state.latest_error = error;
        state.response_counter = state.response_counter + 1;

        emit_event_response_fulfilled(request_id, response, error);
    }
}
