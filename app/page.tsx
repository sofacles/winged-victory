import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="nike">
        <h1>Samothrace Painting</h1>
        <p>
          I specialize in interior painting and finishing.  I'm a good value for landlords, apartment managers and homeowners because I'm returning to painting after 20 years of software engineering and need to build up a
          portfolio of work.
        </p>
        <p className="nth-paragraph">
          I was trained at C.M. Miller Finishing and Design in Ballard where I learned to strip, bleach, stain and varnish in addition to painting.
          I received good training from Chris, and can see and fix mistakes that other people miss.

          I am quick, clean, reliable and I guarantee my work for 2 years.
        </p>
        <p className="nth-paragraph">
          Schedule a free estimate at <span className="plain">(206) 458-5489</span> or via <span className="plain">sdegermark@gmail.com</span>!
        </p>
        <span
          title="Louvre CC0, via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg"
          className="photo-credit"
        >
          photo credit
        </span>
      </div>

    </div>
  );
}
