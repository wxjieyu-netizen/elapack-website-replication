// The ELAPACK wordmark. "ink" (charcoal #2A2A2A) is the default on light
// backgrounds; "light" is for dark areas such as the footer.
export default function Logo({ variant = "ink" }: { variant?: "ink" | "light" }) {
  return (
    <img
      className="logo-img"
      src={`/images/brand/elapack-logo-${variant}.svg`}
      alt="ELAPACK"
      width={1142}
      height={224}
    />
  );
}
