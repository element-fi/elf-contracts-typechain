// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

interface CurvePoolWith2Tokens {
    function calc_token_amount(uint256[2] memory amounts, bool isDeposit)
        external
        view
        returns (uint256);

    function calc_withdraw_one_coin(uint256 amount, int128 selector)
        external
        view
        returns (uint256);
}