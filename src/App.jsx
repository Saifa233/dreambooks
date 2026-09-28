import { useEffect, useState } from 'react'
import publishingBooks from './assets/publishing-books.png'
import prideCover from './assets/covers/pride-and-prejudice.jpg'
import aliceCover from './assets/covers/alice-in-wonderland.jpg'
import frankensteinCover from './assets/covers/frankenstein.jpg'
import draculaCover from './assets/covers/dracula.jpg'
import gatsbyCover from './assets/covers/great-gatsby.jpg'
import janeCover from './assets/covers/jane-eyre.jpg'
import wutheringCover from './assets/covers/wuthering-heights.jpg'
import timeMachineCover from './assets/covers/time-machine.jpg'
import dorianCover from './assets/covers/dorian-gray.jpg'
import secretGardenCover from './assets/covers/secret-garden.jpg'

const services = [
  ['01', 'Ghostwriting', 'Your memories, expertise, or big idea shaped into a compelling manuscript that still sounds like you.'],
  ['02', 'Book Editing', 'Thoughtful developmental editing, copyediting, and proofreading that make every page shine.'],
  ['03', 'Book Publishing', 'Beautiful print and ebook production, ISBN support, and worldwide distribution.'],
  ['04', 'Amazon Publishing', 'A polished Amazon presence that helps readers discover your book and buy with confidence.'],
  ['05', 'Book Marketing', 'Smart launch plans and author marketing designed to put your book in front of its readers.'],
  ['06', 'Cover Design', 'Genre-aware covers and interior layouts that look at home on any bookstore shelf.'],
]

