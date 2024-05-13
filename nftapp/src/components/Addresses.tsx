export const Addresses = () => {
  return (
    <div className="fixed bottom-5 left-10 text-left text-sm w-full pb-12 lg:pb-0">
      <div className="pt-4">
        <div className="hidden lg:inline">
          Text-to-image contract:<br/>
          <a
            className="underline"
            href={`https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?tab=transactions`}
            target="_blank"
          >
            {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
          </a>
        </div>
        <div className="inline lg:hidden">
          Text-to-image contract:<br/>
          <a
            className="underline"
            href={`https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?tab=transactions`}
            target="_blank"
          >
            {(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "").slice(0, 10)}...
          </a>
        </div>
        <div className="pt-4">
        <div className="hidden lg:inline">
          Oracle contract:&nbsp;
          <a className="underline"
            href={`https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/${process.env.NEXT_PUBLIC_ORACLE_CONTRACT_ADDRESS}?tab=transactions`}
            target="_blank">{process.env.NEXT_PUBLIC_ORACLE_CONTRACT_ADDRESS}</a>
        </div>
        <div className="inline lg:hidden">
          Oracle contract:&nbsp;
          <a className="underline"
            href={`https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/${process.env.NEXT_PUBLIC_ORACLE_CONTRACT_ADDRESS}?tab=transactions`}
            target="_blank">{(process.env.NEXT_PUBLIC_ORACLE_CONTRACT_ADDRESS || "").slice(0, 10)}...</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Addresses;