
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
      <Image
        src="/huss.jpg" // Chemin vers votre image dans le dossier public
        alt="Photo de profil" // Texte alternatif pour l'image
        width={200} // Largeur de l'image
        height={200} // Hauteur de l'image
      />
    </div>
  );
}
