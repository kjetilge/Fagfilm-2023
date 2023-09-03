
export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>Filmkategori nav</nav>
      <h1>Filmer</h1>
      <main>{children}</main>
    </>
  )
}
