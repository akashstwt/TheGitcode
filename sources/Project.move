module Project {

    use std::string;
    use std::vector;
    use std::option::{Option, some, none};
    use std::table;

    // Define Bounty struct, which holds details about a single bounty.
    struct Bounty has copy, drop, store {
        description: string,
        issue_id: u64,
        bounty_amount: u64,
        repo: string,
        username: string,
        complete: bool,
    }

    // Define Bounties struct, which stores the maintainer's address and a list of bounties.
    struct Bounties has key {
        maintainer: address,
        bounties: vector<Bounty>,
    }

    // Define Contributors struct, which stores information about contributors, including their GitHub username and application status.
    struct Contributors has key {
        contributor_usernames: table::Table<address, string>,
        applied: table::Table<address, bool>,
    }

    // Initialize function to set the maintainer and create the initial bounties and contributors resources.
    public entry fun initialize(account: &signer) {
        let maintainer = signer::address_of(account);

        // Move initial Bounties and Contributors resources to the maintainer's address
        move_to<Bounties>(maintainer, Bounties {
            maintainer,
            bounties: vector::empty<Bounty>(),
        });

        move_to<Contributors>(maintainer, Contributors {
            contributor_usernames: table::new<address, string>(),
            applied: table::new<address, bool>(),
        });
    }

    // Apply to a bounty using a GitHub username. Only one application per user.
    public entry fun apply_bounty(account: &signer, github_username: string) {
        let addr = signer::address_of(account);
        let contributors = &mut borrow_global_mut<Contributors>(addr);

        // Check if the user has already applied
        assert!(
            !table::contains(&contributors.applied, addr),
            "You have already applied to this bounty"
        );

        // Ensure the GitHub username is not empty
        assert!(!string::is_empty(&github_username), "GitHub username is required");

        // Add contributor details to the table
        table::add(&mut contributors.applied, addr, true);
        table::add(&mut contributors.contributor_usernames, addr, github_username);
    }

    // Create a new bounty. Only the maintainer can create bounties.
    public entry fun create_bounty(
        account: &signer,
        description: string,
        issue_id: u64,
        bounty_amount: u64,
        repo: string,
        username: string
    ) {
        let maintainer = signer::address_of(account);
        let bounties = &mut borrow_global_mut<Bounties>(maintainer);

        // Ensure only the maintainer can create bounties
        assert!(
            bounties.maintainer == maintainer,
            "Restricted to maintainer"
        );

        // Push the new bounty into the list of bounties
        vector::push_back(&mut bounties.bounties, Bounty {
            description,
            issue_id,
            bounty_amount,
            repo,
            username,
            complete: false,
        });
    }

    // Get the total count of bounties for a particular maintainer.
    public fun get_bounties_count(account: address): u64 {
        let bounties = borrow_global<Bounties>(account);
        vector::length(&bounties.bounties)
    }
}
