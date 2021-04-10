import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>my name is yusuhyeon</h1>
      <p>my hobby is playing game</p><h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}