import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain w-44 h-44 mb-8"
      />
      <h1
        style={{ fontFamily: "'Pacifico', cursive" }}
        className="text-xl md:text-5xl font-semibold tracking-widest text-center uppercase text-amber-800 m-0"
      >
        ReactArt
      </h1>
      <p className="text-center text-stone-500 m-0">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
