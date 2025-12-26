export function Overlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-10 bg-gradient-radial from-[#8B3DFF]/60 via-black/60 to-black/95"
      style={{
        backgroundImage: 'radial-gradient(circle at bottom right, rgba(139, 61, 255, 0.6) 0%, rgba(0, 0, 0, 0.92) 70%)'
      }}
    />
  );
}