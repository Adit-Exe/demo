import Link from 'next/link'
function Nav() {
  return <>
    <nav className="flex justify-evenly items-center py-4 bg-gradient-to-b from-[#00000067] to-[#00000000]  lg:opacity-100 opacity-0 sm:opacity-0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <div className="border-2 border-white rounded-lg flex w-[20%] justify-evenly items-center py-1 text-white">
        <p><Link href="/">Home </Link></p>
        <p><Link href="/temp">Library</Link></p>
        <p><Link href="/temp">Artist</Link></p>
      </div>

      <div className="border-2 border-white rounded-lg flex w-[20%] justify-evenly items-center py-1 text-white">
        <p><Link href="/policy">Policy</Link></p>
        <p> <Link href="/about">About</Link></p>
        <p><Link href="/temp">Contact</Link></p>
      </div>

      <form className="border-2 border-white rounded-lg flex w-[20%] justify-evenly items-center py-1 text-white">
        <input type="text" placeholder="Search" className="w-[90%] bg-transparent placeholder:pl-2 placeholder:text-white" />
        <button className="w-[10%]"><i class="fa-solid fa-magnifying-glass"></i></button>

      </form>

      <div className="border-2 border-white  rounded-lg flex w-[20%] justify-evenly items-center py-[6px] text-xl text-white">
       <a href="https://ncs.lnk.to/SpotfiyPlaylistWE"> <i class="fa-brands fa-spotify"></i></a>
       <a href="https://www.youtube.com/nocopyrightsounds"> <i class="fa-brands fa-youtube"></i></a>
       <a href="https://www.instagram.com/nocopyrightsounds/"> <i class="fa-brands fa-instagram"></i></a>

      </div>

    </nav>
  </>
}
export default Nav;