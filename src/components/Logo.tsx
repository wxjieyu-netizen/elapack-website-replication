// The ELAPACK wordmark. "ink" (charcoal #2A2A2A) is the default on light
// backgrounds; "light" is for dark areas such as the footer.
export default function Logo({ variant = "ink" }: { variant?: "ink" | "light" }) {
  return (
    <img
      className="logo-img"
      src={`/images/brand/elapack-logo-${variant}.png`}
      alt="ELAPACK"
      width={600}
      height={230}
    />
  );
}
