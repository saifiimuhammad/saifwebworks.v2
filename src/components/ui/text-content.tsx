interface TextContentProps {
  "data-content-keys"?: string[];
  content: string;
  className?: string;
  style?: React.CSSProperties;
  as?:
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "blockquote"
    | "div";
}

export function TextContent({
  "data-content-keys": dataContentKeys,
  content,
  className,
  style,
  as = "p",
}: TextContentProps) {
  const baseClasses = "[&_a]:underline [&_em]:italic [&_strong]:font-bold";
  const combinedClassName = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  const Component = as;

  return (
    <Component
      data-content-keys={dataContentKeys}
      dangerouslySetInnerHTML={{ __html: content }}
      className={combinedClassName}
      style={style}
    />
  );
}
