import { AccountId, ContractId, TokenId } from "@hashgraph/sdk";
import { Button, Select, TextField, Typography, MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { useWalletInterface } from "../services/wallets/useWalletInterface";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function Home() {
  const { walletInterface } = useWalletInterface();
  const [toAccountId, setToAccountId] = useState("");
  const [amount, setAmount] = useState(1);
  const [tokenId, setTokenId] = useState("0");

  return (
    <Stack alignItems="center" spacing={4}>
      <Typography
        variant="h4"
        color="white"
      >
      </Typography>
      {walletInterface !== null && (
        <>
          <Stack
            direction='row'
            gap={2}
            alignItems='center'
          >
            <Typography>
              Transfer
            </Typography>
            <TextField
              type='number'
              label='amount'
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              sx={{
                maxWidth: '100px'
              }} />
            <Typography>
              HBAR
              to
            </Typography>
            <TextField
              value={toAccountId}
              onChange={(e) => setToAccountId(e.target.value)}
              label='account id or evm address'
            />
            <Button
              onClick={async () => {
                const txId = await walletInterface.transferHBAR(AccountId.fromString(toAccountId), amount);
              }}
            >
              <SendIcon />
            </Button>
          </Stack>
          <Stack
            direction='row'
            gap={2}
            alignItems='center'
          >
            <Typography>
              Transfer
            </Typography>
            <TextField
              type='number'
              label='amount'
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              sx={{
                maxWidth: '100px'
              }} />
            <Select value={tokenId} onChange={(e) => setTokenId(e.target.value as string)}>
              <MenuItem value={"0"}>Token 1</MenuItem>
              <MenuItem value={"1"}>Token 2</MenuItem>
              <MenuItem value={"2"}>Token 3</MenuItem>
            </Select>
            <TextField
              value={toAccountId}
              onChange={(e) => setToAccountId(e.target.value)}
              label='account id or evm address'
            />
            <Button
              onClick={async () => {
                const txId = await walletInterface.transferFungibleToken(AccountId.fromString(toAccountId), TokenId.fromString(tokenId), amount);
              }}
            >
              <SendIcon />
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  )
}