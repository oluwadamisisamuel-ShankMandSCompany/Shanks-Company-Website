import Link from "next/link"

function adminDashboard() {
  return (
    <div>
      Admin Dashboard Page
      <br /> <Link className="link" href={'/'} > Back to Home page</Link>
    </div>
  )
}

export default adminDashboard
