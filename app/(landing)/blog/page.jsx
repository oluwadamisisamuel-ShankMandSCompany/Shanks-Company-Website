import Link from "next/link";

function blogPage() {
  return (
    <div>
      Blog Page
       <br /><Link className="link" href={'/'} > Back to Home page</Link>
    </div>
  )
}

export default blogPage
