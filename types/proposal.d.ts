import { ContractAddress } from "@/types/search";

export type Proposal = {
  id: number;
  proposer: string;
  targets: string[];
  values: ethers.BigNumber[];
  signatures: string[];
  calldatas: string[];
  startBlock: ethers.BigNumber;
  endBlock: ethers.BigNumber;
  description: string;
};

export type UseSearchProposals = (
  provider: ethers.providers.Provider | undefined,
  contractAddress: ContractAddress | undefined,
  startingBlock: number | null,
  enabled: boolean
) => { proposals: Proposal[]; loading: boolean };

export type ParsedProposal = {
  id: number;
  proposer: string;
  targets: string[];
  values: string[];
  signatures: string[];
  calldatas: string[];
  startBlock: string;
  endBlock: string;
  description: string;
  state: ProposalState | undefined;
};
