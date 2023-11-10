/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
 */
export default function About() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold animate__animated animate__fadeInLeft animate__delay-4s ">
              Hello I Am{" "}
            </h1>
            <h1 className="text-5xl font-bold animate__animated animate__fadeInRight animate__delay-5s">
              Fernando
            </h1>
            <div className="flex flex-row justify-around w-full">
              <div className="card w-96 bg-base-100 shadow-xl grow-1">
                <div className="card-body">
                  <h2 className="card-title text-xl text-red-800">
                    A little bit about me
                  </h2>
                  <p>
                    Hello i am from argentine of the province of Buenos Aires
                    and the berisso city{" "}
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-24">
        <h2 className="font-serif	font-family: Cambria; text-amber-400 text-sm">
          Js
        </h2>
        <input
          type="range"
          min={0}
          max="100"
          value="5"
          className=" range range-sm  range-warning"
        />
        <h2 className="font-serif	font-family: Cambria; text-cyan-400 text-sm font-size: 0.875rem;">
          Css
        </h2>
        <input
          type="range"
          min={0}
          max="100"
          value="35"
          className="range range-sm  range-accent"
        />
        <h2 className="font-serif	font-family: Cambria, text-violet-700 text-sm font-size: 0.875rem;">
          Html
        </h2>
        <input
          type="range"
          min={0}
          max="100"
          value="50"
          className="range range-sm  range-primary"
        />
        <h2 className="font-serif	font-family: Cambria, text-rose-300 text-sm font-size: 0.875rem;">
          React
        </h2>
        <input
          type="range"
          min={0}
          max="100"
          value="10"
          className="range range-sm  range-error"
        />
        <progress className="progress w-56 bg-red-700"></progress>
        {/* <FontAwesomeIcon icon={faHouse} /> */}
      </div>
    </>
  );
}
