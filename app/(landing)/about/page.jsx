import Link from "next/link"

function AboutPage() {
  return (
    <div>
      About Page
      <br /> <Link className="link" href={'/'} > Back to Home page</Link>
    </div>
  )
}

export default AboutPage
