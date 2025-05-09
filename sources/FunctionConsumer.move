module FunctionsConsumer {

    use supra::oracle::{Oracle, OracleRequest, OracleResponse};
    use std::address;
    use std::signer;
    use std::string;
    use std::vector;

    struct State has key {
        owner: address,
        oracle_address: address,
        latest_request_id: u64,
        latest_response: vector<u8>,
        latest_error: vector<u8>,
    }

    public fun emit_event_request_fulfilled(
        request_id: u64,
        response: vector<u8>,
        error: vector<u8>
    ) {
    }

    public entry fun initialize(
        creator: &signer,
        oracle_address: address
    ) acquires State {
        let owner = signer::address_of(creator);
        let state = State {
            owner,
            oracle_address,
            latest_request_id: 0,
            latest_response: vector::empty<u8>(),
            latest_error: vector::empty<u8>(),
        };
        move_to(creator, state);
    }

    public fun only_owner(state: &State, caller: address) {
        assert!(state.owner == caller, 1);
    }

    public entry fun update_oracle_address(
        caller: &signer,
        new_oracle_address: address
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(caller));
        only_owner(state, signer::address_of(caller));
        state.oracle_address = new_oracle_address;
    }

    public entry fun execute_request(
        caller: &signer,
        source_code: string::String,
        secrets: vector<u8>,
        args: vector<string::String>,
        subscription_id: u64,
        gas_limit: u64
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(caller));
        only_owner(state, signer::address_of(caller));

        let request = OracleRequest {
            source_code,
            secrets,
            args,
            subscription_id,
            gas_limit,
        };

        let request_id = Oracle::send_request(&state.oracle_address, request);
        state.latest_request_id = request_id;
    }

    public entry fun fulfill_request(
        oracle: &signer,
        request_id: u64,
        response: vector<u8>,
        error: vector<u8>
    ) acquires State {
        let state = borrow_global_mut<State>(signer::address_of(oracle));
        assert!(
            signer::address_of(oracle) == state.oracle_address,
            2
        );

        state.latest_response = response;
        state.latest_error = error;

        emit_event_request_fulfilled(request_id, response, error);
    }
}
