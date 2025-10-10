import Link from "next/link";

function portfolioPage() {
  return (
    <div>
      Portfolio Page
       <br /> <Link  className="link" href={'/'} > Back to Home page</Link>
    </div>
  )
}

export default portfolioPage