const books = [
  { title: 'Pride and Prejudice', author: 'Jane Austen', cover: prideCover, id: 1342 },
  { title: "Alice's Adventures in Wonderland", author: 'Lewis Carroll', cover: aliceCover, id: 11 },
  { title: 'Frankenstein', author: 'Mary Shelley', cover: frankensteinCover, id: 84 },
  { title: 'Dracula', author: 'Bram Stoker', cover: draculaCover, id: 345 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: gatsbyCover, id: 64317 },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', cover: janeCover, id: 1260 },
  { title: 'Wuthering Heights', author: 'Emily Brontë', cover: wutheringCover, id: 768 },
  { title: 'The Time Machine', author: 'H. G. Wells', cover: timeMachineCover, id: 35 },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', cover: dorianCover, id: 174 },
  { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', cover: secretGardenCover, id: 113 },
]

const faqs = [
  ['What does a full-service publishing partner do?', 'We support the complete journey from a rough idea or finished manuscript through editing, design, production, distribution, and launch planning.'],
  ['Will I keep ownership of my book?', 'Yes. Your work, rights, and royalties stay with you. We are your creative and publishing partner.'],
  ['Can you help if I only have an idea?', 'Absolutely. Our ghostwriting and book-development services are built for authors starting with notes, stories, expertise, or a vision.'],
  ['How do I begin?', 'Share a little about your project through our inquiry form. We will arrange a no-pressure conversation about your goals and next steps.'],
]

const processSteps = [
  ['01', 'Idea', 'Share your book idea, outline, or manuscript. We start where you are.'],
  ['02', 'Consultation', 'Get a clear roadmap with timelines, pricing, and project milestones.'],
  ['03', 'Writing', 'Work with expert writers to create a manuscript in your voice.'],
  ['04', 'Editing', 'Professional editing prepares your manuscript for publication.'],
  ['05', 'Design', 'Custom cover and interior design built to publishing standards.'],
  ['06', 'Publishing', 'Publish worldwide in print, ebook, and hardcover formats.'],
  ['07', 'Marketing', 'Reach more readers with targeted book marketing strategies.'],
  ['08', 'Success', 'Track results and grow your book with ongoing support.'],
]

const genreColumns = [
  ['Fiction', 'Business'],
  ['Non-Fiction', "Children's Books"],
  ['Memoir', 'Cookbooks'],
  ['Biography', 'Poetry'],
  ['Self-Help', 'Fantasy'],
]

function GenreIcon({ genre }) {
  const motif = {
    Fiction: <><path d="m24 14 2.2 4.8 5.3.6-3.9 3.6 1.1 5.2-4.7-2.5-4.7 2.5 1.1-5.2-3.9-3.6 5.3-.6Z" /></>,
    Business: <><path d="M17 30v-5m5 5v-9m5 9V17m5 13V14M15 33h19" /></>,
    'Non-Fiction': <><circle cx="24" cy="20" r="5" /><path d="M21 26h6m-5 3h4m-2-17v-2m-9 10h-2m22 0h-2" /></>,
    "Children's Books": <><path d="M24 30s-9-5.4-9-11a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 5.6-9 11-9 11Z" /></>,
    Memoir: <><circle cx="24" cy="18" r="4" /><path d="M17 30c.7-4 3.1-6 7-6s6.3 2 7 6" /></>,
    Cookbooks: <><path d="M16 23h16c0 6-3 9-8 9s-8-3-8-9Zm3-4c-1-2 1-3 0-5m5 5c-1-2 1-3 0-5m5 5c-1-2 1-3 0-5" /></>,
    Biography: <><circle cx="24" cy="17" r="4" /><path d="M17 29c1-4 3.5-6 7-6s6 2 7 6M16 33h16" /></>,
    Poetry: <><path d="M17 29c6-1 12-8 15-15-8 1-16 8-15 15Zm0 0-3 4m9-12 4 4" /></>,
    'Self-Help': <><path d="M24 31V16m-6 6 6-6 6 6M17 33h14" /></>,
    Fantasy: <><path d="M17 31V20l4-3v-4h6v4l4 3v11m-17 2h20M21 31v-6h6v6" /></>,
  }[genre]

  return <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-[#006576]">
    <path d="M12 5h23v35H12a3 3 0 0 0 0 6h25V5H12a3 3 0 0 0-3 3v35a3 3 0 0 1 3-3m0 0h23" />
    {motif}
  </svg>
}

function BookShowcase() {
  const [firstBook, setFirstBook] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    books.forEach(({ cover }) => {
      const image = new Image()
      image.src = cover
    })
  }, [])

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setTimeout(() => setFirstBook((current) => (current + 1) % books.length), 4000)
    return () => window.clearTimeout(timer)
  }, [firstBook, paused])

  const visibleBooks = [0, 1, 2].map((offset) => books[(firstBook + offset) % books.length])

  return <section id="portfolio" className="relative overflow-hidden bg-white px-5 py-20 text-center sm:px-8 sm:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_48%,rgba(0,90,98,.18),transparent_31%),radial-gradient(circle_at_80%_74%,rgba(0,90,98,.24),transparent_35%)]" />
    <div className="relative mx-auto max-w-[1080px]">
      <h2 className="font-[DM_Sans] text-[clamp(2rem,3.2vw,2.5rem)] font-medium text-[#101010]">Our Portfolio</h2>
      <div aria-hidden="true" className="mx-auto mt-1 flex items-center justify-center gap-1 text-[#005a62]"><span className="h-px w-5 bg-current" /><span className="h-2 w-2 bg-current" /><span className="h-px w-5 bg-current" /></div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}>
        {visibleBooks.map((book, index) => <article className={`${index === 1 ? 'hidden sm:block' : ''} ${index === 2 ? 'hidden lg:block' : ''} portfolio-card mx-auto w-full max-w-[320px] animate-[portfolio-enter_.65s_ease-out_both] overflow-hidden rounded-[20px] bg-white shadow-[0_12px_30px_rgba(10,40,50,.18)]`} key={`${firstBook}-${book.id}`}>
          <a href={`https://www.gutenberg.org/ebooks/${book.id}`} target="_blank" rel="noopener noreferrer" aria-label={`${book.title} by ${book.author} on Project Gutenberg`}>
            <img src={book.cover} alt={`Cover of ${book.title}`} className="aspect-[2/3] w-full bg-[#e9e9e9] object-cover" />
            <div className="flex min-h-[92px] flex-col justify-center px-4 py-3">
              <h3 className="font-[DM_Sans] text-[17px] font-semibold leading-tight text-[#005a62]">{book.title}</h3>
              <p className="mt-1 font-[DM_Sans] text-sm text-[#242424]">By {book.author}</p>
            </div>
          </a>
        </article>)}
      </div>
      <div className="mt-7 flex justify-center gap-2" aria-label="Choose a book to show first">
        {books.map((book, index) => <button className={`h-2.5 w-2.5 rounded-full transition ${index === firstBook ? 'bg-[#005a62]' : 'bg-[#005a62]/30 hover:bg-[#005a62]/60'}`} key={book.id} onClick={() => setFirstBook(index)} type="button" aria-label={`Show ${book.title} first`} aria-current={index === firstBook ? 'true' : undefined} />)}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a className="inline-flex min-h-12 items-center justify-center rounded bg-[#4768d7] px-7 font-[DM_Sans] text-sm font-semibold uppercase text-white transition hover:opacity-90" href="#contact">Get a free quote</a>
        <a className="inline-flex min-h-12 items-center justify-center rounded border border-[#102c3d] px-7 font-[DM_Sans] text-sm font-semibold uppercase text-[#102c3d] transition hover:bg-[#102c3d] hover:text-white" href="#contact">Talk to us</a>
      </div>
    </div>
  </section>
}

