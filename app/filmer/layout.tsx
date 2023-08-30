
export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>Filmkategori nav</nav>
      <main>{children}</main>
    </>
  )
}
