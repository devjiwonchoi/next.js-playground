'use client'

export function ServerActionButton2({
  sayHello,
}: {
  sayHello: () => Promise<void>
}) {
  return (
    <button onClick={async () => await sayHello()}>
      Say Hello to Coding in Flow
    </button>
  )
}
