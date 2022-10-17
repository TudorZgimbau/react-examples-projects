import Link from "next/link";

const Index = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>hello</div>
        <Link href="/counter">counter example</Link>
        <Link href="/todo">todo example</Link>
        <Link href="/fetching">fetching example</Link>
        <Link href="/modal">modal example</Link>
      </div>
    </>
  );
};

export default Index;
