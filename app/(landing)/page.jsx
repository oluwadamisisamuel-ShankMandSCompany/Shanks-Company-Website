import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">
      Home Page

      <Link className="link" href={'/about'} > About us page</Link>
      <Link className="link" href={'/blog'} > Blog page</Link>
      <Link className="link" href={'/services'} > Services page</Link>
      <Link className="link" href={'/contact'} > Contact us page</Link>
      <Link className="link" href={'/portfolio'} > Portfolio page</Link>
      <Link className="link" href={'/careers'} > Careers page</Link>
      <Link className="link" href={'/login'} > Login page</Link>
      <Link className="link" href={'/admin'} > Admin page</Link>
    </div>
  );
}
