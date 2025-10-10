import Link from "next/link"

function clientDashboard() {
  return (
    <div>
      Client Dashboard Page
       <Link className="link" href={'/'} > Back to Home page</Link>
    </div>
  )
}

export default clientDashboard
