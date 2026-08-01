/**
 * StarBorder — anillo de energía que orbita el borde completo de la card,
 * como un "cometa" de luz con halo (técnica de border-beam: conic-gradient
 * rotando detrás de un contenido opaco, recortado a un aro de `thickness`px
 * por el padding del contenedor). Reemplaza la v1 (dos manchas viajando por
 * arriba/abajo, técnica de React Bits) — en cards grandes esas manchas
 * quedaban demasiado sutiles y no se percibían.
 *
 * Los children deben ser una superficie OPACA: tapan el disco giratorio
 * salvo en el aro de `thickness` px que asoma alrededor de todo el borde.
 */
const StarBorder = ({
  className = "",
  color = "#A1E233",
  speed = "7s",
  thickness = 2,
  children,
  style,
  ...rest
}) => {
  // arco nítido con núcleo blanco-caliente + cola difuminada (~20% del círculo)
  const sharpArc = `conic-gradient(from 0deg, transparent 0%, transparent 78%, ${color}33 85%, ${color} 91%, #ffffff 94%, ${color} 97%, ${color}33 100%)`;
  // duplicado más ancho y desenfocado, para el halo detrás del cometa
  const bloomArc = `conic-gradient(from 0deg, transparent 0%, transparent 70%, ${color}55 84%, ${color} 94%, transparent 100%)`;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{ padding: `${thickness}px`, ...style }}
      {...rest}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="syn-orbit absolute left-1/2 top-1/2 aspect-square w-[220%]"
          style={{ animation: `syn-orbit-spin ${speed} linear infinite` }}
        >
          {/* halo (desenfocado, detrás) */}
          <div className="absolute inset-0 rounded-full opacity-60 blur-2xl" style={{ background: bloomArc }} />
          {/* cometa nítido */}
          <div className="absolute inset-0 rounded-full" style={{ background: sharpArc }} />
        </div>
      </div>
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
};

export default StarBorder;
