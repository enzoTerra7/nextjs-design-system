import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/components/accordion"}>Accordion</Link>
          <Link href={"/components/modal"}>Modal</Link>
        </li>
      </ul>
    </div>
  );
}
