#!/usr/bin/env bash
near call $CONTRACT updateCandyShop --account_id $OWNER '{"name": "Choco Bar", "supply": "257"}' --amount 0.52