const eyebrow = 'font-[DM_Mono] text-[11px] uppercase tracking-[.14em] text-[#cf775e]'
const title = 'font-[Playfair_Display] font-semibold tracking-[-.055em] leading-[.98] text-[#102c3d]'
const button = 'inline-flex items-center gap-5 bg-[#4768d7] px-5 py-4 font-[DM_Mono] text-[16px] font-medium uppercase tracking-wide text-white transition hover:bg-[#cf775e]'
const navLink = 'whitespace-nowrap font-[DM_Sans] text-[13px] font-medium uppercase tracking-[.02em] text-white transition hover:text-[#e8e9e1]'

function Logo() {
  return <a className="inline-flex items-baseline font-[Playfair_Display] text-[26px] font-bold tracking-[-.06em] text-[#102c3d]" href="#top"><span className="text-[#cf775e]">dream</span>books<small className="ml-1.5 font-[DM_Mono] text-[8px] tracking-[.21em]"> PUBLISHING</small></a>
}

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="relative z-30 h-[76px] bg-white lg:h-[100px]">
      <div className="mx-auto flex h-full max-w-[1130px] items-center justify-between gap-6 px-5 lg:px-0">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          <a className="flex items-center gap-3 text-[#102c3d]" href="tel:+18005550198">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#4768d7]/30 text-[#4768d7]" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 16.5v2.25A2.25 2.25 0 0 1 18.75 21C10.05 21 3 13.95 3 5.25A2.25 2.25 0 0 1 5.25 3H7.5l1.4 4.3-2.1 1.6a16.2 16.2 0 0 0 8.3 8.3l1.6-2.1L21 16.5Z" /></svg></span>
            <span className="flex flex-col text-right font-[DM_Sans] text-xs leading-tight"><span>Connect with our team now?</span><strong className="text-[18px]">(800) 555-0198</strong></span>
          </a>
          <div className="flex items-center gap-1">
            <a className="inline-flex h-12 items-center justify-center rounded bg-[#4768d7] px-6 font-[DM_Sans] text-xs font-bold uppercase text-white transition hover:opacity-90" href="tel:+18005550198">Call now</a>
            <a className="inline-flex h-12 items-center justify-center rounded bg-[#4768d7] px-7 font-[DM_Sans] text-xs font-bold uppercase text-white transition hover:opacity-90" href="#contact">Let’s get started</a>
          </div>
        </div>
        <button className="text-3xl text-[#102c3d] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? '×' : '☰'}</button>
      </div>
      <nav id="primary-navigation" aria-label="Primary navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[76px] z-40 flex-col gap-0 border border-[#4768d7] bg-[#4768d7] px-5 py-3 shadow-xl lg:bottom-[-47px] lg:left-1/2 lg:right-auto lg:top-auto lg:flex lg:h-[53px] lg:w-[min(1130px,calc(100%-3rem))] lg:-translate-x-1/2 lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:px-6 lg:py-0`}>
        <a className={`${navLink} py-2 lg:py-0`} href="#top" onClick={closeMenu}>Home</a>
        <a className={`${navLink} py-2 lg:py-0`} href="#book-marketing" onClick={closeMenu}>Marketing</a>
        <a className={`${navLink} py-2 lg:py-0`} href="#book-publishing" onClick={closeMenu}>Publishing</a>
        <a className={`${navLink} py-2 lg:py-0`} href="#process" onClick={closeMenu}>Our Process</a>
        <details className="group relative py-2 lg:py-0">
          <summary className={`${navLink} flex cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden`}>Services <span aria-hidden="true" className="text-[10px]">▾</span></summary>
          <div className="mt-2 flex flex-col gap-1 rounded bg-[#4768d7] p-2 shadow-xl lg:absolute lg:left-0 lg:top-full lg:mt-4 lg:min-w-[210px]">
            {services.map(([, name]) => <a className="whitespace-nowrap px-3 py-2 font-[DM_Sans] text-sm text-white hover:bg-white/15" href={`#${name.toLowerCase().replace(/\s+/g, '-')}`} key={name} onClick={(event) => { event.currentTarget.closest('details')?.removeAttribute('open'); closeMenu() }}>{name}</a>)}
          </div>
        </details>
        <details className="group relative py-2 lg:py-0">
          <summary className={`${navLink} flex cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden`}>Genres <span aria-hidden="true" className="text-[10px]">▾</span></summary>
          <div className="mt-2 grid grid-cols-2 gap-1 rounded bg-[#4768d7] p-2 shadow-xl lg:absolute lg:left-0 lg:top-full lg:mt-4 lg:min-w-[300px]">
            {genreColumns.flat().map((genre) => <a className="whitespace-nowrap px-3 py-2 font-[DM_Sans] text-sm text-white hover:bg-white/15" href="#genres" key={genre} onClick={(event) => { event.currentTarget.closest('details')?.removeAttribute('open'); closeMenu() }}>{genre}</a>)}
          </div>
        </details>
        <a className={`${navLink} py-2 lg:py-0`} href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a className={`${navLink} py-2 lg:py-0`} href="#contact" onClick={closeMenu}>Contact Us</a>
      </nav>
    </header>
    <main id="top">
      <section className="relative isolate min-h-[690px] overflow-hidden bg-[#e8e9e1] text-[#102c3d]">
        <div className="mx-auto grid w-full max-w-[1190px] items-center gap-10 px-5 py-16 sm:px-8 lg:min-h-[690px] lg:grid-cols-[minmax(0,1.2fr)_minmax(380px,.8fr)] lg:gap-14 lg:py-12">
          <div className="max-w-[650px]">
            <h1 className="max-w-[650px] font-[DM_Sans] text-[clamp(2rem,3vw,2.65rem)] font-medium uppercase leading-[1.14] tracking-[-.025em] text-[#102c3d]">The Book Publishing Company That Helps Authors Publish With Confidence</h1>
            <p className="mt-5 max-w-[630px] font-[DM_Sans] text-[15px] leading-[1.55] text-[#455a64]">You wrote the words. We handle everything else, writing support, editing, design, publishing, and marketing, so your book launches like one from a top publishing house, not a hopeful first attempt.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5"><a className={`${button} min-h-12 justify-center px-6 py-3 text-center`} href="#contact">Start your publishing journey <b className="text-lg font-normal">→</b></a><a className="border-b border-[#102c3d] pb-1.5 font-[DM_Mono] text-[11px] uppercase tracking-wide" href="#services">Explore our services ↓</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[460px] lg:ml-auto">
            <form className="relative rounded-[20px] border border-[#4768d7] bg-white/80 px-6 pb-7 pt-8 shadow-[0_24px_65px_rgba(0,0,0,.16)] backdrop-blur-[3px] sm:px-7" onSubmit={(event) => event.preventDefault()}>
              <span aria-hidden="true" className="absolute -left-3 -top-7 select-none text-5xl text-[#4768d7] drop-shadow-[0_0_18px_#4768d7]">✦</span><span aria-hidden="true" className="absolute -right-3 -top-7 select-none text-5xl text-[#4768d7] drop-shadow-[0_0_18px_#4768d7]">✦</span>
              <h2 className="text-center font-[DM_Sans] text-[22px] font-bold leading-tight">Sign Up and Get Special</h2>
              <p className="mx-auto mt-3 w-fit rounded-full border-2 border-[#4768d7] px-3 py-1 text-center font-[DM_Sans] text-[clamp(1rem,2vw,1.35rem)] font-bold leading-tight text-[#4768d7]">50% Anniversary DISCOUNT</p>
              <div className="mt-6 space-y-3.5">
                <label className="flex h-11 items-center gap-3 rounded border border-[#102c3d]/25 bg-white/55 px-3 text-[#4768d7] focus-within:border-[#4768d7]"><span aria-hidden="true">♙</span><input aria-label="Your name" className="w-full bg-transparent text-sm text-[#102c3d] outline-none placeholder:text-[#52616a]" placeholder="Type Your Name" required /></label>
                <label className="flex h-11 items-center gap-3 rounded border border-[#102c3d]/25 bg-white/55 px-3 text-[#4768d7] focus-within:border-[#4768d7]"><span aria-hidden="true">✉</span><input aria-label="Your email address" className="w-full bg-transparent text-sm text-[#102c3d] outline-none placeholder:text-[#52616a]" placeholder="Type Your Email Address" type="email" required /></label>
                <label className="flex h-11 items-center gap-3 rounded border border-[#102c3d]/25 bg-white/55 px-3 text-[#4768d7] focus-within:border-[#4768d7]"><span aria-hidden="true">◉</span><input aria-label="Your phone number" className="w-full bg-transparent text-sm text-[#102c3d] outline-none placeholder:text-[#52616a]" placeholder="Type Your Phone Number" type="tel" /></label>
                <label className="flex items-start gap-3 rounded border border-[#102c3d]/25 bg-white/55 px-3 py-3 text-[#4768d7] focus-within:border-[#4768d7]"><span aria-hidden="true" className="mt-0.5">▤</span><textarea aria-label="What you are looking for" className="min-h-[88px] w-full resize-none bg-transparent text-sm text-[#102c3d] outline-none placeholder:text-[#52616a]" placeholder="I am looking for..." /></label>
              </div>
              <button className="mt-5 w-full rounded bg-[#4768d7] py-3 font-medium text-white transition hover:bg-[#cf775e]" type="submit">Activate Now</button>
            </form>
          </div>
        </div>
      </section>
      <section id="about" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_79%_44%,rgba(9,38,55,.22),transparent_46%)]" />
        <div className="relative mx-auto grid max-w-[1210px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="max-w-[570px]">
            <h2 className="font-[DM_Sans] text-[clamp(1.8rem,2.4vw,2.3rem)] font-semibold leading-[1.12] text-[#4768d7]">Where Authors Get the Best Self Publishing Services</h2>
            <p className="mt-4 font-[DM_Sans] text-[17px] leading-[1.45] text-[#102c3d]">Every great book starts with an idea.</p>
            <p className="mt-4 font-[DM_Sans] text-[17px] leading-[1.5] text-[#102c3d]">As a full-service book publishing company, Dream Books Publishing helps authors turn that idea into a professionally written, beautifully designed, and successfully published book.</p>
            <p className="mt-4 font-[DM_Sans] text-[17px] leading-[1.5] text-[#102c3d]">Whether you’re working from a rough concept, a stack of notes, or a finished manuscript that needs a serious polish, our team walks you through it from start to finish.</p>
            <h3 className="mt-6 font-[DM_Sans] text-[27px] font-semibold leading-tight text-[#102c3d]">Why Authors Choose Us</h3>
            <ul className="mt-3 space-y-3 font-[DM_Sans] text-[15px] font-medium leading-[1.45] text-[#102c3d]">
              {['A simple, transparent process from day one', 'Experienced writers, editors, and designers', 'Publishing support for print and digital formats', 'A dedicated team for your book', 'Clear communication at every step'].map((item) => <li className="flex items-start gap-2" key={item}><span aria-hidden="true" className="font-bold text-[#4768d7]">✓</span><span>{item}</span></li>)}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex min-h-12 items-center justify-center rounded bg-[#4768d7] px-6 font-[DM_Sans] text-sm font-semibold uppercase text-white transition hover:opacity-90" href="#contact">Get a free quote</a>
              <a className="inline-flex min-h-12 items-center justify-center rounded border border-[#102c3d] px-6 font-[DM_Sans] text-sm font-semibold uppercase text-[#102c3d] transition hover:bg-[#102c3d] hover:text-white" href="#services">Explore services</a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img src={publishingBooks} alt="Hardcover books and an ebook reader displaying an illustrated night scene" className="h-auto w-full max-w-[680px] object-contain" loading="lazy" />
          </div>
        </div>
      </section>
      <section id="services" className="bg-[#e6e8df] px-5 py-20 sm:px-[8vw] sm:py-32"><div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className={eyebrow}>What we do</p><h2 className={`${title} mt-5 text-5xl sm:text-7xl`}>Everything your<br /><em className="font-medium text-[#4768d7]">book needs.</em></h2></div><a className="w-fit border-b border-[#102c3d] pb-1.5 font-[DM_Mono] text-[11px] uppercase tracking-wide" href="#contact">See all services →</a></div><div className="grid border-l border-t border-[#102c3d]/20 sm:grid-cols-2 lg:grid-cols-3">{services.map(([num, name, copy]) => <article id={name.toLowerCase().replace(/\s+/g, '-')} className="group relative min-h-[300px] border-b border-r border-[#102c3d]/20 p-6 transition hover:-translate-y-1 hover:bg-[#102c3d] hover:text-white" key={name}><span className="font-[DM_Mono] text-[10px]">{num}</span><div className="mt-10 text-3xl text-[#cf775e]">✦</div><h3 className="mt-4 font-[Playfair_Display] text-2xl font-semibold">{name}</h3><p className="mt-2 max-w-xs text-[13px] leading-5 text-[#51616a] group-hover:text-[#d1dad3]">{copy}</p><a className="absolute bottom-6 font-[DM_Mono] text-[10px] uppercase" href="#contact">Discover more ↗</a></article>)}</div></section>
      <section id="process" className="bg-[#f7f8fb] px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-[DM_Sans] text-[15px] font-semibold uppercase tracking-[.38em] text-[#005a62]">How it works</p>
          <h2 className="mt-2 font-[DM_Sans] text-[clamp(2rem,3.6vw,2.8rem)] font-medium leading-tight text-[#252525]">From First Conversation to Published Book</h2>
          <div className="mt-14 space-y-12 lg:space-y-14">
            {[processSteps.slice(0, 4), processSteps.slice(4)].map((row, rowIndex) => (
              <ol className="relative grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-9 before:hidden before:h-px before:bg-[#005a62] before:content-[''] lg:before:block" key={rowIndex} start={rowIndex * 4 + 1}>
                {row.map(([number, name, copy]) => (
                  <li className="relative flex flex-col items-center" key={number}>
                    <span className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-full border-[7px] border-[#e8f1f1] bg-[#005a62] font-[DM_Sans] text-[27px] font-bold text-white shadow-[0_6px_14px_rgba(0,50,55,.12)]">{number}</span>
                    <article className="mt-5 flex min-h-[225px] w-full flex-col items-center justify-start rounded-[14px] border border-[#e1e8e8] bg-white px-6 pb-9 pt-12 shadow-[0_15px_26px_rgba(20,50,55,.08)]">
                      <h3 className="font-[DM_Sans] text-[22px] font-bold leading-tight text-[#005a62]">{name}</h3>
                      <p className="mt-4 max-w-[225px] font-[DM_Sans] text-[15px] leading-[1.65] text-[#242424]">{copy}</p>
                    </article>
                  </li>
                ))}
              </ol>
            ))}
          </div>
        </div>
      </section>
      <section id="genres" className="bg-[#f7f8fb] px-5 pb-32 pt-20 text-center sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mx-auto max-w-[1000px] font-[DM_Sans] text-[clamp(2rem,3.4vw,2.65rem)] font-medium leading-[1.12] text-[#252525]">How Our Creative Writing Service Elevates Every Manuscript</h2>
          <p className="mx-auto mt-4 max-w-[1100px] font-[DM_Sans] text-[16px] leading-[1.55] text-[#393939]">Our creative process helps strengthen every manuscript in two places that matter most: quality and visibility. We bring thoughtful writing, editing, and publishing support together to help each book find its best form.</p>
          <p className="mx-auto mt-4 max-w-[1100px] font-[DM_Sans] text-[16px] leading-[1.55] text-[#393939]">Whether you are shaping your first idea or preparing a finished manuscript, our team works with you to refine your voice and connect your book with the readers it was written for.</p>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-7">
            {genreColumns.map((column, index) => <div className={`flex flex-col gap-3 ${index % 2 === 1 ? 'xl:translate-y-[60px]' : ''}`} key={column[0]}>
              {column.map((genre) => <article className="flex min-h-[170px] flex-col items-center justify-center gap-4 rounded-xl bg-white px-4 py-7 sm:min-h-[195px]" key={genre}>
                <GenreIcon genre={genre} />
                <h3 className="font-[DM_Sans] text-[16px] font-medium text-[#252525]">{genre}</h3>
              </article>)}
            </div>)}
          </div>
        </div>
      </section>
      <BookShowcase />
      <section className="grid gap-12 px-5 py-20 sm:px-[8vw] sm:py-32 lg:grid-cols-[.85fr_1.15fr] lg:gap-[10vw]"><div><p className={eyebrow}>Answers, clearly told</p><h2 className={`${title} mt-5 text-5xl sm:text-6xl`}>Questions from<br /><em className="font-medium text-[#4768d7]">future authors.</em></h2><p className="mt-6 max-w-sm leading-7 text-[#52616a]">Publishing is a big step. We make sure you know exactly what it looks like.</p></div><div className="border-t border-[#102c3d]/20">{faqs.map(([question, answer], index) => <article className="border-b border-[#102c3d]/20" key={question}><button className="flex w-full justify-between py-6 text-left font-[Playfair_Display] text-xl text-[#102c3d]" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<b className="font-sans text-2xl font-normal text-[#cf775e]">{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p className="mb-6 mr-8 text-sm leading-7 text-[#53636a]">{answer}</p>}</article>)}</div></section>
      <section id="contact" className="grid gap-12 bg-[#e8e9e1] px-5 py-20 text-[#102c3d] sm:px-[8vw] sm:py-32 lg:grid-cols-2 lg:gap-[10vw]">
        <div>
          <p className={`${eyebrow} text-[#4768d7]`}>The next chapter starts here</p>
          <h2 className="mt-5 font-[Playfair_Display] text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">Ready to see your<br /><em className="font-medium text-[#4768d7]">story in print?</em></h2>
          <p className="mt-6 max-w-md leading-7 text-[#455a64]">Tell us a little about your book. A member of our team will be in touch to arrange your free consultation.</p>
          <a className="mt-5 inline-block font-[Playfair_Display] text-2xl text-[#4768d7]" href="tel:+18005550198">(800) 555-0198</a>
        </div>
        <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
          <label className="font-[DM_Mono] text-[10px] uppercase tracking-wide text-[#102c3d]">Your name<input className="mt-2 block w-full border-0 border-b border-[#102c3d]/40 bg-transparent py-3 text-base text-[#102c3d] outline-none placeholder:text-[#52616a]" required placeholder="Jane Smith" /></label>
          <label className="font-[DM_Mono] text-[10px] uppercase tracking-wide text-[#102c3d]">Email address<input className="mt-2 block w-full border-0 border-b border-[#102c3d]/40 bg-transparent py-3 text-base text-[#102c3d] outline-none placeholder:text-[#52616a]" type="email" required placeholder="jane@email.com" /></label>
          <label className="font-[DM_Mono] text-[10px] uppercase tracking-wide text-[#102c3d]">Tell us about your book<textarea className="mt-2 block w-full resize-y border-0 border-b border-[#102c3d]/40 bg-transparent py-3 text-base text-[#102c3d] outline-none placeholder:text-[#52616a]" placeholder="I have an idea for..." rows="4" /></label>
          <button className={`${button} mt-2 w-fit`} type="submit">Request my free consultation →</button>
          <small className="text-[10px] text-[#455a64]">This demo form is frontend-only and does not send data.</small>
        </form>
      </section>
    </main>
    <footer className="grid gap-6 bg-[#061c29] px-5 pb-6 pt-14 text-[#d5dcd4] sm:grid-cols-[1.4fr_1fr_1fr] sm:px-[8vw]"><Logo /><p className="max-w-xs text-[13px] leading-6">Helping authors turn meaningful ideas into beautifully made books.</p><div className="flex flex-wrap gap-x-6 gap-y-3 self-start font-[DM_Mono] text-[10px] uppercase"><a href="#services">Services</a><a href="#process">Process</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></div><small className="border-t border-white/20 pt-5 font-[DM_Mono] text-[10px] sm:col-span-3">© {new Date().getFullYear()} Dream Books Publishing. All rights reserved.</small></footer>
  </>
}

export default App
