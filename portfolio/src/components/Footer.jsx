import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon, faCrow, /* faTwitter */ } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            {/*   <FontAwesomeIcon icon={faTwitter} /> */}

          </div>
        </div>
        <div>
          <form action="">
            <div>
              <h2 className='font-serif text-3xl'>Contact Form</h2>
            </div>
            <div className='text-lg'>
              <input
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className='text-lg'>
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className='text-lg'>
              <input
                type="number"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <button className='btn btn-outline btn-info pt-px'>Submit Contact</button>
            </div>

          </form>
        </div>
        {/*         <div className="relative">
          <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Submit</button>
        </div> */}
        <div>
          <p><FontAwesomeIcon icon={faCrow} />Copyright © 2023 - All right reserved by Code-Killer  <FontAwesomeIcon icon={faDragon} /></p>
        </div>
      </footer>
    </>
  )
}