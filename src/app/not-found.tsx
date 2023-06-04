import Link from 'next/link'

export default function RootNotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href='/'>Go To Main</Link>
      </p>
    </div>
  )
}
