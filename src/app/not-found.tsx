import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="container-page">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tightest">
          That page does not exist.
        </h1>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
          The link may be out of date. Everything on this site lives on one page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-lg bg-fg px-5 text-[14px] font-medium text-bg transition-opacity hover:opacity-85"
        >
          Back to the portfolio
        </Link>
      </div>
    </main>
  )
}
